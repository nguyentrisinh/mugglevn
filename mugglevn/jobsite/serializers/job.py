import json

from django.utils import timezone
from rest_framework.serializers import ModelSerializer, BooleanField, IntegerField
from core.constants import district, company_type
from jobsite.models import Job, SuggestedJob


class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        exclude = ('company', 'updated_at',)

    def to_representation(self, obj):
        rep = super(ModelSerializer, self).to_representation(obj)
        rep['is_new'] = True if (timezone.now() - obj.created_at).days < 2 else False
        skills = json.loads(rep['_skills'])
        for district_row in district.DISTRICT_IN_HCM_CHOICES:
            if rep['company_district'] in district_row:
                rep['company_district'] = district_row[1]
                break
        for company_type_row in company_type.TYPE_CHOICES:
            if rep['company_type'] in company_type_row:
                rep['company_type'] = company_type_row[1]
                break

        del rep['_skills']
        rep['skills'] = {
            'data': skills,
            'count': len(skills),
        }
        benefits = json.loads(rep['_benefits'])
        del rep['_benefits']
        rep['benefits'] = {
            'data': benefits,
            'count': len(benefits),
        }
        return rep


class JobForAnonymousSerializer(JobSerializer):
    class Meta:
        model = Job
        exclude = ('company', 'updated_at', 'company_apply_link', 'how_to_apply')


class JobListSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = (
            'id', 'name', 'company_name', 'company_slug', 'company_logo', 'company_district', 'description', '_skills',
            'created_at')

    def to_representation(self, obj):
        rep = super(ModelSerializer, self).to_representation(obj)
        rep['is_new'] = True if (timezone.now() - obj.created_at).days < 2 else False
        for district_row in district.DISTRICT_IN_HCM_CHOICES:
            if rep['company_district'] in district_row:
                rep['company_district'] = district_row[1]
                break
        skills = json.loads(rep['_skills'])
        del rep['_skills']
        for skill in skills:
            del skill['description']
        rep['skills'] = {
            'data': skills,
            'count': len(skills),
        }
        return rep


class JobListForCompanySerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = (
            'id', 'name', 'description', '_skills', 'created_at')

    def to_representation(self, obj):
        rep = super(ModelSerializer, self).to_representation(obj)
        rep['is_new'] = True if (timezone.now() - obj.created_at).days < 2 else False
        skills = json.loads(rep['_skills'])
        del rep['_skills']
        for skill in skills:
            del skill['description']
        rep['skills'] = {
            'data': skills,
            'count': len(skills),
        }
        return rep


class SuggestedJobSerializer(ModelSerializer):
    is_full_time = BooleanField(required=True)

    class Meta:
        model = SuggestedJob
        exclude = ('id',)
