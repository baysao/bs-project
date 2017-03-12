var helpers = require('../helpers');
var utils = require('./utils');
var db = helpers.db;
var router = helpers.router();

router.use(utils.checkAppPayload);

require('./app_api/entries')(db, router);
require('./app_api/common')(db, router);

module.exports = router;
