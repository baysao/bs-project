define([
], function () {

    var form = {
        id: "entry_embed",
        type:"wide",
        rows: [
            {  view:"iframe", height: 360, id:"entry_embed_video_iframe"},
            { view: "text",id:"entry_embed_video_link", label: "Embed link", readonly: true},
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