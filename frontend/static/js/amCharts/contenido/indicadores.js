var chart = AmCharts.makeChart("pie_1", {
    "type": "pie",
    "theme": "none",
    "colors": ["#24448D"," #577FD7", "#002060", "#D3D3D3", "#041228","#1B656D","#14D0EF", "#0A3F2B"],
    "legend": {
        valueText: '' //or \n if you want new lines
    },
    "dataProvider": [{
        "country": "Industrial",
        "litres": 48
    }, {
        "country": "Educativo",
        "litres": 12
    }, {
        "country": "Comercio",
        "litres": 4
    }, {
        "country": "Logística",
        "litres": 5
    }, {
        "country": "Centros Ingeniería",
        "litres": 10
    }, {
        "country": "Agroindustrial",
        "litres": 20
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText": "[[value]]%",
    "labelRadius": -40,
    "radius": "40%",
    // "baseColor":"#1F478D",
    "color": "#fff",
    "balloon": {
        "fixedPosition": true
    },
    balloonText: "[[title]]:[[value]]%"


});

var chart = AmCharts.makeChart("pie_2", {
    "type": "pie",
    "theme": "none",
    "colors": ["#24448D"," #577FD7", "#002060", "#D3D3D3", "#041228","#1B656D","#14D0EF", "#0A3F2B"],
    "legend": {
        valueText: '' //or \n if you want new lines
    },
    "dataProvider": [{
        "country": "Chih",

        "litres": 66
    }, {
        "country": "Mich",
        "litres": 10
    }, {
        "country": "Jal",
        "litres":5
    }, {
        "country": "Qro",
        "litres": 9
    }, {
        "country": "NL",
        "litres": 3
    }, {
        "country": "Tamps",
        "litres": 3
    }, {
        "country": "Otros",
        "litres": 4
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText": "[[value]]%",
    "labelRadius": -20,
    "radius": "40%",
    // "baseColor":"#1F478D",
    "color": "#fff",
    "balloon": {
        "fixedPosition": true
    },
    balloonText: "[[title]]:[[value]]%"

});

var chart = AmCharts.makeChart("pie_3", {
    "type": "pie",
    "theme": "none",
    "colors": ["#24448D"," #577FD7", "#002060", "#D3D3D3", "#041228", , "#2BD6B5" ,"#1B656D","#14D0EF", "#0A3F2B"],
    "legend": {
        valueText: '\n', //or \n if you want new lines
        maxColumns: 1,
        "align": "center"
    },
    "dataProvider": [{
        "country": "Ocupado",

        "litres": 100
    }, {
        "country": "Disponible",
        "litres": 0
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText": "[[value]]%",
    "labelRadius": -90,
    "radius": "40%",
    // "baseColor":"#1F478D",
    "color": "#fff",
    "balloon": {
        "fixedPosition": true
    }, balloonText: "[[title]]:[[value]]%"


});

var chart = AmCharts.makeChart("pie_4", {
    "type": "pie",
    "theme": "none",
    "colors": ["#24448D"," #577FD7", "#002060", "#D3D3D3", "#041228", "#14D0EF", "#1B656D", "#2BD6B5", "#0A3F2B"],
    "legend": {
        valueText: '\n', //or \n if you want new lines
        maxColumns: 1,
        "align": "center"
    },
    "dataProvider": [{
        "country": "MXN",

        "litres": 44
    }, {
        "country": "USD",
        "litres": 56
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText": "[[value]]%",
    "labelRadius": -40,
    "radius": "40%",
    // "baseColor":"#1F478D",
    "color": "#fff",
    "balloon": {
        "fixedPosition": true
    }, balloonText: "[[title]]:[[value]]%"

});

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

var chart5 = AmCharts.makeChart("chart_5", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "colors": ["#1F478D", "#E11D50", "#08193B", "#B81F3C", "#4F709E", "#F16991", "#8EBEE6"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridAlpha": 0,
    },
    // "titles": [
    //     {
    //         "text": "Situación Financiera",
    //         "size": 15
    //     },
    //     {
    //         "text": "(Miles de pesos mexicanos)",
    //         "size": 12
    //     }
    // ],
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "[[value]]",
            // "balloonText": sf_activo + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Renta anualizada",
            "type": "column",
            "valueField": "sf_activo",
            "labelText": "[[sf_activo_d]]"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
            "unitPosition": "left",
            "id": "ValueAxis-1",
            "position": "left",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false
        }
    ],
    "legend": {
        "align": "center",
        "position": "bottom",
        // "right": -4,
        "color": "gray",
        "textClickEnabled": true
    },
    "allLabels": [],
    "balloon": {},
    "dataProvider": [
        {
            "year": "2021",
            "sf_activo": 8824,
            "sf_activo_d": "8,824",
        },
        {
            "year": "2022",
            "sf_activo": 38434,
            "sf_activo_d": "38,434",
        },
        {
            "year": "2023",
            "sf_activo": 27193,
            "sf_activo_d": "27,193",
        },
        {
            "year": "2024",
            "sf_activo": 5994,
            "sf_activo_d": "5,994",
        },
        {
            "year": "2025",
            "sf_activo": 71482,
            "sf_activo_d": "71,482",
        },
        {
            "year": "2026",
            "sf_activo": 189617,
            "sf_activo_d": "189,617",
        },
        {
            "year": "2027",
            "sf_activo": 61183,
            "sf_activo_d": "61,183",
        },
        {
            "year": "2028",
            "sf_activo": 152951,
            "sf_activo_d": "152,951",
        },
        {
            "year": "2029",
            "sf_activo": 25925,
            "sf_activo_d": "25,925",
        },
        {
            "year": "2030",
            "sf_activo": 53797,
            "sf_activo_d": "53,797",
        },
        {
            "year": "2031",
            "sf_activo": 38485,
            "sf_activo_d": "38,485",
        },
        {
            "year": "2036",
            "sf_activo": 172646,
            "sf_activo_d": "172,646",
        }
    ],
    "export": {
        "enabled": true
    }

});
