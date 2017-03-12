define([
    "app",
    //"promise!models/authen",
    "promise!models/helpers",
    "views/uploads/uploader",
    "views/uploads/item_new",
    "views/uploads/item_list"
], function (app,
             //token,
             helpers,
             uploader,
             item_new,
             item_list) {

    var controls = [
        {
            view: "button",
            css: "button_primary button_raised",
            type: "iconButton",
            icon: "plus",
            label: "Upload file",
            width: 150,
            click: function () {
                $$("uploads_item_new_win").show();
            }
        },

        {},
        {
            view: "richselect",
            id: "order_filter",
            value: "all",
            maxWidth: 400,
            minWidth: 250,
            vertical: true,
            labelWidth: 100,
            options: [
                {id: "all", value: "All"},
                {id: "new", value: "Need Invoicing"},
                {id: "ready", value: "Ready to Ship"},
                {id: "completed", value: "Completed"},
                {id: "cancelled", value: "Cancelled"}
            ],
            label: "Filter orders",
            on: {
                //onChange: function () {
                //    var val = this.getValue();
                //    if (val == "all")
                //        $$("orderData").filter("#status#", "");
                //    else
                //        $$("orderData").filter("#status#", val);
                //}
            }
        }
    ];

    var layout = {
        type: "material",
        rows: [
            {
                height: 40,
                css: "bg_clean",
                cols: controls
            },
            {
                rows: [
                    {
                        margin: 10,
                        rows: [
                            item_list
                        ]

                    },
                    {
                        view: "toolbar",
                        paddingX: 5,
                        paddingY: 5,
                        height: 40,
                        cols: [{
                            view: "pager", id: "pagerA",
                            template: "{common.pages()}",
                            autosize: true,
                            height: 35,
                            group: 5
                        }

                        ]
                    }
                ]
            }
        ]

    };

    return {
        $oninit: function (view, scope) {
            // init other ui
            scope.ui(uploader);
            scope.ui(item_new);

            var uploads_item_new_flavors = $$("uploads_item_new_flavors");
            helpers.dataToOptions("entries_flavors").then(function(val){
                uploads_item_new_flavors.define("options", val);
                uploads_item_new_flavors.refresh();
            })
        },
        $ui: layout
    };

});