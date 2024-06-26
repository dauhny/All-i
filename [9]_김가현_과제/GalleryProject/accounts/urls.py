from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views


user_router = SimpleRouter()
user_router.register('user', views.UserViewSet)

urlpatterns = [
    path('', include(user_router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')),
]

