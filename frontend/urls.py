from os import name

from django.urls import path
from . import views

app_name = 'frontend'
urlpatterns = [
    path('', views.index, name='index'),
    path('contacto/', views.contacto, name='contacto'),
    path('perfil/nosotros', views.perfil_nosotros, name='perfil-nosotros'),
    path('perfil/presencia-geografica', views.presencia_geografica, name='perfil-presencia-geografica'),
    path('perfil/historia', views.historia, name='perfil-historia'),
    path('perfil/estrategia', views.estrategia, name='perfil-estrategia'),
]
