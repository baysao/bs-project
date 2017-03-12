define(["app", "promise!models/authen"], function (app, token) {
    var params;
    var stand_list = {
        id: "stand_list",
        view: "datatable", select: true,
        columns: [
            {id: "select", header: "#", template: "{common.checkbox()}", width: 50},
            {id: "name", header: "Name", fillspace: 1},
            {id: "desc", header: "Description", fillspace: 1},
            {id: "format", header: "Format", width: 100},
            {id: "codec", header: "Codec", width: 100},
            {id: "bitrate", header: "Bitrate", width: 100},
            {id: "dimension", header: "Dimension", width: 100},
        ],
        pager: "stand_list_pager",
        url: "/api/flavors?access_token=" + encodeURIComponent(token),
        on: {
            onAfterLoad: function () {
                if (params && params.id) {
                    webix.ajax().get("/api/publisher_flavors?id=" + params.id + "&access_token=" + encodeURIComponent(token),
                        function (text, res, xhr) {
                            var item = res.json();
                            if (item && item.name) {
                                $$("flavor_name").setValue(item.name);
                                //$$("title").parse({title: "Update", details: "flavor " + item.name});
                            }
                            if (item && item.ids) {
                                var ids = typeof item.ids == "object" ? item.ids : JSON.parse(item.ids);
                                $$("stand_list").data.each(function (obj) {
                                    //console.log(obj);
                                    if (_.indexOf(ids, obj.id) != -1) {
                                        obj.select = "1";
                                    } else {
                                        obj.select = "0";
                                    }
                                })
                            }
                            if (item) {
                                $$("stand_list").refresh();
                            }
                        })
                }


            },
            onItemClick: function (pos) {
                var row = this.getItem(pos.row);
                if (!row.select || row.select == "0")
                    row.select = "1";
                else
                    row.select = "0";
                this.refresh(pos.row);
            }
        }
    }
    var layout = {
        type: "material",
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
            },
            {

                view: "form",
                css: "highlighted_header header6",
                paddingX: 5,
                paddingY: 5,
                height: 40,

                cols: [
                    {
                        view: "button",
                        css: "button_primary button_raised",
                        type: "form",
                        icon: "plus",
                        label: "Save",
                        width: 90,
                        click: function () {
                            var flavor_ids = [];
                            $$("stand_list").data.each(function (obj) {
                                if (obj && obj.select == "1") {
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
                            if (params && params.id) {
                                flavor_data.id = params.id;
                                flavor_data.webix_operation = "update";
                            } else {
                                flavor_data.webix_operation = "insert";
                            }
                            webix.ajax().post("/api/publisher_flavors?access_token=" + encodeURIComponent(token), flavor_data,
                                function (text, res, xhr) {
                                    var res_json = res.json();
                                    if (res_json.status == "success") {
                                        webix.message("Update flavor successful");
                                        app.show("/app/flavors");
                                    } else {
                                        webix.message({type: "error", text: "Update flavor failed"});
                                    }
                                })

                        }
                    },
                    {},
                    {
                        view: "button",
                        css: "button_danger button_raised",
                        icon: "times",
                        label: "Cancel",
                        width: 90,
                        click: function () {
                            app.show("/app/flavors");
                        }
                    }
                ]
            }
        ]
    }
    return {
        $ui: layout,
        $onurlchange: function (config, url, scope) {
            params = config;
            $$("title").parse({title: "Encoding Profile", details: "encoding profiles"});
        }
    }

})