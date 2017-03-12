//menu hamburger
function mainMenu() {
	$('.btn-main-menu').on('click',function(){
		var x = $(this).attr('id');
		if (x == 1) { 
			$('ul.main-menu, .btn-main-menu').removeClass('expand');
			
			$(this).attr('id','0');
		}else {
			$('ul.main-menu, .btn-main-menu').addClass('expand');
			
			$(this).attr('id','1');
		}
	});
}

//fixed header
function headerFixed() {
	$(window).scroll(function(){
	      scroll = $(window).scrollTop();
	  if (scroll > 80) $('.logo').addClass('minimize');
	  else $('.logo').removeClass('minimize');
	});
}

//scroll timeline
function timelinePage(){
	$(window).scroll(function(){
	    var scrollPage = $(window).scrollTop();
	  	//console.log(scrollPage);
	  	var page_height = $('.wrapper-page').height() - $(window).height();
	  	var progressbar = $('.progressbar-header');

	  	progressbar.find('div').css({
	  		width: scrollPage/page_height * 100 + "%"
	  	});


	  	//A.scroll(function() {
            //var t = e(document).scrollTop(),
                //a = e(document).height() - A.height();
           // D.width(t / a * 100 + "%")
       // })
	});
}
timelinePage();

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

testMobile = isMobile.any();
if (testMobile == null)
{
	//do something
}else {
	//fix click mobile
    FastClick.attach(document.body);
}

//wow init
function callWow() {
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    }
	  }
	);
	wow.init();
}


//tabs feature
function tabFeature() {

	$('ul.tab-feature li a').click(function(e) {
        e.preventDefault();
		$('ul.tab-feature li a').removeClass('current');
		$('.feature-content .current').removeClass('current');
		$(this).addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
   });	

}

//slide customer
function slideCustomer() {
	$('.slide-customer').owlCarousel({
	    items:1,
	    autoHeight:true
	});
}

