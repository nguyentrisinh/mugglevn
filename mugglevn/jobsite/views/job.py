import urllib

from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.reverse import reverse_lazy
from rest_framework.views import APIView

from jobsite import ultils
from jobsite.models import Job
from jobsite.serializers import JobSerializer, JobListSerializer, JobForAnonymousSerializer, SuggestedJobSerializer


class JobAPIView(APIView):
    job_queryset = Job.objects
    authentication_classes = (SessionAuthentication,)

    def get(self, request, *args, **kwargs):
        job_id = self.kwargs['job_id']
        job = self.job_queryset.get_job_via_id(id=job_id)
        if job:
            if self.request.user.is_anonymous():
                job = JobForAnonymousSerializer(job, many=False)
            else:
                job = JobSerializer(job, many=False)
            return Response(
                status=status.HTTP_200_OK,
                data=job.data,
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND,
            data='Job not found',
        )


class JobListAPIView(APIView):
    job_queryset = Job.objects

    def get(self, request, *args, **kwargs):
        page = ultils.convert_int_or_set_default(self.request.query_params.get('p'), default=None)
        if page:
            num = ultils.convert_int_or_set_default(num=self.request.query_params.get('n'), default=10)
            job_list = self.job_queryset.get_all_jobs()
            jobs, next_page = ultils.get_data_and_next_page(data=job_list, num=num, page=page)
            if next_page:
                next_page = '{0}?p={1}&n={2}'.format(reverse_lazy('jobsite_job_list', request=request),
                                                     next_page, num)
        else:
            jobs = self.job_queryset.get_job_list()
            next_page = None

        if jobs:
            jobs = JobListSerializer(jobs, many=True)
            data = {
                'data': jobs.data,
                'count': len(jobs.data),
                'next_page': next_page
            }
            return Response(
                status=status.HTTP_200_OK,
                data=data,
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND,
            data='Job not found',
        )

    def post(self, request, *args, **kwargs):
        if self.request.user.is_anonymous():
            return Response(
                status=status.HTTP_403_FORBIDDEN,
                data='You must log in to use this feature',
            )
        serializer = SuggestedJobSerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                status=status.HTTP_201_CREATED,
                data='The suggested job is created',
            )
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data=serializer.errors,
        )


class JobSearchAPIView(APIView):
    job_queryset = Job.objects

    def get(self, request, *args, **kwargs):
        raw_match_string = self.request.query_params.get('match', '')
        match_string = ultils.translate_raw_match_string(raw_match_string)
        if not match_string:
            job_list = self.job_queryset.get_all_jobs()
        else:
            job_list = self.job_queryset.search(match_string=match_string)

        if not job_list:
            return Response(
                status=status.HTTP_200_OK,
                data={
                    'list': None,
                    'count': 0,
                    'next_page': None
                }
            )

        page = ultils.convert_int_or_set_default(self.request.query_params.get('p'), default=1)
        num = ultils.convert_int_or_set_default(num=self.request.query_params.get('n'), default=10)
        reviews, next_page = ultils.get_data_and_next_page(data=job_list, num=num, page=page)
        if next_page:
            if not match_string:
                append_string = urllib.urlencode({
                    'p': next_page,
                    'n': num
                })
                next_page = '{0}?{1}'.format(reverse_lazy('jobsite_job_list', request=request), append_string)
            else:
                append_string = urllib.urlencode({
                    'match': raw_match_string,
                    'p': next_page,
                    'n': num
                })
                next_page = '{0}?{1}'.format(reverse_lazy('jobsite_job_search', request=request), append_string)
        reviews = JobListSerializer(reviews, many=True)
        data = {
            'list': reviews.data,
            'count': len(reviews.data),
            'next_page': next_page
        }
        return Response(
            status=status.HTTP_200_OK,
            data=data,
        )
