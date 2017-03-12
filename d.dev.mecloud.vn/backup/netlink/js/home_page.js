function loadWeb() {

	var imageHome = ['images/bg-home.png'];
				
	var calcPercent;
	
	$progress = $('.logoBlue');
	$percent = $('.percentage');
	
	preload(imageHome);
	
	$(window).load(function(){
		$progress.animate({
			width: '100%'	
		},100,function(){
				
			$percent.text('100%');
			clearInterval(calcPercent);
			
			animateLogo();
			
			animateStartWeb();
			
				
		});
		
		function animateLogo() {
			$('.preloaderLogo').addClass('animationLogo');
			
			setInterval(function(){ $('.preloaderLogo').remove() }, 800);
		
		}
		
		function animateStartWeb() {
			$('.home-page').addClass('animate');	
		}
			
	});
	
	function preload(imgArray) {
		var increment = Math.floor(100/imgArray.length);
		$(imgArray).each(function() {
			$('<img>').attr("src", this).load(function(){
				$progress.animate({
					width: '+=' + increment + '%'	
				},100);	
			});
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
			if (getWidthWindow < 990) {
				$('.home-page').css({
					'overflow-y':'inherit'
				});
			}
			$(this).attr('id','0');
		}else {
			$('.box-nav-menu').addClass('animation');
			$(this).find('span').addClass('animation');	
			if (getWidthWindow < 990) {
				$('.home-page').css({
					'overflow-y':'hidden'
				});
			}
			$(this).attr('id','1');
		}
	});
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
			$(this).attr('id','0');
		}else {
			$('.box-rch').addClass('active-tellus');
			$('.tellus-skew').addClass('animation-skew');
			$(this).attr('id','1');
		}
    });	
	$('.tellus').mouseup(function() {
		return false;
	});
	$(document).mouseup(function() {
		$('.box-rch').removeClass('active-tellus');
		$('.tellus-skew').removeClass('animation-skew');
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

//responsive mobile fix height
function responsive_mobile() {
	
	function update_size_mobile() {
		var device_w = $(window).width(),
			device_h = $(window).height();
			
		var $plz_tellus_box = $('.right-content-home'),
			$content_wh = $('.content-wh'),
			$header = $('header');
			$slogan = $('.slogan');
			$btns_home = $('.btns-home');
			
		if (device_w < 481) {
			//console.log("width:" + device_w);
			//console.log("height:" + device_h);
			var getHeight_content_tellus = ($content_wh.height()*2 + 37),
				getHeight_content_home = ($header.height() + $slogan.height() + 125);
				
			$plz_tellus_box.css({
				height:device_h,
				'padding-top': (device_h - getHeight_content_tellus)/3  + 'px'
			});
			//console.log(getHeight_content_home);
			$btns_home.css ({
				'margin-bottom': (device_h - getHeight_content_home)*0.75  + 'px'	
			});
			$slogan.css ({
				'margin-top': (device_h - getHeight_content_home)*0.25  + 'px'	
			});
		}else if (device_w >= 480) {
			$plz_tellus_box.css({
				height:'auto',
				'padding-top': 40
			});
			$btns_home.css ({
				'margin-bottom': 40	
			});
			$slogan.css ({
				'margin-top': 0	
			});
		}
	}
	
	update_size_mobile();
	$(window).resize(function() {
		update_size_mobile();
	}); 
}


//slider work
function slider_work(name_work) {
	name_work.owlCarousel({
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
				items:4,
			},
			990:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
}

//tabs work 
function tabs_work() {
	$('ul.nav-work li a').click(function(e) {
        e.preventDefault();
		$('ul.nav-work li a, .slideshow-work .current').removeClass('current');
		$(this).addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		
		if (currentTab == '#partner') {
			slider_work($('.partner-box-work'));
		}else if (currentTab == '#client') {
			slider_work($('.client-box-work'));
		}
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
	