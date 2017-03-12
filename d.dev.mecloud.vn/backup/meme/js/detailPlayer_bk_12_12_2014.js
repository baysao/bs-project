$(document).ready(function() {

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
	if (testMobile){
		$('.btnExpand, .btnCollapse').hide();
		$('.server').css('right','15px');
	} 
	
	var getObj = $('object[id*="meme_flash"]:eq(0)').get(0);
	var flag = true;
	$('.btnExpand').on('click',function(){
		flag = false;
		$('.playerAPI').addClass('fixMargin');
			
		$('.playerAPI').addClass('expandPlayer');
		$('.playerAPI').removeClass('floatLeft');
				
		$('#moveSidebar').addClass('moveSidebar');	
			
		setTimeout(function(){
            
			//$('.ads1160x90').slideUp();
			
			var $getHeightWindow = $(window).height();
			if ($getHeightWindow > 768) {
				$('.playerAPI').removeClass('fixMargin');
			}
			
			if ($getHeightWindow <= 768) {
				$('.playerAPI').addClass('fixMargin');	
				$('.bgPlayer').fadeIn();
			}
			
			if (getObj != null) {
				  getObj.updateSize(0,0);
			  }
			
        }, 200);
		
		
		$('.btnCollapse').show();	
		$('.btnExpand').hide();	
	});
	
	$('.btnCollapse').on('click',function(){
		flag = true;
		$('.playerAPI').removeClass('expandPlayer').removeClass('fixMargin').addClass('floatLeft');
		$('.bgPlayer').hide();
		//$('.ads1160x90').slideDown()
		
		setTimeout(function(){
            $('#moveSidebar').removeClass('moveSidebar');
        }, 200);
		
		setTimeout(function(){
			if (getObj != null) {
				getObj.updateSize(0,0);
			}
		}, 400);
		
		$('.btnCollapse').hide();
		$('.btnExpand').show();	
	});


	$(window).on('resize',function() {
		var $getHeightWindow = $(window).height();
		
		if (($getHeightWindow <= 768) && (flag == false)) {
			$('.playerAPI').addClass('fixMargin');
			$('.bgPlayer').fadeIn();
		}else if (($getHeightWindow > 768) && (flag == false)) {
			$('.playerAPI').removeClass('fixMargin');
			$('.bgPlayer').hide();
		}
		
		if (getObj != null) {
			  getObj.updateSize(0,0);
		  }
	});








	//tabs movie detail
	$('.tab li a').click(function(e){
		$('.tab li, .tabsContent .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		e.preventDefault();
	
	});
	
	//tabs channel info
	$( window ).resize(function() {
		var slideWidth = $('.slideChannel').width();
		var currentTabResize = $('.tabCI li.current a').attr('id');
		if (currentTabResize == 1) {
			$('.slideChannelWrapper').css('left', 0);
		}
		if (currentTabResize == 2) {
			$('.slideChannelWrapper').css('left', - slideWidth);
		}
	});
	$('.tabCI li a').click(function(e){
		var slideWidth = $('.slideChannel').width();
		
		$('.tabCI li').removeClass('current');
		
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('id');
		
		if (currentTab == 1) {
			$('.slideChannelWrapper').animate({
				left: 0
			});
		}
		if (currentTab == 2) {
			$('.slideChannelWrapper').animate({
				left: - slideWidth
			});
		}
		e.preventDefault();
	});
	
	
	
	//readmore desc movie detail
	var w = $('#outer');
	var getCurrentHeight = $('#inner').outerHeight();
	console.log('as' + getCurrentHeight);
	if (getCurrentHeight <= 50) {
		$('.descLess').hide();
		$('.descMore').hide();
	}
	$('.descMore').on('click',function(e){
		e.preventDefault();
		w.css({
			'max-height': getCurrentHeight + 'px',
		});
		$('.descLess').show();
		$('.descMore').hide();
	});
	$('.descLess').on('click',function(e){
		e.preventDefault();
		w.css({
			'max-height': 42 + 'px',
		});
		$('.descLess').hide();
		$('.descMore').show();
	});
	
	//channel Info DESC
	var getCurrentHeightCI = $('#innerCI').outerHeight();
	console.log(getCurrentHeightCI);
	if (getCurrentHeightCI <= 40) {
		$('.descLessCI').hide();
		$('.descMoreCI').hide();
	}
	var wrapper = $('#outerCI');
	$('.descMoreCI').on('click',function(e){
		e.preventDefault();
		wrapper.css({
			'max-height': getCurrentHeightCI + 'px',
		});
		$('.descLessCI').show();
		$('.descMoreCI').hide();
	});
	$('.descLessCI').on('click',function(e){
		e.preventDefault();
		wrapper.css({
			'max-height': 40 + 'px',
		});
		$('.descLessCI').hide();
		$('.descMoreCI').show();
	});
	
	
	
});
