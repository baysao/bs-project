/**
 * Created by baysao on 04/01/2016.
 */
define([], function () {
    var items_new = {
        view: "window", modal: true, id: "uploads_item_new_win", position: "center",
        head: "Upload File",
        body: {
            paddingY: 20, paddingX: 30, elementsConfig: {labelWidth: 140},
            view: "form", id: "uploads_item_new_form",
            elements: [
                {
                    view: "combo", name: "flavor", label: "Flavor", id: "uploads_item_new_flavors",
                    width: 400
                },
                {
                    margin: 10,
                    cols: [
                        {},
                        {
                            view: "button",
                            label: "Add",
                            type: "form",
                            align: "center",
                            width: 120,
                            click: function () {
                                var flavor = $$("uploads_item_new_flavors").getValue();
                                if (flavor) {
                                    $$("uploads_uploader").fileDialog({flavor: flavor});
                                    webix.$$("uploads_item_new_win").hide();
                                }
                                else
                                    webix.message({type: "error", text: "Please select flavor"});
                            }
                        },
                        {
                            view: "button", label: "Cancel", align: "center",
                            width: 120,
                            click: function () {
                                webix.$$("uploads_item_new_win").hide();
                            }
                        }
                    ]
                }

            ]
        }
    }
    return {
        $ui: items_new
    }
})