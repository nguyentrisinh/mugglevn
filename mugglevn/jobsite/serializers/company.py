from rest_framework.serializers import ModelSerializer, ChoiceField

from core.constants import district, company_type
from jobsite.models import Company, SuggestedCompany
from jobsite.serializers.job import JobListForCompanySerializer


class CompanySerializer(ModelSerializer):
    job_set = JobListForCompanySerializer(many=True, source='get_latest_jobs')

    class Meta:
        model = Company
        exclude = ('id',)

    def to_representation(self, obj):
        rep = super(ModelSerializer, self).to_representation(obj)
        for district_row in district.DISTRICT_IN_HCM_CHOICES:
            if rep['district'] in district_row:
                rep['district'] = district_row[1]
                break
        for company_type_row in company_type.TYPE_CHOICES:
            if rep['type'] in company_type_row:
                rep['type'] = company_type_row[1]
                break
        rep['rating'] = rep['rating'] * 1.0 / 10
        return rep


class CompanyListSerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'slug', 'logo', 'website', 'bio', 'rating', 'job_count', 'review_count')

    def to_representation(self, obj):
        rep = super(ModelSerializer, self).to_representation(obj)
        rep['rating'] = rep['rating'] * 1.0 / 10
        return rep


class SuggestedCompanySerializer(ModelSerializer):
    type = ChoiceField(choices=company_type.TYPE_CHOICES)

    class Meta:
        model = SuggestedCompany
        exclude = ('id',)
