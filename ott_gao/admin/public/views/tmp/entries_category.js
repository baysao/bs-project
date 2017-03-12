define(["app", "promise!models/authen"], function (app, token) {
    var params;
    var layout = {
        type: "material",
        rows: [
            {view: "text", id: "flavor_name", name: "name", label: "Name"},
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