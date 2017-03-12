/**
 * Created by baysao on 14/01/2016.
 */
function auth_validate(context, req, res, next) {
    context.act({role: 'auth_check', cmd: 'validate', req: req, res: res},
        function (err, payload) {
            if (!payload) {
                res.writeHead(401, "Access denied.");
                res.end();
            } else {
                console.log(payload);
                next();
            }
        });
}
module.exports = function (context) {
    return {
        auth_validate: function(req, res, next){
            return auth_validate(context, req, res, next);
        }
    }
}