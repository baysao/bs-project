define(["app", "promise!models/authen"], function (app, token) {
    var mylist = {
        id: "publisher_flavors_list",
        view: "datatable", select: true,
        columns: [
            {id: "name", header: "Name", fillspace: 1},
            {id:"edit", header:"&nbsp;", width:45, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-edit'></span>"},
            {id:"trash", header:"&nbsp;", width:45, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
        ],

        pager: "pagerA",
        url: "/api/publisher_flavors?access_token=" + encodeURIComponent(token),
        save: "/api/publisher_flavors?access_token=" + encodeURIComponent(token),
        onClick:{
            'fa-trash-o':function(e, id, node){
                webix.confirm({
                    text:"The flavor will be deleted.<br/> Are you sure ?", ok:"Yes", cancel:"Cancel",
                    callback:function(res){
                        if(res){
                            $$("publisher_flavors_list").remove(id);
                        }
                    }
                });
            },
            'fa-edit':function(e, id, node){
                app.show("/app/flavor:id=" + id);
            }
        }
    }
    return mylist;
})