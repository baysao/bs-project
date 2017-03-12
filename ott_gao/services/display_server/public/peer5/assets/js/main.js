var app = (function(document, module, undefined) {

    /* Private members */

    /**
     * the currently playing player
     */
    var _player = null;

    /**
     * the 'type' of the currently playing player
     * @type {string}
     */
    var _playerType = '';

    /**
     * cache for all DOM nodes used
     * @type {object}
     */
    var _elements = {
        stats: {
            p2p: {
                speed: document.querySelector('.stats-p2p-speed'),
                download: document.querySelector('.stats-p2p-download'),
                upload: document.querySelector('.stats-p2p-upload'),
                usage: document.querySelector('.stats-p2p-usage'),
                peers: document.querySelector('.stats-p2p-peers')
            },
            http: {
                speed: document.querySelector('.stats-http-speed'),
                download: document.querySelector('.stats-http-download'),
                upload: document.querySelector('.stats-http-upload'),
                usage: document.querySelector('.stats-http-usage')
            }
        },
        player: document.getElementById('player')
    };

    /**
     * cache for stats totals
     * @type {object}
     */
    var _totals = {
        p2p: {
            download: 0,
            upload: 0,
            peers: 0
        },
        http: {
            download: 0,
            upload: 0
        }
    };

    /**
     * which stream to play
     * @type {string}
     */
        var _stream = 'http://s.gao.easyvideo.vn/hls/vpub/entryId/56a106c4b64e4ebd024f8453/flavorId/5694433d6ee7dc5e65ce7724/rawId/56a106c4b64e4ebd024f8452.mp4/index.m3u8';
    //var _stream = 'https://cdnapisec.kaltura.com/p/1375472/sp/137547200/playManifest/entryId/0_ncvvnzfe/flavorIds/0_obbhtwhw,0_ikr2ob7t/format/applehttp/protocol/https/a.m3u8';

    /**
     * hash of URLs (including query string) that were fetched
     * @type Object
     * @private
     */
    var _urls = {};

    /* Private methods */

    /**
     * formats a given bytes integer for display
     * @param bytes
     * @returns {string}
     */
    function formatBytes(bytes) {
        if (bytes == 0) {
            return '0 Byte';
        }
        var k = 1000;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }

    /**
     * returns the value of a query string parameter
     * @param name
     * @returns {string}
     */
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function runShakaPlayer(){
        var estimator = new shaka.util.EWMABandwidthEstimator();
        var source = new shaka.player.DashVideoSource(_stream, null, estimator);
        _player.load(source);
    }

    /**
     * listen to p2pxhr events
     * @param progress
     */
    window.P2PPerformanceUpdate = function(progress) {

        if (progress.type === 'swarmChange') {

            if (progress.hasOwnProperty('sent')) {
                _totals.p2p.upload += progress.sent;
                _elements.stats.p2p.upload.innerHTML = formatBytes(_totals.p2p.upload);
            }

            if (progress.hasOwnProperty('peers')) {
                _totals.p2p.peers += progress.peers; // maybe use later for totals?
                _elements.stats.p2p.peers.innerHTML = progress.peers;
            }

        } else if (progress.type === 'fileDownloaded') {

            // ignore this file if we already reported it
            if (progress.url && !_urls.hasOwnProperty(progress.url)) {

                _urls[progress.url] = true;

                charts.updatePoint(progress.url, {
                    http: progress.http,
                    p2p: progress.p2p
                }, progress.url.substring(progress.url.lastIndexOf('/') + 1));

                _totals.http.download += progress.http;
                _totals.p2p.download += progress.p2p;

                var total = _totals.http.download + _totals.p2p.download;
                var p2pUsage = Math.round(100 * (_totals.p2p.download / total));
                var httpUsage = Math.round(100 * (_totals.http.download / total));

                // update UI
                _elements.stats.p2p.download.innerHTML = formatBytes(_totals.p2p.download);
                _elements.stats.http.download.innerHTML = formatBytes(_totals.http.download);
                _elements.stats.p2p.usage.innerHTML = p2pUsage + '%';
                _elements.stats.http.usage.innerHTML = httpUsage + '%';
            }
        }
    };

    /* Public methods / members */

    /**
     * initialise the app (video player, etc)
     */
    module.init = function(player) {

        _playerType = player;
        _stream = getParameterByName('stream') || _stream;
        var mute = getParameterByName('mute') || false;
        _player = theoplayer.player(0);
        _player.src = _stream;
        _player.play();
        //switch (player) {
            //case 'clappr':
            //    // initialize the clappr player
            //    _player = new Clappr.Player({
            //        source: _stream,
            //        autoPlay: true,
            //        mute: mute
            //    });
            //    _player.attachTo(_elements.player);
            //    break;
            //case 'videojs':
                //initialize the videojs player
                //_player = videojs('video', {
                //    muted: mute,
                //    autoplay: true,
                //    sources: [{
                //        src: _stream,
                //        type: "application/x-mpegURL"
                //    }]
                //});
                //_player.youbora({
                //    accountCode: 'peer5dev',
                //    username: 'peer5devadmin',
                //    isLive: true,
                //    isp: 'bezeq',
                //    ip: '192.168.1.184'
                //});
                //break;
            //case 'flowplayer':
            //    _player = flowplayer("player", "//api.peer5.com/flowplayer/assets/flowplayer.swf", {
            //        // configure the required plugins
            //        wmode: 'direct',
            //        plugins: {
            //            httpstreaming: {
            //                url: '//api.peer5.com/flowplayer/assets/flashlsFlowPlayer.swf',
            //                hls_debug: false,
            //                hls_debug2: false,
            //                hls_lowbufferlength: 3,
            //                hls_minbufferlength: -1,
            //                hls_maxbufferlength: 10,
            //                hls_startfromlevel: -1,
            //                hls_seekfromlevel: -1,
            //                hls_live_flushurlcache: false,
            //                hls_seekmode: "ACCURATE",
            //                hls_fragmentloadmaxretry: -1,
            //                hls_manifestloadmaxretry: -1,
            //                hls_capleveltostage: false,
            //                hls_maxlevelcappingmode: "downscale",
            //                hls_jsloader: true
            //            }
            //        },
            //        clip: {
            //            accelerated: true,
            //            url: _stream,
            //            ipadUrl: _stream,
            //            urlResolvers: "httpstreaming",
            //            lang: "fr",
            //            provider: "httpstreaming",
            //            autoPlay: true,
            //            autoBuffering: true
            //        },
            //        log: {
            //            level: 'debug',
            //            filter: 'org.flowplayer.controller.*'
            //        }
            //    }).ipad();
            //    break;
            //case 'jwplayer6':
            //case 'jwplayer7':
            //    if(!window.ybPlugin)
            //        window.ybPlugin = {};
            //    _player = jwplayer('player').setup({
            //        playlist: [{
            //            file: _stream,
            //            provider: '//api.peer5.com/jwplayer6/assets/flashls.provider.swf'
            //        }],
            //        autostart: true,
            //        mute: mute,
            //        width: 640,
            //        height: 360,
            //        plugins: ybPlugin
            //    });
            //    break;
            //case 'shakaplayer':
            //    _stream = getParameterByName('stream') || 'https://storage.googleapis.com/livestream/dash/cartoon/dash264/TestCases/1b/qualcomm/1/MultiRate.mpd';
            //    shaka.polyfill.installAll();
            //    var videoEl = document.getElementById('player');
            //    _player = new shaka.player.Player(videoEl);
            //    _player.addEventListener('error', function(event) {
            //        console.error(event);
            //    });
            //
            //    runShakaPlayer();
            //    break;
        //}
    };

    /**
     * change the currently playing stream
     * @param stream
     */
    module.setStream = function(stream) {

        _stream = stream;
        _player = theoplayer.player(0);
        //switch (_playerType) {
        //    case 'clappr':
        //        _player.load(_stream);
        //        break;
        //    case 'videojs':
                _player.src = _stream;
                _player.play();
        //        break;
        //    case 'flowplayer':
        //        _player.play({
        //            url: _stream,
        //            ipadUrl: _stream
        //        });
        //        break;
        //    case 'jwplayer6':
        //        _player.load([{
        //            file: _stream,
        //            provider: '//api.peer5.com/jwplayer6/assets/flashls.provider.swf'
        //        }]);
        //        break;
        //    case 'shakaplayer':
        //        runShakaPlayer();
        //        break;
        //}
        var newUrl = location.href.split('?')[0] + '?stream=' + _stream;
        history.pushState({}, '', newUrl);
    };

    return module;
})(document, app || {});