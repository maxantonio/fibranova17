var chart = AmCharts.makeChart( "chart_distribuciones", {
    "type": "serial",
    "addClassNames": true,
    "theme": "none",
    "autoMargins": false,
    "marginLeft": 30,
    "legend": {
        "useGraphSettings": true,
        "align": "center",
    },
    "marginRight": 8,
    "marginTop": 10,
    "marginBottom": 26,
    "colors":["#1F478D","#666"],
    "balloon": {
        "adjustBorderColor": false,
        "horizontalPadding": 10,
        "verticalPadding": 8,
        "color": "#ffffff"
    },

    "dataProvider": [
        {
        "trimestre": "4T17",
        "Precio": 19.50,
        "Distribución": 0.1990
    }, {
        "trimestre": "1T18",
        "Precio": 19.50,
        "Distribución": 0.3673
    }, {
        "trimestre": "2T18",
        "Precio": 19.50,
        "Distribución": 0.3737
    }, {
        "trimestre": "3T18",
        "Precio": 19.50,
        "Distribución": 0.3814
    }, {
        "trimestre": "4T18",
        "Precio": 19.50,
        "Distribución": 0.3913
    }, {
        "trimestre": "1T19",
        "Precio": 19.50,
        "Distribución": 0.3941
    }, {
        "trimestre": "2T19",
        "Precio": 19.50,
        "Distribución": 0.3980
    }, {
        "trimestre": "3T19",
        "Precio": 19.50,
        "Distribución": 0.4167
    }, {
        "trimestre": "4T19",
        "Precio": 19.60,
        "Distribución": 0.4193
    }, {
        "trimestre": "1T20",
        "Precio": 19.50,
        "Distribución": 0.4333
    }, {
        "trimestre": "2T20",
        "Precio": 18.99,
        "Distribución": 0.4411
    }, {
        "trimestre": "3T20",
        "Precio": 18.30,
        "Distribución": 0.4695
    }, {
        "trimestre": "4T20",
        "Precio": 18.50,
        "Distribución": 0.4680,
        "dashLengthLine": 5
    }, {
        "trimestre": "1T21",
        "Precio": 21.90,
        "Distribución": 0.4623,
        "dashLengthLine": 5
    }, {
        "trimestre": "2T21",
        "Precio": 20.6,
        "Distribución": 0.4623,
        "dashLengthColumn": 5,
        "alpha": 0.2,
        "additional": ""
    }
   ],
    "valueAxes": [ {
        "axisAlpha": 0,
        "position": "left",
        "id":"barAxis",
        "minimum":12
    },
        {
            "id": "lineAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false,
            "position": "right"
        }],
    "startDuration": 1,
    "graphs": [ {
        "alphaField": "alpha",
        "balloonText": "<span style='font-size:12px;'>[[title]] en el [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        "fillAlphas": 1,
        "title": "Precio",
        "type": "column",
        "valueField": "Precio",
        "dashLengthField": "dashLengthColumn",
        "valueAxis":"barAxis"
    }, {
        "id": "graph2",
        "balloonText": "<span style='font-size:12px;'>[[title]] en el [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Distribución",
        "valueField": "Distribución",
        "dashLengthField": "dashLengthLine",
        "valueAxis": "lineAxis"

    } ],
    "categoryField": "trimestre",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0
    },
    "export": {
        "enabled": true
    }
} );

// var chart2 = AmCharts.makeChart("chart_distribuciones", {
//     "type": "serial",
//     "theme": "none",
//     "legend": {
//         "equalWidths": false,
//         "useGraphSettings": true,
//         "valueAlign": "left",
//         "valueWidth": 120
//     },
//     "dataProvider": [
//         {
//         "date": "2012-01-01",
//         "distance": 227,
//         "townName": "New York",
//         "townName2": "New York",
//         "townSize": 25,
//         "latitude": 40.71,
//         "duration": 408
//     }, {
//         "date": "2012-01-02",
//         "distance": 371,
//         "townName": "Washington",
//         "townSize": 14,
//         "latitude": 38.89,
//         "duration": 482
//     }, {
//         "date": "2012-01-03",
//         "distance": 433,
//         "townName": "Wilmington",
//         "townSize": 6,
//         "latitude": 34.22,
//         "duration": 562
//     }, {
//         "date": "2012-01-04",
//         "distance": 345,
//         "townName": "Jacksonville",
//         "townSize": 7,
//         "latitude": 30.35,
//         "duration": 379
//     }, {
//         "date": "2012-01-05",
//         "distance": 480,
//         "townName": "Miami",
//         "townName2": "Miami",
//         "townSize": 10,
//         "latitude": 25.83,
//         "duration": 501
//     }, {
//         "date": "2012-01-06",
//         "distance": 386,
//         "townName": "Tallahassee",
//         "townSize": 7,
//         "latitude": 30.46,
//         "duration": 443
//     }, {
//         "date": "2012-01-07",
//         "distance": 348,
//         "townName": "New Orleans",
//         "townSize": 10,
//         "latitude": 29.94,
//         "duration": 405
//     }, {
//         "date": "2012-01-08",
//         "distance": 238,
//         "townName": "Houston",
//         "townName2": "Houston",
//         "townSize": 16,
//         "latitude": 29.76,
//         "duration": 309
//     }, {
//         "date": "2012-01-09",
//         "distance": 218,
//         "townName": "Dalas",
//         "townSize": 17,
//         "latitude": 32.8,
//         "duration": 287
//     }, {
//         "date": "2012-01-10",
//         "distance": 349,
//         "townName": "Oklahoma City",
//         "townSize": 11,
//         "latitude": 35.49,
//         "duration": 485
//     }, {
//         "date": "2012-01-11",
//         "distance": 603,
//         "townName": "Kansas City",
//         "townSize": 10,
//         "latitude": 39.1,
//         "duration": 890
//     }, {
//         "date": "2012-01-12",
//         "distance": 534,
//         "townName": "Denver",
//         "townName2": "Denver",
//         "townSize": 18,
//         "latitude": 39.74,
//         "duration": 810
//     }, {
//         "date": "2012-01-13",
//         "townName": "Salt Lake City",
//         "townSize": 12,
//         "distance": 425,
//         "duration": 670,
//         "latitude": 40.75,
//         "dashLength": 8,
//         "alpha": 0.4
//     }, {
//         "date": "2012-01-14",
//         "latitude": 36.1,
//         "duration": 470,
//         "townName": "Las Vegas",
//         "townName2": "Las Vegas"
//     }, {
//         "date": "2012-01-15"
//     }, {
//         "date": "2012-01-16"
//     }, {
//         "date": "2012-01-17"
//     }, {
//         "date": "2012-01-18"
//     }, {
//         "date": "2012-01-19"
//     }],
//     "valueAxes": [{
//         "id": "distanceAxis",
//         "axisAlpha": 0,
//         "gridAlpha": 0,
//         "position": "left",
//         "title": "distance"
//     }, {
//         "id": "latitudeAxis",
//         "axisAlpha": 0,
//         "gridAlpha": 0,
//         "labelsEnabled": false,
//         "position": "right"
//     }, {
//         "id": "durationAxis",
//         "duration": "mm",
//         "durationUnits": {
//             "hh": "h ",
//             "mm": "min"
//         },
//         "axisAlpha": 0,
//         "gridAlpha": 0,
//         "inside": true,
//         "position": "right",
//         "title": "duration"
//     }],
//     "graphs": [{
//         "alphaField": "alpha",
//         "balloonText": "[[value]] miles",
//         "dashLengthField": "dashLength",
//         "fillAlphas": 0.7,
//         "legendPeriodValueText": "total: [[value.sum]] mi",
//         "legendValueText": "[[value]] mi",
//         "title": "distance",
//         "type": "column",
//         "valueField": "distance",
//         "valueAxis": "distanceAxis"
//     }, {
//         "balloonText": "latitude:[[value]]",
//         "bullet": "round",
//         "bulletBorderAlpha": 1,
//         "useLineColorForBulletBorder": true,
//         "bulletColor": "#FFFFFF",
//         "bulletSizeField": "townSize",
//         "dashLengthField": "dashLength",
//         "descriptionField": "townName",
//         "labelPosition": "right",
//         "labelText": "[[townName2]]",
//         "legendValueText": "[[value]]/[[description]]",
//         "title": "latitude/city",
//         "fillAlphas": 0,
//         "valueField": "latitude",
//         "valueAxis": "latitudeAxis"
//     }, {
//         "bullet": "square",
//         "bulletBorderAlpha": 1,
//         "bulletBorderThickness": 1,
//         "dashLengthField": "dashLength",
//         "legendValueText": "[[value]]",
//         "title": "duration",
//         "fillAlphas": 0,
//         "valueField": "duration",
//         "valueAxis": "durationAxis"
//     }],
//     "chartCursor": {
//         "categoryBalloonDateFormat": "DD",
//         "cursorAlpha": 0.1,
//         "cursorColor":"#000000",
//         "fullWidth":true,
//         "valueBalloonsEnabled": false,
//         "zoomable": false
//     },
//     "dataDateFormat": "YYYY-MM-DD",
//     "categoryField": "date",
//     "categoryAxis": {
//         "dateFormats": [{
//             "period": "DD",
//             "format": "DD"
//         }, {
//             "period": "WW",
//             "format": "MMM DD"
//         }, {
//             "period": "MM",
//             "format": "MMM"
//         }, {
//             "period": "YYYY",
//             "format": "YYYY"
//         }],
//         "parseDates": true,
//         "autoGridCount": false,
//         "axisColor": "#555555",
//         "gridAlpha": 0.1,
//         "gridColor": "#FFFFFF",
//         "gridCount": 50
//     },
//     "export": {
//         "enabled": true
//     }
// });
