define(["models/authen"], function (authen) {
    return authen.then(function (token) {
        //return webix.ajax().headers({"Authorization": "Bearer " + token}).get("/api/categories").then(function(res){
        return webix.ajax().get("/api/categories?access_token=" + encodeURIComponent(token))
            .then(function(res){
            return res ? res.json(): [];
        })
    })
});