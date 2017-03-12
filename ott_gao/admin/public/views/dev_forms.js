define([
    "promise!models/authen",
    "models/helpers",
    "models/dev_forms",
    "views/dev_forms/dev_forms_list",
    "views/dev_forms/dev_forms_new"
], function (token, helpers, dev_forms
    , dev_forms_list
    , dev_forms_new) {

    var item_type = "dev_forms";
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
            dev_forms_list,
            {
                view: "form",
                id: "dev_forms_form",
                elementsConfig: {
                    labelWidth: 130
                },
                rows: [
                    {
                        view: "tabbar", multiview: true, optionWidth: 100,
                        options: [
                            {id: "dev_forms_new", value: "Main"},
                        ]
                    },
                    {
                        cells: [
                            dev_forms_new,
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
            var dev_forms_form = $$('dev_forms_form');
            var dev_forms_list = $$('dev_forms_list');
            var dev_forms_new = $$('dev_forms_new');
            dev_forms_form.bind(dev_forms_list);

            $$("button_reset").attachEvent("onItemClick", function () {
                dev_forms.removeAllChilds(dev_forms_new);
                dev_forms_form.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (dev_forms_list.getSelectedId()) {
                    dev_forms_list.remove(dev_forms_list.getSelectedId());
                    webix.message("Remove successful");
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var dev_forms_new_form_values = dev_forms_form.getValues();
                if (!dev_forms_new_form_values.ownerId) {
                    dev_forms_new_form_values.ownerId = Meteor.userId();
                    dev_forms_form.setValues(dev_forms_new_form_values);
                }
                webix.ajax().post(api_path, _.extend(dev_forms_form.getValues(), {
                    webix_operation: dev_forms_new_form_values.id ? 'replace': 'insert'
                }), function(text, data, xhr){
                    dev_forms_list.load(api_path);
                });
            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var dev_forms_new_form_values = dev_forms_form.getValues();
                if (!dev_forms_new_form_values.ownerId) {
                    dev_forms_new_form_values.ownerId = Meteor.userId();
                    dev_forms_form.setValues(dev_forms_new_form_values);
                }
                dev_forms_list.add(_.omit(dev_forms_new_form_values, "id"), 0);
                webix.message("Save successful");
            })
        }

    }
});