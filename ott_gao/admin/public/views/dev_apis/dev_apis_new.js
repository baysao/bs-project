define(["models/dev_apis", "promise!models/helpers"], function (dev_apis, helpers) {
    var layout = {
        id: "dev_apis_new",

        rows: [
            {view: 'text', label: "Name", name: "name"},
            {},
            {view: 'text', label: "Url", id:"dev_apis_url", readonly:true},
            {
                cols: [
                    {
                        view: 'button',
                        id: "dfn_add_field",
                        css: "button_primary button_raised",
                        label: "Add",
                        inputWidth: 100
                    },
                ]
            }
        ]
    };

    return {
        $ui: layout,
        $oninit: function () {
            var dev_apis_new = $$('dev_apis_new');
            var dev_apis_add_field = $$('dfn_add_field');
            dev_apis_add_field.attachEvent('onItemClick', function () {
                helpers.getAsync("dev_filters", {})
                    .then(function (items) {
                        console.log(items);
                        var filters = _.map(items, function (filter) {
                            return {id: filter.id, value: filter.name}
                        })
                        console.log(filters);
                        var item = items[0];
                        var field = dev_apis.new_field(dev_apis_new, filters, Random.id(), item);
                        console.log(field);
                        //dev_apis_new.addView(field, 1);
                        dev_apis.addChild(dev_apis_new, field, -2);
                    })
            })
        }
    };


});