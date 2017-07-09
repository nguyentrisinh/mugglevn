# coding=utf-8

import json
import random

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.reverse import reverse_lazy
from rest_framework.views import APIView

from core.constants import nickname
from jobsite import ultils
from jobsite.models import Review, Company
from jobsite.serializers import ReviewSerializer, ReviewListSerializer


class ReviewAPIView(APIView):
    review_queryset = Review.objects
    company_queryset = Company.objects

    def get(self, request, *args, **kwargs):
        company_slug = kwargs.get('company_slug', None)
        if company_slug:
            company = self.company_queryset.get_company_via_slug(company_slug)
            if not company:
                return Response(
                    status=status.HTTP_404_NOT_FOUND,
                    data={
                        'message': 'Company not found'
                    }
                )
            review_list = self.review_queryset.get_reviews_for_company(company=company)
            review_url = reverse_lazy('jobsite_review_company', args=[company_slug], request=request)
        else:
            review_list = self.review_queryset.get_all_reviews()
            review_url = reverse_lazy('jobsite_review_list', request=request)

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
        reviews = ReviewListSerializer(reviews, many=True)
        data = {
            'list': reviews.data,
            'count': len(reviews.data),
            'next_page': next_page
        }
        return Response(
            status=status.HTTP_200_OK,
            data=data,
        )


class ReactionAPIView(APIView):
    review_queryset = Review.objects
    reaction_methods = ('like', 'dislike')
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        react = self.request.data.get('react')
        review_id = ultils.convert_int_or_set_default(self.request.data.get('review_id'), default=None)
        if not review_id:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'message': 'review_id must be integer'
                }
            )
        if not react in self.reaction_methods:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'message': 'reaction must in {}'.format(self.reaction_methods)
                }
            )

        review = self.review_queryset.get_review_by_id(id=review_id)
        if not review:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'message': 'Review not found'
                }
            )
        username = self.request.user.username
        liked_users = json.loads(review._liked_users)
        disliked_users = json.loads(review._disliked_users)
        if react == 'like':
            if username in disliked_users:
                disliked_users.remove(username)
            if username in liked_users:
                liked_users.remove(username)
            else:
                liked_users.add(username)
        else:
            if username in liked_users:
                liked_users.remove(username)
            if username in disliked_users:
                disliked_users.remove(username)
            else:
                disliked_users.add(username)
        review._liked_users = json.dumps(liked_users)
        review._disliked_users = json.dumps(disliked_users)
        review.save()
        return Response(
            status=status.HTTP_200_OK,
            data='Reacted successful',
        )


class UserReviewAPIView(APIView):
    review_queryset = Review.objects
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        review_list = self.review_queryset.get_user_reviews(user=self.request.user)
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
            next_page = '{0}?p={1}&n={2}'.format(reverse_lazy('jobsite_profile_review', request=request),
                                                 next_page, num)
        reviews = ReviewListSerializer(reviews, many=True)
        data = {
            'list': reviews.data,
            'count': len(reviews.data),
            'next_page': next_page
        }
        return Response(
            status=status.HTTP_200_OK,
            data=data,
        )

    def post(self, request):
        raw_data = self.request.data.copy()
        raw_data['title'] = random.choice(nickname.NICKNAME_CHOICES) + u' đã nhận xét'
        serializer = ReviewSerializer(data=raw_data)
        if serializer.is_valid():
            if self.review_queryset.check_review_exists(company=serializer.validated_data['company'],
                                                        user=self.request.user):
                return Response(
                    status=status.HTTP_400_BAD_REQUEST,
                    data='This user reviewed this company',
                )
            serializer.save(author=self.request.user)
            return Response(
                status=status.HTTP_201_CREATED,
                data='The review is created',
            )
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data=serializer.errors,
        )
