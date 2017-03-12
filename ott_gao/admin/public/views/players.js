define([
    "views/players/players_list",
    "views/players/players_new"
], function (players_list, players_new) {
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
            players_list,
            {
                gravity: 2.2,
                type: "line",
                rows: [
                    {
                        rows: [{
                            view: "tabbar", multiview: true, optionWidth: 100,
                            options: [
                                {id: "players_new", value: "Main"}
                            ]
                        }]
                    },
                    {
                        cells: [
                            players_new
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
            var players_new_ui = $$('players_new');
            var players_list_ui = $$('players_list');
            players_new_ui.bind(players_list_ui);

            $$("button_reset").attachEvent("onItemClick", function () {
                players_new_ui.clear();
            })
            $$("button_delete").attachEvent("onItemClick", function () {
                if (players_list_ui.getSelectedId()) {
                    players_list_ui.remove(players_list_ui.getSelectedId());
                } else {
                    webix.message("No item to remove");
                }
            })
            $$("button_save").attachEvent("onItemClick", function () {
                var players_new_form_values = players_new_ui.getValues();
                console.log(players_new_form_values);
                if (!players_new_form_values.ownerId) {
                    players_new_form_values.ownerId = Meteor.userId();
                    players_new_ui.setValues(players_new_form_values);
                }

                players_new_ui.save();
            })
            $$("button_save_new").attachEvent("onItemClick", function () {
                var players_new_form_values = players_new_ui.getValues();
                if (!players_new_form_values.ownerId) {
                    players_new_form_values.ownerId = Meteor.userId();
                    players_new_ui.setValues(players_new_form_values);
                }
                console.log(players_new_form_values);
                players_list_ui.add(_.omit(players_new_form_values, "id"), 0);
            })
        }

    }
});