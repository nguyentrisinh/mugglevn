from rest_framework import status
from rest_framework.response import Response
from rest_framework.reverse import reverse_lazy
from rest_framework.views import APIView

from jobsite import ultils
from jobsite.models import Company
from jobsite.serializers import CompanySerializer, CompanyListSerializer, SuggestedCompanySerializer


class CompanyAPIView(APIView):
    company_queryset = Company.objects

    def get(self, request, *args, **kwargs):
        company_slug = self.kwargs['company_slug']
        company = self.company_queryset.get_company_via_slug(company_slug)
        if company:
            company = CompanySerializer(company, many=False)
            return Response(
                status=status.HTTP_200_OK,
                data=company.data,
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND,
            data='Company not found',
        )


class CompanyListAPIView(APIView):
    company_queryset = Company.objects

    def get(self, request, *args, **kwargs):
        page = ultils.convert_int_or_set_default(self.request.query_params.get('p'), default=None)
        if page:
            num = ultils.convert_int_or_set_default(num=self.request.query_params.get('n'), default=10)
            job_list = self.company_queryset.get_all_companies()
            companies, next_page = ultils.get_data_and_next_page(data=job_list, num=num, page=page)
            if next_page:
                next_page = '{0}?p={1}&n={2}'.format(reverse_lazy('jobsite_company_list', request=request),
                                                     next_page, num)
        else:
            companies = self.company_queryset.get_company_list()
            next_page = None
        if companies:
            companies = CompanyListSerializer(companies, many=True)
            data = {
                'list': companies.data,
                'count': len(companies.data),
                'next_page': next_page
            }
            return Response(
                status=status.HTTP_200_OK,
                data=data,
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND,
            data='Company not found',
        )

    def post(self, request, *args, **kwargs):
        if self.request.user.is_anonymous():
            return Response(
                status=status.HTTP_403_FORBIDDEN,
                data='You must log in to use this feature',
            )
        serializer = SuggestedCompanySerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                status=status.HTTP_201_CREATED,
                data='The suggested company is created',
            )
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data=serializer.errors,
        )
