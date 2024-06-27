# from rest_framework import serializers
# from rest_framework.serializers import ModelSerializer
# from .models import Music
# from django.contrib.auth.models import User

from rest_framework.serializers import ModelSerializer
from .models import Music

class MusicSerializer(ModelSerializer):

    class Meta:
        model = Music
        fields = ['id', 'name', 'artist', 'content', 'author']