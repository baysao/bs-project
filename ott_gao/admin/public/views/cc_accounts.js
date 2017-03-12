define([
    "views/cc_accounts/cc_accounts_list",
    "views/cc_accounts/cc_accounts_new",
], function (cc_accounts_list, cc_accounts_new) {
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
            //{
            //    view: "button",
            //    id: "button_reset",
            //    css: "button2", icon: "angle-left",
            //    label: "Reset", width: 120
            //},
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
            cc_accounts_list,
            {
                gravity: 2.2,
                type: "line",
                rows: [
                    {
                        rows: [{
                            view: "tabbar", multiview: true, optionWidth: 100,
                            options: [
                                {id: "cc_accounts_new", value: "Main"},
                                //{id: "imagesView", value: "Images"},
                                //{id: "metaView", value: "Meta"}
                            ]
                        }]
                    },
                    {
                        cells: [
                            cc_accounts_new,
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
            var cc_accounts_new_ui = $$('cc_accounts_new');
            var cc_accounts_list_ui = $$('cc_accounts_list');
            cc_accounts_new_ui.bind(cc_accounts_list_ui);

            //$$("button_reset").attachEvent("onItemClick", function () {
            //    cc_accounts_new_ui.clear();
            //})
            $$("button_delete").attachEvent("onItemClick", function () {
                if (cc_accounts_list_ui.getSelectedId()) {
                    cc_accounts_list_ui.remove(cc_accounts_list_ui.getSelectedId());
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var cc_accounts_new_form_values = cc_accounts_new_ui.getValues();
                console.log(cc_accounts_new_form_values);
                if (!cc_accounts_new_form_values.ownerId) {
                    cc_accounts_new_form_values.ownerId = Meteor.userId();
                    cc_accounts_new_ui.setValues(cc_accounts_new_form_values);
                }
                cc_accounts_new_ui.save();
            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var cc_accounts_new_form_values = cc_accounts_new_ui.getValues();
                if (!cc_accounts_new_form_values.ownerId) {
                    cc_accounts_new_form_values.ownerId = Meteor.userId();
                    cc_accounts_new_ui.setValues(cc_accounts_new_form_values);
                }
                console.log(cc_accounts_new_form_values);
                cc_accounts_list_ui.add(_.omit(cc_accounts_new_form_values, "id"), 0);
            })
        }

    }
});
