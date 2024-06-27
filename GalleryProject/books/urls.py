from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .views import BookViewSet, CommentViewSet


post_router = SimpleRouter(trailing_slash=False)
post_router.register('books', BookViewSet, basename='post')

comment_router = SimpleRouter(trailing_slash=False)
comment_router.register('comments', CommentViewSet, basename='comment')

urlpatterns = [
    path('', include(post_router.urls)),
    path('books/<int:post_id>/', include(comment_router.urls)),
]