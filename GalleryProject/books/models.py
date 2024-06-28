from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book(models.Model) : 
    content = models.TextField(verbose_name="내용") 
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='books_posts')

    def __str__(self):
        return self.content
    
class Comment(models.Model):
    comment = models.CharField(verbose_name="댓글", max_length=128)
    post = models.ForeignKey(Book, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='books_comments')

    def __str__(self):
        return self.comment
