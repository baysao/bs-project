$(document).ready(function () {

	var $wrapper = $('#wrapper'),
		$header = $('header'),
		hHeader = 0, 
		wWin = $(window).outerWidth(),
		hWin = $(window).outerHeight();

	//tab-header
	$(document).on('click', '.tab-header', function () {
		var _this = $(this),
			idTab = _this.attr('rel');

		$('.menu-tab-header').hide();

		if ( _this.hasClass('active') ) {
			_this.removeClass('active');
			$wrapper.removeClass('active').css({
				'margin-top': 0
			});
		}else {
			$('.tab-header').removeClass('active');
			_this.addClass('active');

			$(idTab).fadeIn();

			var hTabItem = $(idTab).outerHeight();

			$wrapper.addClass('active').css({
				'margin-top': hTabItem+'px'
			});

			if ( idTab == "#search-box" ) {
				$(idTab).find('input[type=text]').focus();
			}
		}
	});

	function closeNav () {
		$('.tab-header').removeClass('active');
		$('.menu-tab-header').hide();
		$wrapper.removeClass('active').css({
			'margin-top': 0
		});
	}

	$(document).on('click', '.btnClose', function () {
		closeNav();
	});

	$(document).on('click', clickOutsite);

	function clickOutsite (e) {
		var container = $(".outsideevent");
            
        if ( !container.is(e.target) && container.has(e.target).length === 0 ){

        	if ( $('.menu-tab-header').is(':visible') ) {
        		closeNav();
			}
        }
	};

	function checkMobile () {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		return false;
	}
});

function l(x){console.log(x);}