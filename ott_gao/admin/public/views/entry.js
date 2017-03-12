define(["app", "promise!models/authen", "promise!models/helpers", "models/action_type", "models/advert_type",
    "views/entries/metadata",
    "views/entries/preview",
    "views/entries/share",
    "views/entries/action",
    "views/entries/advert",
    "views/entries/player"
], function (app, token, helpers, action_type_model, advert_type_model,
             entry_metadata,
             entry_preview,
             entry_share,
             entry_action, entry_advert, entry_player) {
    var params = {};
    var display_host = Meteor.settings.public.display_host || 'http://dp.gao.easyvideo.vn';
    var afterLoadData = function (item) {
        //console.log('afterLoadData');
        //console.log(item);
        if (!item.source_type) item.source_type = 'vod_int';
        if (!item.thumbnail) {
            var real_url = '/thumb/5/entryId/' + item.id + '/rawId/' + item.raw_id + '.png';
            item.thumbnail = real_url;
            $$('entry_thumb_view').setValues({src: Meteor.settings.public.static_host + real_url}, true);
        }

        // set thumb
        var real_url = /^http/.test(item.thumbnail) ? item.thumbnail : Meteor.settings.public.static_host + item.thumbnail;
        $$('entry_thumb_view').setValues({src: real_url}, true);
        entry_share.init();

        //$$('entry_share_embed_code').setValue('<iframe style="border: none; " width="398" height="272" src=' + display_host + '/frame/' + item.sid + '?&w=398&h=272" frameborder="0" scrolling="no" allowTransparency="true" allowfullscreen></iframe>');
        //var name = $$("entry_form").getValues().name;
        //$$('entry_share_landing').setValue(display_host + '/v/' + s.slugify(name) + '/' + item.sid);

        $$('entry_embed_video_iframe').load(display_host + "/frame/" + item.sid);


        helpers.dataToOptions("actions", "label").then(function (val) {
            //console.log(val);
            _.each(item, function (v, k) {
                var m = k.match(/action_id_(.*)/);
                if (m) {
                    var id = m[1];
                    var childs = $$("entry_action").getChildViews();
                    var pos = childs.length - 2;
                    if (pos < 0) pos = 0;
                    var el = action_type_model.action_element($$('entry_action'), id, val);
                    $$('entry_action').addView(el, pos);
                }
            })
            helpers.dataToOptions("adverts", "label").then(function (val) {
                _.each(item, function (v, k) {
                    var m = k.match(/advert_id_(.*)/);
                    if (m) {
                        var id = m[1];
                        var childs = $$("entry_advert").getChildViews();
                        var pos = childs.length - 2;
                        if (pos < 0) pos = 0;
                        if (item['advert_type_' + id]) {
                            var el = advert_type_model.advert_vast_element($$('entry_advert'), id, val);
                        } else {
                            var el = advert_type_model.advert_banner_element($$('entry_advert'), id, val);
                        }
                        $$('entry_advert').addView(el, pos);
                    }
                })
                $$('entry_form').setValues(item, true);
            })
        })

    }
    var layout = {
        type: "material",
        rows: [
            {

                view: "form",
                elementsConfig: {
                    labelWidth: 130
                },
                scroll: true,
                id: "entry_form",
                rows: [
                    {cols: [
                        {view: 'button',  type: 'icon', label: 'Back', icon: 'arrow-left', width: 100, click: function(){ app.show("/app/entries")}},
                        {

                            view: "tabbar", id: "entry_tabbar", multiview: true, optionWidth: 200,
                            options: [
                                {id: "entry_metadata", value: "Metadata"},
                                {id: "entry_player", value: "Player"},
                                {id: "entry_preview", value: "Preview"},
                                {id: "entry_share", value: "Share"},
                                {id: "entry_action", value: "Action"},
                                {id: "entry_advert", value: "Advertising"},
                            ]

                        }
                    ]},

                    {
                        cells: [
                            entry_metadata,
                            entry_player,
                            entry_preview,
                            entry_share,
                            entry_action,
                            entry_advert
                        ]
                    },
                    {

                        css: "highlighted_header header6",
                        paddingX: 5,
                        paddingY: 5,
                        height: 40,

                        cols: [
                            // http://dp.gao.easyvideo.vn/ac34cb6a1749d39db77a6a39fd39c6010f81975b
                            {
                                view: "button", id: "button_save",
                                css: "button_primary button_raised",
                                type: "form", icon: "plus", label: "Save", width: 90
                            },
                            {
                                view: "button", id: "button_save_new",
                                css: "button_primary button_raised",
                                type: "form", icon: "plus", label: "New", width: 90
                            },
                            {
                                view: "button", id: "button_reset",
                                css: "button2", icon: "angle-left",
                                label: "Reset", width: 90
                            },

                            {},

                            {
                                view: "button", id: "button_delete", css: "button_danger button0", icon: "times",
                                label: "Delete", width: 90
                            },
                            {
                                view: "button", id: "button_publish",  css: "button_primary button_raised", icon: "accept",
                                label: "Publish", width: 90,
                                click: function () {
                                    webix.ajax().get("http://dp.gao.easyvideo.vn/ac34cb6a1749d39db77a6a39fd39c6010f81975b");
                                    webix.message("Publish successful");
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    return {
        $ui: layout,
        $oninit: function (view, scope) {
            console.log('oninit');
            $$('button_save_new').attachEvent('onItemClick', function () {
                var entries_values = $$("entry_form").getValues();
                entries_values.webix_operation = 'insert';
                if (!entries_values.ownerId)
                    entries_values.ownerId = Meteor.userId();
                if (!entries_values.source_type)
                    entries_values.source_type = 'vod_int';

                entries_values.sid = ShortId.generate();

                helpers.getAsync("entries", {method: "post", data: _.omit(entries_values, "id")})
                    .then(function (res, xhr) {
                        if (xhr.status == 200)
                            webix.message("Insert entries successful");
                    })
            })
            $$('button_save').attachEvent('onItemClick', function () {
                var entries_values = $$("entry_form").getValues();
                if (params.id)
                    entries_values.webix_operation = 'replace';
                else
                    entries_values.webix_operation = 'insert';
                if (!entries_values.ownerId)
                    entries_values.ownerId = Meteor.userId();
                if (!entries_values.source_type)
                    entries_values.source_type = 'vod_int';

                if (!entries_values.sid)
                    entries_values.sid = ShortId.generate();

                helpers.getAsync("entries", {method: "post", data: entries_values})
                    .then(function (res, xhr) {
                        if (xhr.status == 200)
                            webix.message((params.id ? "Update" : "Insert") + " entries successful");
                    })
            });
            $$('button_reset').attachEvent('onItemClick', function () {
                app.show("/app/entries");
            })
            $$('button_delete').attachEvent('onItemClick', function () {
                app.show("/app/entries");
            })
        },
        $onurlchange: function (config, url, scope) {
            //console.log('onchange');
            params = config;
            var item_type = "entries";
            var api_path = "/api/" + item_type + "?access_token=" +
                encodeURIComponent(token) + "&id=" + config.id;
            //console.log('form load data');
            if (config && config.id) {
                $$('entry_form').load(api_path, function (text, data, xhr) {
                    var entry = data.json();
                    //console.log('entry:');
                    console.log(entry);
                    if (entry)
                        afterLoadData(entry);
                });
            } else {
                $$('entry_source_type').setValue('vod_ext');
                $$('source_vod_url').show();
                $$('source_live_url').hide();
            }
            $$("title").parse({title: "Update Entries", details: "entries"});
        }
    }

})
