/**
 * Created by baysao on 16/01/2016.
 */
var path = require('path')
    , fs = require('fs');
function req(name) {
    return exports[name] = require("./views/" + name);
}
var views = path.join(__dirname, 'views');
fs.readdirSync(views).forEach(function(file) {
    if ((file === 'index.js') || (file[0] === '_')) { return; }
    var ext = path.extname(file);
    var stats = fs.statSync(path.join(views, file));
    if (stats.isFile() && !(ext in require.extensions)) { return; }
    var basename = path.basename(file, '.js');
    exports.__defineGetter__(basename, function(){ return req(basename); });
});