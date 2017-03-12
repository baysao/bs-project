define(["app", "promise!models/authen", "promise!models/helpers",
    "models/action_type",
    "views/actions/metadata"

    ], function (app, token, helpers, action_type_model,
       metadata) {
        var params = {};
        var afterLoadData = function (item) {
            console.log('afterLoadData');
            console.log(item);
            $$('action_form').setValues(item);
        }
        var layout = {
            type: "material",
            rows: [
            {

                view: "form",
                elementsConfig: {
                    labelWidth: 100
                },
                scroll: true,
                id: "action_form",
                rows: [
                {cols: [
                    {view: 'button',  type: 'icon', label: 'Back', icon: 'arrow-left', width: 100, click: function(){ app.show("/app/actions")}},
                    {

                        view: "tabbar", id: "entry_tabbar", multiview: true, optionWidth: 200,
                        options: [
                        {id: "action_metadata", value: "Metadata"}
                        ]

                    }
                    ]

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
                    var actions_values = $$("action_form").getValues();
                    actions_values.webix_operation = 'insert';
                    if (!actions_values.ownerId)
                        actions_values.ownerId = Meteor.userId();

                    actions_values = action_type_model.get(actions_values.type).process(actions_values);
                    if (params.id)
                        delete actions_values.id;
                    helpers.getAsync("actions", {method: "post", data: actions_values})
                    .then(function (res, xhr) {
                        if (xhr.status == 200)
                            webix.message("Insert actions successful");
                    })
                })
                $$('button_save').attachEvent('onItemClick', function () {
                    var actions_values = $$("action_form").getValues();
                    if (params.id)
                        actions_values.webix_operation = 'replace';
                    else
                        actions_values.webix_operation = 'insert';
                    if (!actions_values.ownerId)
                        actions_values.ownerId = Meteor.userId();
                    actions_values = action_type_model.get(actions_values.type).process(actions_values);
                    helpers.getAsync("actions", {method: "post", data: actions_values})
                    .then(function (res, xhr) {
                        if (xhr.status == 200)
                            webix.message((params.id ? "Update" : "Insert") + " actions successful");
                    })
                });
                $$('button_reset').attachEvent('onItemClick', function () {
                    app.show("/app/actions");
                })
                $$('button_delete').attachEvent('onItemClick', function () {
                    app.show("/app/actions");
                })
            },
            $onurlchange: function (config, url, scope) {
                console.log('onchange');
                params = config;
                var item_type = "actions";

                if (config && config.id) {
                    var api_path = "/api/" + item_type + "?access_token=" +
                    encodeURIComponent(token) + "&id=" + config.id;
                    $$('action_form').load(api_path, function (text, data, xhr) {
                        var entry = data.json();
                        if (entry)
                            afterLoadData(entry);
                    });
                }
                $$("title").parse({title: "Update Actions", details: "actions"});
            }
        }

    })
