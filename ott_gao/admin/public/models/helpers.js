/**
 * Created by baysao on 04/01/2016.
 */
define(["promise!models/authen"], function(token){
    //var Promise = webix.promise;
    function waitFor(testFx, onReady, timeOutMillis) {
        var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 5000, //< Default Max Timout is 5s
            start = new Date().getTime(),
            condition = false,
            interval = setInterval(function () {
                if ((new Date().getTime() - start < maxtimeOutMillis) && !condition) {
                    // If not time-out yet and condition not yet fulfilled
                    condition = (typeof (testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
                } else {
                    if (!condition) {
                        // If condition still not fulfilled (timeout but condition is 'false')
                        //console.log("'waitFor()' timeout");
                        typeof (onReady) === "string" ? eval(onReady) : onReady();
                        clearInterval(interval);
                        //phantom.exit(1);
                    } else {
                        // Condition fulfilled (timeout and/or condition is 'true')
                        console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                        typeof (onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                        clearInterval(interval); //< Stop this interval
                    }
                }
            }, 500); //< repeat check every 500ms
    };

    //function waitFor(obj, prop, timeout, expected) {
    //    if (!obj) return Promise.reject(new TypeError("waitFor expects an object"));
    //    if (!expected) expected = Boolean;
    //    var value = obj[prop];
    //    if (expected(value)) return Promise.resolve(value);
    //    return new Promise(function(resolve, reject) {
    //        if (timeout)
    //            timeout = setTimeout(function() {
    //                Object.defineProperty(obj, prop, {value: value, writable:true});
    //                reject(new Error("waitFor timed out"));
    //            }, timeout);
    //        Object.defineProperty(obj, prop, {
    //            enumerable: true,
    //            configurable: true,
    //            get: function() { return value; },
    //            set: function(v) {
    //                if (expected(v)) {
    //                    if (timeout) cancelTimeout(timeout);
    //                    Object.defineProperty(obj, prop, {value: v, writable:true});
    //                    resolve(v);
    //                } else {
    //                    value = v;
    //                }
    //            }
    //        });
    //    });
        // could be shortened a bit using "native" .finally and .timeout Promise methods
    //}

    function dataToOptions(collectionName, field) {
        var defer = webix.promise.defer();
        webix.ajax().get("/api/" + collectionName+ "?access_token=" + encodeURIComponent(token),
            function (text, res_json, xhr) {
                var res = res_json.json();
                var val = _.map(res, function (obj) {
                    if(!field) field = 'name'
                    var oo = {id: obj.id, value: obj[field]};
                    if(obj['type']) oo['type'] = obj['type'];
                    return oo;
                });
                defer.resolve(val, xhr);
            })
        return defer;
    }
    function getAsync(collectionName, options) {
        var apiPath = "/api/" + collectionName+ "?access_token=" + encodeURIComponent(token);

        var method = 'get';
        if(options && options.method)
            method = options.method;

        var defer = webix.promise.defer();
        if(method === 'get') {
            var newOpt = _.omit(options, "method", "data");
            if(newOpt) {
                var pathExt = _.reduce(Object.keys(newOpt), function(s, k){
                    return s + "&" + k + "=" + newOpt[k];
                }, "");
                apiPath = apiPath + pathExt;
            }
            webix.ajax()[method](apiPath, function (text, res_json, xhr) {
                var res = res_json.json();
                defer.resolve(res, xhr);
            })
        } else {
            var data = options && options.data != 'undefined' ? options.data : {};
            webix.ajax()[method](apiPath, data, function (text, res_json, xhr) {
                var res = res_json.json();
                defer.resolve(res, xhr);
            })
        }
        return defer;
    }
    return {
        dataToOptions: dataToOptions,
        getAsync: getAsync,
        waitFor: waitFor
    }

})