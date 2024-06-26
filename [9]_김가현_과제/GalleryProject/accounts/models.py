from django.contrib.auth.models import User
from django.db import models

class CustomUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=15)
    name = models.CharField(max_length=100)
    birthdate = models.DateField(null=True, blank=True)