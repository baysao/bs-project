$(document).ready(function() {
	
	//Mobile Detect
	var testMobile;
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}
	testMobile = isMobile.any();
	if (testMobile == null) {
		//add background parallax
		$('.feature, .client').css('background-attachment','fixed');
		//fixed header
		$(window).scroll(checkHeader);
	}else if (testMobile != null) {
		$('.navbar').addClass('fixed');
	}
	//jQuery to collapse the navbar on scroll
	function checkHeader() {
		 var scrollFromTop = $(window).scrollTop();
		if (scrollFromTop > 50) {
			$("nav.navbar").addClass("fixed");
			$(".btn-backToTop").addClass("goTop");
		} else {
			$("nav.navbar").removeClass("fixed");
			$(".btn-backToTop").removeClass("goTop");
		}
	}
	//checkHeader();
	
	/////tooltip
	$('.tooltip-table').popover();


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutQuint');
			event.preventDefault();
		});
	});
	
	
	//slide client say
	$('.client-slide').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				
			},
			600:{
				items:3,
				
			},
			1000:{
				items:6,
				
			}
		}
	})
	
});