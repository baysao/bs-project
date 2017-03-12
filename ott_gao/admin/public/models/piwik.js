/**
 * Created by baysao on 27/01/2016.
 */
define([], function(){
    var options = {
        max: 500,
        length: function (n, key) {
            return n * 2 + key.length
        },
        maxAge: 1000 * 60
    }
    Cache = {};
    getCache = function (name, opt) {
        if (!opt) opt = {};
        if (!Cache[name])
            Cache[name] = LRU(_.extend(options, opt));
        return Cache[name];
    }
    var config = {
        host: 'http://analytics.chinmedia.vn/index.php?',
        action: {
            getKeyworkContentFromNameId: {
                date: "previous7",
                format: "JSON",
                idSite: "2",
                idSubtable: "1",
                method: "AdvancedCampaignReporting.getSourceMedium",
                module: "API",
                period: "range",
                token_auth: "8e24acb14c8540e9c503db269549c4f5",
            }
        }
        
    }
    function call(name, opts, cb){
        //console.log(name);
        //console.log(config.action[name]);
        var newopts = _.extend(config.action[name], opts);
        var qquery =  QueryString.stringify(newopts);
        var cache = getCache('piwik');
        //if(cache.has(qquery)) {
        //    console.log('hit:' + qquery);
        //    var val = cache.get(qquery);
        //    console.log(val);
        //    cb(val);
        //    return;
        //} else {
        //    console.log('miss:' + qquery);
        //}

        webix.ajax().get(config.host + qquery, function(text, res){
            var val = res.json();
            if(val) {

                cache.set(qquery, val);
                cb(val);
            }

        });
    }
    return {
        config: config,
        call: call
    }
})