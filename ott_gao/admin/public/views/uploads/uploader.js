/**
 * Created by baysao on 04/01/2016.
 */
define(["promise!models/authen"], function(token){
    var uploader = {
        id: "uploads_uploader",
        view: "uploader",
        upload: "/upload",
        //accept:"image/png, image/gif, image/jpg",
        autosend: false,
        link: "uploads_list",

        on: {
            onBeforeFileAdd: function (item) {
                //console.log('on before file add');
                //console.log(item);
                //var type = item.type.toLowerCase();
                //if (type != "jpg" && type != "png") {
                //    webix.message("Only PNG or JPG images are supported");
                //    return false;
                //}
            },
            onFileUpload: function (item) {
                //var flavor = item.context.flavor;
                //console.log(item);
                //var obj =
                //{
                //    file_name: item.name,
                //    file_size: item.size,
                //    file_sizetext: item.sizetext,
                //    file_type: item.type,
                //    file_lastModified: item.file.lastModified,
                //    file_lastModifiedDate: item.file.lastModifiedDate,
                //    file_url: item.files && item.files.length > 0 && item.files[0].url,
                //    file_id: item.id,
                //    file_flavor: flavor,
                //    webix_operation: 'insert',
                //    ownerId: Meteor.userId()
                //}
                //console.log(obj);
                //webix.ajax().post("/api/entries?access_token=" + encodeURIComponent(token),
                //    obj, function (text, res, xhr) {
                //        var res_json = res.json();
                //        console.log(res_json);
                //    })
            },
            onFileUploadError: function (item) {
                webix.alert("Error during file upload");
            }
        },
        apiOnly: true
    }
    return {
        $ui: uploader
    }
})