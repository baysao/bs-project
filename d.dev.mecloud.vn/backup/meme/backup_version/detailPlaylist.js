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
	
	
	/////////////////////////////////////
	//expand collapse movie player//
	////////////////////////////////////
	$playlist = $('.playlistListBox');
	$playlistContent = $('.contentPlaylist');
	var flag = true;
	var statusPlaylist = true;
	
	$('.btnExpand').on('click',function(){
		showPlaylistUI('expand',$(this));
		$('object[id*="meme_flash"]:eq(0)').get(0).showPlaylist('false');
		flag = false;
	});
	
	$('.btnCollapse').on('click',function(){
		$('object[id*="meme_flash"]:eq(0)').get(0).showPlaylist('true');
		showPlaylistUI('collapse',$(this));
		flag = true;
	});
	
	function showPlaylistUI(action,obj) {
		//*BUTTOM EXPAND*//
		obj.hide();	
		if(action == 'expand'){
			// code thu nho man hinh
			$playlist.css('right','0');
			$('.btnCollapse').show();
			setTimeout(function(){
				$('.playerAPI').addClass('expandPlayer');
				$('.bgPlayer').stop().fadeIn();		
				$('.ads1160x90').stop().slideUp();
				$('#moveSidebar').removeClass('movePlaylist');
				
				$playlist.addClass('during').animate({
					right:-355	
				});
				
				$playlistContent.addClass('contentPlaylistExpand');
				
				var $getHeightWindow = $(window).height();
				if ($getHeightWindow > 768) {
					setTimeout(function(){
						$('object[id*="meme_flash"]:eq(0)').get(0).updateSize(0,0);
						
					},300);
				}else if ($getHeightWindow <= 768) {
					$('.playerAPI').removeClass('floatLeft');
					$('.playerAPI').addClass('fixMargin');	
					$playlist.addClass('fixMargin');
					$('.playerAPI').css('margin-left','160px');
				}
        	}, 200);	
		}else if(action == 'collapse'){
			$('.btnExpand').show();
			$('.playerAPI').removeClass('expandPlayer').removeClass('fixMargin');
			$('.bgPlayer').hide();
			$('.ads1160x90').stop().slideDown()
			
			$playlist.removeClass('during').stop().fadeIn(1000);
			$playlist.removeClass('fixMargin');
			$playlist.css('right','auto');
			$playlistContent.removeClass('contentPlaylistExpand');
			
			$('.playerAPI').addClass('floatLeft');
			$('.playerAPI').css('margin-left','0px');
			
			
			
			setTimeout(function(){
				$('#moveSidebar').removeClass('moveSidebar');
				$('object[id*="meme_flash"]:eq(0)').get(0).updateSize(0,0);
			}, 200);
			
		}
			
	}
	console.log('statusPlaylist:' + statusPlaylist);
	function PlaylistUIonFlash (value) {
		var statusPlaylist = $('.playlistListBox').css('display');
		var right = $('.playlistListBox').css('right');
		var $getHeightWindow = $(window).height();
		if(statusPlaylist == 'block'){
			if(right == 'auto'){
				$playlist.hide();
				$('#moveSidebar').addClass('movePlaylist');
			}else{
				console.log($getHeightWindow);
				if(right == '-355px'){
					$playlist.show().animate({ right:0	});
					
					if ($getHeightWindow <= 768) {
						console.log('Here 355px');
						$('.playerAPI').animate({
							marginLeft:0	
						});
					}
				}else{
					$playlist.animate({ right:-355 });
					//$('.playerAPI').animate({ marginLeft:160 });
					if ($getHeightWindow <= 768) {
						console.log('Here 0px');
						$('.playerAPI').animate({
							marginLeft:160	
						});
					}
				}
				if ($getHeightWindow > 768) {
					$('.playerAPI').removeClass('floatLeft');
					$('.playerAPI').animate({
						marginLeft:0	
					});
				}
				
				
			}
		}else{
			if (right == 'auto') {
				$playlist.show();
				$('#moveSidebar').removeClass('movePlaylist');
			}else{
				$playlist.show().animate({ right:0	});
				$('.playerAPI').animate({ marginLeft:0 });
			}
		}
		
	}
	
	//show | hide playlist
	showPlaylist = function (value){
		PlaylistUIonFlash(value);
	}
	
	//resize for object
	$(window).on('resize',function() {
		var statusPlaylist = $('.playlistListBox').css('display');
		var $getHeightWindow = $(window).height();
		var right = $('.playlistListBox').css('right');
		if (right == 'auto'){
			
			if (($getHeightWindow <= 768)) {
				$('.playerAPI').css('margin-left','160px');
				console.log(flag + '< 768');
				if  (statusPlaylist == 'block') {
					$('.playerAPI').css('margin-left',0);	
				}else if (statusPlaylist == 'none') {
					console.log('margin-left 160px');
					$('.playerAPI').css('margin-left','160px');	
				}else if($('.playlistListBox').css('right') != ''){
					console.log($('.playlistListBox').css('right'));
					$('.playerAPI').css('margin-left','160px');
				}
				
			}else if (($getHeightWindow > 768)&&($('.playlistListBox').css('right') != '')) {
				console.log(flag + '> 768');
				$playlist.removeClass('fixMargin');
				$('.playerAPI').removeClass('fixMargin');
				$('.playerAPI').css('margin-left',0);
			}
			
		}
		$('object[id*="meme_flash"]:eq(0)').get(0).updateSize(0,0);
	});
	
	
	
	
	
});



