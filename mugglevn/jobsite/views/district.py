from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from core.constants import district


class DistrictListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        districts = []
        for row in district.DISTRICT_IN_HCM_CHOICES:
            districts.append({
                'id': row[0],
                'name': row[1],
            })
        data = {
            'data': districts,
            'count': len(districts),
        }
        return Response(
            status=status.HTTP_200_OK,
            data=data,
        )
