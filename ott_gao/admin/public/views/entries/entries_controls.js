/**
 * Created by baysao on 05/01/2016.
 */
define([], function(){
    var controls = [
        {
            view: "button",
            css: "button_primary button_raised",
            type: "iconButton",
            icon: "plus",
            label: "Add order",
            width: 150,
            click: function () {
                app.show("/app/entry");
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
                onChange: function () {
                    var val = this.getValue();
                    if (val == "all")
                        $$("orderData").filter("#status#", "");
                    else
                        $$("orderData").filter("#status#", val);
                }
            }
        }
    ];
    return {
        $ui: controls
    }
})