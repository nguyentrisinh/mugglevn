from rest_framework.serializers import ModelSerializer

from jobsite.models import Benefit


class BenefitListSerializer(ModelSerializer):
    class Meta:
        model = Benefit
        fields = '__all__'
