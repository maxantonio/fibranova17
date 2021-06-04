from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from django.template import loader

urlbase = 'http://cdn.investorcloud.net/FNOVA'
def index(request):
    context = {'title': 'Index', 'urlbase':urlbase}
    return render(request, 'frontend/index.html', context)


def contacto(request):
    context = {'title': 'Contacto'}
    return render(request, 'frontend/contacto.html', context)
def noticias(request):
    context = {'title': 'Noticias', 'urlbase':urlbase}
    return render(request, 'frontend/noticias.html', context)

def noticia(request,no):
    context = {'title': 'Noticia', 'urlbase':urlbase}
    url = 'frontend/noticias/{0}.html'.format(no)
    print(url)
    return render(request,url , context)

def indicadores_operativos(request):
    context = {'title': 'Indicadores Operativos'
               }
    return render(request, 'frontend/indicadores.html', context)

def portafolio(request, tab):
    context = {'title': 'Propiedades',
               'tab': tab}
    return render(request, 'frontend/portafolio.html', context)


# PERFIL
def perfil_nosotros(request):
    context = {'title': 'Nosotros'}
    return render(request, 'frontend/perfil/nosotros.html', context)


def presencia_geografica(request):
    context = {'title': 'Presencia Geográfica'}
    return render(request, 'frontend/perfil/presencia_geografica.html', context)


def historia(request):
    context = {'title': 'Historia'}
    return render(request, 'frontend/perfil/historia.html', context)


def estrategia(request):
    context = {'title': 'Estrategia'}
    return render(request, 'frontend/perfil/estrategia.html', context)


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

    context = {'title': 'Reportes Trimestrales',
               'annos': annos,
               'info': info,
               'urlbase':urlbase
               }
    return render(request, 'frontend/inversionistas/reportes-trimestrales.html', context)


def reportes_anuales(request):
    context = {'title': 'Reportes Anuales',
               'urlbase':urlbase}
    return render(request, 'frontend/inversionistas/reportes-anuales.html', context)


def fundamentales(request):
    context = {'title': 'Fundamentales'}
    return render(request, 'frontend/inversionistas/fundamentales.html', context)


def eventos_relevantes(request):
    context = {'title': 'Eventos Relevantes',
               'urlbase':urlbase}

    return render(request, 'frontend/inversionistas/eventos-relevantes.html', context)


def faqs(request):
    context = {'title': 'Preguntas Frecuentes'}
    return render(request, 'frontend/inversionistas/faqs.html', context)


def distribuciones(request):
    context = {'title': 'Distribuciones', 'urlbase':urlbase}
    return render(request, 'frontend/bursatil/distribuciones.html', context)


# END INVERSIONISTAmail@curucredit.com

# BURSATIL
def cotizacion(request):
    context = {'title': 'Cotización'}
    return render(request, 'frontend/bursatil/cotizacion.html', context)

def precio_historico(request):
    context = {'title': 'Precio Historico'}
    return render(request, 'frontend/bursatil/precio-historico.html', context)

def calculadora(request):
    context = {'title':'Calculadora de Rendimientos'}
    return render(request,'frontend/bursatil/calculadora.html',context)

def cobertura_analistas(request):
    context = {'title':'Cobertura de Analistas'}
    return render(request,'frontend/bursatil/cobertura-analistas.html',context)
# END BURSATIL

# GOBIERNO
def directivos(request):
    context = {'title': 'Directivos'}
    return render(request, 'frontend/gobierno/directivos.html', context)


def comites(request):
    context = {'title': 'Comités'}
    return render(request, 'frontend/gobierno/comites.html', context)


def auditor_externo(request):
    context = {'title': 'Auditor Externo'}
    return render(request, 'frontend/gobierno/auditor-externo.html', context)


def prospectos_suplementos(request):
    context = {'title': 'Prospectos y Suplementos', 'urlbase':urlbase}
    return render(request, 'frontend/gobierno/prospectos-suplementos.html', context)


def asambleas(request):
    context = {'title': 'Asambleas', 'urlbase':urlbase}
    return render(request, 'frontend/gobierno/asambleas.html', context)


def codigo_etica(request):
    context = {'title': 'Código de Ética', 'urlbase':urlbase}
    return render(request, 'frontend/gobierno/codigo-etica.html', context)


# END GOBIERNO

@require_POST
def suscribir(request):
    context = {'title': 'Inicio'}
    email = request.POST['email']
    html_message = loader.render_to_string(
        'frontend/emails/suscribirse.html',
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
        'frontend/emails/send_mail.html',
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
