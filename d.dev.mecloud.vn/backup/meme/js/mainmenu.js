$(document).ready(function() {
	var hidWidth;
	var scrollBarWidths = 40;
	var mainmenu_page= 1;
	//if ton tai cookie thi layer
	if($.cookie('mainmenu_page')){
		mainmenu_page= $.cookie('mainmenu_page');
	}
    $.cookie('mainmenu_page', mainmenu_page);

	var widthOfList = function(){
	  var itemsWidth = 0;
	  $('.list li').each(function(){
		var itemWidth = $(this).outerWidth();
		itemsWidth+=itemWidth;
	  });
	  return itemsWidth;
	};
	
	var widthOfHidden = function(){
	  return (($('.main-menu').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
	};
	
	var getLeftPosi = function(){
	  return $('.list').position().left;
	};
	
	var reAdjust = function(){
	  if (($('.main-menu').outerWidth()) < widthOfList()) {
		$('.scroller-right').show();
	  }
	  else {
		$('.scroller-right').hide();
	  }
	  
	  if (getLeftPosi()<0) {
		$('.scroller-left').show();
	  }
	  else {
		$('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
		$('.scroller-left').hide();
	  }
	}
	
	reAdjust();
	
	$(window).on('resize',function(e){  
		reAdjust();
	});
	
	$('.scroller-right').click(function() {
	  mainmenu_page++;
        $.cookie('mainmenu_page', mainmenu_page);

	  $('.scroller-left').fadeIn('slow');
	  $('.scroller-right').fadeOut('slow');
	  
	  $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
	
	  });
	});
	
	$('.scroller-left').click(function() {
		mainmenu_page--;
        $.cookie('mainmenu_page', mainmenu_page);

		$('.scroller-right').fadeIn('slow');
		$('.scroller-left').fadeOut('slow');
	  
		$('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){
		
		});
	});

    console.log(mainmenu_page);

	if(mainmenu_page>1){
		$('.scroller-left').fadeIn('slow');
		$('.scroller-right').fadeOut('slow');

		var i= 1;
		for(i=1; i<mainmenu_page; i++){
			$('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){ });
		}
	}
});	