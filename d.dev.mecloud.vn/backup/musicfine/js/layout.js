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



$(document).ready(function () {
	
    /* ==============================================
	Video Calling
	=============================================== */
	$(window).bind('load', function () {
		//bigVideoInit();						  
	});
	function bigVideoInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
			var BV = new $.BigVideo();
			BV.init();
			BV.show('http://www.meme.vn/info/intromeme_480p.mp4',{ambient:true});
		}
	}	
	//bigVideoInit();	
	
	
	
	/* ==============================================
	NavMenu
	=============================================== */
	testMobile = isMobile.any();
	if (testMobile) {
		$('.btnMenu').click(function(){
			var X=$(this).attr('id');
			if(X==1) {
				$('#navMenu .nav').stop().fadeOut();
				
				$(this).removeClass('animationRotate');
				$(this).attr('id', '0');
				$('#content').animate({paddingTop:0});
			}
			else {
				$('#navMenu .nav').stop().fadeIn();
				
				$(this).addClass('animationRotate');
				$(this).attr('id', '1');
				$('#content').animate({paddingTop:134});;
			}
		});
	}
	if (testMobile===null) {
		$('#header').hover(function(){
			
			$('#navMenu .nav').stop().fadeIn();
			
			$(this).find('.btnMenu').addClass('animationRotate');
			
		},function(){
			$('#navMenu .nav').stop().fadeOut();
				
			$(this).find('.btnMenu').removeClass('animationRotate');
			
		});
	}
	
	
	/* ==============================================
	Fade Page Calling
	=============================================== */
	
	$("#navMenu .nav li a").click(function(event) {
        event.preventDefault();
		$('#navMenu .nav li a').removeClass("active");
		$(this).addClass("active");
		
		var content = $(this).attr("href");
		$(".item").not(content).hide();
        $(content).fadeIn();
    });
	
	
	
	
	
	
	/* ==============================================
	Add scrollbar Calling
	=============================================== */
	testMobile = isMobile.any();
	if (testMobile === null) {
		$('.addScrollbar').perfectScrollbar({maxScrollbarLength:70,wheelSpeed: 0.5});
	}
	
	$('.modal-backdrop.in').css({height: $('body').height()})
	
	
	$(window).resize(function () {
		resizePanel();
	});
	
	function resizePanel() {
		
	}
	
	
	/* ==============================================
	Gallery Calling
	=============================================== */
	var isInit = false;
	
	$('#videoPopup').on('shown.bs.modal', function () {
		isInit?'':(isInit=true) && Gallery.init();
		//console.log('i '+isInit);
	})
	
	
	
	
	
	
});