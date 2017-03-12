var charts = (function(module, undefined) {

    /* Private "consts" */

    /**
     * maximum number of bars to show on the chart
     * @type {integer}
     */
    var MAX_BARS = 50;

    /* Private members */

    /**
     * the highcharts chart for later access
     * @type {Highcharts.Chart}
     * @private
     */
    var _chart = new Highcharts.Chart({
        chart: {
            backgroundColor: 'rgba(38,38,38,0.8)',
            type: 'column',
            renderTo: 'chart-files'
        },
        title: {
            text: 'HTTP vs P2P Downloads',
            style: {
                "color": '#fff'
            }
        },
        subtitle: {
            text: 'Per file'
        },
        xAxis: {
            title: 'File'
        },
        yAxis: {
            title: {
                text: 'Bytes downloaded'
            }
        },
        legend: {
            itemStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '{point.point.name}<br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>' // TODO: format as Bytes, MB, etc
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0,
                pointPadding: 0,
                stacking: 'normal',
                turboThreshold: 1
            }
        },
        series: [{
            id: 'http',
            name: 'http',
            data: [],
            color: '#425a66'
        }, {
            id: 'p2p',
            name: 'p2p',
            data: [],
            color: '#e46627'
        }]
    });

    /* Private methods */

    /* Public methods / members */

    /**
     * adds a new point to a series
     * @param seriesName
     * @param id
     * @param value
     */
    module.addPoint = function(seriesName, id, value, name) {

        var series = _chart.get(seriesName);
        series.addPoint({
            id: seriesName + id,
            y: value,
            name: name
        });

        if (series.data.length > MAX_BARS) {
            series.data[0].remove();
        }
    };

    /**
     * updates a chart point with new values if they are different
     * @param id
     * @param values
     */
    module.updatePoint = function(id, values, name) {
        var point;

        for (var key in values) {
            point = _chart.get(key + id);

            if (!point) {
                module.addPoint(key, id, values[key], name);
            } else {
                if (point.y !== values[key]) {
                    point.update(values[key]);
                }
            }
        }
    };

    return module

})(charts || {});