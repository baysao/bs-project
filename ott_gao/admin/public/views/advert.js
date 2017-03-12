define(["app", "promise!models/authen", "promise!models/helpers",
    "models/advert_type",
    "views/adverts/metadata"

    ], function (app, token, helpers, advert_type_model,
       metadata) {
        var params = {};
        var afterLoadData = function (item) {
            console.log('afterLoadData');
            console.log(item);
            $$('advert_form').setValues(item);


        }
        var layout = {
            type: "material",
            rows: [
            {

                view: "form",
                elementsConfig: {
                    labelWidth: 150
                },
                scroll: true,
                id: "advert_form",
                rows: [
                {cols: [
                    {view: 'button',  type: 'icon', label: 'Back', icon: 'arrow-left', width: 100, click: function(){ app.show("/app/adverts")}},
                    {

                        view: "tabbar", id: "entry_tabbar", multiview: true, optionWidth: 200,
                        options: [
                        {id: "advert_metadata", value: "Metadata"}
                        ]

                    }]
                },
                {
                    cells: [
                    metadata
                    ]
                },
                {

                    css: "highlighted_header header6",
                    paddingX: 5,
                    paddingY: 5,
                    height: 40,

                    cols: [
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


                    {},
                    {
                        view: "button", id: "button_reset",
                        css: "button2", icon: "angle-left",
                        label: "Reset", width: 90
                    },
                    {
                        view: "button", id: "button_delete", css: "button_danger button0", icon: "times",
                        label: "Delete", width: 90
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
                    var adverts_values = $$("advert_form").getValues();
                    adverts_values.webix_operation = 'insert';
                    if (!adverts_values.ownerId)
                        adverts_values.ownerId = Meteor.userId();

                    adverts_values = advert_type_model.get(adverts_values.type).process(adverts_values);
                    if (params.id)
                        delete adverts_values.id;
                    helpers.getAsync("adverts", {method: "post", data: adverts_values})
                    .then(function (res, xhr) {
                        if (xhr.status == 200)
                            webix.message("Insert adverts successful");
                    })
                })
                $$('button_save').attachEvent('onItemClick', function () {
                    var adverts_values = $$("advert_form").getValues();
                    if (params.id)
                        adverts_values.webix_operation = 'replace';
                    else
                        adverts_values.webix_operation = 'insert';
                    if (!adverts_values.ownerId)
                        adverts_values.ownerId = Meteor.userId();
                    adverts_values = advert_type_model.get(adverts_values.type).process(adverts_values);
                    helpers.getAsync("adverts", {method: "post", data: adverts_values})
                    .then(function (res, xhr) {
                        if (xhr.status == 200)
                            webix.message((params.id ? "Update" : "Insert") + " adverts successful");
                    })
                });
                $$('button_reset').attachEvent('onItemClick', function () {
                    app.show("/app/adverts");
                })
                $$('button_delete').attachEvent('onItemClick', function () {
                    app.show("/app/adverts");
                })
            },
            $onurlchange: function (config, url, scope) {
                console.log('onchange');
                params = config;
                var item_type = "adverts";

                if (config && config.id) {
                    var api_path = "/api/" + item_type + "?access_token=" +
                    encodeURIComponent(token) + "&id=" + config.id;
                    $$('advert_form').load(api_path, function (text, data, xhr) {
                        var entry = data.json();
                        if (entry)
                            afterLoadData(entry);
                    });
                }
                $$("title").parse({title: "Update Advertising", details: "adverts"});
            }
        }

    })
