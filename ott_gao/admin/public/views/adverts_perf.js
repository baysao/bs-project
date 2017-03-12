define([
    "promise!models/authen"
], function (token) {
    var api_adverts_path = "/api/v2/adverts?access_token=" + encodeURIComponent(token);
    var grid = {
        margin: 10,
        rows: [
            {
                id: "adverts_perf_table",
                view: "datatable",
                select:"row",
                resizeColumn:true,
                resizeRow:true,
                url: api_adverts_path,
                columns: [
                    {id: "tag", header: "Tag", fillspace: true},
                    {id: "im_visits", header: "Visits", width: 100},
                    {id: "im_orders", header: "Orders", width: 100},
                    {id: "im_revenue", header: "Revenue", width: 100},
                    {id: "im_cr", header: "CR", width: 100},
                    {id: "im_cr_warn", header: "CR Warn", width: 100},
                    {id: "im_cr_crit", header: "CR Crit", width: 100},
                    {id: "im_pev", header: "PEV", width: 100},
                    {id: "im_pev_warn", header: "PEV Warn", width: 100},
                    {id: "im_pev_crit", header: "PEV Crit", width: 100},
                ],
                pager: "pagerA",
            }
        ]

    };

    var layout = {
        type: "material",
        id: "adverts_perf",
        rows: [
            {
                rows: [
                    grid,
                    {
                        view: "toolbar",
                        paddingX: 5,
                        paddingY: 5,
                        height: 40,
                        cols: [
                            {
                                view: "pager", id: "pagerA",
                                template: "{common.pages()}",
                                autosize: true,
                                height: 35,
                                group: 5
                            },
                        ]
                    },
                    {

                        view: "form",
                        id: "limit_form",
                        elements: [
                            {
                                cols: [
                                    //{view: "text", name: 'id'},
                                    {view: "counter", name: 'im_cr_warn', label: "CR Warn", step: 0.01},
                                    {view: "counter", name: 'im_cr_crit',label: "CR Crit", step: 0.01},
                                    {},
                                    {view: "counter", name: 'im_pev_warn',label: "PEV Warn", step: 10},
                                    {view: "counter", name: 'im_pev_crit',label: "PEV Crit", step: 10},
                                    //{view: "button", type: "form", label: "Save", width:90, , css: "button_primary button_raised"},
                                    {view: "icon", icon:"save", id:"limit_form_save"},
                                    {view: "icon", icon:"pause"},
                                    {view: "icon", icon:"stop"}
                                ]

                            }
                        ]
                    }
                ]
            }


        ]

    };

    return {
        $ui: layout,
        $oninit: function (view, scope) {
            setInterval(function(){
                $$('adverts_perf_table').load(api_adverts_path);
            }, 10000);
            $$('limit_form_save').attachEvent("onItemClick", function (){
                var currid = $$('adverts_perf_table').getSelectedId();
                var vals = this.getFormView().getValues();
                webix.ajax().post(api_adverts_path, _.extend(vals, {
                    webix_operation: 'update'
                }), function(text, res){
                    var dd = res.json();
                    $$('adverts_perf_table').updateItem(vals.id, vals);
                })
            })
            $$('adverts_perf_table').attachEvent("onBeforeSelect", function (data, preserve){
                var item = this.getItem(data.row);
                $$('limit_form').parse(item);
            });
        }
    };

});