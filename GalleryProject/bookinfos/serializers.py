from rest_framework.serializers import ModelSerializer
from .models import Post

class PostSerializer(ModelSerializer):

    class Meta:
        model = Post
        fields = [ 'id', 'greeting', 'title', 'writer', 'publisher', 'link', 'content', 'photo', 'author' ] 
