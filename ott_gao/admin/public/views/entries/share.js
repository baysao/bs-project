define([
], function () {
    var display_host = Meteor.settings.public.display_host || 'http://dp.gao.easyvideo.vn';
    var static_host = Meteor.settings.public.static_host || 'http://st.gao.easyvideo.vn';
    var form = {
        id: "entry_share",
        rows: [
            {height: 10},
            { view: "textarea", height: 100,id:"entry_share_embed_code", label: "Embed", readonly: true},
            { cols : [
                {width: 150},
                {view: 'radio', id: "is_fixed", labelRight: "Fixed width", value: 1, options: [
                    {id: 1, value: "Fixed"}, {id: 2, value: "Responsive"}
                ]},
                {view: "checkbox", id:"is_autoplay", labelRight: "AutoPlay"}]
            },
            {cols: [
                {width: 150},
                {view: 'radio', id: "is_fixed_size", labelRight: "Fixed width", value: 1,options: [
                    {id: 1, value:"Small"}, {id: 2,value:"Medium"}, {id: 3, value:"Big"}
                ]},
                {view: "counter", step: 1,id:"is_fixed_size_width", width: 150},
                {}
                ]
            },

            {cols: [
                {width: 150},
                {view: 'button', label:"Video Email", width: 150, css: "button_primary button_raised", popup: 'popup_videoEmail'},
                {view: 'button', label:"VAST Ad", width: 150, css: "button_primary button_raised", popup: 'popup_vastad'},
                {}
            ]},
            {
                cols: [
                    { view: "text",id:"entry_share_landingpage_url", label: "Landing page", readonly: true, gravity: 1},
                    { view: "template", borderless: true, width: 200,
                        id: "entry_share_landingpage_preview",
                        data: {
                            src: ""
                        },
                        template: function(obj){
                            return "<a href=" + obj.src + " target='_blank'>View</a>";
                        }
                    }
                ]
            },
            {}
        ]
    };

    var layout = form;
    var buildEmbededCode = function(opt_width){

        var src, style, width, height, autoplay;
        var item = $$('entry_form').getValues();
        src = display_host + '/frame/' + item.sid;

        var ap = $$('is_autoplay').getValue();
        if(parseInt(ap) == 1) {
            autoplay = '&ap=true';
        } else autoplay = '';
        var is_fixed = $$('is_fixed').getValue();
        if(is_fixed == 2) {
            return  '<div style="position:relative;padding:0px 0px 0px 0px;"><div style="width:100%;height:0;padding-bottom:56.25%;padding-top:0px;"><iframe style="border: none; position:absolute;top:0;left:0;width:100%;height:100%; " width="100%" height="100%" src="' + src + '?&w=100%25&h=100%25' + autoplay + '" frameborder="0" scrolling="no" allowTransparency="true" allowfullscreen></iframe></div></div>';
        }
        var is_fixed_size = $$('is_fixed_size').getValue();
        is_fixed_size = parseInt(is_fixed_size);
        console.log(is_fixed_size);
        switch (is_fixed_size) {
            case 1:
                width = 300; height = 216;
                break;
            case 2:
                width = 398; height = 272;
                break;
            case 3:
                width = 480; height = 318;
                break;
        }
        if(opt_width) {
            height = Math.ceil(opt_width * height / width);
            width = opt_width;
        } else {
            $$('is_fixed_size_width').setValue(width);
        }
        return '<iframe style="border: none;" width="' + width + '" height="' + height + '" src=' + src + '?&w=' + width + '&h=' + height + autoplay + '" frameborder="0" scrolling="no" allowTransparency="true" allowfullscreen></iframe>';
    }
    return {
        $ui: layout,
        $oninit: function(view, scope){
            scope.ui({
                view: 'popup',
                id: 'popup_videoEmail',
                width: 600, height:300,
                body: {
                    view: 'form',
                    elements: [
                        {view: 'text', id:"popup_videoEmail_url", label: 'URL'},
                        {view: 'textarea', id:"popup_videoEmail_code", label: 'Code'}
                    ]
                }
            }).hide();
            scope.ui({
                view: 'popup',
                id: 'popup_vastad',
                width: 600, height:300,
                body: {
                    view: 'form',
                    elements: [
                        {view: 'textarea', id:"popup_vastad_code", label: 'Code'},
                        {view: 'radio', id:"popup_vastad_adtype", value: 1, label:"Adtype", options: [
                            {id: 1, value: 'Linear'},
                            {id: 2, value: 'Non-linear'}
                        ]}
                    ]
                }
            }).hide();
            $$('popup_videoEmail_url').attachEvent('onChange', function(newv){
                var item = $$('entry_form').getValues();
                var display_url = newv;
                var static_url = static_host + item.thumbnail;
                $$('popup_videoEmail_code').setValue('<br/><a href="' + display_url + '?minimal=true"><img src="' + static_url + '?showPlayButton=true" /></a><br/>');
            })

            $$('popup_videoEmail').attachEvent('onShow', function(){
                var item = $$('entry_form').getValues();
                $$('popup_videoEmail_url').setValue(display_host + '/v/' + s.slugify(item.name) + '/' + item.sid);
            })
            $$('popup_vastad_adtype').attachEvent("onChange", function(newv){
                var adtype = '';
                var item = $$('entry_form').getValues();
                if(newv == 2) adtype = '&nonlinear=true';
                $$('popup_vastad_code').setValue(display_host + '/api/vast/' + item.sid + '?html5=true' + adtype);
            })
            $$('popup_vastad').attachEvent('onShow' ,function(){
                $$('popup_vastad_adtype').setValue(1);
                var item = $$('entry_form').getValues();
                var adtype = '';
                $$('popup_vastad_code').setValue(display_host + '/api/vast/' + item.sid + '?html5=true' + adtype);
            })
            $$('is_fixed').attachEvent("onChange", function(){ $$('entry_share_embed_code').setValue(buildEmbededCode()); })
            $$('is_autoplay').attachEvent("onChange", function(){
                var width =  $$('is_fixed_size_width').getValue();
                $$('entry_share_embed_code').setValue(buildEmbededCode(width)); })
            $$('is_fixed_size_width').attachEvent("onChange", function(newv){
                $$('is_fixed').setValue(1);
                $$('entry_share_embed_code').setValue(buildEmbededCode(newv));
            })
            $$('is_fixed_size').attachEvent("onChange", function(){
                $$('is_fixed').setValue(1);
                $$('entry_share_embed_code').setValue(buildEmbededCode());
            })
        },
        init: function(){
            var item = $$('entry_form').getValues();

            $$('entry_share_embed_code').setValue(buildEmbededCode());
            $$('entry_share_landingpage_url').setValue(display_host + '/v/' + s.slugify(item.name) + '/' + item.sid);
            $$('entry_share_landingpage_preview').setValues({src: display_host + '/v/' + s.slugify(item.name) + '/' + item.sid}, true);
        }
    };
});