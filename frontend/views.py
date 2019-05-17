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
    annos = ['2018', '2017', '2016', '2015', '2014', '2013', '2012']
    info = [
        {
            'anno': 2018,
            'tri_1T': {
                'fecha': '1T',
                'reporte': 'http://www.alpek.com/pdf/2018/Alpek-1T18.pdf',
                'sific': 'http://www.alpek.com/pdf/2018/1T-2018-ALPEK-XBRL.pdf',
                'conferencia': 'http://www.alpek.com/audio/20180419-129088-alpek.mp3',
                'estados': 'http://www.alpek.com/pdf/2018/Alpek-1Q18-Unaudited-Consolidated-Financial-Statements.pdf'
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': 'http://www.alpek.com/pdf/2018/Alpek-2T18.pdf',
                'sific': 'http://www.alpek.com/pdf/2018/XBRL-2T18-Alpek-formato-BMV.pdf',
                'conferencia': 'http://www.alpek.com/audio/20180719-130108-alpek.mp3',
                'estados': 'http://www.alpek.com/pdf/2018/Alpek-2Q18-Unaudited-Consolidated-Financial-Statements.pdf'
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': 'http://www.alpek.com/pdf/2018/Alpek-3T18.pdf',
                'sific': 'http://www.alpek.com/pdf/2018/XBRL-Alpek-3T18-formato-BMV.pdf',
                'conferencia': 'http://www.alpek.com/audio/20181016-131058-alpek.mp3',
                'estados': 'http://www.alpek.com/pdf/2018/Unaudited-Financial-Statement-EEFF-3Q2018.pdf'
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
                'estados': ''
            }
        },
        {
            'anno': 2017,
            'tri_1T': {
                'fecha': '1T',
                'reporte': 'http://www.alpek.com/pdf/2018/Alpek-1T18.pdf',
                'sific': 'http://www.alpek.com/pdf/2018/1T-2018-ALPEK-XBRL.pdf',
                'conferencia': 'http://www.alpek.com/audio/20180419-129088-alpek.mp3',
                'estados': 'http://www.alpek.com/pdf/2018/Alpek-1Q18-Unaudited-Consolidated-Financial-Statements.pdf'
            },
            'tri_2T': {
                'fecha': '2T',
                'reporte': '',
                'sific': '',
                'conferencia': 'http://www.alpek.com/audio/20180719-130108-alpek.mp3',
                'estados': 'http://www.alpek.com/pdf/2018/Alpek-2Q18-Unaudited-Consolidated-Financial-Statements.pdf'
            },
            'tri_3T': {
                'fecha': '3T',
                'reporte': 'http://www.alpek.com/pdf/2018/Alpek-3T18.pdf',
                'sific': 'http://www.alpek.com/pdf/2018/XBRL-Alpek-3T18-formato-BMV.pdf',
                'conferencia': 'http://www.alpek.com/audio/20181016-131058-alpek.mp3',
                'estados': ''
            },
            'tri_4T': {
                'fecha': '4T',
                'reporte': '',
                'sific': '',
                'conferencia': '',
                'estados': ''
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
