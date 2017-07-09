from oauth2_provider.models import Application
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication

from jobsite.serializers import ApplicationSerializer
from jobsite import ultils


class UserAPIView(APIView):
    authentication_classes = (SessionAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = ApplicationSerializer(data=self.request.query_params)
        if serializer.is_valid():
            applications = Application.objects.filter(client_id=serializer.validated_data['client_id'],
                                                      client_secret=serializer.validated_data['client_secret'])
            if not applications.exists():
                return Response(
                    status=status.HTTP_400_BAD_REQUEST,
                    data='Application not found',
                )
            user = {
                'username': self.request.user.username,
                'full_name': self.request.user.get_full_name(),
            }
            token = ultils.get_token(user=self.request.user, application=applications[0])
            return Response(
                status=status.HTTP_200_OK,
                data={
                    'user': user,
                    'token': token
                }
            )
        else:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data=serializer.errors,
            )
