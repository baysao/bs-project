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
	
});
