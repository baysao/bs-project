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
	$(window).on('resize',function() {
		var $getHeightWindow = $(window).height();
		var $responsiveWidth;
		var $responsiveHeight;
		if ($getHeightWindow <= 768) {
			$responsiveWidth = $('#parameter').find('.playerAPI').width();
			$responsiveHeight = $('#parameter').find('.playerAPI').height();
		}
		if ($getHeightWindow > 768) {
		 $responsiveWidth = $('#parameter').find('.playerAPI').width();
		 $responsiveHeight = $('#parameter').find('.playerAPI').height();
		 
		}
		$('#objectMEME').css({width:$responsiveWidth,height:$responsiveHeight});
		getSWF("objectMEME").updateSize($responsiveWidth,$responsiveHeight);
		//console.log('responsiveWidth: ' + $responsiveWidth);
	});
	
	$('.btnExpand').on('click',function(){
		$('.playerAPI').addClass('fixMargin');
		setTimeout(function(){
            $('.playerAPI').addClass('expandPlayer');
			$('.playerAPI').removeClass('floatLeft');
			$('.bgPlayer').fadeIn();		
			$('#moveSidebar').addClass('moveSidebar');
			$('.ads1160x90').slideUp();
			
			var $getHeightWindow = $(window).height();
			if ($getHeightWindow > 768) {
				$('.playerAPI').removeClass('fixMargin');
				setTimeout(function(){
					var $expandWidth = $('#parameter').find('.expandPlayer').width();
					var $expandHeight = $('#parameter').find('.expandPlayer').height();
					//console.log('expandWidth: ' + $expandWidth);
					//console.log('expandHeight: ' + $expandHeight);
					$('#objectMEME').css({width:$expandWidth,height:$expandHeight});
					getSWF("objectMEME").updateSize($expandWidth,$expandHeight);
					
				},300);
				
			}
			
			if ($getHeightWindow <= 768) {
				$('.playerAPI').addClass('fixMargin');	
			}
        }, 200);
		
		
		$('.btnCollapse').show();	
		$('.btnExpand').hide();	
	});
	
	$('.btnCollapse').on('click',function(){
	
		$('.playerAPI').removeClass('expandPlayer');
		$('.playerAPI').removeClass('fixMargin');
		$('.bgPlayer').hide();
		$('.playerAPI').addClass('floatLeft');
		$('.ads1160x90').slideDown()
		
		var $collapseWidth = $('#parameter').find('.playerAPI').width();
		var $collapseHeight = $('#parameter').find('.playerAPI').height();
		//console.log('collapseWidth: ' + $collapseWidth);
		//console.log('collapseHeight: ' + $collapseHeight);
		$('#objectMEME').css({width:$collapseWidth,height:$collapseHeight});
		getSWF("objectMEME").updateSize($collapseWidth,$collapseHeight);
		
		
		setTimeout(function(){
            $('#moveSidebar').removeClass('moveSidebar');
        }, 200);
		
		$('.btnCollapse').hide();
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
	
	
});
