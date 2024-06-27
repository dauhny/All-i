from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .views import MusicViewSet

music_router = SimpleRouter(trailing_slash=False)
music_router.register('music', MusicViewSet, basename='music')

urlpatterns = [
    path('', include(music_router.urls)),
    path('music/<int:music_id>/', include(music_router.urls)),
]