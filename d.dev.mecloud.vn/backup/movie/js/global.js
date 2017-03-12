$(document).ready(function() {
	
	///////////////////////////////////////////////////////////////////////
	//navMenu
	///////////////////////////////////////////////////////////////////////
	var top = $('#navMenu').offset().top;
	$(window).scroll(function (event) {
	  var y = $(this).scrollTop();
	  if (y >= top)
		$('#navMenu').addClass('fixed');
	  else
		$('#navMenu').removeClass('fixed');
		
	  $('#navMenu').width($('#navMenu').parent().width());
	});
	$( window ).resize(function() {
	  $('#navMenu').width($('#navMenu').parent().width());
	  //console.log($('#navMenu').width()); 
	});
	
	///////////////////////////////////////////////////////////////////////
	//on click dropdownDiv 
	///////////////////////////////////////////////////////////////////////
	var $dropdown = $(".dropdownDiv");
	$(".btnDropdown").click(function() {
		$('body').find('.dropdownDiv').hide().css('opacity','0');
		$thisDropdown = $(this).closest('.dropdown').find('.dropdownDiv');
		var X=$(this).attr('id');
		if(X==1) {
			//$(".dropdownDiv").hide();
			$thisDropdown.animate({'margin-top': 0 + 'px', opacity: 0}, 300, function(){
				$(this).css({'margin-top':''}).removeClass('open');
			});
			$(this).attr('id', '0');
		}
		else {
			//$(".dropdownDiv").show();
			$thisDropdown.show();
			$thisDropdown.css({'margin-top': 0 + 'px', opacity: 0}).animate({'margin-top': 16 + 'px', opacity: 1}, 300, function(){
            	$(this).css({'margin-top':''});
			});
			$(this).attr('id', '1');
		}
	});
	
	//Mouse click on sub menu
	$(".dropdownDiv").mouseup(function() {
		return false
	});
	
	//Mouse click on my account link
	$(".btnDropdown").mouseup(function() {
		return false
	});
	
	//Document Click
	$(document).mouseup(function() {
		$('body').find('.dropdownDiv').hide();
		$dropdown.animate({'margin-top': 0 + 'px', opacity: 0}, 300, function(){
			$(this).css({'margin-top':''}).removeClass('open');
		});
		$(".btnDropdown").attr('id', '');
	});
	
	
	
	//scroll to element and button Back To Top
    function goToByScroll(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top -60
        }, 'slow');
    }
    $(".scrollToElement").click(function (e) {
        e.preventDefault();
        goToByScroll($(this).attr("id"));

    });
	
	
	//backtotop
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
			$('.btnBackToTop').addClass('animated');
        } else {
			$('.btnBackToTop').removeClass('animated');
        }
    });
	
	
	///////////////////////////////////////////////////////////////////////
	//Slide Meme
	///////////////////////////////////////////////////////////////////////
	for(i=1;i<200;i++){
		slideSmall = $('#slide' + i);
		slideSmall.on('initialized.owl.carousel', function(event) {
			var items = event.item.count;
			var currentItem = event.item.index;
			if (items <= 5) {
				slideSmall.find('.owl-nav').hide();
			}
			if(currentItem == 0) {
				slideSmall.find('.owl-prev').hide();
			}	
		})
		slideSmall.on('translated.owl.carousel', function(event) {
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
		slideSmall.owlCarousel({
			items:5,
			margin:20,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{0:{items:4,slideBy:4},1366:{items:5,slideBy:5}}
		})
		
		slideSmall.on('resized.owl.carousel', function(event) {
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
	}
	///////////////////////////////////////////////////////////////////////
	//Slide Meme Channel Top
	///////////////////////////////////////////////////////////////////////
	for(i=1;i<20;i++){
		slideSmallChannel = $('#slideMemeChannel' + i);
		slideSmallChannel.on('initialized.owl.carousel', function(event) {
			var items = event.item.count;
			var currentItem = event.item.index;
			if (items <= 2) {
				slideSmallChannel.find('.owl-nav').hide();
			}
			if(currentItem == 0) {
				slideSmallChannel.find('.owl-prev').hide();
			}	
		})
		slideSmallChannel.on('translated.owl.carousel', function(event) {
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
		slideSmallChannel.owlCarousel({
			items:2,
			margin:20,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		})
		
		slideSmallChannel.on('resized.owl.carousel', function(event) {
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
	}
	
});