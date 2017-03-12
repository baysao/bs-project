define(["app",
    "promise!models/authen",
    "promise!models/helpers"
], function (app, token, helpers) {
    var collection_name = "flavors_default";
    var api_path = "/api/" + collection_name + "?access_token=" + encodeURIComponent(token);

    var params;
    var stand_list = {
        id: "stand_list",
        view: "datatable", select: true,
        columns: [
            {id: "select", header: "#", template: "{common.checkbox()}", width: 50},
            {id: "name", header: "Name", fillspace: 1},
            {id: "description", header: "Description", fillspace: 1},
            {id: "format", header: "Format", width: 100},
            {id: "videoCodec", header: "Video Codec", width: 100},
            {id: "videoBitrate", header: "Video Bitrate", width: 100},
            {id: "width", header: "Width", width: 100},
            {id: "height", header: "Height", width: 100},
        ],
        pager: "stand_list_pager",
        url: api_path
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
                        id:"button_save",
                        css: "button_primary button_raised",
                        type: "form",
                        icon: "plus",
                        label: "Save",
                        width: 90,
                    },
                    {},
                    {
                        view: "button",
                        id:"button_cancel",
                        css: "button_danger button_raised",
                        icon: "times",
                        label: "Cancel",
                        width: 90,
                    }
                ]
            }
        ]
    }
    return {
        $ui: layout,
        $oninit: function(view, scope){
            console.log('init');
            $$('stand_list').attachEvent("onItemClick", function (pos, e , node) {
                console.log('onItemClick');
                    var row = this.getItem(pos.row);
                    if (!row.select || row.select == "0")
                        row.select = "1";
                    else
                        row.select = "0";
                    this.refresh(pos.row);
            });

            $$("button_cancel").attachEvent("onItemClick", function(){
                app.show("/app/flavors");
            });
            $$("button_save").attachEvent("onItemClick", function(){
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
                    ownerId: Meteor.userId()
                }
                if (params && params.id) {
                    flavor_data.id = params.id;
                    flavor_data.webix_operation = "update";
                } else {
                    flavor_data.webix_operation = "insert";
                }
                helpers.getAsync("entries_flavors", {method: "post", data: flavor_data}).then(function(){
                    app.show("/app/flavors");
                })

            })
        },
        $onurlchange: function (config, url, scope) {
            console.log('onchange');
            params = config;
            $$('stand_list').attachEvent("onAfterLoad", function () {
                if (params && params.id) {
                    helpers.getAsync("entries_flavors", {id: params.id}).then(function(item){
                        if (item && item.name) {
                            $$("flavor_name").setValue(item.name);
                        }
                        if (item && item.ids) {
                            var ids = typeof item.ids == "object" ? item.ids : JSON.parse(item.ids);
                            $$("stand_list").data.each(function (obj) {
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
            });
            $$("title").parse({title: "Encoding Profile", details: "encoding profiles"});
        }
    }

})