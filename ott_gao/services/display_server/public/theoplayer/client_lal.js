(function (c) {
    theoplayer = {
        configuration: {
            libraryLocation: '/player/v1/' + c['key'] + '/',
            styleSheetURI: '/player/v1/' + c['key'] + '/gao.css'
        }
    }
    var ks = Object.keys(c);
    for (var i = 0; i < ks.length; i ++) {
        theoplayer.configuration[ks[i]] = c[ks[i]];
    }
        var u = '//dp.gao.easyvideo.vn/player/v1/' + c['key'];
    //var u = '//localhost:4000/player/v1/' + c['key'];
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + '/gao.js';
    s.parentNode.insertBefore(g, s);
})(config);