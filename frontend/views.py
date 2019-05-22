from django.shortcuts import render


# Create your views here.
def index(request):
    context = {'title': 'Index'}
    return render(request, 'frontend/index.html', context)


def contacto(request):
    context = {'title': 'Contacto'}
    return render(request, 'frontend/contacto.html', context)


def portafolio(request):
    context = {'title': 'Portafolio'}
    return render(request, 'frontend/portafolio.html', context)


# PERFIL
def perfil_nosotros(request):
    context = {'title': 'Nosotros'}
    return render(request, 'frontend/perfil/nosotros.html', context)


def presencia_geografica(request):
    context = {'title': 'Presencia Geografica'}
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
                'reporte': 'http://www.http://fibra-nova.com/es/wp-content/uploads/2019/04/Press-Release-FNOVA-1T19.pdfalpek.com/pdf/2018/Alpek-1T18.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2019/04/fibraxbrl_FNOVA_2019-1.pdf',
                'conferencia': 'http://fibra-nova.com/es/wp-content/uploads/2019/04/Sala-21507-30-de-April-Conferencia-en-Resultados-Fibra-Nova.mp3',
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
                'reporte': 'http://fibra-nova.com/es/wp-content/uploads/2018/07/Press-Release-FNOVA-1T18.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2018/05/fibraxbrl_FNOVA_2018-1.pdf',
                'conferencia': 'http://fibra-nova.com/es/wp-content/uploads/2018/05/Sala-21507-03-de-May-Conferencia-en-Resultados-Fibra-Nova.mp3',
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': 'http://fibra-nova.com/es/wp-content/uploads/2018/07/Press-Release-FNOVA-2T18.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2018/07/ifrsxbrl_FNOVA_2018-2.pdf',
                'conferencia': 'http://fibra-nova.com/es/wp-content/uploads/2018/07/Sala-21507-27-de-July-Conferencia-en-Resultados-Fibra-Nova.mp3',
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': 'http://fibra-nova.com/es/wp-content/uploads/2018/10/Press-Release-FNOVA-3T18-1.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2018/10/fibraxbrl_FNOVA_2018-3.pdf',
                'conferencia': 'http://fibra-nova.com/es/wp-content/uploads/2018/10/Sala-21507-30-de-October-Conferencia-en-Resultados-Fibra-Nova.mp3',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': 'http://fibra-nova.com/es/wp-content/uploads/2019/04/fibraxbrl_FNOVA_2018-4D.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2019/02/fibraxbrl_FNOVA_2018-4.pdf',
                'conferencia': 'http://fibra-nova.com/es/wp-content/uploads/2019/03/Sala-21507-05-de-March-Conferencia-en-Resultados-Fibra-Nova.mp3',
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
                'reporte': 'http://fibra-nova.com/es/wp-content/uploads/2018/02/Press-Release-FNOVA-3T17.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2018/02/fibraxbrl_FNOVA_2017-3.pdf',
                'conferencia': '',
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': 'http://fibra-nova.com/es/wp-content/uploads/2018/02/Press-Release-FNOVA-4T17.pdf',
                'sific': 'http://fibra-nova.com/es/wp-content/uploads/2018/05/fibraxbrl_FNOVA_2017-4D.pdf',
                'conferencia': 'http://fibra-nova.com/es/wp-content/uploads/2018/03/Sala-21507-28-de-February-Conferencia-en-Resultados-Fibra-Nova.mp3',
            }
        }
    ]

    context = {'title': 'Reportes Trimestrales',
               'annos': annos,
               'info': info
               }
    return render(request, 'frontend/inversionistas/reportes-trimestrales.html', context)


def reportes_anuales(request):
    context = {'title': 'Reportes Anuales'}
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


# END INVERSIONISTA

# BURSATIL
# def cotizacion(request):
#     context = {'title': 'Cotización'}
#     return render(request, 'frontend/bursatil/cotizacion.html', context)
#
# def precio_historico(request):
#     context = {'title': 'Precio Historico'}
#     return render(request, 'frontend/bursatil/precio-historico.html', context)

# END BURSATIL

# GOBIERNO
def directivos(request):
    context = {'title': 'Directivos'}
    return render(request, 'frontend/gobierno/directivos.html', context)


def comites(request):
    context = {'title': 'Comites'}
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
    context = {'title': 'Código de etica'}
    return render(request, 'frontend/gobierno/codigo-etica.html', context)

# END GOBIERNO
