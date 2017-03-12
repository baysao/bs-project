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

    ///////////////////////////////////////////////////////////////////////
    //feature
    ///////////////////////////////////////////////////////////////////////

    
    $('ul.feature-col-1 li a').click(function(event) {
        event.preventDefault();
        $('ul.feature-col-1 li').removeClass('show');
        $(this).parent().addClass('show');
    });

    $('ul.feature-col-2 li a').click(function(event) {
        event.preventDefault();
        $('ul.feature-col-2 li').removeClass('show');
        $(this).parent().addClass('show');
    });

    $('ul.feature-col-3 li a').click(function(event) {
        event.preventDefault();
        $('ul.feature-col-3 li').removeClass('show');
        $(this).parent().addClass('show');
    });
    

    

});



