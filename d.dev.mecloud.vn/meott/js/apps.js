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
    //animation menu
    ///////////////////////////////////////////////////////////////////////

    function addAnimationNavbar() {
        var y = $(this).scrollTop();
        if (y > 0)
            $('.navbar').addClass('animation-navbar');
        else
            $('.navbar').removeClass('animation-navbar');
    }
    addAnimationNavbar();
    $(window).scroll(function (event) {
        addAnimationNavbar();
    });

    ///////////////////////////////////////////////////////////////////////
    //button main menu
    ///////////////////////////////////////////////////////////////////////
    $('.btn-main-menu').click(function() {
        $(this).toggleClass('active');
        $(this).closest('.wrapper').find('.sidebar').toggleClass('active-menu');
        $(this).closest('.navbar').toggleClass('active-menu');
        $(this).closest('.wrapper').find('.bg-opacity').toggleClass('active-menu');
    });
    $('.bg-opacity').click(function() {
        $(this).closest('.wrapper').find('.btn-main-menu').removeClass('active');
        $(this).closest('.wrapper').find('.sidebar').removeClass('active-menu');
        $(this).closest('.wrapper').find('.navbar').removeClass('active-menu');
        $(this).closest('.wrapper').find('.bg-opacity').removeClass('active-menu');
    });

    //////////////////////////////
        //Showcase
    //////////////////////////////    

    var showcase = $("#showcase");

    showcase.on('initialized.owl.carousel', function(event) {
        //console.log('initialized.owl.carousel');
        $('.info-showcase').addClass('play-progress');
    })

    showcase.owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        smartSpeed:450,
        autoplay: true,
        autoplayTimeout: 7000
    });

    
    showcase.on('translate.owl.carousel', function(event) {
        //console.log('initialized.owl.carousel');
        $('.info-showcase').removeClass('play-progress'); 
        
    })

    showcase.on('translated.owl.carousel', function(event) {
        //console.log('translated.owl.carousel');
       $('.info-showcase').addClass('play-progress');
        
    });

    showcase.on('update.owl.carousel', function(event) {
        //console.log('translated.owl.carousel');
        $('.info-showcase').removeClass('play-progress'); 
        $('.info-showcase').addClass('play-progress');
        
    });

    $('.page-showcase').click(function(event) {
        showcase.trigger('next.owl.carousel');
    });


    ///////////////////////////////////////////////////////////////////////
    //Slide movie
    ///////////////////////////////////////////////////////////////////////
    slidemovie = $('.slide-movie');
    slidemovie.on('initialized.owl.carousel', function(event) {
        var items = event.item.count;
        var currentItem = event.item.index;
        console.log(currentItem);
        if (items <= 4) {
            slidemovie.find('.owl-next').addClass('disable');
        }
        if(currentItem == 0) {
            slidemovie.find('.owl-prev').addClass('disable');
        }         
    })
    slidemovie.on('translated.owl.carousel', function(event) {
        var items = event.item.count;
        var currentItem = event.item.index;
        var maximumItem =  items - event.page.size;
        if(currentItem == maximumItem){
         $(this).find('.owl-next').addClass('disable');
        }
        if(currentItem < maximumItem){
         $(this).find('.owl-next').removeClass('disable');
        }
        
        if(currentItem == 0){
          $(this).find('.owl-prev').addClass('disable');
        }
        if(currentItem > 0){
          $(this).find('.owl-prev').removeClass('disable');
        }
    })
    slidemovie.owlCarousel({
        items:4,
        margin:20,
        nav:true,
        navText: ['<i class="mc mc-prev-slider"></i>','<i class="mc mc-next-slider"></i>'],
        responsive:{0:{items:2,slideBy:2},991:{items:3,slideBy:3},1280:{items:4,slideBy:4}}
    })
    
    slidemovie.on('resized.owl.carousel', function(event) {
        var items = event.item.count;
        var currentItem = event.item.index;
        var maximumItem =  items - event.page.size;
        //console.log(event.item);
        //console.log(event.page);
        if(currentItem == maximumItem){
         $(this).find('.owl-next').addClass('disable');
        }
        if(currentItem < maximumItem){
         $(this).find('.owl-next').removeClass('disable');
         
        }
        if(currentItem == 0){
          $(this).find('.owl-prev').addClass('disable');
        }
        if(currentItem > 0){
          $(this).find('.owl-prev').removeClass('disable');
        }

    })

    

    

});



