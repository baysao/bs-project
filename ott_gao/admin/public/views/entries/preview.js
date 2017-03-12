define([
], function () {

    var form = {
        id: "entry_preview",
        type:"wide",
        rows: [
            {  view:"iframe", height: 360, id:"entry_embed_video_iframe"},
            {}
        ]
    };

    var layout = form;

    return {
        $ui: layout,
        $oninit: function(view, scope){
        }
    };
});