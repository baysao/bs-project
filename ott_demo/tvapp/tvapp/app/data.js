app.factory('Data', ['$http', function ($http) {
	
	var obj = {};
    
    obj.get = function (query) {
        return $http.get(query).then(function (results) {
            return results.data;
        });
    };
    
    return obj;

}]);