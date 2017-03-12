define([], function () {

    var layout = {
        id: "credentials_filter",
        rows: [
            {view: "textarea", name: "ip_ranges", label: "IP Address",gravity:1,minHeight:80},
            {view: "textarea", name: "http_referers", label: "HTTP Referers",gravity:1,minHeight:80},
            {}
        ]
    };

    return {
        $ui: layout,
        $oninit: function () {
            var vv = $$('credentials_form').getValues();
            console.log(vv);
        }
    };


});