define([
    "promise!models/authen",
    "promise!models/helpers",
    "models/action_type",
], function (token, helpers, action_type_model) {
    var action_list_select = [];
    var id = Random.id();
    var action_form = {
        id: "entry_action",
        rows: [
            {cols: [
                {},
                {view: 'button', label: 'Add action', id: 'action_add', width: 120,  css: "button_primary button_raised"}
            ]},
            {}
        ]
    };

    var layout = action_form;

    return {
        $ui: layout,
        $oninit: function (view, scope) {
            helpers.dataToOptions("actions", "label").then(function (val) {
                action_list_select = val;
            })
            $$('action_add').attachEvent('onItemClick', function () {
                var childs = $$("entry_action").getChildViews();
                console.log(childs);
                var pos = childs.length - 2;
                if (pos < 0) pos = 0;
                console.log(pos);
                var id = Random.id();
                console.log('id:' + id);
                $$('entry_action').addView(
                    action_type_model.action_element( $$('entry_action'), id, action_list_select ),pos
                );
                console.log(action_list_select);
                if(action_list_select.length <= 0) {
                    var action_list_e = $$('"action_list_" + id');
                    console.log(action_list_e);
                    helpers.dataToOptions("actions", "label").then(function (val) {
                        console.log(val);
                        action_list_e.define("options", val);
                        action_list_e.refresh();
                        console.log(val);
                        action_list_select = val;
                    })
                }
            })
        }
    };
});
