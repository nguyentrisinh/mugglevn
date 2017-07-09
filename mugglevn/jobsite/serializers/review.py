from rest_framework import serializers

from core.constants import star_rating
from jobsite.models import Review, Company

import json


class ReviewSerializer(serializers.ModelSerializer):
    company = serializers.CharField()
    rating = serializers.ChoiceField(choices=star_rating.STAR_RATING_CHOICES)

    class Meta:
        model = Review
        fields = ('company', 'title', 'what_user_like', 'what_user_dislike', 'rating')

    def validate_company(self, value):
        company = Company.objects.get_company_via_slug(value)
        if not company:
            raise serializers.ValidationError('Company does not exist')
        return company

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.author = validated_data.get('author', instance.author)
        instance.company = validated_data.get('company', instance.company)
        instance.what_user_like = validated_data.get('what_user_like', instance.what_user_like)
        instance.what_user_dislike = validated_data.get('what_user_dislike', instance.what_user_dislike)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.save()
        return instance


class ReviewListSerializer(serializers.ModelSerializer):
    company = serializers.ReadOnlyField(source='company.name')
    company_slug = serializers.ReadOnlyField(source='company.slug')

    class Meta:
        model = Review
        exclude = ('author',)

    def to_representation(self, obj):
        rep = super(serializers.ModelSerializer, self).to_representation(obj)
        rep['liked_users'] = json.loads(rep['_liked_users'])
        del rep['_liked_users']
        rep['disliked_users'] = json.loads(rep['_disliked_users'])
        del rep['_disliked_users']
        return rep
