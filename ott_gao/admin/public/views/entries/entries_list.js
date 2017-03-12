/**
 * Created by baysao on 04/01/2016.
 */
define(["app", "promise!models/authen"], function(app, token){
    var item_type = "entries";
    var api_path = "/api/" + item_type + "?access_token=" + encodeURIComponent(token);

    var mylist = {
        id: "entries_list",
        scroll:true,
        view: "datatable", select: true,
        scheme: {
            $change: function(obj){
                "use strict";
                obj.$height = 100;
            }
        },
        columns: [
            {id: 'thumbnail', template: function(obj){ obj.thumbnail = obj.thumbnail || "http://dp.gao.easyvideo.vn/storage/content/img/no-image.png" ; var url = /^http/.test(obj.thumbnail) ? obj.thumbnail: 'http://st.gao.easyvideo.vn' + obj.thumbnail; return "<div style='height:95px;width:95px;overflow: hidden;'><img width='100%' height='auto' src=" + url + " /></div>" }},
            {id: "name", header: "Name", fillspace: 1},
            {id: "sid", header: "ID", template: "<a href='http://dp.gao.easyvideo.vn/v/p/#sid#' target='_blank'>#sid#</a>", width: 150},
            {id: "source_type", header: "Source Type", width: 200},
            //{id: "status", header: "Status", width: 150},
            //{id: "type", header: "Type", width: 150},
            //{
            //    id: "progress", header: "Progress", template: function (f, type) {
            //    var html = "<div class='status'>";
            //    html += "<div class='progress " + f.status + "' style='width:" + (f.status == 'transfer' || f.status == "server" ? f.percent + "%" : "0px") + "'></div>";
            //    html += "<div class='message " + f.status + "'>" + type.status(f) + "</div>";
            //    html += "</div>";
            //    return html;
            //}
            //},

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
                            $$("entries_list").remove(id);
                        }
                    }
                });
            },
            'fa-edit': function (e, id, node) {
                //console.log(id);
                //var item = this.getItem(id);
                app.show("/app/entry:id=" + id);
                //console.log(item);
            }
        }
    }
    return {
        $ui: mylist
    }
})
