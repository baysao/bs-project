///**
// * Created by baysao on 04/01/2016.
// */
//
//
//var validate_token = function (req, res, next) {
//    var tokenArr;
//    var token;
//    var userId;
//    var authToken = req.query.access_token;
//    if (authToken)
//        tokenArr = authToken.split('.');
//    if (!tokenArr) {
//        res.setHeader("Content-type", "application/json");
//        res.end(JSON.stringify({
//            status: 'error',
//            message: 'No permission'
//        }));
//        return;
//    }
//    if (tokenArr.length == 2) {
//        userId = tokenArr[0];
//        token = tokenArr[1];
//    }
//    var user = Meteor.users.findOne({
//        '_id': userId,
//        'services.resume.loginTokens.hashedToken': token
//    });
//    if (!user) {
//        res.setHeader("Content-type", "application/json");
//        res.end(JSON.stringify({
//            status: 'error',
//            message: 'No permission'
//        }));
//        return;
//    } else {
//        req.userId = userId;
//    }
//    next();
//}
//function cc_api(req, name, cb) {
//    var query = _.extend(_.omit(req.query, "access_token"),
//        {access_token: 'De3emahk4teigo3phoongeoch7daeXei4iraik3U'});
//    var api_url = 'https://api.qc.coccoc.com/v1/' + name + '?' + QueryString.stringify(query);
//    HTTP[req.method.toLowerCase()](api_url, {}, function (error, response) {
//        if (error) {
//            console.log(error);
//            cb(error);
//        } else {
//            console.log(response);
//            cb(null, response.data);
//        }
//    });
//}
//var bodyParser = Meteor.npmRequire('body-parser');
//JsonRoutes.middleWare.use(bodyParser.json());
//JsonRoutes.middleWare.use(bodyParser.urlencoded({extended: true}));
//JsonRoutes.Middleware.use(JsonRoutes.Middleware.parseBearerToken);
//function registerRoute(method, name) {
//    JsonRoutes.add(method, "/api/v1/" + name, function (req, res, next) {
//        validate_token(req, res, function () {
//            cc_api(req, name, function (err, ress) {
//                if (err) {
//                    res.setHeader("Content-type", "application/json");
//                    res.end(JSON.stringify({
//                        status: 'error',
//                        message: 'No permission'
//                    }));
//                } else {
//                    res.setHeader("Content-type", "application/json");
//                    res.end(JSON.stringify(ress.data));
//                }
//            })
//
//        });
//    })
//}
//
//registerRoute("get", "campaigns");
//registerRoute("get", "adverts");
