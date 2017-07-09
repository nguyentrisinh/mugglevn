from rest_framework.serializers import ModelSerializer

from jobsite.models import Skill


class SkillListSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
