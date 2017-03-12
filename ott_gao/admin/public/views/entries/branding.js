define([
    "promise!models/authen",
    "promise!models/helpers",
    "models/dev_forms",
], function (token, helpers, dev_forms) {
    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }
    var form = {
        id: "entry_branding",
        type: "line",
        rows: [
            {view: "text", placeholder: "Title", name: "brand_title", label: "Title"},
            {view: "text", placeholder: "Button text", name: "brand_button_text", label: "Button Text"},
            {view: "text", placeholder: "Button link", name: "brand_button_link", label: "Button Link"},
            {view: "colorpicker", name: "brand_button_color", label: "Button Color"},
            {
                cols: [
                    {
                        view: 'template',
                        id: "brand_logo",
                        width: 100,
                        height: 100,
                        data: {
                            src: "/assets/imgs/nothumb.jpg",
                            size: 90
                        },
                        template: function (obj) {
                            return '<img src="' + obj.src + '" style="cursor:pointer; width:' + obj.size + 'px; height:' + obj.size + 'px;" />';
                        }
                    },
                    {},
                    {
                        rows: [
                            {
                                view: "uploader", upload: "/upload",
                                multiple: false, accept: "image/png, image/gif, image/jpg",
                                id: "upload_logo",
                                value: "Upload logo",
                                width: 200,
                                height: 40,
                                css: "button_primary button_raised",
                                autosend: true
                            },

                        ]
                    }
                ]
            },
            {view: "text", placeholder: "Logo link", id: "brand_logo_link", name: "brand_logo_link"},
            {
                cols: [
                    {
                        view: 'template',
                        id: "brand_banner",
                        width: 100,
                        height: 100,
                        data: {
                            src: "/assets/imgs/nothumb.jpg",
                            size: 90
                        },
                        template: function (obj) {
                            return '<img src="' + obj.src + '" style="cursor:pointer; width:' + obj.size + 'px; height:' + obj.size + 'px;" />';
                        }
                    },
                    {},
                    {
                        rows: [
                            {
                                view: "uploader", upload: "/upload",
                                multiple: false, accept: "image/png, image/gif, image/jpg",
                                id: "upload_banner",
                                value: "Upload banner",
                                width: 200,
                                height: 40,
                                css: "button_primary button_raised",
                                autosend: true
                            },

                        ]
                    }
                ]
            },
            {view: "text", placeholder: "link", id: "brand_banner_link", name: "brand_banner_link"},

            {view: "text", placeholder: "Title", name: "brand_title", label: "Title"},
            {view: "text", placeholder: "Button text", name: "brand_button_text", label: "Button Text"},
            {view: "text", placeholder: "Button link", name: "brand_button_link", label: "Button Link"},
            {view: "text", placeholder: "Banner link", id: "brand_banner_link", name: "brand_banner_link"},
            {view: "checkbox", name: "show_facebook", labelRight:"Show Facebook button"},
            {view: "checkbox", name: "show_twitter", labelRight:"Show Twitter button"},
            {view: "checkbox", name: "show_share", labelRight:"Show Share button"},
            {view: "checkbox", name: "is_paused_apps", labelRight:"Pause video when apps open"},
            {view: "checkbox", name: "is_autohide", labelRight:"Auto hide title bar and menu"},
	]
        };

        var layout = form;

        return {
            $ui: layout,
            $oninit: function (view, scope) {
                // var entry_metadata_categories = $$("entry_metadata_categories"); 
                //     helpers.dataToOptions("entries_categories").then(function (val) {
                //         entry_metadata_categories.define("options", val);
                //         entry_metadata_categories.refresh();
                //     })
                //     var entry_metadata_tags = $$("entry_metadata_tags");
                //     helpers.dataToOptions("entries_tags").then(function (val) {
                //         entry_metadata_tags.define("options", val);
                //         entry_metadata_tags.refresh();
                //     });

                //     var customFieldSet = {
                //         view: "fieldset", id: "entries_custom_fieldset", label: "Custom Fields", body: {
                //             rows: []
                //         }
                //     }
                //     $$('entry_thumbnail').attachEvent("onChange", function (newv, oldv) {
                //         $$('entry_thumb_view').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + '/' + newv}, true);
                //     })
                    $$("upload_logo").attachEvent("onFileUpload", function (item, response) {
                        var url = response.files[0].path;
                        var real_url = Meteor.settings.public.static_host + url;
                        $$('brand_logo').setValues({src: real_url}, true);
                        $$('entry_branding').setValues({'logo': url}, true);
			console.log($$('entry_branding').getValues());
                    });
                    $$("upload_banner").attachEvent("onFileUpload", function (item, response) {
                        var url = response.files[0].path;
                        var real_url = Meteor.settings.public.static_host + url;
                        $$('brand_banner').setValues({src: real_url}, true);
                        $$('entry_branding').setValues({'banner': url}, true);
			console.log($$('entry_branding').getValues());
                    });

                //     $$('source_vod_url').attachEvent("onChange", function (newv, oldv) {
                //         console.log(newv);
                //         var entry_source_type = $$('entry_source_type').getValue();
                //         if(entry_source_type == 'youtube') {
                //             var yid = youtube_parser(newv);
                //             console.log(yid);
                //             var thumburl = "http://img.youtube.com/vi/" + yid + "/0.jpg";
                //             $$('entry_thumb_view').setValues({src: thumburl}, true);
                //             $$('entry_form').setValues({thumbnail: thumburl}, true);
                //         }

                //     })
                //     $$('entry_source_type').attachEvent("onChange", function (newv, oldv) {
                //         $$('source_vod_url').hide();
                //         $$('source_live_url').hide();

                //         if (newv == "youtube") {
                //             $$('source_vod_url').show();
                //         }
                //         else if (newv == "vod_int") {
                //             $$('source_vod_url').show();
                //         }
                //         else if (newv == "vod_ext") {
                //             $$('source_vod_url').show();
                //         } else if (newv == "live_ext") {
                //             $$('source_live_url').show();
                //         }
                //     })
                //     helpers.getAsync("dev_forms", {})
                //         .then(function (items) {
                //             var item = items[0];
                //             //console.log(item);
                //             var keys = dev_forms.extractIds(item);
                //             //console.log(keys);
                //             var entry_form = $$('entry_form');
                //             _.each(keys, function (kid) {
                //                 //console.log('kid:' + kid);
                //                 var field = dev_forms.build_field(entry_form, kid, item);
                //                 //console.log(field);
                //                 customFieldSet.body.rows.push(field);
                //             })
                //             if (customFieldSet.body.rows && !_.isEmpty(customFieldSet.body.rows)) {
                //                 var entry_metadata = $$('entry_metadata');
                //                 //console.log(customFieldSet);
                //                 entry_metadata.addView(customFieldSet, -1);
                //                 //console.log('metedata add view');
                //             }
                //         })
            }
        };
    });
