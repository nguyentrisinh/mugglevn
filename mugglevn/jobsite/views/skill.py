from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from jobsite.serializers import SkillListSerializer
from jobsite.models import Skill


class SkillListAPIView(APIView):
    skill_queryset = Skill.objects

    def get(self, request, *args, **kwargs):
        skills = self.skill_queryset.get_all_skills()
        if skills:
            skills = SkillListSerializer(skills, many=True)
            data = {
                'data': skills.data,
                'count': len(skills.data),
            }
            return Response(
                status=status.HTTP_200_OK,
                data=data,
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND,
            data='Skill not found',
        )
