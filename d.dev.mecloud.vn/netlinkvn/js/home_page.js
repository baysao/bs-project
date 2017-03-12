//index
function indexPage() {

	$('.home-page').addClass('animate');
	$('header').addClass('animated fadeInDown delay0s8ms'); 
	$('.slogan').addClass('animated fadeInDownBig delay1s0ms');	
	$('.see-more').addClass('animated fadeInLeftBig delay1s0ms');	
	$('.tellus').addClass('animated fadeInRightBig delay1s0ms');
	$('.work').addClass('animated fadeInLeft delay2s0ms');
	//$('.news').addClass('animated fadeInRight delay2s0ms');
	$('.badge-google').addClass('animated fadeInRight delay2s0ms');
	$('.statis').addClass('animated bounceIn delay2s2ms');
	setTimeout(function(){ 
		removeAnimateStartWeb();
	}, 3500);

	setTimeout(function(){ 
		removeAnimateStartWeb();
	}, 4000);
}
function removeAnimateStartWeb() {
	$('header').removeClass('delay0s8ms'); 
	$('.slogan').removeClass('delay1s0ms');	
	$('.see-more').removeClass('delay1s0ms');	
	$('.tellus').removeClass('delay1s0ms');
	$('.work').removeClass('delay2s0ms');
	$('.news').removeClass('delay2s0ms');
	$('.statis').removeClass('delay2s2ms');
}

//timer for who what
function auto_show_wh() {
	
	$('.right-content-home').hover(function(){
		$('.box-rch').addClass('show-box-rch');	
	});
	
	var wh_timer = setInterval(wh_timer_show, 4500);
	function wh_timer_show() {
		$('.box-rch').addClass('show-box-rch');	
		clearInterval(wh_timer);
	}
	
}

//tell us
function tellus() {
	
	$('.tellus').click(function() {
		var x = $(this).attr('id');
		if (x == 1) { 
			$('.box-rch').removeClass('active-tellus');
			$('.tellus-skew').removeClass('animation-skew');
			$('.tellus span').addClass('animated pulse infinite');

			$(this).attr('id','0');
		}else {
			$('.box-rch').addClass('active-tellus');
			$('.tellus-skew').addClass('animation-skew');
			$('.tellus span').removeClass('animated pulse infinite');

			$(this).attr('id','1');
		}
    });	
	$('.tellus').mouseup(function() {
		return false;
	});
	$(document).mouseup(function() {
		$('.box-rch').removeClass('active-tellus');
		$('.tellus-skew').removeClass('animation-skew');
		$('.tellus span').addClass('animated pulse infinite');
		$('.tellus').attr('id','0');	
	});
	
	function update_tellus() {
		if ($(window).width() >= 991) {
			$('.box-rch').hover(function() {
				$('.tellus-skew').addClass('animation-skew');
			},function(){
				$('.tellus-skew').removeClass('animation-skew');
			});	
		}else if ($(window).width() <= 990) {
			$('.box-rch').hover(function() {
				$('.tellus-skew').removeClass('animation-skew');
			});
		}
	}
	update_tellus();
	$(window).resize(function() {
        update_tellus();
    }); 
	
}

//slider work
function slider_work() {

	$('[data-slide="work"]').owlCarousel({
		nav:true,
		loop:false,
		margin:10,
		navText: ['<i class="fnl fnl-left-open"></i>','<i class="fnl fnl-right-open"></i>'],
		responsive:{
			0:{
				items:3
			},
			480: {
				items:5
			},
			768:{
				items:5,
			},
			990:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	
}

//tabs work 
function tabs_work() {
	$('ul.nav-work li a').click(function(e) {
        e.preventDefault();
		$('ul.nav-work li a, .slideshow-work .current').removeClass('current');
		$(this).addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		
		/*if (currentTab == '#partner') {
			slider_work($('.partner-box-work'));
		}else if (currentTab == '#client') {
			slider_work($('.client-box-work'));
		}*/
   });	
}

//slider news 
$('.box-news').owlCarousel({
	animateOut: 'fadeOutRight',
	animateIn: 'fadeInLeft',
	items:1,
	dots: false,
	loop: true,
	nav:true,
	navText: ['<i class="fnl fnl-left-open"></i>','<i class="fnl fnl-right-open"></i>'],
	autoplay:true,
	smartSpeed:450,
	autoplayTimeout:5000,
	autoplayHoverPause:true
})

//next to wh
//scroll to element and button Back To Top
function goToByScroll(id) {
	id = id.replace("link", "");
	$('html,body').animate({
		scrollTop: $("#" + id).offset().top
	}, 'slow');
}
$(".btn-next").click(function (e) {
	e.preventDefault();
	goToByScroll($(this).attr("id"));
});

$('#introVideo').on('hide.bs.modal', function (e) {
	$('.first-line, .second-line').removeClass('animation first-rotate second-rotate');
	$('#sample-video').empty();
})

$('#introVideo').on('shown.bs.modal', function (e) {
	$('.first-line, .second-line').addClass('animation');
	setTimeout(function(){ 
		$('.first-line').addClass('first-rotate');
		$('.second-line').addClass('second-rotate');
	}, 550);
	$.getScript("http://embed.mecloud.vn/play/SLw5B7sKh5?targetId=sample-video");
})

/*$('#solution').on('hide.bs.modal', function (e) {
	$('.first-line, .second-line').removeClass('animation first-rotate second-rotate');
	$('.box-rch').addClass('active-tellus');
	$("button.tellus").attr("data-target",'');
	$('.tellus span').removeClass('animated pulse infinite');
	$('#sample-video-1').empty();
})
	
$('#solution').on('shown.bs.modal', function (e) {
	$('.first-line, .second-line').addClass('animation');
	setTimeout(function(){ 
		$('.first-line').addClass('first-rotate');
		$('.second-line').addClass('second-rotate');
	}, 550);
	$.getScript("http://embed.mecloud.vn/play/SLw5B7sKh5?targetId=sample-video-1");
	
})*/

		


