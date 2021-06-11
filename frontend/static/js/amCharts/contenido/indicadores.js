var chart = AmCharts.makeChart( "pie_1", {
    "type": "pie",
    "theme": "none",
    // "colors":["#1F478D","#666","#ddd"],
    "legend": {
        valueText : '' //or \n if you want new lines
    },
    "dataProvider": [{
        "country": "Industrial",
        "litres": 59
    }, {
        "country": "Educativo",
        "litres": 16
    }, {
        "country": "Comercio",
        "litres": 6
    }, {
        "country": "Logística",
        "litres": 7
    }, {
        "country": "Oficinas",
        "litres": 13
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText":"[[value]]%",
    "labelRadius":-40,
    "baseColor":"#1F478D",
    "color":"#fff",
    "balloon":{
        "fixedPosition":true
    }   ,
    balloonText:"[[title]]:[[value]]%"


} );

var chart = AmCharts.makeChart( "pie_2", {
    "type": "pie",
    "theme": "none",
    // "colors":["#1F478D","#666","#ddd"],
    "legend": {
        valueText : '' //or \n if you want new lines
    },
    "dataProvider": [ {
        "country": "Chih",

        "litres": 56
    }, {
        "country": "Mich",
        "litres": 14
    }, {
        "country": "Jal",
        "litres": 6
    }, {
        "country": "Qro",
        "litres": 11
    }, {
        "country": "NL",
        "litres": 4
    }, {
        "country": "Tamps",
        "litres": 4
    }, {
        "country": "Otros",
        "litres": 5
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText":"[[value]]%",
    "labelRadius":-40,
    "baseColor":"#1F478D",
    "color":"#fff",
    "balloon":{
        "fixedPosition":true
    },
    balloonText:"[[title]]:[[value]]%"

} );

var chart = AmCharts.makeChart( "pie_3", {
    "type": "pie",
    "theme": "none",
    // "colors":["#1F478D","#666","#ddd"],
    "legend": {
        valueText :'\n', //or \n if you want new lines
        maxColumns:1,
        "align":"center"
    },
    "dataProvider": [ {
        "country": "Ocupado",

        "litres": 100
    }, {
        "country": "Disponible",
        "litres": 0
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText":"[[value]]%",
    "labelRadius":-90,
    "baseColor":"#1F478D",
    "color":"#fff",
    "balloon":{
        "fixedPosition":true
    },   balloonText:"[[title]]:[[value]]%"


} );

var chart = AmCharts.makeChart( "pie_4", {
    "type": "pie",
    "theme": "none",
    // "colors":["#1F478D","#666","#ddd"],
    "legend": {
        valueText : '\n', //or \n if you want new lines
        maxColumns:1,
        "align":"center"
    },
    "dataProvider": [ {
        "country": "MXN",

        "litres": 57
    }, {
        "country": "USD",
        "litres": 43
    }],
    "valueField": "litres",
    "titleField": "country",
    // "labelsEnabled":false,
    "labelText":"[[value]]%",
    "labelRadius":-40,
    "baseColor":"#1F478D",
    "color":"#fff",
    "balloon":{
        "fixedPosition":true
    },    balloonText:"[[title]]:[[value]]%"


} );
