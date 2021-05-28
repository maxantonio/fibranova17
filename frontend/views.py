from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from django.template import loader

urlbase = 'http://fibra-nova.com/es/wp-content/uploads'
def index(request):
    context = {'title': 'Index'}
    return render(request, 'frontend/index.html', context)


def contacto(request):
    context = {'title': 'Contacto'}
    return render(request, 'frontend/contacto.html', context)
def noticias(request):
    context = {'title': 'Noticias'}
    return render(request, 'frontend/noticias.html', context)

def noticia(request,no):
    context = {'title': 'Noticia'}
    url = 'frontend/noticias/{0}.html'.format(no)
    print(url)
    return render(request,url , context)


def portafolio(request, tab):
    context = {'title': 'Portafolio',
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
    annos = ['2019', '2018', '2017']
    info = [
        {
            'anno': 2019,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '/2019/04/Press-Release-FNOVA-1T19.pdf',
                'sific': '/2019/04/fibraxbrl_FNOVA_2019-1.pdf',
                'conferencia': '/2019/04/Sala-21507-30-de-April-Conferencia-en-Resultados-Fibra-Nova.mp3',
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
            'anno': 2018,
            'tri_1T': {
                'fecha': '1T',
                'reporte': '/2018/07/Press-Release-FNOVA-1T18.pdf',
                'sific': '/2018/05/fibraxbrl_FNOVA_2018-1.pdf',
                'conferencia': '/2018/05/Sala-21507-03-de-May-Conferencia-en-Resultados-Fibra-Nova.mp3',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '/2018/07/Press-Release-FNOVA-2T18.pdf',
                'sific': '/2018/07/ifrsxbrl_FNOVA_2018-2.pdf',
                'conferencia': '/2018/07/Sala-21507-27-de-July-Conferencia-en-Resultados-Fibra-Nova.mp3',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': '/2018/10/Press-Release-FNOVA-3T18-1.pdf',
                'sific': '/2018/10/fibraxbrl_FNOVA_2018-3.pdf',
                'conferencia': '/2018/10/Sala-21507-30-de-October-Conferencia-en-Resultados-Fibra-Nova.mp3',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '/2019/05/Press-Release-FNOVA-4T18.pdf',
                'sific': '/2019/04/fibraxbrl_FNOVA_2018-4D.pdf',
                'conferencia': '/2019/03/Sala-21507-05-de-March-Conferencia-en-Resultados-Fibra-Nova.mp3',
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
                'reporte': '/2018/02/Press-Release-FNOVA-3T17.pdf',
                'sific': '/2018/02/fibraxbrl_FNOVA_2017-3.pdf',
                'conferencia': '',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '/2018/02/Press-Release-FNOVA-4T17.pdf',
                'sific': '/2018/05/fibraxbrl_FNOVA_2017-4D.pdf',
                'conferencia': '/2018/03/Sala-21507-28-de-February-Conferencia-en-Resultados-Fibra-Nova.mp3',
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
    context = {'title': 'Eventos Relevantes'}
    return render(request, 'frontend/inversionistas/eventos-relevantes.html', context)


def faqs(request):
    context = {'title': 'FAQs'}
    return render(request, 'frontend/inversionistas/faqs.html', context)


def distribuciones(request):
    context = {'title': 'Distribuciones'}
    return render(request, 'frontend/inversionistas/distribuciones.html', context)


# END INVERSIONISTAmail@curucredit.com

# BURSATIL
def cotizacion(request):
    context = {'title': 'Cotización'}
    return render(request, 'frontend/bursatil/cotizacion.html', context)

def precio_historico(request):
    context = {'title': 'Precio Historico'}
    return render(request, 'frontend/bursatil/precio-historico.html', context)

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
    context = {'title': 'Prospectos y Suplementos'}
    return render(request, 'frontend/gobierno/prospectos-suplementos.html', context)


def asambleas(request):
    context = {'title': 'Asambleas'}
    return render(request, 'frontend/gobierno/asambleas.html', context)


def codigo_etica(request):
    context = {'title': 'Código de Ética'}
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
    asunto = request.POST['subject']
    mensaje = request.POST['message']
    html_message = loader.render_to_string(
        'frontend/emails/send_mail.html',
        {
            'nombre': nombre,
            'email': email,
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
