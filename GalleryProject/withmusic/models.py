from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Music(models.Model):
    name = models.CharField(verbose_name="음악이름", max_length=128)
    artist = models.CharField(verbose_name="아티스트", max_length=128, default='')
    content = models.TextField(verbose_name="내용", default='')
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)

    writer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.title