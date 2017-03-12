define(["models/authen"], function (authen) {
    return authen.then(function(token){
        return webix.ajax().get("/api/flavors?access_token=" + encodeURIComponent(token)).then(function(res){
            return res ? res.json(): [];
        })
    })

//
//var data =[
//	{"name":"Mobile(3GP)","desc":"Nokia/Blackberry","format":"3gp","codec":"mpeg4","bitrate":364,"dimension":"320 x [auto]"},
//	{"name":"Basic/Small - WEB/MBL (H264/400)","desc":"Basic/Small - WEB/MBL (H264/400)","format":"mp4","codec":"h264b","bitrate":464,"dimension":"640 x [auto]"},
//	{"name":"Basic/Small - WEB/MBL (H264/600)","desc":"Basic/Small - WEB/MBL (H264/600)","format":"mp4","codec":"h264b","bitrate":664,"dimension":"640 x [auto]"},
//	{"name":"SD/Small - WEB/MBL (H264/900)","desc":"SD/Small - WEB/MBL (H264/900)","format":"mp4","codec":"h264m","bitrate":964,"dimension":"640 x [auto]"},
//	{"name":"SD/Large - WEB/MBL (H264/1500)","desc":"SD/Large - WEB/MBL (H264/1500)","format":"mp4","codec":"h264m","bitrate":1628,"dimension":"[auto] x 720"},
//	{"name":"HD/720 - WEB (H264/2500)","desc":"HD/720 - WEB (H264/2500)","format":"mp4","codec":"h264h","bitrate":2628,"dimension":"[auto] x 720"},
//	{"name":"HD/1080 - WEB (H264/4000)","desc":"HD/1080 - WEB (H264/4000)","format":"mp4","codec":"h264h","bitrate":4628,"dimension":"[auto] x 1080"},
//	{"name":"WebM","desc":"WebM","format":"webm","codec":"vp8","bitrate":846,"dimension":"[auto] x 360"}
//];
//	Meteor.subscribe("flavors");
//    var aa = authen.then(function (token) {
//        console.log(token);
    //return webix.ajax().headers({"Authorization": "Bearer " + token}).get("/api/flavors");
    //})
    //data: webix.proxy("meteor", Flavors.find())
    //return {
    //    data:
    //}
});