/**
 * Created by baysao on 24/01/2016.
 */
var LRU = require("lru-cache");
var _ = require('underscore');
var options = {
    max: 500,
    length: function (n, key) {
        return n * 2 + key.length
    },
    //dispose: function (key, n) {
    //    n.close()
    //},
    maxAge: 1000 * 30
}

module.exports = function () {
    var caches = {};
    return {
        reset: function(){
            _.each(caches, function(val){
                val.reset();
            })
        },
        get: function (name, opt) {
            var finalOpt = opt ? _.extend(options, opt): options;
            if (!caches[name])
                caches[name] = LRU(finalOpt);
            return caches[name];
        }
    }
}
