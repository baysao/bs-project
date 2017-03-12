var helpers = require('../helpers');
var db = helpers.db;
var router = helpers.router();

require('./custom_api/common.v2')(db, router);

module.exports = router;
