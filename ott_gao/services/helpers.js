/**
 * Created by baysao on 15/01/2016.
 */
var conf = require('nconf');
conf.file('./config.json');

var mongoskin = require('mongoskin'),
    db = mongoskin.db((process.env.MONGOLAB_URI || 'mongodb://localhost:27017/gao'), {safe: true});
module.exports = {
    conf: conf,
    db: db
};