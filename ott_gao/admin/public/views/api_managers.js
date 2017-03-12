define([
    "promise!models/helpers",
    "promise!models/credentials",
    "views/api_managers/credentials_list",
    "views/api_managers/credentials_new"
], function (helpers,credentials
    , credentials_list
    , credentials_new
) {
    var controls = {
        view: "form",
        css: "highlighted_header header6",
        paddingX: 5,
        paddingY: 5,
        height: 40,

        cols: [
            {
                view: "button",
                id: "button_save",
                css: "button_primary button_raised",
                type: "form",
                icon: "plus",
                label: "Save",
                width: 90
            },
            {
                view: "button",
                id: "button_save_new",
                css: "button2", icon: "angle-left",
                label: "New", width: 90
            },
            {},
            {
                view: "button",
                id: "button_reset",
                css: "button2", icon: "angle-left",
                label: "Reset", width: 90
            },
            {
                view: "button", id: "button_delete",
                css: "button_danger button0", icon: "times",
                label: "Delete", width: 90
            }
        ]
    }
    var layout = {
        type: "material",
        cols: [
            credentials_list,
            {
                //gravity: 2.2,
                //type: "line",
                view: "form",
                id: "credentials_form",
                elementsConfig: {
                    labelWidth: 130
                },
                rows: [
                    {
                        //rows: [{
                        view: "tabbar", multiview: true, optionWidth: 100,
                        options: [
                            {id: "credentials_new", value: "Main"},
                            //{id: "credentials_filter", value: "Filtering"},
                        ]
                        //}]
                    },
                    {
                        cells: [
                            credentials_new,
                            //credentials_filter,
                        ]
                    },
                    controls
                ]
            }
        ]
    };


    return {
        $ui: layout,
        $oninit: function () {
            var credentials_form = $$('credentials_form');
            var credentials_list_ui = $$('credentials_list');
            credentials_form.bind(credentials_list_ui);

            $$("button_reset").attachEvent("onItemClick", function () {
                credentials_form.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (credentials_list_ui.getSelectedId()) {
                    credentials_list_ui.remove(credentials_list_ui.getSelectedId());
                    webix.message("Remove successful");
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var credentials_new_form_values = credentials_form.getValues();
                if (!credentials_new_form_values.ownerId) {
                    credentials_new_form_values.ownerId = Meteor.userId();
                    credentials_form.setValues(credentials_new_form_values);
                }

                credentials_form.save();
                webix.message("Save successful");
            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var credentials_new_form_values = credentials_form.getValues();
                if (!credentials_new_form_values.ownerId) {
                    credentials_new_form_values.ownerId = Meteor.userId();
                    credentials_form.setValues(credentials_new_form_values);
                }
                credentials_list_ui.add(_.omit(credentials_new_form_values, "id"), 0);
                webix.message("Save successful");
            })
            $$('gen_key').attachEvent("onItemClick", function (id, e, node) {
                credentials.generateKey().then(function (key) {
                    $$('form_key').setValue(key);
                    webix.message("Generate key successful");
                }, function () {
                    webix.message({type: "error", text: "Generate key failed"});
                })
            })
            $$('gen_token').attachEvent("onItemClick", function (id, e, node) {
                var values = $$('credentials_form').getValues();
                values.userId = Meteor.userId();
                credentials.signKey(values).then(function (token) {
                    $$('form_token').setValue(token);
                    webix.message("Generate token successful");
                }, function () {
                    webix.message({type: "error", text: "Generate token failed"});
                })
            })

        }

    }
});