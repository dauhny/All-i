from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Music
from django.contrib.auth.models import User

class MusicSerializer(ModelSerializer):
    writer = serializers.ReadOnlyField(source = 'writer.username')

    class Meta:
        model = Music
        fields = ['id', 'name', 'artist', 'content', 'writer']