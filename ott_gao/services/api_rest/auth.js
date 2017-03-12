/**
 * Created by baysao on 14/01/2016.
 */
var jwt = require('jsonwebtoken');

module.exports = function (options) {
    var plugin = 'auth_check';
    var seneca = this;

    function verifyToken(token, key, res, req, done) {
        jwt.verify(token, key, {noTimestamp: true}, function (err, payload) {
            if (err)
                done(null);
            else {
                done(null, payload);
            }
        });
    }

    function decodeToken(token, req, res, done) {
        var decoded = jwt.decode(token);
        if (!decoded) {
            done(null);
        } else {
            var key = decoded.key;
            if (!key)  done(null);
            else
                verifyToken(token, key, req, res, done);
        }
    }
    seneca.add({role: 'auth_check', cmd: 'validate'}, function (args, done) {
        var req = args.req;
        var res = args.res;
        var query = req.query;

        var token = req.headers['x-gao-token'];
        if(!token) {
            token = query['gao_token'];
        }
        if(!token) {
            done(null);
            return;
        }
        decodeToken(token, res, req, done);
    })
    return {name: plugin}
}

