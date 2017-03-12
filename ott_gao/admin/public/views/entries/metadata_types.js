define([
], function () {
    var types = {
        live_cdn_sbd: {
            id: 'live_cdn_sbd_fields',
            rows: [
                {view: 'text', label: 'CDN domain', name: 'live_cdn_sbd_domain'},
                {view: 'text', label: 'CDN Token', name: 'live_cdn_sbd_token'}
            ]
        }
    };
    return {
        add: function(el, type){
            console.log('addView');
            el && types[type] && el.addView(types[type]);
        },
        remove: function(el, type){
            console.log('removeView');
            el && types[type] && types[type]['id'] && el.removeView(types[type]['id']);
        }
    }
})