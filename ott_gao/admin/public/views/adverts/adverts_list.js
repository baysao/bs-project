/**
 * Created by baysao on 04/01/2016.
 */
define(["app", "promise!models/authen"], function(app, token){
    var item_type = "adverts";
    var api_path = "/api/" + item_type + "?access_token=" + encodeURIComponent(token);

    var mylist = {
        id: "adverts_list",
        view: "datatable", select: true,
        columns: [
            {id: "label", header: "Label", fillspace: 1},
            {id: "categories", header: "Category", fillspace: 1},

            {
                id: "edit",
                header: "&nbsp;",
                width: 45,
                template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-edit'></span>"
            },
            {
                id: "trash",
                header: "&nbsp;",
                width: 45,
                template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"
            }
        ],

        pager: "pagerA",
        url: api_path,
        save: api_path,
        onClick: {
            'fa-trash-o': function (e, id, node) {
                webix.confirm({
                    text: "The flavor will be deleted.<br/> Are you sure ?", ok: "Yes", cancel: "Cancel",
                    callback: function (res) {
                        if (res) {
                            $$("adverts_list").remove(id);
                        }
                    }
                });
            },
            'fa-edit': function (e, id, node) {
                app.show("/app/advert:id=" + id);
            }
        }
    }
    return {
        $ui: mylist
    }
})