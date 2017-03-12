define(["models/orders"], function (orders) {
    var grid = {
        margin: 10,
        rows: [
            {
                id: "orderData",
                view: "datatable", select: true,
                columns: [
                    {id: "id", header: "#", width: 50},
                    {
                        id: "employee",
                        header: ["Employee", {content: "selectFilter"}],
                        sort: "string",
                        minWidth: 150,
                        fillspace: 1
                    },
                    {
                        id: "customer",
                        header: ["Customer", {content: "selectFilter"}],
                        sort: "string",
                        minWidth: 150,
                        fillspace: 1
                    },

                    {id: "status", header: "Status", sort: "string", width: 90},
                    {id: "fee", header: "Fee", width: 90, sort: "string", format: webix.i18n.priceFormat},
                    {id: "taxes", header: "Taxes", width: 90, sort: "string", format: webix.i18n.priceFormat},
                    {id: "total", header: "Total", width: 90, sort: "string", format: webix.i18n.priceFormat},
                    {id: "shipping_company", header: "Shipping Company", sort: "string"},
                    {id: "payment_method", header: "Payment method", width: 130, sort: "string"},
                    {id: "date", header: "Date", sort: "string", width: 100},
                    {
                        id: "trash",
                        header: "&nbsp;",
                        width: 45,
                        template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"
                    }
                ],
                "export": true,
                on: {
                    onAfterLoad: function () {
                        this.select(4);
                    }
                },
                pager: "pagerA",
                data: orders.getAll,
                onClick: {
                    webix_icon: function (e, id, node) {
                        webix.confirm({
                            text: "The order will be deleted.<br/> Are you sure?", ok: "Yes", cancel: "Cancel",
                            callback: function (res) {
                                if (res) {
                                    webix.$$("orderData").remove(id);
                                }
                            }
                        });
                    }
                }
            }
        ]

    };
    return grid;
})