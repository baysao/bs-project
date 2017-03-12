define([
    "views/entries_categories/categories_list",
    "views/entries_categories/categories_new",
], function (categories_list, categories_new) {
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
                width: 120
            },
            {
                view: "button",
                id: "button_save_new",
                css: "button2", icon: "angle-left",
                label: "Save As New", width: 120
            },

            {},
            {
                view: "button",
                id: "button_reset",
                css: "button2", icon: "angle-left",
                label: "Reset", width: 120
            },
            {
                view: "button", id: "button_delete",
                css: "button_danger button0", icon: "times",
                label: "Delete", width: 120
            }
        ]
    }
    var layout = {
        type: "material",
        cols: [
            categories_list,
            {
                gravity: 2.2,
                type: "line",
                rows: [
                    {
                        rows: [{
                            view: "tabbar", multiview: true, optionWidth: 100,
                            options: [
                                {id: "categories_new", value: "Main"},
                                //{id: "imagesView", value: "Images"},
                                //{id: "metaView", value: "Meta"}
                            ]
                        }]
                    },
                    {
                        cells: [
                            categories_new,
                            //upload,
                            //meta
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
            var categories_new_ui = $$('categories_new');
            var categories_list_ui = $$('categories_list');
            categories_new_ui.bind(categories_list_ui);

            $$("button_reset").attachEvent("onItemClick", function () {
                categories_new_ui.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (categories_list_ui.getSelectedId()) {
                    categories_list_ui.remove(categories_list_ui.getSelectedId());
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var categories_new_form_values = categories_new_ui.getValues();
                console.log(categories_new_form_values);
                if (!categories_new_form_values.ownerId) {
                    categories_new_form_values.ownerId = Meteor.userId();
                    categories_new_ui.setValues(categories_new_form_values);
                }

                categories_new_ui.save();
            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var categories_new_form_values = categories_new_ui.getValues();
                if (!categories_new_form_values.ownerId) {
                    categories_new_form_values.ownerId = Meteor.userId();
                    categories_new_ui.setValues(categories_new_form_values);
                }
                console.log(categories_new_form_values);
                categories_list_ui.add(_.omit(categories_new_form_values, "id"), 0);
            })
        }

    }
});