var mongoskin = require("mongoskin");
var db = mongoskin.db("mongodb://localhost:27017/gao", {native_parser: true});

module.exports.db = db;