/* ======================================================================
Simple Pie Chart
====================================================================== */
var data = {
  labels: ['Vietnam', 'USA', 'Other'],
  series: [80, 5, 15]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];



/* ======================================================================
Simple Line Chart
====================================================================== */
new Chartist.Line('#chartist-line', {
  labels: ['10/5', '11/5', '12/5', '13/5', '14/5', '15/5', '16/5'],
  series: [
    [450, 500, 600, 500, 550, 600, 800],//Impression
    [500, 600, 450, 600, 800, 550, 900],//Click
    [400, 450, 650, 550, 420, 730, 840],//CTR
    [520, 660, 490, 520, 720, 470, 620],//CPC
    [490, 420, 500, 570, 650, 800, 720]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }

});
