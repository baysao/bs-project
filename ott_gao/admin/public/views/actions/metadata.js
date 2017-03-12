define([
    "promise!models/authen",
    "promise!models/helpers",
    "models/action_type"
], function (token, helpers, action_type) {
    var form = {
        id: "action_metadata",
        type: "line",
        rows: [
            {"view": "text", "name": "label", "label": "Label", "labelWidth": 130},
            {"view": "text", "name": "title", "label": "Title", "labelWidth": 130},
            {
                view: "multiselect", name: "categories", label: "Categories", id: "action_categories",
                options: []
            },
            {
                cols: [
                    {
                        view: 'template',
                        id: "rssfeed_icon_preview",
                        width: 100,
                        height: 100,
                        data: {src: "http://dp.gao.easyvideo.vn/storage/content/icon/svg/details.svg", size: 90},
                        template: function (obj) {
                            return '<img src="' + obj.src + '" style="cursor:pointer; width:' + obj.size + 'px; height:' + obj.size + 'px;" />';
                        }
                    },
                    {},
                    {
                        view: "button",
                        id: "rssfeed_icon_button",
                        label: "Upload Icon",
                        width: 200,
                        height: 40
                    }
                ]
            },
            {"view": "text", "name": "icon", "id": "iconUrl", "label": "Icon Url", value: "http://dp.gao.easyvideo.vn/storage/content/icon/svg/details.svg", "labelWidth": 130},
            {
                view: "multiselect", name: "type", label: "Type", id: "action_type",
                options: []
            },
            {"view": "checkbox", "name": "showInMenu", "label": "Menu", value: "1"},
            {id: "action_field_by_type", rows: []},
            {}
        ]
    };

    var layout = form;

    return {
        $ui: layout,
        $oninit: function (view, scope) {
            var action_type_select = $$("action_type");
            action_type_select.define("options", action_type.action_types);
            action_type_select.refresh();
            var action_categories_select = $$("action_categories");
            action_categories_select.define("options", action_type.action_categories);
            action_categories_select.refresh();
            scope.ui({
                id: "uploadAPI",
                view: "uploader",
                upload: "/upload",
                on: {
                    onBeforeFileAdd: function (item) {
                        var type = item.type.toLowerCase();
                        if (type != "jpg" && type != "png") {
                            webix.message("Only PNG or JPG images are supported");
                            return false;
                        }
                    },
                    onFileUpload: function (response) {
                        console.log(response);
                        var cb = response.context.cb;
                        cb(response);
                    },
                    onFileUploadError: function (item) {
                        webix.alert("Error during file upload");
                    }
                },
                apiOnly: true
            });
            $$("rssfeed_icon_button").attachEvent("onItemClick", function () {
                $$("uploadAPI").fileDialog({
                    cb: function (response) {
                        console.log(response);
                        var url = response.files[0].path;
                        var real_url = Meteor.settings.public.static_host + url;
                        $$("rssfeed_icon_preview").setValues({src: real_url}, true);
                        $$('action_form').setValues({icon: url}, true);
                    }
                });
            })
            $$('iconUrl').attachEvent("onChange", function (newv, oldv) {
                $$('rssfeed_icon_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
            })
            $$('action_type').attachEvent('onChange', function (newv, oldv) {
                console.log(newv);
                if (!newv) {
                    scope.ui([], $$('action_field_by_type'));
                    return;
                }
                scope.ui(action_type.get(newv).fields, $$('action_field_by_type'));

                    switch (newv) {
                        case 'rssfeed':
                            console.log('process:' + newv);
                            $$("rssfeed_thumbnail_button").attachEvent("onItemClick", function () {
                                $$("uploadAPI").fileDialog({
                                    cb: function (response) {
                                        console.log(response);
                                        var url = response.files[0].path;
                                        var real_url = Meteor.settings.public.static_host + url;
                                        $$("rssfeed_thumbnail_preview").setValues({src: real_url}, true);
                                        $$('action_form').setValues({thumbnailUrl: url}, true);
                                    }
                                });
                            })
                            $$('thumbnailUrl').attachEvent("onChange", function (newv, oldv) {
                                console.log(newv);
                                $$('rssfeed_thumbnail_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
                            })

                            break;
                    }


            })

        }
    };
});
