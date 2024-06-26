from django.db import models
from django.contrib.auth.models import User

class Post(models.Model) : 
    greeting = models.CharField(verbose_name="인삿말", max_length=128)
    title = models.CharField(verbose_name="책제목", max_length=128)
    writer = models.CharField(verbose_name="저자", max_length=128)
    publisher = models.CharField(verbose_name="출판사", max_length=128)
    link = models.CharField(verbose_name="구매링크", max_length=128)
    content = models.TextField(verbose_name="관람팁", default='') 
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    photo = models.ImageField(verbose_name="책표지", blank=True, null=True, upload_to='bookinfos_photo')
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='bookinfos_posts')

    def __str__(self):
        return self.title
    