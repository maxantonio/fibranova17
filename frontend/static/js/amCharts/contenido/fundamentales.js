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
    var sf_efectivo = "Efectivos y equivalentes de efectivo";
    var sf_propiedades = "Propiedades de Inversión";
} else {
    var sf_activo = "Activo Total";
    var sf_pasivo = "Pasivo total";
    var sf_capital = "Capital Contable";
    var sf_efectivo = "Efectivos y equivalentes de efectivo";
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
            "text": "Miles de pesos mexicanos",
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
            "year": "1T19",
            "sf_activo": 5488027,
            "sf_pasivo": 787232,
            "sf_capital": 4700795,
            "sf_efectivo": 24772,
            "sf_propiedades": 5320217,
        },
        {
            "year": "4T18",
            "sf_activo": 5469909,
            "sf_pasivo": 775886,
            "sf_capital": 4694023,
            "sf_efectivo": 61668,
            "sf_propiedades": 5391490,
        },
        {
            "year": "3T18",
            "sf_activo": 5234480,
            "sf_pasivo": 592012,
            "sf_capital": 4642468,
            "sf_efectivo": 19442,
            "sf_propiedades": 5172669,
        },
        {
            "year": "2T18",
            "sf_activo": 5069636,
            "sf_pasivo": 421404,
            "sf_capital": 4648232,
            "sf_efectivo": 95983,
            "sf_propiedades": 4841500,
        },
        {
            "year": "1T18",
            "sf_activo": 5469909,
            "sf_pasivo": 311285,
            "sf_capital": 4645461,
            "sf_efectivo": 51197,
            "sf_propiedades": 4833739,
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
    var er_impuestos = "Utilidad antes de impuestos a la utilidad";
    var er_neta = "Utilidad Neta";
} else {
    var er_ingresos = "Ingresos Totales";
    var er_ion = "Ingreso Operativo Neto (ION)";
    var er_utilidad = "Utilidad de Operación";
    var er_ebitda = "EBITDA";
    var er_impuestos = "Utilidad antes de impuestos a la utilidad";
    var er_neta = "Utilidad Neta";
}

/*==============================
 Indicadores de operación
 ===============================*/
if (locale == "es") {
    var io_abr = "ABR (m2)";
} else {
    var io_abr = "ABR (m2)";
}

/*==============================
 Chart Flujo de efectivo
 ===============================*/
if (locale == "es") {
    var fe_operacion = "Actividades de Operación";
    var fe_inversion = "Actividades de Inversión";
    var fe_financiamiento = "Actividades de Financiamiento";
    var fe_efectivo = "Efectivo generado en el periodo";
} else {
    var fe_operacion = "Actividades de Operación";
    var fe_inversion = "Actividades de Inversión";
    var fe_financiamiento = "Actividades de Financiamiento";
    var fe_efectivo = "Efectivo generado en el periodo";
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
                "text": "Miles de pesos mexicanos",
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
                "year": "1T19",
                "sf_activo": 5488027,
                "sf_pasivo": 787232,
                "sf_capital": 4700795,
                "sf_efectivo": 24772,
                "sf_propiedades": 5320217,
            },
            {
                "year": "4T18",
                "sf_activo": 5469909,
                "sf_pasivo": 775886,
                "sf_capital": 4694023,
                "sf_efectivo": 61668,
                "sf_propiedades": 5391490,
            },
            {
                "year": "3T18",
                "sf_activo": 5234480,
                "sf_pasivo": 592012,
                "sf_capital": 4642468,
                "sf_efectivo": 19442,
                "sf_propiedades": 5172669,
            },
            {
                "year": "2T18",
                "sf_activo": 5069636,
                "sf_pasivo": 421404,
                "sf_capital": 4648232,
                "sf_efectivo": 95983,
                "sf_propiedades": 4841500,
            },
            {
                "year": "1T18",
                "sf_activo": 5469909,
                "sf_pasivo": 311285,
                "sf_capital": 4645461,
                "sf_efectivo": 51197,
                "sf_propiedades": 4833739,
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
                "text": "Miles de pesos mexicanos",
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
                "year": "1T19",
                "er_ingresos": 118206,
                "er_ion": 114644,
                "er_utilidad": 106456,
                "er_ebitda": 106503,
                "er_impuestos": 101710,
                "er_neta": 101710,
            },
            {
                "year": "4T18",
                "er_ingresos": 116578,
                "er_ion": 112750,
                "er_utilidad": 105168,
                "er_ebitda": 105204,
                "er_impuestos": 145479,
                "er_neta": 145479,
            },
            {
                "year": "3T18",
                "er_ingresos": 113876,
                "er_ion": 110468,
                "er_utilidad": 102575,
                "er_ebitda": 102584,
                "er_impuestos": 90070,
                "er_neta": 90070,
            },
            {
                "year": "2T18",
                "er_ingresos": 106790,
                "er_ion": 103731,
                "er_utilidad": 95574,
                "er_ebitda": 95583,
                "er_impuestos": 93171,
                "er_neta": 93171,
            },
            {
                "year": "1T18",
                "er_ingresos": 103643,
                "er_ion": 100541,
                "er_utilidad": 93345,
                "er_ebitda": 93354,
                "er_impuestos": 87562,
                "er_neta": 87562,
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
            // {
            //     "text": "Millones de pesos mexicanos",
            //     "size": 12
            // }
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
                "title": io_abr,
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
                "year": "1T19",
                "io_abr": 285758,
            },
            {
                "year": "4T18",
                "io_abr": 285758,
            },
            {
                "year": "3T18",
                "io_abr": 281623,
            },
            {
                "year": "2T18",
                "io_abr": 275479,
            },
            {
                "year": "1T18",
                "io_abr": 245854,
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
                "year": "3M19",
                "fe_operacion": 152127,
                "fe_inversion": -54465,
                "fe_financiamiento": -134558,
                "fe_efectivo": -36896,
            },
            {
                "year": "12M18",
                "fe_operacion": 418103,
                "fe_inversion": -509413,
                "fe_financiamiento": 56995,
                "fe_efectivo": -34314,
            },
            {
                "year": "9M18",
                "fe_operacion": 297871,
                "fe_inversion": -349050,
                "fe_financiamiento": -25362,
                "fe_efectivo": -76541,
            },
            {
                "year": "6M18",
                "fe_operacion": 321634,
                "fe_inversion": -137969,
                "fe_financiamiento": -201265,
                "fe_efectivo": -17600,
            },
            {
                "year": "3M18",
                "fe_operacion":  77979,
                "fe_inversion": -23003,
                "fe_financiamiento": -99762,
                "fe_efectivo": -44786,
            },
        ],
        "export": {
            "enabled": true
        }

    },
};
