define([], function(){
    var defer = webix.promise.defer();
    Meteor.autorun(function(){
        Meteor.call('currentAccessToken',
            function(err, token) {
                if(err) {
                    defer.reject(err);
                }else {
                    //console.log("token:" + token);
                    defer.resolve(token);
                }
            });
    });
    return defer;
})