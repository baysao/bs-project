define(["promise!models/authen"], function (token) {
    var item_type = "entries_flavors";
    var api_path = "/api/" + item_type + "?access_token=" + encodeURIComponent(token);
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
        url: api_path,
        on: {
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
        type:"material",
        //margin: 10,
        //width: 900,
        //height: 300,
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
    return {
        $ui: layout,
        $onurlchange:function(config, url, scope){
            console.log(config);
            //if (config.id && $$("data:table").exists(config.id))
            //	$$("data:table").select(config.id);
        }
    }

})