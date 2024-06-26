from rest_framework.serializers import ModelSerializer 
from .models import Book, Comment 

class BookSerializer(ModelSerializer): 
    
    class Meta:
        model = Book
        fields = [ 'id', 'content', 'author' ] 

class CommentSerializer(ModelSerializer):

    class Meta:
        model = Comment
        fields = [ 'id', 'comment', 'post', 'author' ] 