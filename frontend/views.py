from django.shortcuts import render


# Create your views here.
def index(request):
    context = {'title': 'Index'}
    return render(request, 'frontend/index.html', context)

def contacto(request):
    context = {'title': 'Contacto'}
    return render(request, 'frontend/contacto.html', context)

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
    context = {'title': 'Reportes Trimestrales'}
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
# END INVERSIONISTA

# BURSATIL
def cotizacion(request):
    context = {'title': 'Cotización'}
    return render(request, 'frontend/bursatil/cotizacion.html', context)

def precio_historico(request):
    context = {'title': 'Precio Historico'}
    return render(request, 'frontend/bursatil/precio-historico.html', context)

def distribuciones(request):
    context = {'title': 'Distribuciones'}
    return render(request, 'frontend/bursatil/distribuciones.html', context)
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