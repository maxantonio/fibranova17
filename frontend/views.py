from django.contrib.staticfiles.storage import staticfiles_storage
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from django.template import loader

urlbase = 'http://cdn.investorcloud.net/FNOVA'


def index(request):
    context = {'title': 'Index', 'urlbase': urlbase}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/index.html', context)


def contacto(request):
    header_img = staticfiles_storage.url('images/background/contacto.png')
    context = {'title': 'Contacto', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/contacto.html', context)


def noticias(request):
    header_img = staticfiles_storage.url('images/background/noticias.png')
    context = {'title': 'Noticias', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/noticias.html', context)


def noticia(request, no):
    header_img = staticfiles_storage.url('images/background/noticias.png')
    context = {'title': 'Noticia', 'urlbase': urlbase, 'header_img': header_img}
    url = 'frontend/noticias/{0}.html'.format(no)
    print(url)
    return render(request, url, context)


def indicadores_operativos(request):
    header_img = staticfiles_storage.url('images/background/indicadores_operativos.png')
    context = {'title': 'Indicadores Operativos', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/indicadores.html', context)


def portafolio(request, tab):
    header_img = staticfiles_storage.url('images/background/propiedades.png')
    context = {'title': 'Propiedades',
               'tab': tab, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/portafolio.html', context)


# PERFIL
def perfil_nosotros(request):
    header_img = staticfiles_storage.url('images/background/nosotros.png')
    context = {'title': 'Nosotros', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/perfil/nosotros.html', context)


def presencia_geografica(request):
    header_img = staticfiles_storage.url('images/background/presencia_geografica.png')
    context = {'title': 'Presencia Geográfica', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/perfil/presencia_geografica.html', context)


def historia(request):
    header_img = staticfiles_storage.url('images/background/historia.png')
    context = {'title': 'Historia', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/perfil/historia.html', context)


def estrategia(request):
    header_img = staticfiles_storage.url('images/background/estrategia.png')
    context = {'title': 'Estrategia', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/perfil/estrategia.html', context)


# END PERFIL

# INVERSIONISTAS
def reportes_trimestrales(request):
    annos = ['2021', '2020', '2019', '2018', '2017']
    info = [
        {
            'anno': 2021,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2021-1T21.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2021-1T21-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2021-1T21-CC.mp3',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
            }
        },
        {
            'anno': 2020,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2020-1T20.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2020-1T20-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2020-1T20-CC.wav',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2020-2T20.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2020-2T20-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2020-2T20-CC.wav',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2020-3T20.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2020-3T20-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2020-3T20-CC.mp3',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2020-4T20.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2020-4T20-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2020-4T20-CC.mp3',
            }
        },
        {
            'anno': 2019,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2019-1T19.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2019-1T19-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2019-1T19-CC.mp3',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2019-2T19.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2019-2T19-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2019-2T19-CC.mp3',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2019-3T19.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2019-3T19-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2019-3T19-CC.mp3',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2019-4T19.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2019-4T19-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2019-4T19-CC.mp3',
            }
        },
        {
            'anno': 2018,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2018-1T18.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2018-1T18-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2018-1T18-CC.mp3',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2018-2T18.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2018-2T18-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2018-2T18-CC.mp3',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2018-3T18.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2018-3T18-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2018-3T18-CC.mp3',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2018-4T18.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2018-4T18-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2018-4T18-CC.mp3',
            }
        },
        {
            'anno': 2017,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2017-3T17.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2017-3T17-BMV.pdf',
                'conferencia': '',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '/InformacionFinanciera/ReportesTrimestrales/2017-4T17.pdf',
                'sific': '/InformacionFinanciera/ReportesTrimestrales/2017-4T17-BMV.pdf',
                'conferencia': '/InformacionFinanciera/ReportesTrimestrales/2017-4T17-CC.mp3',
            }
        }
    ]

    header_img = staticfiles_storage.url('images/background/reportes_trimestrales.png')
    context = {'title': 'Reportes Trimestrales',
               'annos': annos,
               'info': info,
               'urlbase': urlbase,
               'header_img': header_img
               }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas/reportes-trimestrales.html', context)


def reportes_anuales(request):
    header_img = staticfiles_storage.url('images/background/parallax-4.jpg')
    context = {'title': 'Reportes Anuales', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas/reportes-anuales.html', context)


def fundamentales(request):
    header_img = staticfiles_storage.url('images/background/fundamentos.png')
    context = {'title': 'Fundamentales', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas/fundamentales.html', context)


def como_invertir(request):
    header_img = staticfiles_storage.url('images/background/como_invertir.png')
    context = {'title': '¿Cómo invertir en Fibra Nova?',
               'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas/como-invertir.html', context)


def eventos_relevantes(request):
    header_img = staticfiles_storage.url('images/background/eventos_relevantes.png')
    context = {'title': 'Eventos Relevantes',
               'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas/eventos-relevantes.html', context)


def faqs(request):
    header_img = staticfiles_storage.url('images/background/preguntas_frecuentes.png')
    context = {'title': 'Preguntas Frecuentes', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas/faqs.html', context)


def distribuciones(request):
    header_img = staticfiles_storage.url('images/background/distribuciones.png')
    context = {'title': 'Distribuciones', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/distribuciones.html', context)


# END INVERSIONISTAmail@curucredit.com

# BURSATIL
def cotizacion(request):
    header_img = staticfiles_storage.url('images/background/comportamiento-accion.png')
    context = {'title': 'Cotización', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/cotizacion.html', context)


def precio_historico(request):
    header_img = staticfiles_storage.url('images/background/precios-historicos.png')
    context = {'title': 'Precio Historico', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/precio-historico.html', context)


def calculadora(request):
    header_img = staticfiles_storage.url('images/background/calculadora-rendimiento.png')
    context = {'title': 'Calculadora de Rendimientos', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/calculadora.html', context)


def cobertura_analistas(request):
    header_img = staticfiles_storage.url('images/background/coberturas-analstas.png')
    context = {'title': 'Cobertura de Analistas', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/cobertura-analistas.html', context)


# END BURSATIL

# GOBIERNO
def directivos(request):
    header_img = staticfiles_storage.url('images/background/directivos.png')
    context = {'title': 'Directivos', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/directivos.html', context)


def comites(request):
    header_img = staticfiles_storage.url('images/background/comites.png')
    context = {'title': 'Comités', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/comites.html', context)


def auditor_externo(request):
    header_img = staticfiles_storage.url('images/background/auditor-externo.png')
    context = {'title': 'Auditor Externo', 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/auditor-externo.html', context)


def prospectos_suplementos(request):
    header_img = staticfiles_storage.url('images/background/prospectos_suplementos.png')
    context = {'title': 'Prospectos y Suplementos', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/prospectos-suplementos.html', context)


def asambleas(request):
    header_img = staticfiles_storage.url('images/background/asamblea.png')
    context = {'title': 'Asambleas', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/asambleas.html', context)


def codigo_etica(request):
    header_img = staticfiles_storage.url('images/background/codigo-etica.png')
    context = {'title': 'Código de Ética', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/codigo-etica.html', context)


def esg(request):
    header_img = staticfiles_storage.url('images/background/esg.png')
    context = {'title': 'ESG', 'urlbase': urlbase, 'header_img': header_img}
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/ESG.html', context)


# END GOBIERNO

@require_POST
def suscribir(request):
    context = {'title': 'Inicio'}
    email = request.POST['email']
    html_message = loader.render_to_string(
        'frontend/es/emails/suscribirse.html',
        {
            'email': email,
        }
    )

    send_mail(
        'Usuario desea suscribirse a la lista de distribución del sitio FibraNova',
        '',
        'no-reply@fibranova.com',
        ['it@irstrat.com'],
        html_message=html_message
    )
    return redirect('frontend:index')


@require_POST
def send_mail_contact(request):
    context = {'title': 'Inicio'}
    nombre = request.POST['username']
    email = request.POST['email']
    telefono = request.POST['telefono']
    asunto = request.POST['subject']
    mensaje = request.POST['message']
    html_message = loader.render_to_string(
        'frontend/es/emails/send_mail.html',
        {
            'nombre': nombre,
            'email': email,
            'telefono': telefono,
            'asunto': asunto,
            'mensaje': mensaje,
        }
    )

    send_mail(
        'Usuario anónimo desea contactar con admin del sitio FibraNova',
        '',
        'no-reply@fibranova.com',
        ['it@irstrat.com'],
        html_message=html_message
    )
    return redirect('frontend:index')


@require_POST
def send_mail_inmobiliarios(request):
    context = {'title': 'Inicio'}
    nombre = request.POST['username']
    email = request.POST['email']
    telefono = request.POST['telefono']
    asunto = request.POST['subject']
    mensaje = request.POST['message']
    html_message = loader.render_to_string(
        'frontend/es/emails/send_mail.html',
        {
            'nombre': nombre,
            'email': email,
            'telefono': telefono,
            'asunto': asunto,
            'mensaje': mensaje,
        }
    )

    send_mail(
        'Usuario ' + nombre + ' desea contactar sobre Asuntos Inmobiliarios (FibraNova)',
        '',
        'no-reply@fibranova.com',
        ['investor@fibra-nova.com'],
        html_message=html_message
    )
    return redirect('frontend:index')


@require_POST
def send_mail_inversion(request):
    context = {'title': 'Inicio'}
    nombre = request.POST['username']
    email = request.POST['email']
    telefono = request.POST['telefono']
    asunto = request.POST['subject']
    mensaje = request.POST['message']
    html_message = loader.render_to_string(
        'frontend/es/emails/send_mail.html',
        {
            'nombre': nombre,
            'email': email,
            'telefono': telefono,
            'asunto': asunto,
            'mensaje': mensaje,
        }
    )

    send_mail(
        'Usuario ' + nombre + ' desea contactar sobre  Inversión (FibraNova)',
        '',
        'no-reply@fibranova.com',
        ['lpinon@fibra-nova.com'],
        html_message=html_message
    )
    return redirect('frontend:index')
