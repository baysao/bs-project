function removeDatePicker() {
    $('.datepicker.dropdown-menu').remove();
    mmCommon.removeEventListener(mmEvent.CLOSE_CURRENT_PAGE, removeDatePicker);
}
mmCommon.addEventListener(mmEvent.CLOSE_CURRENT_PAGE, removeDatePicker);
mmPlugins.init('analytics_all', function () {


    (function (w, d) {

        getData = function (dataChart, label) {
            var arr = [];
            if (dataChart == null) {
                return;
            }
            for (i = 0; i < dataChart.length; i++) {
                arr = pushDataArr(arr, dataChart[i], label[i]);
            }
        }

        getDataOb = function (dataChart) {
            var arr = [];

            if (dataChart == null) {
                console.log("chart data null ");
                return;
            }
            for (i = 0; (i < dataChart.length && i < 100); i++) {
                arr = pushDataArr(arr, dataChart[i].data, dataChart[i].label);
            }
        }

        convertData = function (data, label) {
            var dataArray = [];
            if (data == null)
                return;
            for (i = 0; i < data.length; i++) {
                if (i >= 1 && (data[i].label == data[i - 1].label)) {

                } else {
                    dataArray.push([data[i].label, data[i].data]);
                }
            }
            return dataArray;
        }

        pushDataArr = function (arr, data, label) {
            arr.push({
                'data': convertData(data, true),
                'label': label
            });
            return arr;
        }


        var chart = {};
        chart.realtime = {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: false,
                    fillColor: {
                        colors: [{
                                opacity: 0.3
                            }, {
                                opacity: 0.3
                            }]
                    }
                },
                points: {
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f0f0f0",
                borderWidth: 0
            },
            colors: ["#3ea9f5", "#78cd51"],
            xaxis: {
                mode: "categories",
                tickFormatter: function (v) {
                    return v;
                },
                ticks: 1
            },
            yaxis: {
                min: 0,
                ticks: 5,
                tickDecimals: 0
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, xval, yval) {
                    var content = mmCommon.formatNumber(yval) + " %s - %x";
                    return content;
                },
                defaultTheme: false,
                shifts: {
                    x: 0,
                    y: 20
                }
            }
        };
        chart.pie = {
            series: {
                pie: {
                    combine: {
                        color: "#999",
                        threshold: 0.04,
                        radius: 1
                    },
                    show: true
                }
            },
            colors: ["#78CD51", "#04C2D8", "#FFBE41", "#e64b3a", "#937FC7"],
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: false
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, xval, yval) {
                    var content = "Có " + mmCommon.formatNumber(yval) + " lượt xem tại %s";
                    return content;
                },
                defaultTheme: false,
                shifts: {
                    x: 20,
                    y: 0
                }
            }
        };
        chart.line = {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: false,
                    fillColor: {
                        colors: [{
                                opacity: 0.3
                            }, {
                                opacity: 0.3
                            }]
                    }
                },
                points: {
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f0f0f0",
                borderWidth: 0
            },
            colors: ["#04c2d8", "#9ae6ef", "d81a04", "f3bab3", "7daa82", "b3f3ba"],
            xaxis: {
                mode: "categories",
                tickFormatter: function (val, axis) {
                    return val.toLocaleString();
                },
            },
            yaxis: {
                ticks: 5,
                tickDecimals: 0
            },
            tooltip: true,
            tooltipOpts: {
                //content: "Ngày %x có %y lượt xem",
                content: function (label, xval, yval) {
                    //var content = "Ngày %x có " + mmCommon.formatNumber(yval) + " lượt xem";
                    //return content;
                },
                defaultTheme: false,
                shifts: {
                    x: 0,
                    y: 20
                }
            }
        };

        chart.duration = {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.3
                            }, {
                                opacity: 0.3
                            }]
                    }
                },
                points: {
                    show: true,
                    radius: 2
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f0f0f0",
                borderWidth: 0
            },
            colors: ["#04c2d8", "#04c2d8"],
            xaxis: {
                show: true,
                mode: "categories",
                tickFormatter: function (val, axis) {
                    return val;
                    //return val.toLocaleString();
                },
                ticks: 1
            },
            yaxis: {
                ticks: 5,
                max: 100,
                min: 0,
                tickDecimals: 2
            },
            tooltip: true,
            tooltipOpts: {
                content: "Có %y% lượt xem hết %x của video",
                defaultTheme: false,
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        }

        getChart = function (type, xlabel, ylabel) {

            var c;
            if (type === "line") {
                c = chart.line;

            } else if (type === "pie") {
                c = chart.pie;
            } else if (type === "realtime") {
                return chart.realtime;
            } else if (type === "duration") {
                return chart.duration;
            }

            //tool tip chart

            c.tooltipOpts.content = function (label, x, y) {
                return (xlabel + "  " + mmCommon.formatNumber(y) + "  " + ylabel);
            }

            return c;
        };

        convertObjectData = function (conf) {
            var obChart = [];
            for (j = 0; j < conf.charts.length; j++) {
                var item = {
                    data: convertData(conf.charts[j], conf.convertLabel === "" ? true : false),
                    label: conf.unit[j]
                };
                obChart.push(item);
            }
            return obChart;
        }

        w.mmDrawChart = {
            /*conf = {}
             * conf.type   -> line | pie
             * conf.unit  -> 
             * conf.content ->
             * conf.color  -> [color,color]
             * conf.charts -> [data1,data2]
             * conf.labels -> [label1,label2]
             * 
             */
            draw: function (conf) {
                //console.log("drawchart");
				console.log("chart : "+conf.charts);
				console.log("chart length : "+conf.charts.length);
                if (conf.charts && conf.charts.length !==0 && conf.charts[0].length !== 0) {
                    $("#" + conf.idChart).length && $("#" + conf.idChart).empty() && $.plot($("#" + conf.idChart),
                            conf.type === "pie" ? conf.charts[0] :
                            //edit by thuan 31/12/2015 - multi chart 
                            //1 chart
//                                    [{
//                                            data: convertData(conf.chart, conf.convertLabel === "" ? true : false),
//                                            label: conf.unit
//                                        }]
                            //multi chart
                            convertObjectData(conf),
                            getChart(conf.type, conf.xlabel, conf.ylabel));
                } else {
                    $("#" + conf.idChart).html(conf.error);
                }


            },
        };
        /*
         Realtime js
         */
        var vDataView = [], vDataLoad = [], NUM_COL = 24, lastPlaying = 0;
        (function () {
            var t = new Date(), tt = +t - 5000 * NUM_COL, x = tt;
            for (var i = 0; i < NUM_COL - 1; i++) {
                x += 5000;
                x = Math.floor(x / 1000) * 1000 + (i % 5 == 0 ? 0 : 1);
                vDataView.push([getTime(x), 0]);
                vDataLoad.push([getTime(x), 0]);
            }
        })();
        function getTime(v) {
            var date = v ? new Date(v) : new Date();
            var m = date.getMinutes(), s = date.getSeconds();
            return date.getHours() + ":" + (m > 9 ? m : '0' + m) + ":" + (s > 9 ? s : '0' + s);
        }

        //table
        var table = '<table><tbody><tr><td>Video</td><td width="90">{{VIEW}}</td><td width="70">{{PERCENT}}</td></tr>{{CONTENT}}</tbody></table>',
                vTpl = '<tr><td><a href="/analytics/video/realtime?id={{ID}}"  class="textInline strimTitleVideo" target="_blank">{{NAME}}</a></td><td>{{COUNT}}</td><td>{{RATIO}}</td></tr>';
        var table_website = '<table><tbody><tr><td >Website</td><td width="90">{{VIEW}}</td><td width="70">{{PERCENT}}</td></tr>{{CONTENT}}</tbody></table>',
                vTpl_website = '<tr><td><a href=""  class="textInline strimTitleVideo" target="_blank">{{NAME}}</a></td><td>{{COUNT}}</td><td>{{RATIO}}</td></tr>';
        var playingOld = 0;
        //function

        w.mmRealtime = {
            initData: function (conf) {
                if (!conf) {
                    console.log("Init config");
                    return;
                }

                var data = conf.data;
                var t = getTime();
                var lang;
                if (conf.language) {
                    language = conf.language === "vn"
                } else {
                    language = false;
                }
                vDataView.push([t, data.playing]);
                if (vDataView.length > NUM_COL) {
                    vDataView.splice(0, 1);
                }
                vDataLoad.push([t, data.loaded]);
                if (vDataLoad.length > NUM_COL) {
                    vDataLoad.splice(0, 1);
                }

                //view
                $("#viewChart-realtime").length && $.plot($("#viewChart-realtime"), [{
                        data: vDataView,
                        label: conf.playing
                    }, {
                        data: vDataLoad,
                        label: conf.player
                    }], getChart("realtime", lang ? "Vào lúc %x có " : " %x have ", lang ? " lượt xem" : "view"), conf.label);


                //os
                if (data.os && data.os.length) {
                    $("#osChart").length && $("#osChart").empty() && $.plot($("#osChart"), data.os, getChart("pie", lang ? "Hệ thống %s có " : " %s have", lang ? " lượt xem" : " view"), conf.label);
                }
                else
                    $("#osChart").html(conf.error);
                //website
                if (data.playback && data.playback.length)
                    $("#playbackChart").length && $("#playbackChart").empty() && $.plot($("#playbackChart"), data.playback, getChart("pie", lang ? "Tại %s có" : "%s have ", lang ? "lượt xem" : "view"), conf.label);
                else
                    $("#playbackChart").html(conf.error);
                //device
                if (data.device && data.device.length)
                    $("#deviceChart").length && $("#deviceChart").empty() && $.plot($("#deviceChart"), data.device, getChart("pie", lang ? "Trên %s đang có" : "%s have", lang ? "lượt xem" : " view"), conf.label);
                else
                    $("#deviceChart").html(conf.error);
                //browser
                if (data.browser && data.browser.length)
                    $("#browserChart").length && $("#browserChart").empty() && $.plot($("#browserChart"), data.browser, getChart("pie", lang ? "Trình duyệt %s đang có" : "%s have", lang ? "lượt xem" : "view"), conf.label);
                else
                    $("#browserChart").html(conf.error);
                //location
                if (data.location && data.location.length)
                    $("#locationChart").length && $("#locationChart").empty() && $.plot($("#locationChart"), data.location, getChart("pie", lang ? "Tại %s có" : "%s have", lang ? "lượt xem" : "view"), conf.label);
                else
                    $("#locationChart").html(conf.error);

                function updateViewCount() {
                    var dif = (data.playing - lastPlaying), a = Math.abs(dif);
                    if (a < 2) {
                        lastPlaying = data.playing;
                        clearInterval(zz);
                    }
                    else if (a < 5) {
                        lastPlaying += dif / a;
                    } else {
                        lastPlaying += Math.floor(dif / 5);
                    }
                    $("#playing-player-count").html(mmCommon.formatNumber(lastPlaying));
                }
                var zz = setInterval(updateViewCount, 150);
                setTimeout(function () {
                    clearInterval(zz)
                }, 4000);
                $("#loaded-player-count").html(mmCommon.formatNumber(data.loaded));
                $("#playing-web-count").html(mmCommon.formatNumber(data.webCount));
                $("#playing-video-count").html(mmCommon.formatNumber(data.videoCount));
                $("#playing-moveon").html(mmCommon.formatNumber(data.newPlay));
                $("#playing-moveout").html(mmCommon.formatNumber(playingOld - data.playing + data.newPlay));
                playingOld = data.playing;
                if ($("#playing-video-ratio")) {
                    $("#playing-video-ratio").html(Math.floor(data.loaded == 0 ? 0 : (data.playing * 100 / data.loaded)) + "%");
                }

                if ($("#top-website-playing") && data.website && data.website.length) {
                    var str = [];
                    //table_website = table_website.replace("{{LANG.COMMON.VIEW}}",label_.view).replace("{{LANG.COMMON.PERCENT}}",label_.percent);
                    for (var i = 0; i < data.website.length; i++) {
                        str.push(vTpl_website.replace("{{ID}}", data.website[i].id)
                                .replace("{{NAME}}", data.website[i].label)
                                .replace("{{COUNT}}", mmCommon.formatNumber(data.website[i].data))
                                .replace("{{RATIO}}", (Math.floor(data.website[i].data * 10000 / data.playing) / 100) + "%"));
                        if (i == 4)
                            break;
                    }
                    $("#top-website-playing").html(table_website.replace("{{CONTENT}}", str.join('')).replace("{{VIEW}}", conf.view).replace("{{PERCENT}}", conf.percent));
                } else {
                    $("#top-website-playing").html(table_website.replace("{{CONTENT}}", '<tr><td colspan="3">' + conf.error + '</td></tr>').replace("{{VIEW}}", conf.view).replace("{{PERCENT}}", conf.percent));
                }

                //edit - realtime playback playing
                if (data.website && data.website.length)
                    $("#viewsWebsiteChart").length && $("#viewsWebsiteChart").empty() && $.plot($("#viewsWebsiteChart"), data.website, getChart("pie", lang ? "website %s có" : "website %s have", lang ? "lượt xem" : "view"), conf.label);
                else
                    $("#viewsWebsiteChart").html(conf.error);
                //end

                var d = new Date(), month = (d.getMonth() + 1);
                $('#time-display').html(d.getDate() + '/' + (month > 9 ? month : '0' + month) + ' - ' + getTime());
                if (data.topVideo && data.topVideo.length) {
                    var str = [];
                    for (var i = 0; i < data.topVideo.length; i++) {
                        var video = data.topVideo[i];
                        console.log(video);
                        str.push(vTpl.replace("{{ID}}", video.aliasId)
                                .replace("{{NAME}}",video.title)
                                .replace("{{COUNT}}", mmCommon.formatNumber(video.view))
                                .replace("{{RATIO}}", (Math.floor(video.view * 10000 / data.playing) / 100)+"%" ) );
                        if (i == 4)
                            break;
                    }
                    $("#top-video-playing").html(table.replace("{{CONTENT}}", str.join('')).replace("{{VIEW}}", conf.view).replace("{{PERCENT}}", conf.percent));
                } else {
                    $("#top-video-playing").html(table.replace("{{CONTENT}}", '<tr><td colspan="3">' + conf.error + '</td></tr>').replace("{{VIEW}}", conf.view).replace("{{PERCENT}}", conf.percent));
                }
            },
            initPage: function (url, data) {
                function callUpdate() {
                    $.ajax({
                        method: "GET",
                        url: url,
                        data: data,
                        dataType: "json",
                        success: function (data) {
                            if (data) {
                                mmRealtime.initData(data);
                                i = setTimeout(callUpdate, 5000);
                            }
                        }
                    });
                }
                var i = setTimeout(callUpdate, 5000),
                        A = function () {
                            clearTimeout(i);
                            vDataView = [], vDataLoad = [];
                            (function () {
                                var t = new Date(), tt = +t - 5000 * NUM_COL, x = tt;
                                for (var i = 0; i < NUM_COL - 1; i++) {
                                    x += 5000;
                                    x = Math.floor(x / 1000) * 1000 + (i % 5 == 0 ? 0 : 1);
                                    vDataView.push([getTime(x), 0]);
                                    vDataLoad.push([getTime(x), 0]);
                                }
                            })();
                            mmCommon.removeEventListener(mmEvent.CLOSE_CURRENT_PAGE, A);
                        };
                mmCommon.addEventListener(mmEvent.CLOSE_CURRENT_PAGE, A);
            },
            getRealtime: function (url, id) {

                //
                if (!window.realtimeId) {
                    window.realtimeId = 0;
                }

                window.realtimeId++;
                if (window.realtimeTimeOut) {

                    clearTimeout(window.realtimeTimeOut);
                }

                window.realtimeTimeOut = setTimeout(function () {

                    mmCommon.loadAJAX(url);
                }, 5000);
            }
        }


        /*
         End js realtime
         */

        w.mmAnalyticsCommon = {
            pickTime: function (url) {
                if (url.indexOf('?') < 0) {
                    url += '?';
                } else {
                    url += '&';
                }
                href = url + "time-start=" + escape($(dp).val()) + "&time-end=" + escape($(dp1).val());
                //window.location.href= href;
                mmCommon.loadAJAX(href);
                return false;
            },
            loadContentVideoList: function (id, url) {
                $("#" + id).empty();
                $.ajax({
                    method: "GET",
                    url: url,
                    success: function (resp) {
                        $("#" + id).html(resp);
                    }
                });
            },
            showPopup: function (title, id_content, width, height) {
                mmPlugins.require('popup', function () {
                    andataDetail = new Popup({
                        title: title,
                        content: $(id_content).html(),
                        width: width,
                        height: height,
                    });
                    andataDetail.show();
                });
            },
            initSumoSelect: function (data, idSelect, placeHolder, label) {
                $(idSelect).SumoSelect({placeholder: placeHolder});
                $(idSelect).change(function () {
                    var obj = '';
                    //content is : val1val2val3
                    $('option:selected').each(function () {
                        obj += ($(this).val());
                    });
                    mmAnalytics.drawChartBandwidth(data, obj, label);
                });
            },
        }


    })(window, document);
});


$(document).ready(function () {
    $('span[name=clickRealtime]').click(function () {
        var X = $(this).attr('id');
        if (X == 1) {
            if (window.realtimeTimeOut) {
                clearTimeout(window.realtimeTimeOut);
            }
            $('#txtRealtime').text(language.realtime_off);
            $('#arrowRealtime').removeClass('animateArrow');
            $(this).attr('id', '0');
        }
        else {
            $('#txtRealtime').text(language.realtime_on);
            $('#arrowRealtime').addClass('animateArrow');
            $(this).attr('id', '1');
            mmRealtime.getRealtime(urlRealtimeDetail, "meme_page_content");
        }
    });

    clickRealtime = function () {
        console.log(this);

    }

    //call range Time
    $('.btnPickTime').click(function () {

        var X = $(this).attr('id');
        if (X == 1) {
            $('.wRangeTime').animate({
                height: 0
            });
            $('.btnPickTime i').removeClass('animateArrow');
            $(this).attr('id', '0');
        }
        else {
            $('.wRangeTime').animate({
                height: 146
            });
            $('.btnPickTime i').addClass('animateArrow');
            $(this).attr('id', '1');
        }
    });

    //datepicker
    $('#dp, #dp1').datepicker({dateFormat: 'dd/mm/yy'});

    //init tooltip
    mmCommon.initTooltip('#meme_page_content')

});




