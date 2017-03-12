/**
 * Created by baysao on 14/01/2016.
 */
define(["promise!models/helpers"], function (helpers) {
    function generateKey() {
        var defer = webix.promise.defer();
        var values = {webix_operation: 'gen_key'};
        helpers.getAsync("credentials_apis", {method: "post", data: values})
            .then(function (res) {
                if (res.key) {
                    defer.resolve(res.key);
                } else {
                    defer.reject({error: true, msg: "cannot gen token"})
                }
            })
        return defer;
    }

    function signKey(values) {
        var defer = webix.promise.defer();
        values.webix_operation = 'gen_token';
        helpers.getAsync("credentials_apis", {method: "post", data: values})
            .then(function (res) {
                if (res.token) {
                    defer.resolve(res.token);
                } else {
                    defer.reject({error: true, msg: "cannot sign key"})
                }
            })
        return defer;
    }
    return {
        generateKey: generateKey,
        signKey: signKey
    }
})