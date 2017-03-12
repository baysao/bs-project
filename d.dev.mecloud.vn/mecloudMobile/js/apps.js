var $ = jQuery.noConflict();

'use strict';

$(function () {

    ///////////////////////////////////////////////////////////////////////
    //Global function
    ///////////////////////////////////////////////////////////////////////



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


   

    /*function addAnimationNavbar() {
      var y = $(this).scrollTop();
      if (y > 0)
        $('.navbar').addClass('animation-navbar');
      else
        $('.navbar').removeClass('animation-navbar');
    }
    addAnimationNavbar();

    $(window).scroll(function (event) {
      addAnimationNavbar();
    });*/

   
    
   
    var testMobile = isMobile.any();
    
    if (testMobile == null) {
        //console.log('here')
    }

   
    $('.btn-mainmenu').click(function() {
        $(this).closest('.mainmenu').toggleClass('expand-menu');
    });

    $('ul.feature-col li a').click(function(event) {
        event.preventDefault();
        $('ul.feature-col li .content-fc').animate({
            height:0
        },300);
        console.log($(this).parent().find('.inner-content-fc').height());
        $(this).parent().find('.content-fc').animate({
            height: $(this).parent().find('.inner-content-fc').height() + 40
        },300);
    });
    

    

});



