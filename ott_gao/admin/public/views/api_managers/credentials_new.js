define([], function () {
    var layout = {
        //view: "form",
        id: "credentials_new",
        //elementsConfig: {
        //
        //    labelWidth: 130
        //},
        //scroll: true,
        //elements: [
        rows: [
            {view: "text", name: "name", label: "Name"},
            {
                view: "select", name: "type", label: "Type", value: "server", id: "credentials_type", options: [
                {id: "app", value: "App"},
                {id: "web", value: "Website"},
            ]
            },
            {view: "checkbox", name: "is_enabled", label: "Enabled", value: 1},
            {view: "textarea", name: "ip_ranges", id: "ip_ranges", label: "IP Address", gravity: 1, minHeight: 80},
            {
                view: "textarea",
                name: "http_referers",
                id: "http_referers",
                label: "HTTP Referers",
                gravity: 1,
                minHeight: 80
            },
            {view: "datepicker", timepicker: true, name: "expired", label: "Expired"},
            {view: "textarea", name: "key", id: "form_key", label: "Key", gravity: 1, minHeight: 80},
            {view: "textarea", name: "token", id: "form_token", label: "Token", gravity: 1, minHeight: 80},
            //{view: "text", name: "createdAt", id: "form_createdAt", label: "Date Created", readonly: true},

            {},
            {
                cols: [
                    {view: 'button', id: "gen_key", label: "Refresh Key", css: "button_primary button_raised"},
                    {view: 'button', id: "gen_token", label: "Refresh Token", css: "button_primary button_raised"},
                ]
            },
        ]
    };

    return {
        $ui: layout,
        $oninit: function () {

            $$('http_referers').hide();

            $$("credentials_type").attachEvent("onChange", function (newv, oldv) {
                if (newv == 'server') {
                    $$('http_referers').hide();
                    $$('ip_ranges').show();
                } else if (newv == 'web') {
                    $$('http_referers').show();
                    $$('ip_ranges').hide();
                }
            });
        }
    };


});