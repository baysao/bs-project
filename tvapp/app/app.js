var app = angular.module('tv-app', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'angular-loading-bar']);

app.factory('UserService', function() {
  return {
      token : "gao_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoid2ViX2FwcCIsInR5cGUiOiJ3ZWIiLCJpc19lbmFibGVkIjoiMSIsImlwX3JhbmdlcyI6IiIsImh0dHBfcmVmZXJlcnMiOiIiLCJleHBpcmVkIjoiIiwia2V5IjoiZG9RRVF5bUJQYWNtSDVER2l5WWZZMFVXNlBuS1ljenFwK2syY3VGVm05MTRnYUZDelRJOWdSQldmL1A3UkMyY0ljNmlwMFBvbWJDTFAzV0tSM1dxU1E9PSIsInVzZXJJZCI6IkVxY2Zpc3ZhZWI2QU5jRUVYIiwiY3JlYXRlZEF0IjoxNDUzMDMxNjg4fQ.Awf1CL0tCPsmUpSQcq4RB7i_poz1Q8XjYvFyG1N6-7I",
      titleCategory: ""
  };
});

app.config(["$stateProvider", "$urlRouterProvider", "cfpLoadingBarProvider", function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = true;
	
    $urlRouterProvider.otherwise('app/home');

	$stateProvider.state("app", {
        url: "/app",
        templateUrl: "partials/app.html",
        controller: "appCtrl",
        data: {
            pageTitle: "App - Spending Management"
        }
    }).state("app.home", {
        url: "/home",
        templateUrl: "partials/home.html",
        data: {
            pageTitle: "TV"
        }
    }).state("app.chuyen-muc/:idCategory", {
        url: "/chuyen-muc/:idCategory",
        templateUrl: "partials/chuyenmuc.html",
        data: {
            pageTitle: "Chuyên Mục"
        }
    }).state("app.live/:idLive", {
        url: "/live/:idLive",
        templateUrl: "partials/live.html",
        data: {
            pageTitle: "Live TV"
        }
    }).state("app.search-results", {
        url: "/search-results",
        templateUrl: "partials/resultsSearch.html",
        data: {
            pageTitle: "Kết quả tìm kiếm"
        }
    }).state("app.detail/:idVideo", {
        url: "/detail/:idVideo",
        templateUrl: "partials/detail.html",
        data: {
            pageTitle: "Video chi tiết"
        }
    });

}]).run(function ($rootScope, $location, $window) {
		
    var historyLocation = [];
    
    $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
		$rootScope.pageTitle = toState.data.pageTitle;
        historyLocation.push($location.$$path);
    });
    
    $rootScope.$on("$stateChangeStart", function (event, next, current) {
        $window.scrollTo(0,0);
    });
    
});

function l(x) {console.log(x);}