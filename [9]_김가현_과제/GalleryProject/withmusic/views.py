from .models import Music
from .serializers import MusicSerializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class MusicViewSet(ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

    def perform_create(self, serializer):
        serializer.save(writer = self.request.user)