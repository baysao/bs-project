app.controller("indexCtrl", function ($scope, $rootScope, $location, $http, Data, UserService) {
	Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries_categories?"+UserService.token).then(function(results) {
		$scope.listCategory = results;
	});

	$scope.onSelected = function (item) {
		UserService.titleCategory = item;
	}

	//get channel
	Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a23e6833c5a7c875d52a7a?"+UserService.token).then(function(results) {
		l(results);
		$scope.listChanel = results.channels.main;
	});	
});

app.controller("appCtrl", function ($scope, $rootScope, $location, $http, Data) {
	$scope.pageClass = "ng-fadeInUp";
});

app.controller("homeCtrl", function ($scope, $rootScope, $location, $http, Data, UserService) {
	Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a115286bc9dead7d4632d8?"+UserService.token).then(function(results) {
		$('#video-player').attr('src',results.hot.main[0].url_embed);
		var idHotVideo = results.hot.main[0]._id;
		getListRelatedHot(idHotVideo);
	});

	function getListRelatedHot (idHotVideo) {
		Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a6075d1d8003f1592926f4?"+UserService.token+"&entryId="+idHotVideo).then(function(results) {
			$scope.listRelated = results.entry.related;
		});
	}

	$scope.arrEachCategory = [];
	
	Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries_categories?"+UserService.token).then(function(results) {
		for ( var i = 0; i < results.length; i++ ) {
			getEachCategory(results[i]._id, results[i].name);
		}
	});

	function getEachCategory (idCategory, title) {
		Data.get("http://a.gao.easyvideo.vn/api/embed/v1/entries?category="+idCategory+"&"+UserService.token+"&limit=3").then(function(results) {
			var wrapCategoryShow = $('<div class="box-list row list-inline"></div>'),
				titleCategory = $('<h2 class="title-list">'+title+'<span class="icon next-small"></span></h2>');

			wrapCategoryShow.append(titleCategory);

			for ( var i = 0; i < results.length; i++ ) {
				var shortText = $.trim(results[i].name).substring(0, 50).split(" ").slice(0, -1).join(" ") + "...",
					htmlBoxThum = $('<div class="col-sm-4 col-xs-6 item"><div class="img-show"><div><a class="wrap-video" href="javascript:void(0);" data-url="'+results[i].url_embed+'"><div class="intro-video"><span class="title-name">'+shortText+'</span><span class="meta-info">700 lượt xem . 5 giờ trước</span></div><div class="icon-play"><span></span></div><img src="'+results[i].thumbnail+'?width=600&height=360"></a></div></div></div>')
				
				wrapCategoryShow.append(htmlBoxThum);
			}

			$('.list-category-show').append(wrapCategoryShow);

		});
	}

	$(document).on('click', '.wrap-video', playVideo);
});

app.controller("chuyenmucCtrl", function ($scope, $rootScope, $location, $http, Data, UserService, $stateParams) {
	$scope.title_category = UserService.titleCategory;
	
	var idArticle = $stateParams.idCategory;
	Data.get("http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a115286bc9dead7d4632d8?category="+idArticle+"&"+UserService.token).then(function(results) {
		$scope.arrMoiNhat = results.latest.main;
		$scope.arrXemNhieu = results.most_viewed.main;
	});

	$scope.changeTabs = function (item) {
		l(item);
	}
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

function playVideo (e) {
	e.preventDefault();
	var _this = $(this),
		urlVideo = _this.data('url');

	$('html').velocity('stop').velocity('scroll', { duration: 750, offset: 0 });

	setTimeout(function () {
		$('#video-player').attr('src', urlVideo);
	}, 800);
}