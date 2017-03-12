/*(function ($) {
    'use strict'
    //detect selector attribute
    var name;
    $.fn.hasAttr = function(name) {  
        return this.attr(name) !== undefined;
    };
});*/
function preloaderPage(targetPage, imagePage) {
    'use strict'
	$('.wrapper').addClass('preloader');
	var calcPercent;
	
	var $progress = $('.logoBlue');
	var $percent = $('.percentage');
	
	preload(imagePage);
	
	$(window).load(function(){
		
		$progress.animate({
			width: '100%'	
		},10,function(){
				
			$percent.text('100%');
			clearInterval(calcPercent);
			
			animateLogo();
			//
			switch(targetPage){
				case 'index':
					indexPage();
					break;
				case 'subPage':
					subPage();
					break;	
			}
				
		});
		
		function animateLogo() {
			$('.preloaderLogo').addClass('animationLogo');
			
			setTimeout(function(){ 
				$('.preloaderLogo').css('display','none');
				$('.wrapper').removeClass('preloader');
			}, 1000);
			
		}
		
		
			
	});
	
	function preload(imgArray) {
		var increment = Math.floor(100/imgArray.length);
		var i = 1;
		$.each(imgArray,function(i,v) {
			var objImage = $('<img>').attr("src", v);

	        if (objImage.complete){ 
	        	//console.log('Loaded');
	        }else {
	        	//console.log('Load');
				objImage.load(function(){
					$progress.animate({
						width: '+=' + increment + '%'	
					},100);	
				});
	        } 
			
			i++;
		});	
	}
	
	calcPercent = setInterval(function(){
		$percent.text(Math.floor(($progress.width()/$('.logoGrey').width())*100) + '%');	
	},100);
	
}

//menu hamburger
function nav_menu() {
	$('.btn-nav-menu').on('click',function(){
		var x = $(this).attr('id');
		var getWidthWindow = $(window).width();
		if (x == 1) { 
			$('.box-nav-menu').removeClass('animation');
			$(this).find('span').removeClass('animation');
			if (getWidthWindow < 768) {
				$('body').css({
					'overflow':'inherit'
				});
				$('header').css('height','60px');
			}
			$(this).attr('id','0');
		}else {
			$('.box-nav-menu').addClass('animation');
			$(this).find('span').addClass('animation');	
			if (getWidthWindow < 768) {
				$('body').css({
					'overflow':'hidden'
				});
				$('header').css('height','100%');
			}
			$(this).attr('id','1');
		}
	});
}

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
};
$(document).ready(function(){
	testMobile = isMobile.any();
	if (testMobile == null)
	{
		//do something
	}else {
		//fix click mobile
	    FastClick.attach(document.body);
	}


	//scroll to element and button Back To Top
    function goToByScroll(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top -60
        }, 'slow');
    }
    $(".page-scroll").click(function (e) {
        e.preventDefault();
        goToByScroll($(this).attr("id"));
    });
	
	function goToByScrollElement(ele) {
        $('html,body').animate({
            scrollTop: $(ele).offset().top
        }, 'slow');
    }
    $(".element-scroll").click(function (e) {
        e.preventDefault();
        goToByScrollElement($(this).attr("href"));
		console.log($(this).attr("href"));
    });

});	

//slide client
function slide_client() {	


	//console.log(sliderElement);
	var objSlide = $('[data-slide="client"]');
	
	// Listen to owl events:
	function updateHeightTitle() {
		$('.slide-item-title').css({
	        height: $('.slide-item').height()

	    });
	}
	objSlide.on('initialized.owl.carousel', function(event) {
		setTimeout(function(){ 
			updateHeightTitle();
		}, 2000);
	    
	});
	objSlide.owlCarousel({
	    margin:30,
	    loop:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5,
	        }
	    }
	});
	objSlide.on('resized.owl.carousel', function(event) {
	    updateHeightTitle();
	});


}