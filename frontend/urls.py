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
    path('inversionistas/reportes-trimestrales', views.reportes_trimestrales, name='inversionistas-reportes-trimestrales'),
    path('inversionistas/reportes-anuales', views.reportes_anuales, name='inversionistas-reportes-anuales'),
    path('inversionistas/fundamentales', views.fundamentales, name='inversionistas-fundamentales'),
    path('inversionistas/eventos-relevantes', views.eventos_relevantes, name='inversionistas-eventos-relevantes'),
    path('inversionistas/faqs', views.faqs, name='inversionistas-faqs'),
    path('bursatil/cotizacion', views.cotizacion, name='bursatil-cotizacion'),
    path('bursatil/precio-historico', views.precio_historico, name='bursatil-precio-historico'),
    path('bursatil/distribuciones', views.distribuciones, name='bursatil-distribuciones'),
    path('bursatil/directivos', views.directivos, name='gobierno-directivos'),
    path('bursatil/comites', views.comites, name='gobierno-comites'),
    path('bursatil/auditor-externo', views.auditor_externo, name='gobierno-auditor-externo'),
    path('bursatil/prospectos-suplementos', views.prospectos_suplementos, name='gobierno-prospectos-suplementos'),
    path('bursatil/asambleas', views.asambleas, name='gobierno-asambleas'),
    path('bursatil/codigo-etica', views.codigo_etica, name='gobierno-codigo-etica'),
]
