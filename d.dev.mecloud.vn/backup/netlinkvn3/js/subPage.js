//preloader subpage
function subPage() {
    setTimeout(function(){ 
        $('.equa').fadeOut();
    }, 600);

    setTimeout(function(){ 
        removeAnimateStartWeb();
    }, 4000);
}
function removeAnimateStartWeb() {
    $('.equa').remove();
}


/* ==============================================
Parallax Calling
=============================================== */
( function ( $ ) {
'use strict';
$(document).ready(function(){
	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
			$('.first-section, .dark-bg-section').addClass('fixed-bg');
		}
	}	
	parallaxInit();	 
});	
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
}( jQuery ));

//call phone
function showPhone() {
    $('.circle-phone').click(function(){
        

        var x = $(this).attr('id');
        if (x == 1) { 
            $(this).find('.mid').removeClass('expand');
            $(this).find('.in, .out').removeClass('expand');
            $(this).find('.ico-phone').delay(300).fadeIn();
            $(this).find('.number-phone').fadeOut(100);

            $(this).attr('id','0');
        }else {

            $(this).find('.mid').addClass('expand');
            $(this).find('.in, .out').addClass('expand');

            $(this).find('.ico-phone').fadeOut();
            $(this).find('.number-phone').delay(300).fadeIn();

            $(this).attr('id','1');
        }

    });
}

//menu category
function showMenuCategory() {
    $('.select-category').click(function() {
        var x = $(this).attr('id');
        if (x == 1) { 
            $('.menu-category').removeClass('expand');
            $(this).find('.ico-dropdown').removeClass('expand');

            $(this).attr('id','0');
        }else {

            $('.menu-category').addClass('expand');
            $(this).find('.ico-dropdown').addClass('expand');

            $(this).attr('id','1');
        }
    })
}