
$(document).ready(function() {
	//tabs movie detail
	$('.tab li a').click(function(e){
		$('.tab li, .tabsContent .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		e.preventDefault();
	
	});
	
	//readmore desc movie detail
	var w = $('#outer');
	$('.descMore').on('click',function(e){
		e.preventDefault();
		var getCurrentHeight = $('#inner').outerHeight();
		w.animate({
			height: getCurrentHeight + 'px',
		});
		$('.descLess').show();
		$('.descMore').hide();
	});
	$('.descLess').on('click',function(e){
		e.preventDefault();
		w.animate({
			height: 62 + 'px',
		});
		$('.descLess').hide();
		$('.descMore').show();
	});
	
	//info playlist
	$('.coverMovie').on('click',function(){
		$(this).hide();
		$('#player').show();
		$('.btnExpand').show();	
	});
	
	//slider same category
	slideSameCat = $('#slideSameCat');
	slideSameCat.on('initialized.owl.carousel', function(event) {
		var items = event.item.count;
		var currentItem = event.item.index;
		if (items <= 4) {
			slideSameCat.find('.owl-nav').hide();
		}
		if(currentItem == 0) {
			slideSameCat.find('.owl-prev').hide();
		}	
	})
	slideSameCat.on('translated.owl.carousel', function(event) {
		var items = event.item.count;
		var currentItem = event.item.index;
		var maximumItem =  items - event.page.size;
		if(currentItem == maximumItem){
		 $(this).find('.owl-next').hide();
		}
		
		if(currentItem < maximumItem){
		 $(this).find('.owl-next').show();
		 
		}
		if(currentItem == 0){
		  $(this).find('.owl-prev').hide();
		}
		if(currentItem > 0){
		  $(this).find('.owl-prev').show();;
		}
	})
	slideSameCat.owlCarousel({
		items:4,
		margin:20,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{0:{items:3,slideBy:3},1366:{items:4,slideBy:4}}
	})
	
	slideSameCat.on('resized.owl.carousel', function(event) {
		var items = event.item.count;
		var currentItem = event.item.index;
		var maximumItem =  items - event.page.size;
		//console.log(event.item);
		//console.log(event.page);
		if(currentItem == maximumItem){
		 $(this).find('.owl-next').hide();
		}
		if(currentItem < maximumItem){
		 $(this).find('.owl-next').show();
		 
		}
		if(currentItem == 0){
		  $(this).find('.owl-prev').hide();
		}
		if(currentItem > 0){
		  $(this).find('.owl-prev').show();;
		}
	})
	
	
	
	//Comment script
	$('.inputPost, .inputPostSub').on('click',function(){
		$('body').find('.arrowRight').removeClass('active');	
		$(this).parent().find('.arrowRight').addClass('active');
		$(this).parent().find('.btn').show();		
	});
	$('.inputPost, .inputPostSub').mouseup(function() {
		return false
	});
	$(document).mouseup(function() {
		$('body').find('.arrowRight').removeClass('active');	
	});
	
	$('.btnReply').on('click',function(e){
		e.preventDefault();
		$(this).parent().find('.commentsPostSub').slideToggle();	
	});
	
	//btnMore comment
	$(document).on('mouseup', function() {
        $('body').find('.btnMoreAction').hide();
		$('body').find('.btnMore').hide();
    });
    $('.btnMore').on('click', function() {
		$(this).parent().find('.btnMoreAction').show();
		$(this).css('display','inline-block');
    });
	
	//add scrollbar
	$('.addScrollbar').perfectScrollbar({maxScrollbarLength:70,wheelSpeed: 0.5});
	
	//expand collapse movie player
	function getSWF(movieName) 
	{ 
		if (navigator.appName.indexOf("Microsoft") != -1) 
		{ 
			return window[movieName]; 
		} 
		else 
		{ 
			return document[movieName]; 
		} 
	} 
	$playlist = $('.playlistListBox');
	$playlistContent = $('.contentPlaylist');
	var flag = true;
	$('.btnExpand').on('click',function(){
		getSWF("objectMEME").showPlaylist('false');
		hidePlaylistUI();
		flag = false;
	});
	function hidePlaylistUI() {
		setTimeout(function(){
            $('.playerAPI').addClass('expandPlayer');
			$('.bgPlayer').stop().fadeIn();		
			$('.ads1160x90').stop().slideUp();
			$('#moveSidebar').removeClass('movePlaylist');
			
			$playlist.addClass('during').animate({
				right:-320	
			});
			
			
			$playlistContent.addClass('contentPlaylistExpand');
			
			var $getHeightWindow = $(window).height();
			if ($getHeightWindow > 768) {
				setTimeout(function(){
					var $expandWidth = $('#parameter').find('.expandPlayer').width();
					var $expandHeight = $('#parameter').find('.expandPlayer').height();
					console.log('expandWidth: ' + $expandWidth);
					console.log('expandHeight: ' + $expandHeight);
					$('#objectMEME').css({width:$expandWidth,height:$expandHeight});
					getSWF("objectMEME").updateSize($expandWidth,$expandHeight);
					
				},300);
			}
			if ($getHeightWindow <= 768) {
				$('.playerAPI').removeClass('floatLeft');
				$('.playerAPI').addClass('fixMargin');	
				$playlist.addClass('fixMargin');
				$('.playerAPI').css('margin-left','160px');
			}
        }, 200);
		
		
		$('.btnCollapse').show();	
		$('.btnExpand').hide();		
	}
	
	$('.btnCollapse').on('click',function(){
		getSWF("objectMEME").showPlaylist('true');
		showPlaylistUI();
		flag = true;
	});
	function showPlaylistUI() {
		$('.playerAPI').removeClass('expandPlayer');
		$('.playerAPI').removeClass('fixMargin');
		$('.bgPlayer').hide();
		$('.ads1160x90').stop().slideDown()
		
		$playlist.removeClass('during').stop().fadeIn(1000);
		$playlist.removeClass('fixMargin');
		$playlistContent.removeClass('contentPlaylistExpand');
		$playlist.removeClass('fixMargin');
		
		var $collapseHeight = $('#parameter').find('.playerAPI').height();
		
		var $collapseWidth = $('#parameter').find('.playerAPI').width();
		$('.playerAPI').addClass('floatLeft');
		$('.playerAPI').css('margin-left','0px');
		
		setTimeout(function(){
            $('#moveSidebar').removeClass('moveSidebar');
			console.log('collapseWidth: ' + $collapseWidth);
			console.log('collapseHeight: ' + $collapseHeight);
			$('#objectMEME').css({width:$collapseWidth,height:$collapseHeight});
			getSWF("objectMEME").updateSize($collapseWidth,$collapseHeight);
        }, 200);
		$('.btnCollapse').hide();
		$('.btnExpand').show();	
	}
	
	
	
	
	function hidePlaylistUIonFlash () {
		var $getHeightWindow = $(window).height();
		if (flag == true) {
			$playlist.hide();
			$('#moveSidebar').addClass('movePlaylist');
		}
		if ((flag == false) && ($getHeightWindow <= 768)) {
			$playlist.animate({
				right:-320	
			});
			$('.playerAPI').animate({
				marginLeft:160	
			});
		}
		if ((flag == false) && ($getHeightWindow > 768)) {
			$('.playerAPI').removeClass('floatLeft');
			$playlist.animate({
				right:-320	
			});
			$('.playerAPI').animate({
				marginLeft:0	
			});
		}
		
	}
	function showPlaylistUIonFlash () {
		var $getHeightWindow = $(window).height();
		if (flag == true) {
			$playlist.show();
			$('#moveSidebar').removeClass('movePlaylist');
		}
		if ((flag == false) && ($getHeightWindow <= 768)) {
			$playlist.show().animate({
				right:0,
			});
			$('.playerAPI').animate({
				marginLeft:0	
			});
			
		}
		if ((flag == false) && ($getHeightWindow > 768)) {
			$playlist.show().animate({
				right:0	
			});
			$('.playerAPI').animate({
				marginLeft:0	
			});
		}
		
		
	}
	
	//show | hide playlist
	showPlaylist = function (value){
		if(value == true) {
			//console.log("show playlist");
			showPlaylistUIonFlash();
		}else{
			//console.log("hide playlist");
			hidePlaylistUIonFlash();
		}
	}
	
	//resize for object
	$(window).on('resize',function() {
		var $getHeightWindow = $(window).height();
		var $responsiveWidth = $('#parameter').find('.playerAPI').width();
		var $responsiveHeight = $('#parameter').find('.playerAPI').height();
		if (($getHeightWindow <= 768) && (flag==false)) {
			$playlist.addClass('fixMargin');
			$('.playerAPI').addClass('fixMargin');
			
			$('.playerAPI').css('margin-left','160px');
			
			$('#objectMEME').css({width:$responsiveWidth,height:$responsiveHeight});
			getSWF("objectMEME").updateSize($responsiveWidth,$responsiveHeight);
		}
		if (($getHeightWindow > 768) && (flag==false)) {
			$('.playerAPI').removeClass('fixMargin');
			
			$('.playerAPI').css('margin-left','0px');
			
			$('#objectMEME').css({width:$responsiveWidth,height:$responsiveHeight});
			getSWF("objectMEME").updateSize($responsiveWidth,$responsiveHeight);
		}
		
			
		
		//console.log('responsiveWidth: ' + $responsiveWidth);
	});
});


