/**
 * Created by baysao on 08/12/2015.
 */
define([], function () {
    return {
        id: "uploadAPI",
        view: "uploader",
        upload: "/upload",
        on: {
            onBeforeFileAdd: function (item) {
                var type = item.type.toLowerCase();
                if (type != "jpg" && type != "png") {
                    webix.message("Only PNG or JPG images are supported");
                    return false;
                }
            },
            onFileUpload: function (item) {
                var id = item.context.rowid;
                var row = $$("people").getItem(id);

                row.photo = item.sname;
                $$("people").updateItem(id, row);
            },
            onFileUploadError: function (item) {
                webix.alert("Error during file upload");
            }
        },
        apiOnly: true
    }
})