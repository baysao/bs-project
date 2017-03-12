define([
    "views/entries_tags/tags_list",
    "views/entries_tags/tags_new",
], function (tags_list, tags_new) {
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
            tags_list,
            {
                gravity: 2.2,
                type: "line",
                rows: [
                    {
                        //rows: [{
                            view: "tabbar", multiview: true, optionWidth: 100,
                            options: [
                                {id: "tags_new", value: "Main"},
                            ]
                        //}]
                    },
                    {
                        cells: [
                            tags_new,
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
            var tags_new_ui = $$('tags_new');
            var tags_list_ui = $$('tags_list');
            tags_new_ui.bind(tags_list_ui);

            $$("button_reset").attachEvent("onItemClick", function () {
                tags_new_ui.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (tags_list_ui.getSelectedId()) {
                    tags_list_ui.remove(tags_list_ui.getSelectedId());
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var tags_new_form_values = tags_new_ui.getValues();
                if (!tags_new_form_values.ownerId) {
                    tags_new_form_values.ownerId = Meteor.userId();
                    tags_new_ui.setValues(tags_new_form_values);
                }

                tags_new_ui.save();
            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var tags_new_form_values = tags_new_ui.getValues();
                if (!tags_new_form_values.ownerId) {
                    tags_new_form_values.ownerId = Meteor.userId();
                    tags_new_ui.setValues(tags_new_form_values);
                }
                tags_list_ui.add(_.omit(tags_new_form_values, "id"), 0);
            })
        }

    }
});