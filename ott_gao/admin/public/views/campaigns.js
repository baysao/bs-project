define([
    "promise!models/piwik",
    "promise!models/authen",
    "views/campaigns/campaigns_list",
    "views/campaigns/campaigns_new",
    "views/campaigns/campaigns_adverts",
    //"views/campaigns/campaigns_perf",
], function (piwik, token, campaigns_list, campaigns_new, campaigns_adverts
             //campaigns_perf
) {
    //"promise!models/authen",
    var api_adverts_path = "/api/v2/adverts?access_token=" + encodeURIComponent(token);
    var api_campaigns_path = "/api/v2/campaigns?access_token=" + encodeURIComponent(token);
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
            //{
            //    view: "button",
            //    id: "button_save_new",
            //    css: "button2", icon: "angle-left",
            //    label: "Save As New", width: 120
            //},

            {},
            //{
            //    view: "button",
            //    id: "button_reset",
            //    css: "button2", icon: "angle-left",
            //    label: "Reset", width: 120
            //},
            //{
            //    view: "button", id: "button_delete",
            //    css: "button_danger button0", icon: "times",
            //    label: "Delete", width: 120
            //}
        ]
    }
    var layout = {
        type: "material",
        cols: [
            campaigns_list,
            {
                gravity: 4,
                type: "line",
                rows: [
                    {
                        rows: [{
                            view: "tabbar", id: "campaigns_tabbar", multiview: true, optionWidth: 100,
                            options: [
                                {id: "campaigns_new", value: "Main"},
                                {id: "campaigns_adverts", value: "Adverts"},

                            ]
                        }]
                    },
                    {
                        cells: [
                            campaigns_new,
                            campaigns_adverts,
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

            var campaigns_new_ui = $$('campaigns_new');
            var campaigns_list_ui = $$('campaigns_list');
            campaigns_new_ui.bind(campaigns_list_ui);

            // ontabclick
            $$('adverts_tabbar').attachEvent('onBeforeTabClick', function (id) {
                console.log('id:' + id);
                switch (id) {
                    case 'adverts_perf':
                        var values = campaigns_new_ui.getValues();
                        if(!values.idSite) {
                            webix.message("Please set idSite");
                            return;
                        }
                        piwik.call('getKeyworkContentFromNameId', _.pick(values, 'idSite'), function (values) {
                            //console.log(values);
                            var advert_values = $$('adverts_new').getValues();
                            console.log(advert_values);
                            var advert_values_url = advert_values.url;
                            console.log(advert_values_url);
                            var advert_values_arr = advert_values_url.match(/utm_source=([^\&]+)&utm_medium=([^\&]+)&utm_campaign=([^\&]+)/);
                            console.log(advert_values_arr);
                            var advert_tracking_name = decodeURIComponent(advert_values_arr[1] + ' - ' + advert_values_arr[2]).toLowerCase();
                            console.log(advert_tracking_name);
                            var trim = function(s){
                                    return s.toLowerCase().replace(/^\s+|\s+$/g, '');
                            }
                            console.log(values);
                            var advert_tracking_item = _.find(values, function(e){
                                console.log(e);
                                return trim(e.label) == trim(advert_tracking_name);
                            });

                            console.log(advert_tracking_item);
                            //var nvalues = _.map(values, function (e) {
                                //var goals = e && e.goals && e.goals["idgoal=ecommerceOrder"];
                                //
                                //return {
                                //    label: e.label,
                                //    visits: e.nb_visits,
                                //    orders: goals && goals.nb_conversions,
                                //    cr: goals && ((goals.nb_conversions / e.nb_visits) * 100).toFixed(2),
                                //    revenue: goals && goals.revenue,
                                //    pev: goals && (goals.revenue / e.nb_visits).toFixed(2),
                                //}
                            //})

                            //console.log(nvalues);
                            //$$('campaigns_perf_table').parse(nvalues);
                        })
                        break;
                }
            })
            // adverts
            var adverts_list = $$('adverts_list');
            var adverts_new = $$('adverts_new');
            $$('campaigns_list').attachEvent("onItemClick", function (id, e, node) {
                if (this.isSelected(id)) return;
                var item = this.getItem(id);
                //webix.ajax().get(api_campaigns_path + '&cc_id=' + item.cc_id,
                //    function (text, data, xhr) {
                //        campaigns_new_ui.setValues(data.json(), true);
                //        console.log(campaigns_new_ui.getValues());
                //    });
                console.log(item);
                adverts_list.clearAll();
                adverts_list.load(api_adverts_path + '&campaign_id=' + item.cc_id + "&aid=" + item.aid);
                adverts_new.bind(adverts_list);
                // webix.ajax().get(api_adverts_path + '&campaign_id=' + item.cc_id, function(text, res, xhr){
                //     var advData = res.json();
                //     adverts_list.clearAll();
                //     adverts_list.parse(advData);
                //     adverts_list.attachEvent('onAfterLoad', function () {
                //         adverts_new.bind(adverts_list);
                //     })
                // })

            })

            // internal events
            //$$("button_reset").attachEvent("onItemClick", function () {
            //    campaigns_new_ui.clear();
            //})
            //$$("button_delete").attachEvent("onItemClick", function () {
            //    if (campaigns_list_ui.getSelectedId()) {
            //        campaigns_list_ui.remove(campaigns_list_ui.getSelectedId());
            //    } else {
            //        webix.message("No item to remove");
            //    }
            //})
            $$("button_save").attachEvent("onItemClick", function () {
                var campaigns_new_form_values = campaigns_new_ui.getValues();
                console.log(campaigns_new_form_values);
                if (!campaigns_new_form_values.ownerId) {
                    campaigns_new_form_values.ownerId = Meteor.userId();
                    campaigns_new_ui.setValues(campaigns_new_form_values);
                }
                var dataPost =
                    _.pick(campaigns_new_form_values, "ownerId", "idSite", "cc_id");
                if (campaigns_new_form_values.id.length == 24) {
                    dataPost.id = campaigns_new_form_values.id;
                    dataPost.webix_operation = 'replace';
                    //campaigns_new_ui.save();
                } else {
                    //campaigns_list_ui.add(_.omit(campaigns_new_form_values, "id"), 0);

                    dataPost.webix_operation = 'insert';
                }
                //console.log(dataPost);
                webix.ajax().post(api_campaigns_path, dataPost,
                    function (text, data, xhr) {
                        var rdata = data.json();
                        campaigns_new_ui.setValues({id: rdata.newid}, true);
                        //campaigns_list_ui.load(api_campaigns_path);
                        webix.ajax().get(api_campaigns_path, function (text, ddata, xhr) {
                            campaigns_list_ui.parse(ddata.json);
                        });
                    });
                //if (campaigns_new_form_values.id)
                //    campaigns_new_ui.save();
                //else
                //    campaigns_list_ui.add(_.omit(campaigns_new_form_values, "id"), 0);
            })
            //$$("button_save_new").attachEvent("onItemClick", function () {
            //    var campaigns_new_form_values = campaigns_new_ui.getValues();
            //    if (!campaigns_new_form_values.ownerId) {
            //        campaigns_new_form_values.ownerId = Meteor.userId();
            //        campaigns_new_ui.setValues(campaigns_new_form_values);
            //    }
            //    console.log(campaigns_new_form_values);
            //    campaigns_list_ui.add(_.omit(campaigns_new_form_values, "id"), 0);
            //})
        }

    }
});
