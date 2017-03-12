$(document).ready(function() {
	//detect mobile
	var isDesktop = (function(){
		try {
			document.createEvent("TouchEvent");
		}
		catch(e){
			return true;
		}
		return false;
	})();
	
	// Shrink nav on scroll
	function checkHeader() {
		 var scrollFromTop = $(window).scrollTop();
		if (scrollFromTop > 10) {
			$('header').addClass('shrinkHeader');
		} else {
			$('header').removeClass('shrinkHeader');
		}
	}
    $(window).scroll(checkHeader);
	
	if (isDesktop) {
	  	checkHeader();
	  }else {
		$('header').css('position','static');
		$('header').removeClass('shrinkHeader');
	  }
	
	
	//call scroll page init
	$.scrollIt();
	
	//load page
	$("body").queryLoader2({
			barColor:"#e64b3a",
			backgroundColor:"#f5f5f5",
			percentage:true,
			barHeight:3,
			fadeOutTime: 0,
			onComplete: startWeb
	 });
	 
	 var animatedChannel = 'animated fadeIn';
	 function animatedSlideChannel(channelID) {
		 
		 $('#channel'+ channelID).find('.channelItem').removeClass('animated fadeOut').addClass(animatedChannel);
		 $('#channel'+ channelID).find('.num13').removeClass(animatedChannel).addClass('animated zoomInLeft').css('opacity','1');
		 $('#channel'+ channelID).find('.num14').removeClass(animatedChannel).addClass('animated zoomInRight').css('opacity','1');
	 }
	 function animatedSlideChannelRemove() {
		 //$('.channelItem').removeClass(animatedChannel).addClass('animated fadeOut');
		 $('.channelItem.num13').removeClass('animated zoomInLeft').addClass('animated fadeOut');
		 $('.channelItem.num14').removeClass('animated zoomInRight').addClass('animated fadeOut');
	 }
	 function initAnimateLayout() {
		 
		 $('.header').addClass('animated fadeInDown delay0s2ms');
		 
		 $('.about, header').removeClass('hide');
		 
		 $('.introClip').fadeIn(2000);
		 
		 //about
		 $('.sloganAbout').addClass('animated fadeInDown delay2s3ms');
		 
		 $('.macbook').addClass('animated bounceInDown delay0s4ms');
		 $('.ipad').addClass('animated bounceInDown delay0s6ms');
		 $('.iphone').addClass('animated bounceInDown delay0s8ms');
		 
		 $('.lineF1, .lineF2, .lineF3, .lineF4').addClass('animated fadeIn delay2s2ms');
		 
		 $('.f1Icon').addClass('animated slow zoomIn delay1s2ms');
		 $('.f1Txt').addClass('animated slow fadeInUp delay1s4ms');
		 
		 $('.f2Icon').addClass('animated slow zoomIn delay1s4ms');
		 $('.f2Txt').addClass('animated slow fadeInUp delay1s6ms');
		 
		 $('.f3Icon').addClass('animated slow zoomIn delay1s6ms');
		 $('.f3Txt').addClass('animated slow fadeInUp delay1s8ms');
		 
		 $('.f4Icon').addClass('animated slow zoomIn delay1s8ms');
		 $('.f4Txt').addClass('animated slow fadeInUp delay2s0ms');
		 
		 $('.btnStartUpload').removeClass('hide').addClass('animated fadeInUp delay2s2ms');
		 
		 setTimeout(function() {
			 
			$('.btnStartUpload').removeClass('animated fadeInUp delay2s2ms').addClass('animated upDown infinite');
			
		}, 3500);
		 
	 }
	 function startWeb() {
		 //animatedSlideChannel(0);
		 initAnimateLayout(); 
	 }
	 
	
	
	var waypoints1 = $('.wrapperChannel').waypoint(function() {
	  animatedSlideChannel(0);
	}, {
	  offset: '10%'
	})
	
	
	//slider channel
	function sliderChannel(obj){
		var channelIn = 'animated fadeIn';
		var channelOut = 'animated fadeOut';
		
		animatedSlideChannelRemove();
		
		$('ul.navChannel li a').removeClass('selected');
		obj.addClass('selected');
		
		$('.channelSlide').removeClass(channelIn).addClass(channelOut);
		
		
		setTimeout(function() {
			$('.bgChannel').removeClass(channelOut).addClass(channelIn).addClass('delay3s0ms');
			
			for (var k=0; k<5; k++) {
				if (obj.attr('id') == k) {
					$('#channel' + k).removeClass(channelOut).addClass(channelIn);
					animatedSlideChannel(k);
				}
			}
			
		}, 500);
	}		
	
	$('ul.navChannel li a').click(function(evt) {
		evt.preventDefault();
		
		if ($(this).hasClass( "selected" )){
				return false;
		}
		
		sliderChannel($(this));
		
	});
	
	$('.num14').click(function(evt){
		evt.preventDefault();
		var total = $('ul.navChannel li a').length - 1;
		//console.log("Total:"+total);
		$.each($('ul.navChannel li a'), function( index, value ) {
			var next = 0;
			if(index < total){
				next = index + 1;
			}else if(index == total){
				next = 0;
			}
			
			if($(this).hasClass( "selected" )){
				//console.log("Next:"+next);
				$('ul.navChannel li a')[next].click();
				return false;
			}
		});
	});
	
	//Full Screen Video
	function SetResizeContent() {
		var minheight = $(window).height();
		$(".wrapper-video-outer").css('padding-top', minheight);
	}
	SetResizeContent();
	// Windows Resize Events
	$(window).resize(function () {
		SetResizeContent();
	});
	
	//scroll to element and button Back To Top
    function goToByScroll(id) {
        id = id.replace("Scroll", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 60
        }, 'slow');
    }
    $(".btnNextLanding").click(function(evt) {
        evt.preventDefault();
        goToByScroll($(this).attr("id"));
    });
	
	 //call parallax
	 $('.wrapperDevice').parallax();


});

//////////////////////////
	//Explore Video
//////////////////////////
$(function () {
	
	
	var $container = $('.isotope'),
		colWidth = function () {
			var w = $container.width(), 
				columnNum = 1,
				columnWidth = 0;
			if (w > 1023) {
				columnNum  = 4;
			} else if (w < 1024) {
				columnNum  = 3;
			} 
			columnWidth = Math.floor(w/columnNum);
			$container.find('.item').each(function() {
				var $item = $(this),
					width = columnWidth,
					height = columnWidth*9/16;
				$item.css({
					width: width,
					height: height
				});
			});
			return columnWidth;
		},
		isotope = function () {
			$container.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
				transitionDuration: '1s',
				masonry: {
					columnWidth: colWidth()
				}
			});
		};
    isotope();
    $(window).on('debouncedresize', isotope);
	
	
	var filterFns = {};
	$('#filters').on('click', 'a', function (evt) {
		evt.preventDefault();
		var filterValue = $(this).attr('data-filter');
		filterValue = filterFns[filterValue] || filterValue;
		$container.isotope({ filter: filterValue });
	});
   
	$('.btnFilters').each(function (i, btnFilters) {
		var $btnFilters = $(btnFilters);
		$btnFilters.on('click', 'a', function (evt) {
			evt.preventDefault();
			$btnFilters.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
});