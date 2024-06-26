from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .views import PostViewSet


post_router = SimpleRouter(trailing_slash=False)
post_router.register('posts', PostViewSet, basename='post')

urlpatterns = [
    path('', include(post_router.urls)),
]