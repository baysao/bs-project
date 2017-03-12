define([
    "promise!models/authen",
    "models/helpers",
    "models/dev_apis"], function (token, helpers, dev_apis) {
    var item_type = "dev_apis";
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
                        {view: "label", label: "Find APIs:"},
                        {view: "search", placeholder: "Type here..."}
                    ]
                },
                {
                    view: "list",
                    id: "dev_apis_list",
                    autoConfig: true,
                    select: true,
                    template: "#name#",
                    url: api_path,
                    save: api_path
                }
            ]
        },
        $oninit: function (view, scope) {
            var dev_apis_list = $$('dev_apis_list');
            var dev_apis_new = $$('dev_apis_new');

            dev_apis_list.attachEvent('onItemClick', function (id) {
                if (dev_apis_list.isSelected(id)) return;
                if (id) {
                    var public_settings = Meteor.settings.public;
                    var dev_apis_url_prefix = public_settings.api_host + public_settings.api_custom_prefix + public_settings.api_version + public_settings.api_dev_apis;
                    $$('dev_apis_url').setValue(dev_apis_url_prefix + '/' +  id);
                }
                dev_apis.removeAllChilds(dev_apis_new);

                helpers.getAsync("dev_filters", {})
                    .then(function (filters) {
                        var filters_options = _.map(filters, function (filter) {
                            return {id: filter.id, value: filter.name}
                        });
                        var item = dev_apis_list.getItem(id);
                        dev_apis.restore_fields(dev_apis_new, filters_options, item);
                        //var keys = dev_apis.extractIds(item);
                        //_.each(keys, function (kid) {
                        //    var field = dev_apis.new_field(dev_apis_new, filters_options, kid, item);
                        //    dev_apis_new.addView(field, 1);
                        //})
                    })

            })
        }
    };
});