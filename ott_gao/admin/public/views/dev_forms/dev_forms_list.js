define(["promise!models/authen", "models/dev_forms"], function (token, dev_forms) {
    var item_type = "dev_forms";
    var api_path = "/api/" + item_type + "?access_token=" + encodeURIComponent(token);
    return {
        $ui: {
            width: 300,
            rows: [
                {
                    view: "form",

                    paddingX: 5,
                    paddingY: 5,
                    margin: 2,
                    rows: [
                        {view: "label", label: "Find Forms:"},
                        {view: "search", placeholder: "Type here..."}
                    ]
                },
                {
                    view: "list",
                    id: "dev_forms_list",
                    autoConfig: true,
                    select: true,
                    template: "#collection#",
                    url: api_path,
                    save: api_path
                }
            ]
        },
        $oninit: function (view, scope) {
            var dev_forms_list = $$('dev_forms_list');
            var dev_forms_new = $$('dev_forms_new');

            dev_forms_list.attachEvent('onItemClick', function (id) {
                if (dev_forms_list.isSelected(id)) return;
                dev_forms.removeAllChilds(dev_forms_new);
                var item = dev_forms_list.getItem(id);
                var keys = dev_forms.extractIds(item);
                _.each(keys, function (kid) {
                    dev_forms_new.addView(dev_forms.new_field(dev_forms_new, kid), 1);
                })
            })
        }
    };
});