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