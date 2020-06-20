from django.urls import path, re_path
from .views import blog

app_name = 'blogapp'

urlpatterns = [
    path('blog/', blog, name='blog')
]