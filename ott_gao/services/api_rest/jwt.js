/**
 * Created by baysao on 14/01/2016.
 */
var jwt = require('jsonwebtoken');
function return401(res) {
    res.writeHead(401, "Access denied.");
    res.end();
}

function verifyToken(token, key, res, req, done) {
    jwt.verify(token, key, {noTimestamp: true}, function (err, payload) {
        if (err)
            return401(res);
        else {
            console.log(payload);
            done();
        }
    });
}

function decodeToken(token, req, res, done) {
    var decoded = jwt.decode(token);
    if (!decoded) {
        return401(res);
    } else {
        var key = decoded.key;
        if (!key)  return401(res);
        else
            verifyToken(token, key, req, res, done);
    }
}

function checkToken(req, res, next) {
    var query = req.query;

    var token = req.headers['x-gao-token'];
    if (!token) {
        token = query['gao_token'];
    }
    if (!token) {
        return401(res);
        return;
    }
    decodeToken(token, res, req, next);
}

module.exports = {
    checkToken: checkToken
}

