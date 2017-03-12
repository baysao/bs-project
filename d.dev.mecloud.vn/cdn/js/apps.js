var $ = jQuery.noConflict();

'use strict';

$(function () {

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


    ///////////////////////////////////////////////////////////////////////
    //Global function
    ///////////////////////////////////////////////////////////////////////

    //hasClass API
    SVGElement.prototype.hasClass = function (className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.getAttribute('class'));
    };

    //addClass API
    SVGElement.prototype.addClass = function (className) {
        if (!this.hasClass(className)) {
            this.setAttribute('class', className);
        }
    };

    //removeClass API
    SVGElement.prototype.removeClass = function (className) {
        var removedClass = this.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
        if (this.hasClass(className)) {
            this.setAttribute('class', removedClass);
        }
    };

    //toggleClass API
    SVGElement.prototype.toggleClass = function (className) {
        if (this.hasClass(className)) {
            this.removeClass(className);
        } else {
            this.addClass(className);
        }
    };

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
    //call scroll page init
    ///////////////////////////////////////////////////////////////////////
    $.scrollIt();

     ///////////////////////////////////////////////////////////////////////
    //Init Parallax
    ///////////////////////////////////////////////////////////////////////


   
    var testMobile = isMobile.any();
    
    if (testMobile == null) {
        //console.log('here')
        $('.home').parallax("10%", 0.1);
        $('.private').parallax("10%", 0.1);
    }


    ///////////////////////////////////////////////////////////////////////
    //Go To Element
    ///////////////////////////////////////////////////////////////////////
    $('a.page-scroll').on('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });


    ///////////////////////////////////////////////////////////////////////
    //Feature animation
    ///////////////////////////////////////////////////////////////////////
    var myRocket = document.getElementById('rocket'),
        myGraph = document.getElementById('graph'),
        myGraph1 = document.getElementById('graph1'),
        myZone = document.getElementById('zone'),
        myVod = document.getElementById('vod'),
        myServer = document.getElementById('server');
    
    
    function removeFeatureAnimation(){
        var y = $(this).scrollTop();
        var offsetHome = $('#home').height();
        var offsetFeature = $('#feature').height();
        if(y>offsetHome/1.5 && y<offsetHome+offsetFeature/1.5){
            myRocket.addClass('rocket');
            myGraph.addClass('graph');
            myGraph1.addClass('graph');
            myZone.addClass('zone');
            myVod.addClass('vod');
            myServer.addClass('server');
            //console.log('feature aniamtion')
        }else {
            myRocket.removeClass('rocket');
            myGraph.removeClass('graph');
            myGraph1.removeClass('graph');
            myZone.removeClass('zone');
            myVod.removeClass('vod');
            myServer.removeClass('server');
            //console.log('remove feature aniamtion')
        }
    }
    //removeFeatureAnimation();
    if (testMobile == null) {
        var y = $(this).scrollTop();
        var offsetHome = $('#home').height();
        var offsetFeature = $('#feature').height();
        if((y<offsetHome/1.5 && y>offsetHome+offsetFeature/1.5)  || y==0){
            myRocket.removeClass('rocket');
            myGraph.removeClass('graph');
            myGraph1.removeClass('graph');
            myZone.removeClass('zone');
            myVod.removeClass('vod');
            myServer.removeClass('server');
        }
        $(window).scroll(function (event) {
            removeFeatureAnimation();
        });
    }
    


    

});


///////////////////////////////////////////////////////////////////////
//Google Maps API
///////////////////////////////////////////////////////////////////////
function googleMaps() {
  // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,

            scrollwheel: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(10.788460, 106.685314), // Viet Nam

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e4f1fa"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#cee7f8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#3498db"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);


        //var icon = new google.maps.MarkerImage('../images/icon.png',
        //new google.maps.Size(54,65),
        //new google.maps.Point(0,0)
    //);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(10.788460, 106.685314),
            map: map,
            //icon: icon,
            title: 'Map!'
        });
    }
}
googleMaps();

