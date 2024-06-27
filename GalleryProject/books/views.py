from .models import Book, Comment
from .serializers import BookSerializer, CommentSerializer 
from rest_framework.viewsets import ModelViewSet 

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self, **kwargs):
        id = self.kwargs['post_id']
        return self.queryset.filter(post=id)