
$(function () {
	
	function expandMenu() {
		$('.sidebar').animate({left:0},200);
		$('.btn-expand').animate({left:190},200);	
		$('.wrapperContent').css({overflow:'hidden'});
		$('.bg-overlay').delay(200).fadeIn();
		$('.btn-expand').addClass('closeBack');
	}
	function collapseMenu() {
		$('.sidebar').delay(200).animate({left:-240},200);
		$('.btn-expand').delay(150).animate({left:0},200);	
		$('.wrapperContent').attr('style','');
		$('.bg-overlay').fadeOut();
		$('.btn-expand').removeClass('closeBack');
	}
	
	$('.btn-expand').click(function(){
		var	expandID = $(this).attr('id');
		if (expandID == 1) {
			collapseMenu();	
			$(this).attr('id','0');
		}else {
			
			expandMenu();	
			$(this).attr('id','1');
		}
	});
	
	$('.bg-overlay').click(function(){
		collapseMenu();
		$('.btn-expand').attr('id','0');
	});
	
	
	
	
	
	///////////////////////////////////////////////////////////////////////
	//fixed sidebar and header
	///////////////////////////////////////////////////////////////////////
	function updateHeader() {
			$('.header').width($('.header').parent().width());
		$( window ).resize(function() {
			$('.header').width($('.header').parent().width());
		});
	}
	//updateHeader();
	
	
	//disable scrollbar
	function disableScrollBack(elemenScroll) {
		elemenScroll.bind('mousewheel DOMMouseScroll', function(e) {
			var scrollTo = null;
		
			if (e.type == 'mousewheel') {
				scrollTo = (e.originalEvent.wheelDelta * -1);
			}
			else if (e.type == 'DOMMouseScroll') {
				scrollTo = 10 * e.originalEvent.detail;
			}
		
			if (scrollTo) {
				e.preventDefault();
				$(this).scrollTop(scrollTo + $(this).scrollTop());
			}
		});
	}
	disableScrollBack($('.scrollable'));
	
	//limit strim notification
    $(".strimTitleVideo").each(function(i){
        len=$(this).text().length;
        if(len>40)
        {
            $(this).text($(this).text().substr(0,40)+'...');
        }
    });
	
	
	
	
	
	//Nav sidebar	
	$('#nav > li > a.active').closest('li').find('ul').show();
	$('#nav > li > a').click(function(){
	  if ($(this).attr('class') != 'active'){
		  $('#nav li ul').slideUp();
		  $(this).next().slideToggle();
		  $('#nav li a').removeClass('active');
		  $(this).addClass('active');
		  
		  $('#nav li a .icoDown').removeClass('animateArrow');
		  $(this).find('.icoDown').addClass('animateArrow');
	  }else if ($(this).attr('class') == 'active'){
		  $('#nav li a').removeClass('active');
		  $('#nav li ul').slideUp();
		  $(this).find('.icoDown').removeClass('animateArrow');
	  }
	});
	
	//tabs Global
	$('.tabs li a').click(function(e){
		e.preventDefault();
		$('.tabs li, .tabsContentGlobal .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		
	});
	
	//tooltip Global
	$('.tooltipText').hover(function(){
			// Hover over code
			var title = $(this).attr('title');
			$(this).data('tipText', title).removeAttr('title');
			$('<p class="tooltipGlobal"></p>')
			.text(title)
			.appendTo($(this))
			.fadeIn('slow');
			
			var widthTooltip = $('.tooltipGlobal').width();
			var widthIcon    = $(this).width();
			var centerTooltip = (widthTooltip/2) - (widthIcon/2);
			//console.log(widthTooltip);
			//console.log(widthIcon);
			//console.log(centerTooltip);
			$('.tooltipGlobal').css('left', - centerTooltip ) ;
			
	}, function() {
			// Hover out code
			$(this).attr('title', $(this).data('tipText'));
			$('.tooltipGlobal').remove();
	});
	
	//tooltip Global Left
	$('.tooltipTextLeft').hover(function(){
			// Hover over code
			var title = $(this).attr('title');
			$(this).data('tipText', title).removeAttr('title');
			$('<p class="tooltipGlobal"></p>')
			.text(title)
			.appendTo($(this))
			.fadeIn('slow');
			
			
	}, function() {
			// Hover out code
			$(this).attr('title', $(this).data('tipText'));
			$('.tooltipGlobal').remove();
	});
	
	
	///////////////////////////////////////////////////////////////////////
	//pop up 
	///////////////////////////////////////////////////////////////////////
	
	$('[data-popup-target]').click(function (e) {
		e.preventDefault();
		$('html').addClass('overlay');
		var activePopup = $(this).attr('data-popup-target');
		$(activePopup).addClass('visible animatePopup');
 
	});
 
	$(document).keyup(function (e) {
		if (e.keyCode == 27 && $('html').hasClass('overlay')) {
			clearPopup();
		}
	});
 
	$('.popup-exit, .clearPopup, .popup-overlay').click(function () {
		clearPopup();
	});
  
	function clearPopup() {
		$('.popup.visible').addClass('transitioning').removeClass('visible animatePopup');
		$('html').removeClass('overlay');
 
		setTimeout(function () {
			$('.popup').removeClass('transitioning');
		}, 200);
	}
	
	
	///////////////////////////////////////////////////////////////////////
	//on click dropdownDiv 
	///////////////////////////////////////////////////////////////////////
	var $dropdown = $(".dropdownDiv");
	$(".btnDropdown").click(function(e) {
		e.preventDefault();
		$('body').find('.dropdownDiv').hide().css('opacity','0');
		$thisDropdown = $(this).closest('.dropdown').find('.dropdownDiv');
		var X=$(this).attr('id');
		if(X==1) {
			$thisDropdown.animate({'margin-top': 0 + 'px', opacity: 0});
			$(this).attr('id', '0');
		}
		else {
			$thisDropdown.show();
			$thisDropdown.animate({'margin-top': 10 + 'px', opacity: 1});
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
		$('body').find('.dropdownDiv').hide().css('margin-top','0');
		$(".btnDropdown").attr('id', '');
	});
	
	//switch option
	$('.switch_options').each(function() {

		//This object
		var obj = $(this);

		var enb = obj.children('.switch_enable'); //cache first element, this is equal to ON
		var dsb = obj.children('.switch_disable'); //cache first element, this is equal to OFF
		var input = obj.children('input'); //cache the element where we must set the value
		var input_val = obj.children('input').val(); //cache the element where we must set the value

		/* Check selected */
		if( 0 == input_val ){
			dsb.addClass('selected');
		}
		else if( 1 == input_val ){
			enb.addClass('selected');
		}

		//Action on user's click(ON)
		enb.on('click', function(){
			$(dsb).removeClass('selected'); //remove "selected" from other elements in this object class(OFF)
			$(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(ON) 
			$(input).val(1).change(); //Finally change the value to 1
		});

		//Action on user's click(OFF)
		dsb.on('click', function(){
			$(enb).removeClass('selected'); //remove "selected" from other elements in this object class(ON)
			$(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(OFF) 
			$(input).val(0).change(); // //Finally change the value to 0
		});

	});
	
	
  
});