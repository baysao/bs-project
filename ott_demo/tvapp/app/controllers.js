app.controller("indexCtrl", function ($scope, $rootScope, $location, $http, Data, UserService) {
	Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries_categories?"+UserService.token).then(function(results) {
		$scope.listCategory = results;
	});

	//get channel
	Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a23e6833c5a7c875d52a7a?"+UserService.token).then(function(results) {
		$scope.listChanel = results.channels.main;
	});	

	$scope.showResults = function (searchTerm) {
		$location.url('app/search-results?q=' + encodeURIComponent(searchTerm) + '&' + UserService.token);
	}
});

app.controller("appCtrl", function ($scope, $rootScope, $location, $http, Data) {
	$scope.pageClass = "ng-fadeInUp";
});

app.controller("homeCtrl", function ($scope, $rootScope, $location, $http, Data, UserService, $stateParams) {
	var idVideo = $stateParams.idVideo;

	if ( idVideo != undefined ) {
		getListRelatedHot(idVideo);
	}else {
		Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a115286bc9dead7d4632d8?"+UserService.token).then(function(results) {
			$('#video-player').attr('src',results.hot.main[0].url_embed);
			var idHotVideo = results.hot.main[0]._id;
			getListRelatedHot(idHotVideo);
		});
	}
	
	function getListRelatedHot (idHotVideo) {
		Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a6075d1d8003f1592926f4?"+UserService.token+"&entryId="+idHotVideo).then(function(results) {
			$scope.listRelated = results.entry.related;
			if ( idVideo != "" ) {
				$('#video-player').attr('src',results.entry.main[0].url_embed);
			}
		});
	}
});

app.controller("chuyenmucCtrl", function ($scope, $rootScope, $location, $http, Data, UserService, $stateParams) {
	var idArticle = $stateParams.idCategory;
	Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries_categories?"+UserService.token).then(function(results) {
		for ( var i = 0; i < results.length; i++ ) {
			if ( results[i]._id == idArticle ) {
				$scope.title_category = results[i].name;
			}
		}
	});	

	Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a115286bc9dead7d4632d8?category="+idArticle+"&"+UserService.token).then(function(results) {
		$scope.arrMoiNhat = results.latest.main;
		$scope.arrXemNhieu = results.most_viewed.main;
	});
});

app.controller("liveCtrl", function ($scope, $rootScope, $location, $http, Data, UserService, $stateParams) {
	var idVideoLive = $stateParams.idLive;
	Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a23e6833c5a7c875d52a7a?"+UserService.token).then(function(results) {
		var listLive = results.channels.main;
		for ( var i = 0; i < listLive.length; i++ ) {
			if ( listLive[i]._id == idVideoLive ) {
				$('#video-player-live').attr('src', listLive[i].url_embed);
				break;
			}
		}
	});	
});

app.controller("showListCtr", function ($scope, $rootScope, $location, $http, Data, UserService, $timeout) {
	Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries_categories?"+UserService.token).then(function(results) {
		for ( var i = 0; i < results.length; i++ ) {
			getEachCategory(results[i]._id, results[i].name);
		}
	});

	function getEachCategory (idCategory, title) {
		Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries?category="+idCategory+"&"+UserService.token+"&limit=4").then(function(results) {
			var wrapCategoryShow = $('<div class="box-list row list-inline"></div>'),
				titleCategory = $('<h2 class="title-list">'+title+'<span class="icon next-small"></span></h2>');

			wrapCategoryShow.append(titleCategory);

			for ( var i = 0; i < results.length; i++ ) {
				var shortText = $.trim(results[i].name).substring(0, 50).split(" ").slice(0, -1).join(" ") + "...",
					htmlBoxThum = $('<div class="col-sm-6 col-xs-12 item"><div class="img-show"><div><a class="wrap-video" href="#/app/detail/'+results[i]._id+'"><span class="loading"></span><div class="intro-video"><span class="title-name">'+shortText+'</span><span class="meta-info">700 lượt xem . 5 giờ trước</span></div><div class="icon-play"><span></span></div><img data-original src="'+results[i].thumbnail+'?width=600&height=360"></a></div></div></div>')
				
				wrapCategoryShow.append(htmlBoxThum);
			}

			$('.list-category-show').append(wrapCategoryShow);
		});
	}

	//$(document).on('click', '.wrap-video', playVideo);
});

app.controller("resultsSearchCtrl", function ($scope, $rootScope, $location, $http, Data, UserService) {
	$scope.$watch(function () {
        return ($location.search() || {}).q;
    }, function (searchTerm) {
    	$scope.textSearch = searchTerm;
    	Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries?q="+searchTerm+"&"+UserService.token).then(function(results) {
			$scope.arrSearchResults = results;
		});	
    });
});

app.controller("detailCtrl", function ($scope, $rootScope, $location, $http, Data, UserService) {
	
});

function playVideo (e) {
	e.preventDefault();
	var _this = $(this),
		urlVideo = _this.data('url');

	$('html').velocity('stop').velocity('scroll', { duration: 0, offset: 0 });

	// setTimeout(function () {
	// 	$('#video-player').attr('src', urlVideo);
	// }, 800);
}