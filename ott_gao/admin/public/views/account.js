define([
    "views/accounts/accounts_new"
], function (accounts_new) {
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
            {
                gravity: 2.2,
                type: "line",
                rows: [
                    {
                        rows: [{
                            view: "tabbar", multiview: true, optionWidth: 100,
                            options: [
                                {id: "accounts_new", value: "Main"},
                                //{id: "imagesView", value: "Images"},
                                //{id: "metaView", value: "Meta"}
                            ]
                        }]
                    },
                    {
                        cells: [
                            accounts_new,
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
            // var accounts_new_ui = $$('accounts_new');
            // var accounts_list_ui = $$('accounts_list');
            // accounts_new_ui.bind(accounts_list_ui);
            //
            // $$("button_reset").attachEvent("onItemClick", function () {
            //     accounts_new_ui.clear();
            // })
            // $$("button_delete").attachEvent("onItemClick", function () {
            //     if (accounts_list_ui.getSelectedId()) {
            //         accounts_list_ui.remove(accounts_list_ui.getSelectedId());
            //     } else {
            //         webix.message("No item to remove");
            //     }
            // })
            // $$("button_save").attachEvent("onItemClick", function () {
            //     var accounts_new_form_values = accounts_new_ui.getValues();
            //     console.log(accounts_new_form_values);
            //     if (!accounts_new_form_values.ownerId) {
            //         accounts_new_form_values.ownerId = Meteor.userId();
            //         accounts_new_ui.setValues(accounts_new_form_values);
            //     }
            //
            //     accounts_new_ui.save();
            // })
            // $$("button_save_new").attachEvent("onItemClick", function () {
            //     var accounts_new_form_values = accounts_new_ui.getValues();
            //     if (!accounts_new_form_values.ownerId) {
            //         accounts_new_form_values.ownerId = Meteor.userId();
            //         accounts_new_ui.setValues(accounts_new_form_values);
            //     }
            //     console.log(accounts_new_form_values);
            //     accounts_list_ui.add(_.omit(accounts_new_form_values, "id"), 0);
            // })
        }

    }
});