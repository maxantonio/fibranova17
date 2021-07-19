//= require amCharts/amcharts
//= require amCharts/serial
//= require amCharts/amstock
//= require amCharts/themes/iredge

var divP = $('#select_grafico').val();
$('#' + divP).removeClass('hidden');

var accion = $('#select_accion').val();
$('#' + accion).removeClass('hidden');

$('#select_grafico').change(function (event) {
    var id = $(this).val();
    var g = $('#' + id).attr('data-divG');
    $('div#fundamentales>div[id^="g"][class!="hidden"]').addClass('hidden');
    $('#' + $(this).val()).removeClass('hidden');
    AmCharts.makeChart(g, configFundamentales[id]);

});

$('#select_accion').change(function (event) {
    var id = $(this).val();
    $('div#acciones>div[id^="a"][class!="hidden"]').addClass('hidden');
    $('#' + $(this).val()).removeClass('hidden');

});

/*==============================
 Chart Situacion Financiera
 ===============================*/
if (locale == "es") {
    var sf_activo = "Activo Total";
    var sf_pasivo = "Pasivo total";
    var sf_capital = "Capital Contable";
    var sf_efectivo = "Efectivo y Equivalentes de Efectivo";
    var sf_propiedades = "Propiedades de Inversión";
} else {
    var sf_activo = "Activo Total";
    var sf_pasivo = "Pasivo total";
    var sf_capital = "Capital Contable";
    var sf_efectivo = "Efectivo y Equivalentes de Efectivo";
    var sf_propiedades = "Propiedades de Inversión";
}

var chart = AmCharts.makeChart("chart_situacion", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "colors": ["#1F478D", "#E11D50", "#08193B", "#B81F3C", "#4F709E", "#F16991", "#8EBEE6"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "titles": [
        {
            "text": "Situación Financiera",
            "size": 15
        },
        {
            "text": "(Miles de pesos mexicanos)",
            "size": 12
        }
    ],
    "trendLines": [],
    "graphs": [
        {
            "balloonText": sf_activo + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": sf_activo,
            "type": "column",
            "valueField": "sf_activo"
        },
        {
            "balloonText": sf_pasivo + ":$[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": sf_pasivo,
            "type": "column",
            "valueField": "sf_pasivo"
        },
        {
            "balloonText": sf_capital + ":$[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": sf_capital,
            "type": "column",
            "valueField": "sf_capital"
        },
        {
            "balloonText": sf_efectivo + ":$[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": sf_efectivo,
            "type": "column",
            "valueField": "sf_efectivo"
        },
        {
            "balloonText": sf_propiedades + ":$[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "lineAlpha": 0.2,
            "title": sf_propiedades,
            "type": "column",
            "valueField": "sf_propiedades"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "unit": "$",
            "unitPosition": "left",
            "id": "ValueAxis-1",
            "position": "left",
            "axisAlpha": 0
        }
    ], "legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,

        "color": "gray",
        "textClickEnabled": true
    },
    "allLabels": [],
    "balloon": {},
    "dataProvider": [
        {
            "year": "1T21",
            "sf_activo": 	7575229,
            "sf_pasivo": 2368112,
            "sf_capital": 5207117,
            "sf_efectivo": 30549,
            "sf_propiedades": 7071246,
        },
        {
            "year": "4T20",
            "sf_activo": 7087404,
            "sf_pasivo": 1969495,
            "sf_capital": 5117909,
            "sf_efectivo": 43854,
            "sf_propiedades": 6900837,
        },
        {
            "year": "3T20",
            "sf_activo": 6950375,
            "sf_pasivo": 2073355,
            "sf_capital": 4877020,
            "sf_efectivo": 9172,
            "sf_propiedades": 6720068,
        },
        {
            "year": "2T20",
            "sf_activo": 6915077,
            "sf_pasivo": 2088141,
            "sf_capital": 4826936,
            "sf_efectivo": 3859,
            "sf_propiedades": 6727966,
        },
        {
            "year": "1T20",
            "sf_activo": 6992124,
            "sf_pasivo": 2278843,
            "sf_capital": 4713281,
            "sf_efectivo": 13030,
            "sf_propiedades": 6666476,
        },

    ],
    "export": {
        "enabled": true
    }

});


/*==============================
 Chart Estado de Resultados
 ===============================*/
if (locale == "es") {
    var er_ingresos = "Ingresos Totales";
    var er_ion = "Ingreso Operativo Neto (ION)";
    var er_utilidad = "Utilidad de Operación";
    var er_ebitda = "EBITDA";
    var er_impuestos = "Revaluacion de Propiedades de Inversión";
    var er_neta = "Utilidad Neta";
} else {
    var er_ingresos = "Ingresos Totales";
    var er_ion = "Ingreso Operativo Neto (ION)";
    var er_utilidad = "Utilidad de Operación";
    var er_ebitda = "EBITDA";
    var er_impuestos = "Revaluacion de Propiedades de Inversión";
    var er_neta = "Utilidad Neta";
}

/*==============================
 Indicadores de operación
 ===============================*/
if (locale == "es") {
    var io_abr = "ABR (m<sup>2</sup>)";
} else {
    var io_abr = "ABR (m<sup>2</sup>)";
}

/*==============================
 Chart Flujo de efectivo
 ===============================*/
if (locale == "es") {
    var fe_operacion = "Actividades de Operación";
    var fe_inversion = "Actividades de Inversión";
    var fe_financiamiento = "Actividades de Financiamiento";
    var fe_efectivo = "Efectivo Generado en el Periodo";
} else {
    var fe_operacion = "Actividades de Operación";
    var fe_inversion = "Actividades de Inversión";
    var fe_financiamiento = "Actividades de Financiamiento";
    var fe_efectivo = "Efectivo Generado en el Periodo";
}

var configFundamentales = {
    g1: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "colors": ["#1F478D", "#E11D50", "#08193B", "#B81F3C", "#4F709E", "#F16991", "#8EBEE6"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "titles": [
            {
                "text": "Situación Financiera",
                "size": 15
            },
            {
                "text": "(Miles de pesos mexicanos)",
                "size": 12
            }
        ],
        "trendLines": [],
        "graphs": [
            {
                "balloonText": sf_activo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": sf_activo,
                "type": "column",
                "valueField": "sf_activo"
            },
            {
                "balloonText": sf_pasivo + ":$[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": sf_pasivo,
                "type": "column",
                "valueField": "sf_pasivo"
            },
            {
                "balloonText": sf_capital + ":$[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": sf_capital,
                "type": "column",
                "valueField": "sf_capital"
            },
            {
                "balloonText": sf_efectivo + ":$[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": sf_efectivo,
                "type": "column",
                "valueField": "sf_efectivo"
            },
            {
                "balloonText": sf_propiedades + ":$[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-5",
                "lineAlpha": 0.2,
                "title": sf_propiedades,
                "type": "column",
                "valueField": "sf_propiedades"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,

            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
          {
              "year": "1T21",
              "sf_activo": 	7575229,
              "sf_pasivo": 2368112,
              "sf_capital": 5207117,
              "sf_efectivo": 30549,
              "sf_propiedades": 7071246,
          },
          {
              "year": "4T20",
              "sf_activo": 7087404,
              "sf_pasivo": 1969495,
              "sf_capital": 5117909,
              "sf_efectivo": 43854,
              "sf_propiedades": 6900837,
          },
          {
              "year": "3T20",
              "sf_activo": 6950375,
              "sf_pasivo": 2073355,
              "sf_capital": 4877020,
              "sf_efectivo": 9172,
              "sf_propiedades": 6720068,
          },
          {
              "year": "2T20",
              "sf_activo": 6915077,
              "sf_pasivo": 2088141,
              "sf_capital": 4826936,
              "sf_efectivo": 3859,
              "sf_propiedades": 6727966,
          },
          {
              "year": "1T20",
              "sf_activo": 6992124,
              "sf_pasivo": 2278843,
              "sf_capital": 4713281,
              "sf_efectivo": 13030,
              "sf_propiedades": 6666476,
          },
        ],
        "export": {
            "enabled": true
        }
    },
    g2: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": "Estado de Resultados",
                "size": 15
            },
            {
                "text": "(Miles de pesos mexicanos)",
                "size": 12
            }
        ],
        "colors": ["#1F478D", "#E11D50", "#08193B", "#B81F3C", "#4F709E", "#F16991", "#8EBEE6"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": er_ingresos + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": er_ingresos,
                "type": "column",
                "valueField": "er_ingresos"
            },
            {
                "balloonText": er_ion + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": er_ion,
                "type": "column",
                "valueField": "er_ion"
            },
            {
                "balloonText": er_utilidad + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": er_utilidad,
                "type": "column",
                "valueField": "er_utilidad"
            },
            {
                "balloonText": er_ebitda + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": er_ebitda,
                "type": "column",
                "valueField": "er_ebitda"
            },
            {
                "balloonText": er_impuestos + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-5",
                "lineAlpha": 0.2,
                "title": er_impuestos,
                "type": "column",
                "valueField": "er_impuestos"
            },
            {
                "balloonText": er_neta + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": er_neta,
                "type": "column",
                "valueField": "er_neta"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "autoGridCount": false,
                "gridCount": 12,
                "position": "left",
                "axisAlpha": 0,
            }
        ],
        "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,

            "color": "gray",
            "textClickEnabled": true
        },
        "balloon": {},
        "dataProvider": [
            {
                "year": "1T21",
                "er_ingresos": 144088,
                "er_ion": 139878,
                "er_utilidad": 131664,
                "er_ebitda": 131690,
                "er_impuestos": 149999,
                "er_neta": 200958,
            },
            {
                "year": "4T20",
                "er_ingresos": 142672,
                "er_ion": 138895,
                "er_utilidad": 129113,
                "er_ebitda": 129198,
                "er_impuestos": 47474,
                "er_neta": 357311,
            },
            {
                "year": "3T20",
                "er_ingresos": 143831,
                "er_ion": 139564,
                "er_utilidad": 130988,
                "er_ebitda": 130992,
                "er_impuestos": 85900,
                "er_neta": 163248,
            },
            {
                "year": "2T20",
                "er_ingresos": 144439,
                "er_ion": 140303,
                "er_utilidad": 131179,
                "er_ebitda": 131184,
                "er_impuestos": -70946,
                "er_neta": 219962,
            },
            {
                "year": "1T20",
                "er_ingresos": 130233,
                "er_ion": 126457,
                "er_utilidad": 117326,
                "er_ebitda": 117331,
                "er_impuestos": 204700,
                "er_neta": -66241,
            }
        ],
        "export": {
            "enabled": true
        }
    },
    g3: {
        "titles": [
            {
                "text": "Indicadores Operativos",
                "size": 15
            },
            {
              "text": "(m2)",
              "size": 12
            }
        ],
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "colors": ["#1F478D", "#E11D50", "#08193B", "#B81F3C", "#4F709E", "#F16991", "#8EBEE6"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": io_abr + ": [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": "ABR (m2)",
                "type": "column",
                "valueField": "io_abr"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                // "unit":"%",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "1T21",
                "io_abr": 372793,
            },
            {
                "year": "4T20",
                "io_abr": 350210,
            },
            {
                "year": "3T20",
                "io_abr": 342737,
            },
            {
                "year": "2T20",
                "io_abr": 342737,
            },
            {
                "year": "1T20",
                "io_abr": 342737,
            },

        ],
        "export": {
            "enabled": true
        }
    },
    g4: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "colors": ["#1F478D", "#E11D50", "#08193B", "#B81F3C", "#4F709E", "#F16991", "#8EBEE6"],
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": fe_operacion + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": fe_operacion,
                "type": "column",
                "valueField": "fe_operacion"
            },
            {
                "balloonText": fe_inversion + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": fe_inversion,
                "type": "column",
                "valueField": "fe_inversion"
            },
            {
                "balloonText": fe_financiamiento + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": fe_financiamiento,
                "type": "column",
                "valueField": "fe_financiamiento"
            },
            {
                "balloonText": fe_efectivo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-9",
                "lineAlpha": 0.2,
                "title": fe_efectivo,
                "type": "column",
                "valueField": "fe_efectivo"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": [
            {
                "year": "1T21",
                "fe_operacion": 192597,
                "fe_inversion": -295493,
                "fe_financiamiento": 121929,
                "fe_efectivo": 19033,
            },
            {
                "year": "4T20",
                "fe_operacion": 127371,
                "fe_inversion": -64574,
                "fe_financiamiento": -28115,
                "fe_efectivo": 34682	,
            },
            {
                "year": "3T20",
                "fe_operacion": 104206,
                "fe_inversion": 47259,
                "fe_financiamiento": -146152,
                "fe_efectivo": 5313,
            },
            {
                "year": "2T20",
                "fe_operacion": 176338,
                "fe_inversion": -21303,
                "fe_financiamiento": -164206,
                "fe_efectivo": -9171,
            },
            {
                "year": "1T20",
                "fe_operacion":  101264,
                "fe_inversion": -546137,
                "fe_financiamiento": 452296,
                "fe_efectivo": 7423,
            },
        ],
        "export": {
            "enabled": true
        }

    },
};
