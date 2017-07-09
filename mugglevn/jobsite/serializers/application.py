from rest_framework import serializers


class ApplicationSerializer(serializers.Serializer):
    client_id = serializers.CharField()
    client_secret = serializers.CharField()
