from django.db import models
from django.contrib.auth.models import User

class Post(models.Model) : 
    title = models.CharField(verbose_name="제목", max_length=128, default='')
    content = models.TextField(verbose_name="내용") 
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='posts_posts')

    def __str__(self):
        return self.title
    