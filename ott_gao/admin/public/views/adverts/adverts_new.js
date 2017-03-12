define(["views/webix/ckeditor"], function () {

    var layout = {
            view: "form",
            id: "adverts_new",
            elementsConfig: {
                labelWidth: 100
            },
            scroll: true,
            elements: [
                {view: "text", name: "id", label: "ID", readonly: true},
                {view: "text", name: "campaign_id", label: "Campaign ID", readonly: true},
                {
                    view: 'template',
                    id: "adverts_new_img",
                    //width: 90,
                    height: 100,
                    paddingX: 5,
                    data: {
                        url: "",
                        width: 90,
                        height: 90
                    },
                    template: function (obj) {
                        return "<img src='" + obj.url + "'" +
                            " width=" + obj.width + " height=" + obj.height + " />";
                    }
                },

                {view: "text", name: "title", label: "Title"},
                {view: "text", name: "url", label: "url"},
                {view: "text", name: "description", label: "description"},
                {view: "checkbox", name: "enabled", label: "enabled"},
                {}
            ]
        }
        ;

    return {
        $ui: layout,
        $oninit: function (view, scope) {

        }
    };


});