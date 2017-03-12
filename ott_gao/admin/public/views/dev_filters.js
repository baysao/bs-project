define([
    "promise!models/authen",
    "models/helpers",
    "models/dev_filters",
    "views/dev_filters/dev_filters_list",
    "views/dev_filters/dev_filters_new"
], function (token, helpers, dev_filters
    , dev_filters_list
    , dev_filters_new) {

    var item_type = "dev_filters";
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
            dev_filters_list,
            {
                view: "form",
                id: "dev_filters_form",
                elementsConfig: {
                    labelWidth: 130
                },
                rows: [
                    {
                        view: "tabbar", multiview: true, optionWidth: 100,
                        options: [
                            {id: "dev_filters_new", value: "Main"},
                        ]
                    },
                    {
                        cells: [
                            dev_filters_new,
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
            var dev_filters_form = $$('dev_filters_form');
            var dev_filters_list = $$('dev_filters_list');
            var dev_filters_new = $$('dev_filters_new');
            dev_filters_form.bind(dev_filters_list);

            $$("button_reset").attachEvent("onItemClick", function () {
                dev_filters.removeAllChilds(dev_filters_new);
                dev_filters_form.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (dev_filters_list.getSelectedId()) {
                    dev_filters_list.remove(dev_filters_list.getSelectedId());
                    webix.message("Remove successful");
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var dev_filters_new_form_values = dev_filters_form.getValues();
                if (!dev_filters_new_form_values.ownerId) {
                    dev_filters_new_form_values.ownerId = Meteor.userId();
                    dev_filters_form.setValues(dev_filters_new_form_values);
                }
                webix.ajax().post(api_path, _.extend(dev_filters_form.getValues(), {
                    webix_operation: dev_filters_new_form_values.id ? 'replace': 'insert'
                }), function(text, data, xhr){
                    dev_filters_list.load(api_path);
                });

            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var dev_filters_new_form_values = dev_filters_form.getValues();
                if (!dev_filters_new_form_values.ownerId) {
                    dev_filters_new_form_values.ownerId = Meteor.userId();
                    dev_filters_form.setValues(dev_filters_new_form_values);
                }
                dev_filters_list.add(_.omit(dev_filters_new_form_values, "id"), 0);
                webix.message("Save successful");
            })
        }

    }
});