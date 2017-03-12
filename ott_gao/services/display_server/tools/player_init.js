(function(c) { var version = c.version; theoplayer = window['theoplayer'] || {}; theoplayer.configuration = { libraryLocation: '/player/' + version + '/' + c['key'] + '/', styleSheetURI: '/player/' + version + '/' + c['key'] + '/gao.css', skipAutoDetect: true}; theoplayer.onReady = function () { var elements = c.elements; var elements_len = c.elements.length; for (var i = 0; i < elements_len; i++) { var element = elements[i]; var vidid = document.getElementById(element.id); theoplayer(vidid, element); } }; var u = c.plhost + '/player/' + version + '/' + c['key']; var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]; g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + '/gao.js'; s.parentNode.insertBefore(g, s); })(gaoplayer_config);
//(function gaoplayer_init(c) {
//    var version = c.version;
//    theoplayer = window.theoplayer || {};
//    theoplayer.configuration = {
//        libraryLocation: '/player/' + version + '/' + c['key'] + '/',
//        styleSheetURI: '/player/' + version + '/' + c['key'] + '/gao.css',
//        skipAutoDetect: true
//
//    }
//    theoplayer.onReady = function () {
//        var elements = c.elements;
//        var elements_len = c.elements.length;
//        for (var i = 0; i < elements_len; i++) {
//            var element = elements[i];
//            var vidid = document.getElementById(element.id);
//            theoplayer(vidid, element);
//        }
//    }
//    var u = c.plhost + '/player/' + version + '/' + c['key'];
//    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
//    g.type = 'text/javascript';
//    g.async = true;
//    g.defer = true;
//    g.src = u + '/gao.js';
//    s.parentNode.insertBefore(g, s);
//})(gaoplayer_config);