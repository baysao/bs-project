define([
    "promise!models/authen",
    "models/helpers",
    "models/dev_apis",
    "views/dev_apis/dev_apis_list",
    "views/dev_apis/dev_apis_new"
], function (token, helpers, dev_apis
    , dev_apis_list
    , dev_apis_new) {

    var item_type = "dev_apis";
    var api_path = "/api/" + item_type + "?access_token=" + encodeURIComponent(token);


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
                inputWidth: 90
            },
            {
                view: "button",
                id: "button_save_new",
                css: "button2", icon: "angle-left",
                label: "New", inputWidth: 90
            },
            {},
            {
                view: "button",
                id: "button_reset",
                css: "button2", icon: "angle-left",
                label: "Reset", inputWidth: 90
            },
            {
                view: "button", id: "button_delete",
                css: "button_danger button0", icon: "times",
                label: "Delete", inputWidth: 90
            }
        ]
    }
    var layout = {
        type: "material",
        cols: [
            dev_apis_list,
            {
                view: "form",
                id: "dev_apis_form",
                elementsConfig: {
                    labelWidth: 150
                },
                rows: [
                    {
                        view: "tabbar", multiview: true, optionWidth: 100,
                        options: [
                            {id: "dev_apis_new", value: "Main"},
                        ]
                    },
                    {
                        cells: [
                            dev_apis_new,
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
            var dev_apis_form = $$('dev_apis_form');
            var dev_apis_list = $$('dev_apis_list');
            var dev_apis_new = $$('dev_apis_new');
            dev_apis_form.bind(dev_apis_list);

            $$("button_reset").attachEvent("onItemClick", function () {
                dev_apis.removeAllChilds(dev_apis_new);
                dev_apis_form.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (dev_apis_list.getSelectedId()) {
                    dev_apis_list.remove(dev_apis_list.getSelectedId());
                    dev_apis.removeAllChilds(dev_apis_new);
                    $$('dev_apis_url').setValue("");
                    dev_apis_form.clear();
                    webix.message("Remove successful");
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var dev_apis_new_form_values = dev_apis_form.getValues();

                if (!dev_apis_new_form_values.ownerId) {
                    dev_apis_new_form_values.ownerId = Meteor.userId();
                    dev_apis_form.setValues(dev_apis_new_form_values);
                }

                webix.ajax().post(api_path, _.extend(dev_apis_form.getValues(), {
                    webix_operation: dev_apis_new_form_values.id ? 'replace' : 'insert'
                }), function (text, data, xhr) {
                    dev_apis_list.load(api_path);
                });
            })

            $$("button_save_new").attachEvent("onItemClick", function () {
                var dev_apis_new_form_values = dev_apis_form.getValues();
                if (!dev_apis_new_form_values.ownerId) {
                    dev_apis_new_form_values.ownerId = Meteor.userId();
                    dev_apis_form.setValues(dev_apis_new_form_values);
                }
                dev_apis_list.add(_.omit(dev_apis_new_form_values, "id"), 0);
                webix.message("Save successful");
            })
        }

    }
});