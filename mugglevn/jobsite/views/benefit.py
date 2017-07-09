from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from jobsite.serializers import BenefitListSerializer
from jobsite.models import Benefit


class BenefitListAPIView(APIView):
    benefit_queryset = Benefit.objects

    def get(self, request, *args, **kwargs):
        benefits = self.benefit_queryset.get_all_benefit_list()
        if benefits:
            benefits = BenefitListSerializer(benefits, many=True)
            data = {
                'data': benefits.data,
                'count': len(benefits.data),
            }
            return Response(
                status=status.HTTP_200_OK,
                data=data,
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND,
            data='Skill not found',
        )
