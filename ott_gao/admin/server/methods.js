///**
// * Created by baysao on 27/01/2016.
// */
//Meteor.methods({
//    "currentAccessToken": function(){
//        var userId = this.userId;
//        if(!userId)
//            return;
//        var user = Meteor.users.findOne(this.userId, {fields: {'services.resume.loginTokens': 1}});
//        return user && user.services && user.services.resume
//            && user.services.resume.loginTokens && !_.isEmpty(user.services.resume.loginTokens)
//            && userId + '.' + user.services.resume.loginTokens[0].hashedToken;
//    }
//})