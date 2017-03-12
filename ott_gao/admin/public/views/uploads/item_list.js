/**
 * Created by baysao on 04/01/2016.
 */
define([], function () {
    var mylist = {
        id: "uploads_list",
        view: "datatable", select: true,
        columns: [
            {id: "name", header: "Name", fillspace: 1},
            {id: "sizetext", header: "Size", width: 150},
            {id: "status", header: "Status", width: 150},
            {id: "type", header: "Type", width: 150},
            {
                id: "progress", header: "Progress", template: function (f, type) {
                var html = "<div class='status'>";
                html += "<div class='progress " + f.status + "' style='width:" + (f.status == 'transfer' || f.status == "server" ? f.percent + "%" : "0px") + "'></div>";
                html += "<div class='message " + f.status + "'>" + type.status(f) + "</div>";
                html += "</div>";
                return html;
            }
            },

            {
                id: "upload",
                header: "&nbsp;",
                width: 45,
                template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-upload'></span>"
            },
            {
                id: "trash",
                header: "&nbsp;",
                width: 45,
                template: "<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"
            }
        ],
        type: {
            status: function (f) {
                var messages = {
                    server: "Done",
                    error: "Error",
                    client: "Ready",
                    transfer: f.percent + "%"
                };
                return messages[f.status]

            }
        },
        pager: "pagerA",
        onClick: {
            'fa-trash-o': function (e, id, node) {
                webix.confirm({
                    text: "The flavor will be deleted.<br/> Are you sure ?", ok: "Yes", cancel: "Cancel",
                    callback: function (res) {
                        if (res) {
                            $$("uploads_list").remove(id);
                        }
                    }
                });
            },
            'fa-upload': function (e, id, node) {
                var item = this.getItem(id);
                console.log(item);
                $$("uploads_uploader").send(function (response) {
                    var file = response.files[0];
                    if (file && !file.error) {

                        //console.log(item);
                        //console.log(file);
                        webix.message("Upload successful");
                    }
                    else
                        webix.message({type: "error", text: file.error});
                }, {file_id:id, ownerId: Meteor.userId(), flavor: item.context.flavor, orig_name: item.name});
            }
        }
    };
    return mylist;
})