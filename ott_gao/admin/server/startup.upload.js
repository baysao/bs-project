var Path = Npm.require('path');
//var ImageMagick = Npm.require('imagemagick');
Meteor.startup(function () {
    Meteor.settings.media_dir = Meteor.settings.media_dir || ".";
    Meteor.settings.static_host = Meteor.settings.static_host || "http://localhost:3000"
    UploadServer.init({
        tmpDir: Path.join(Meteor.settings.media_dir, "tmp"),
        uploadDir: Meteor.settings.media_dir,
        checkCreateDirectories: true,
        getDirectory: function (fileInfo, formData) {
            var dirpath = "";
            if (/^video/.test(fileInfo.type)) {
                dirpath = "vraw";
            } else if (/^image/.test(fileInfo.type)) {
                dirpath = "thumb";
            }
            fileInfo.filename = Random.id();
            var re = fileInfo.filename.match(/(.{2})(.{3})(.+)/);
            return Path.join(dirpath, re[1], re[2], re[3]);
        },
        getFileName: function (fileInfo, formData) {
            var ext = Path.extname(fileInfo.path);
            return fileInfo.filename + ext;
        },
        finished: function (fileInfo, formData) {
            if (!/^\//.test(fileInfo.path)) {
                fileInfo.path = '/' + fileInfo.path;
            }
            //if(fileInfo.type == 'image/png') {
            //    var realdir = Meteor.settings.media_dir;
            //    var realpath = Path.join(realdir, 'thumb', fileInfo.path);
            //    var outpath = Path.join(realdir, 'thumb', fileInfo.subDirectory,  fileInfo.filename + '.jpg');
                //console.log(realpath);
                //console.log(outpath);
                //Imagemagick.convert([realpath, outpath]);
            //}
            //fileInfo.url = Meteor.settings.static_host + fileInfo.path;
            fileInfo = _.extend(fileInfo, formData);
            console.log('fileInfo');
            console.log(fileInfo);
            if(/^video/.test(fileInfo.type)) {
                QueueSeneca.act({role: 'content_source', cmd: 'after_upload', data: fileInfo},
                    function (err, res) {
                        if (err) return console.err(err);
                        console.log(res.status);
                    })
            }
        }
    })
})
