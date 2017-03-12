define([
    "promise!models/authen",
    "promise!models/helpers",
    "models/advert_type",
], function (token, helpers, advert_type_model) {
    var advert_list_vast_select = [];
    var advert_list_banner_select = [];
    var id = Random.id();
    var advert_form = {
        id: "entry_advert",
        rows: [
            {cols: [
                {},
                {view: 'button', label: 'Add Banner', id: 'advert_banner_add', width: 120,  css: "button_primary button_raised"},
                {view: 'button', label: 'Add VAST', id: 'advert_vast_add', width: 120,  css: "button_primary button_raised"}
            ]},
            {}
        ]
    };

    var layout = advert_form;

    return {
        $ui: layout,
        $oninit: function (view, scope) {
            helpers.dataToOptions("adverts", "label").then(function (val) {
                var val1 = _.filter(val, function(o){ return o.type == 'banner'});
                advert_list_banner_select = val1;
                var val2 = _.filter(val, function(o){ return o.type == 'vast'});
                advert_list_vast_select = val2;
            })
            $$('advert_banner_add').attachEvent('onItemClick', function () {
                var childs = $$("entry_advert").getChildViews();
                var pos = childs.length - 2;
                if (pos < 0) pos = 0;
                var id = Random.id();
                $$('entry_advert').addView(
                    advert_type_model.advert_banner_element( $$('entry_advert'), id, advert_list_banner_select ),pos
                );
                if(advert_list_banner_select.length <= 0) {
                    var advert_list_e = $$("advert_list_" + id);
                    helpers.dataToOptions("adverts", "label").then(function (val) {
                        var val1 = _.filter(val, function(o){ return o.type == 'banner'});
                        advert_list_banner_select = val1;
                        var val2 = _.filter(val, function(o){ return o.type == 'vast'});
                        advert_list_vast_select = val2;
                        advert_list_e.define("options", val1);
                        advert_list_e.refresh();
                    })
                }
            })
            $$('advert_vast_add').attachEvent('onItemClick', function () {
                var childs = $$("entry_advert").getChildViews();
                var pos = childs.length - 2;
                if (pos < 0) pos = 0;
                var id = Random.id();
                $$('entry_advert').addView(
                    advert_type_model.advert_vast_element( $$('entry_advert'), id, advert_list_vast_select ),pos
                );
                if(advert_list_vast_select.length <= 0) {
                    var advert_list_e = $$("advert_list_" + id);
                    helpers.dataToOptions("adverts", "label").then(function (val) {
                        var val1 = _.filter(val, function(o){ return o.type == 'banner'});
                        advert_list_banner_select = val1;
                        var val2 = _.filter(val, function(o){ return o.type == 'vast'});
                        advert_list_vast_select = val2;
                        advert_list_e.define("options", val2);
                        advert_list_e.refresh();
                    })
                }
            })
        }
    };
});
