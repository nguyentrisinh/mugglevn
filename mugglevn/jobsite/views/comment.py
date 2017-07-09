from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.reverse import reverse_lazy
from rest_framework.views import APIView

from jobsite import ultils
from jobsite.models import Comment
from jobsite.serializers import CommentSerializer, CommentListSerializer


class CommentAPIView(APIView):
    comment_queryset = Comment.objects

    def get(self, request, *args, **kwargs):
        review_id = ultils.convert_int_or_set_default(kwargs.get('review_id'), default=None)
        if not review_id:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'message': 'review_id must be integer'
                }
            )

        review_list = self.comment_queryset.get_comment_via_review_id(review_id)
        review_url = reverse_lazy('jobsite_comment_review', args=[review_id], request=request)

        if not review_list:
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
        reviews, next_page = ultils.get_data_and_next_page(data=review_list, num=num, page=page)
        if next_page:
            next_page = '{0}?p={1}&n={2}'.format(review_url, next_page, num)
        reviews = CommentListSerializer(reviews, many=True)
        data = {
            'list': reviews.data,
            'count': len(reviews.data),
            'next_page': next_page
        }
        return Response(
            status=status.HTTP_200_OK,
            data=data,
        )


class UserCommentAPIView(APIView):
    comment_queryset = Comment.objects
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        comment_list = self.comment_queryset.get_user_comments(user=self.request.user)
        if not comment_list:
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
        comments, next_page = ultils.get_data_and_next_page(data=comment_list, num=num, page=page)
        if next_page:
            next_page = '{0}?p={1}&n={2}'.format(reverse_lazy('jobsite_profile_comment', request=request),
                                                 next_page, num)
        comments = CommentListSerializer(comments, many=True)
        data = {
            'list': comments.data,
            'count': len(comments.data),
            'next_page': next_page
        }
        return Response(
            status=status.HTTP_200_OK,
            data=data,
        )

    def post(self, request):
        serializer = CommentSerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            return Response(
                status=status.HTTP_201_CREATED,
                data='The comment is created',
            )
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data=serializer.errors,
        )
