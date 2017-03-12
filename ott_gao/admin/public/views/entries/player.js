define([
    "promise!models/helpers"
], function (helpers) {

    var form = {
        id: "entry_player",
        //type:"wide",
        rows: [
            {view: "select", name: "player", id: "entry_player_list", label: "Player", options: []},
            {view: "colorpicker", name: "titleTextFormatColor", label: "Title Text Color"},
            {
                cols: [
                    {
                        view: 'template',
                        id: "customLogoUrl_preview",
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
                        id: "customLogoUrl_button",
                        label: "Upload Image",
                        width: 200,
                        height: 40
                    }
                ]
            },
            {view: "text", name: "customLogoUrl", id: "customLogoUrl", label: "Logo URL"},

            {view: "text", name: "ctaText", label: "Button Text"},
            {view: "text", name: "ctaLink", label: "Button Link"},
            {view: "colorpicker", name: "ctaButtonBackgroundColor", label: "Button Background Color"},


            {
                cols: [
                    {
                        view: 'template',
                        id: "bottomLogoUrl_preview",
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
                        id: "bottomLogoUrl_button",
                        label: "Upload Bottom Banner",
                        width: 200,
                        height: 40
                    }
                ]
            },
            {view: "text", name: "bottomLogoUrl", id:"bottomLogoUrl", label: "Bottom Banner URL"},
            {view: "text", name: "bottomLogoLink", label: "Bottom Banner Link"},



            {
                view: "select", name: "standardTextFormatFont", label: "Text Font",
                options: [
                    {id: "Arial", value: "Arial"},
                    {id: "Courier New", value: "Courier New"},
                    {id: "Georgia", value: "Georgia"},
                    {id: "Times New Roman", value: "Times New Roman"},
                    {id: "Trebuchet MS", value: "Trebuchet MS"},
                    {id: "Verdana", value: "Verdata"}
                ]
            },

            {view: "checkbox", name: "showQualityButton", labelRight: "Show Youtube Quality Button"},
            {view: "checkbox", name: "useYouTubeHighQuality", labelRight: "Use Youtube HQ"},
            {view: "checkbox", name: "showShareButton", labelRight: "Show Share Button"},
            {view: "checkbox", name: "showTwitterButton", labelRight: "Show Twitter button"},
            {view: "checkbox", name: "showFacebookButton", labelRight: "Show Facebook Button"},
            {view: "checkbox", name: "keepControlsVisible", labelRight: "Keep Controls Visible"},
            {view: "checkbox", name: "scaleLogoToTitleBar", labelRight: "Scale Logo Fit Title Bar"},
            {view: "textarea", name: "customCss", label: "Custom CSS"}
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
            $$("customLogoUrl_button").attachEvent("onItemClick", function () {
                $$("uploadAPI").fileDialog({
                    cb: function (response) {
                        console.log(response);
                        var url = response.files[0].path;
                        if (!/^http/.test(url))
                            url = Meteor.settings.public.static_host + url;
                        $$("customLogoUrl_preview").setValues({src: url}, true);
                        $$('entry_form').setValues({customLogoUrl: url}, true);
                    }
                });
            })
            $$('customLogoUrl').attachEvent("onChange", function (newv, oldv) {
                if(!newv) newv = "http://dp.gao.easyvideo.vn/storage/content/icon/svg/details.svg";
                $$('customLogoUrl_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
            })

            $$("bottomLogoUrl_button").attachEvent("onItemClick", function () {
                $$("uploadAPI").fileDialog({
                    cb: function (response) {
                        console.log(response);
                        var url = response.files[0].path;
                        if(/^http/.test(url))
                            url = Meteor.settings.public.static_host + url;
                        $$("bottomLogoUrl_preview").setValues({src: url}, true);
                        $$('entry_form').setValues({bottomLogoUrl: url}, true);
                    }
                });
            })
            $$('bottomLogoUrl').attachEvent("onChange", function (newv, oldv) {
                if(!newv) newv = "http://dp.gao.easyvideo.vn/storage/content/icon/svg/details.svg";
                $$('bottomLogoUrl_preview').setValues({src: /^http/.test(newv) ? newv : Meteor.settings.public.static_host + newv}, true);
            })


            var entry_player_list = $$('entry_player_list');
            helpers.dataToOptions("players").then(function (val) {
                val = _.union([{id: "", value: "None"}], val);
                entry_player_list.define("options", val);
                entry_player_list.refresh();
            })
            entry_player_list.attachEvent('onChange', function (newv, oldv) {
                console.log('onChange');
                console.log(newv);
                if (!newv) return;
                helpers.getAsync("players", {id: newv})
                    .then(function (res, xhr) {
                        //console.log(xhr);
                        if (res) {
                            console.log(res);
                            console.log(typeof res);
                            $$('entry_form').setValues(_.omit(res, "name", "owner", "sid", "id"), true);
                        }

                    })
            })
        }
    };
});