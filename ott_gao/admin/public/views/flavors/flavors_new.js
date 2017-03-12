define(["promise!models/authen", "views/flavors/flavors_standard_list"],
    function (token, stand_list) {
        return {
            $ui: {
                view: "window", modal: true, id: "flavor_win", position: "center",
                head: {
                    view: "toolbar", cols: [
                        {view: "label", label: "Add flavor"},
                        {
                            view: "button", label: "Save", width: 100, align: "right",
                            click: function () {
                                var flavor_ids = [];
                                $$("stand_list").data.each(function (obj) {
                                    if (obj.select) {
                                        flavor_ids.push(obj.id);
                                    }
                                })
                                var flavor_name = $$("flavor_name").getValue();
                                if (!flavor_name) {
                                    webix.message({type: "error", text: "Please fill flavor name"});
                                    return;
                                }
                                var flavor_data = {
                                    name: flavor_name,
                                    ids: flavor_ids,
                                }
                                console.log(flavor_data);
                                $$("publisher_flavors_list").add(flavor_data);

                            }
                        },
                        {view: "button", label: "Close", width: 100, align: "right", click: "$$('flavor_win').hide();"}
                    ]
                },
                body: {
                    margin: 10,
                    width: 900,
                    height: 300,
                    rows: [
                        {view: "text", id: "flavor_name", name: "name", label: "Name"},
                        stand_list,
                        {
                            view: "toolbar",
                            paddingX: 5,
                            paddingY: 5,
                            height: 40,
                            cols: [{
                                view: "pager", id: "stand_list_pager",
                                template: "{common.pages()}",
                                autosize: true,
                                height: 35,
                                group: 5
                            }

                            ]
                        }
                    ]

                }
            },
        }
    });