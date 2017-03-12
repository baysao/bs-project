define([
    "promise!models/authen",
    "models/dev_filters" ], function (token, dev_filters) {
    var item_type = "dev_filters";
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
                        {view: "label", label: "Find Filter:"},
                        {view: "search", placeholder: "Type here..."}
                    ]
                },
                {
                    view: "list",
                    id: "dev_filters_list",
                    autoConfig: true,
                    select: true,
                    template: "#name#",
                    url: api_path,
                    save: api_path
                }
            ]
        },
        $oninit: function (view, scope) {
            var dev_filters_list = $$('dev_filters_list');
            var dev_filters_new = $$('dev_filters_new');

            dev_filters_list.attachEvent('onItemClick', function (id) {
                if (dev_filters_list.isSelected(id)) return;
                dev_filters.removeAllChilds(dev_filters_new);
                var item = dev_filters_list.getItem(id);
                dev_filters.restore_fields(dev_filters_new, item);
                //var keys = dev_filters.extractIds(item);
                //console.log(keys);
                //var childViews = dev_filters_new.getChildViews();
                //_.each(keys, function (kid) {
                //   v
                //})
            })
        }
    };
});