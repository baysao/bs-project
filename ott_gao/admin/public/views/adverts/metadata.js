define([
    "promise!models/authen",
    "promise!models/helpers",
    "models/advert_type"
], function (token, helpers, advert_type) {
    var form = {
        id: "advert_metadata",
        type: "line",
        rows: [
            {
                view: "multiselect", name: "categories", label: "Categories", id: "advert_categories",
                options: [
                    {id: 'commerce', value: 'Commerce'},
                    {id: 'email', value: 'Email'},
                    {id: 'forms', value: 'Forms'},
                    {id: 'info', value: 'Info'},
                    {id: 'marketing', value: 'Marketing'},
                    {id: 'photos', value: 'Photos'},
                    {id: 'social', value: 'Social'}
                ]
            },
            {
                view: "select", name: "type", label: "Type", id: "advert_type",
                options: [
                    {id: 'vast', value: 'VAST'},
                    {id: 'banner', value: 'Banner'}
                ]
            },
            {id: "advert_field_by_type", rows: []},
            {}
        ]
    };

    var layout = form;

    return {
        $ui: layout,
        $oninit: function (view, scope) {
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

            $$('advert_type').attachEvent('onChange', function (newv, oldv) {
                console.log(newv);
                if (!newv) {
                    scope.ui([], $$('advert_field_by_type'));
                    return;
                }
                scope.ui(advert_type.get(newv).fields, $$('advert_field_by_type'));

                    switch (newv) {
                        case 'banner':
                            $$("imageUrl_button").attachEvent("onItemClick", function () {
                                $$("uploadAPI").fileDialog({
                                    cb: function (response) {
                                        console.log(response);
                                        var url = response.files[0].path;
                                        var real_url = Meteor.settings.public.static_host + url;
                                        $$("imageUrl_preview").setValues({src: real_url}, true);
                                        $$('advert_form').setValues({imageUrl: url}, true);
                                    }
                                });
                            })
                            $$('imageURL').attachEvent("onChange", function (newv, oldv) {
                                console.log(newv);
                                $$('imageUrl_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
                            })
                            break;
                        case 'rssfeed':
                            console.log('process:' + newv);
                            $$("rssfeed_thumbnail_button").attachEvent("onItemClick", function () {
                                $$("uploadAPI").fileDialog({
                                    cb: function (response) {
                                        console.log(response);
                                        var url = response.files[0].path;
                                        var real_url = Meteor.settings.public.static_host + url;
                                        $$("rssfeed_thumbnail_preview").setValues({src: real_url}, true);
                                        $$('advert_form').setValues({thumbnailUrl: url}, true);
                                    }
                                });
                            })
                            $$('thumbnailUrl').attachEvent("onChange", function (newv, oldv) {
                                console.log(newv);
                                $$('rssfeed_thumbnail_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
                            })
                            $$("rssfeed_icon_button").attachEvent("onItemClick", function () {
                                $$("uploadAPI").fileDialog({
                                    cb: function (response) {
                                        console.log(response);
                                        var url = response.files[0].path;
                                        var real_url = Meteor.settings.public.static_host + url;
                                        $$("rssfeed_icon_preview").setValues({src: real_url}, true);
                                        $$('advert_form').setValues({icon: url}, true);
                                    }
                                });
                            })
                            $$('iconUrl').attachEvent("onChange", function (newv, oldv) {
                                $$('rssfeed_icon_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
                            })
                            break;
                    }


            })

        }
    };
});
