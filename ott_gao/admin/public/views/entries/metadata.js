define([
    "promise!models/authen",
    "promise!models/helpers",
    "models/dev_forms",
    "views/entries/metadata_types",
    "webix-components/ckeditor/ckeditor"
], function (token, helpers, dev_forms, metadata_types) {
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    var form = {
        id: "entry_metadata",
        //type: "line",
        rows: [
            {view: "text", placeholder: "Name", name: "name", label: "Name"},
            {view: "text", placeholder: "Title", name: "title", label: "Title"},
            {view: "textarea", placeholder: "Description", name: "description", label: "Description"},
            {view: "multiselect", name: "categories", label: "Categories", id: "entry_metadata_categories"},
            {view: "multiselect", name: "tags", label: "Tags", id: "entry_metadata_tags"},
            {
                view: "select", name: "source_type", label: "Source Type",
                id: "entry_source_type",
                options: [
                    {id: 'vod_int', value: 'VOD Upload'},
                    {id: 'vod_ext', value: 'VOD external'},
                    {id: 'live_ext', value: 'Live external'},
                    {id: 'youtube', value: 'Youtube'},
                    {id: 'live_cdn_sbd', value: 'SaoBacDau CDN Live'}
                ]
            },
            {
                cols: [
                    {
                        view: 'template',
                        id: "entry_thumb_view",
                        width: 100,
                        height: 100,
                        data: {
                            src: "http://dp.gao.easyvideo.vn/storage/content/img/no-image.png",
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
                                id: "upload_thumb",
                                value: "Add Thumbnail",
                                width: 200,
                                height: 40,
                                css: "button_primary button_raised",
                                autosend: true
                            },

                        ]
                    }
                ]
            },
            {view: "text", placeholder: "Thumbnail URL", id: "entry_thumbnail", name: "thumbnail"},
            {
                view: "text", placeholder: "VOD url", id: "source_vod_url",
                name: "source_vod_url", label: "VOD Url"
            },
            {
                view: "text", placeholder: "LIVE url", id: "source_live_url",
                name: "source_live_url", label: "LIVE Url"
            },
        ]
    };

    var layout = form;

    return {
        $ui: layout,
        $oninit: function (view, scope) {
            var entry_metadata_categories = $$("entry_metadata_categories");
            helpers.dataToOptions("entries_categories").then(function (val) {
                entry_metadata_categories.define("options", val);
                entry_metadata_categories.refresh();
            })
            var entry_metadata_tags = $$("entry_metadata_tags");
            helpers.dataToOptions("entries_tags").then(function (val) {
                entry_metadata_tags.define("options", val);
                entry_metadata_tags.refresh();
            });

            var customFieldSet = {
                view: "fieldset", id: "entries_custom_fieldset", label: "Custom Fields", body: {
                    rows: []
                }
            }
            $$('entry_thumbnail').attachEvent("onChange", function (newv, oldv) {
                if(!/^http/.test(newv))
                    newv = Meteor.settings.public.static_host +  newv;
                $$('entry_thumb_view').setValues({src: newv}, true);
                $$('entry_form').setValues({'thumbnail': newv}, true);
            })
            $$("upload_thumb").attachEvent("onFileUpload", function (item, response) {
                var url = response.files[0].path;
                if(/^http/.test(url))
                    url = Meteor.settings.public.static_host + url;
                $$('entry_thumb_view').setValues({src: url}, true);
                $$('entry_form').setValues({'thumbnail': url}, true);
            });
            $$('source_vod_url').attachEvent("onChange", function (newv, oldv) {
                console.log(newv);
                var entry_source_type = $$('entry_source_type').getValue();
                if (entry_source_type == 'youtube') {
                    var yid = youtube_parser(newv);
                    console.log(yid);
                    var thumburl = "http://img.youtube.com/vi/" + yid + "/0.jpg";
                    $$('entry_thumb_view').setValues({src: thumburl}, true);
                    $$('entry_form').setValues({thumbnail: thumburl}, true);
                }

            })
            $$('entry_source_type').attachEvent("onChange", function (newv, oldv) {
                var el = $$('entry_metadata');
                console.log(newv);
                console.log(oldv);
                $$('source_vod_url').hide();
                $$('source_live_url').hide();

                if (newv == "youtube") {
                    $$('source_vod_url').show();
                }
                else if (newv == "vod_int") {
                    $$('source_vod_url').show();
                }
                else if (newv == "vod_ext") {
                    $$('source_vod_url').show();
                } else if (newv == "live_ext") {
                    $$('source_live_url').show();
                }

                if(newv == 'live_cdn_sbd') {
                    metadata_types.add(el,  newv);
                } else {
                    oldv && metadata_types.remove(el, oldv);
                }

            })
            helpers.getAsync("dev_forms", {})
                .then(function (items) {
                    var item = items[0];
                    var keys = dev_forms.extractIds(item);
                    var entry_form = $$('entry_form');
                    _.each(keys, function (kid) {
                        var field = dev_forms.build_field(entry_form, kid, item);
                        customFieldSet.body.rows.push(field);
                    })
                    if (customFieldSet.body.rows && !_.isEmpty(customFieldSet.body.rows)) {
                        var entry_metadata = $$('entry_metadata');
                        entry_metadata.addView(customFieldSet, -1);
                    }
                })
        }
    };
});
