from django.conf import settings
import requests


def general(request):
    variables = requests.get(
        request._get_scheme() + '://' + request.get_host() + '/static/datos/variables.json').json()

    return {
        'Total_propiedades': variables['Total_propiedades'],
        'Total_abr': variables['Total_abr'],
        'Presencia_ciudades': variables['Presencia_ciudades'],
        'Presencia_entidades': variables['Presencia_entidades'],
        'Ocupacion': variables['Ocupacion'],
        'Rentas_anualizadas': variables['Rentas_anualizadas'],
        'Annos_vencimiento': variables['Annos_vencimiento']
    }
