from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(ModelSerializer):
    nickname = serializers.CharField(source='customuser.nickname', required=True)
    phone_number = serializers.CharField(source='customuser.phone_number', required=True)
    name = serializers.CharField(source='customuser.name', required=True)
    birthdate = serializers.DateField(source='customuser.birthdate', required=False)

    def create(self, validated_data):
        customuser_data = validated_data.get('customuser', {})
        # customuser_data = validated_data('customuser', {})
        user = User.objects.create_user(
            username = validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
        )

        CustomUser.objects.create(user=user, **customuser_data)

        return user
    
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'nickname', 'phone_number', 'name', 'birthdate']

