/**
 * Created by baysao on 27/01/2016.
 */
define([
    "views/adverts/adverts_list",
    "views/adverts/adverts_new",
    "views/adverts/adverts_perf",
], function (adverts_list, adverts_new,  adverts_perf) {
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
        id: 'campaigns_adverts',
        cols: [
            adverts_list,
            {
                gravity: 2.2,
                type: "line",
                rows: [
                    {
                        rows: [{
                            view: "tabbar", multiview: true, optionWidth: 100,
                            id: "adverts_tabbar",
                            options: [
                                {id: "adverts_new", value: "Main"},
                                {id: "adverts_perf", value: "Performance"},
                            ]
                        }]
                    },
                    {
                        cells: [
                            adverts_new,
                            adverts_perf
                        ]
                    },
                    //controls
                ]
            }
        ]
    };


    return {
        $ui: layout,
        $oninit: function () {
            //var adverts_new_ui = $$('adverts_new');
            //var adverts_list_ui = $$('adverts_list');
            //adverts_new_ui.bind(adverts_list_ui);

            //$$("button_reset").attachEvent("onItemClick", function () {
            //    adverts_new_ui.clear();
            //})
            //$$("button_delete").attachEvent("onItemClick", function () {
            //    if (adverts_list_ui.getSelectedId()) {
            //        adverts_list_ui.remove(adverts_list_ui.getSelectedId());
            //    } else {
            //        webix.message("No item to remove");
            //    }
            //})
            //$$("button_save").attachEvent("onItemClick", function () {
            //    var adverts_new_form_values = adverts_new_ui.getValues();
            //    console.log(adverts_new_form_values);
            //    if (!adverts_new_form_values.ownerId) {
            //        adverts_new_form_values.ownerId = Meteor.userId();
            //        adverts_new_ui.setValues(adverts_new_form_values);
            //    }
            //
            //    adverts_new_ui.save();
            //})
            //$$("button_save_new").attachEvent("onItemClick", function () {
            //    var adverts_new_form_values = adverts_new_ui.getValues();
            //    if (!adverts_new_form_values.ownerId) {
            //        adverts_new_form_values.ownerId = Meteor.userId();
            //        adverts_new_ui.setValues(adverts_new_form_values);
            //    }
            //    console.log(adverts_new_form_values);
            //    adverts_list_ui.add(_.omit(adverts_new_form_values, "id"), 0);
            //})
        }

    }
});