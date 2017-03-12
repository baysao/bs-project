$(document).ready(function() {
	
	////scroll to element and button Back To Top
    function goToByScroll(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }
    $(".scrollToElement").click(function (e) {
        e.preventDefault();
        goToByScroll($(this).attr("id"));

    });
	
	////calling menu mobile
	$('.iconMenu').click(function(){
		$('.pageWrapper').css('margin-left','230px');
		$('#menuMobile').css('left','0');
		$('.bgOverlay').fadeIn();
	});
	
	////calling searchBox
	$('.iconSearch').click(function(){
		$('.WboxSearch').css('top','0');
		$('.bgOverlayS').fadeIn();
	});
	
	$('.btnDelete').click(function(){
		$('.inputSearch').val('');
		//console.log('sds');
	});

	////overlay click event
	$('.bgOverlay').click(function(){
		$('.pageWrapper').css('margin-left','0');
		$('#menuMobile').css('left','-230px');
		$(this).fadeOut();
	});
	
	$('.bgOverlayS').click(function(){
		$(this).fadeOut();
		$('.WboxSearch').css('top','-53px');
	});
	$('.btnCancel').click(function(){
		$('.WboxSearch').css('top','-53px');
		$('.bgOverlayS').fadeOut();
	});

	
	////tabs movie detail
	$('.tab li .linkTotab').click(function(e){
		$('.tab li, .tabsContent .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		e.preventDefault();
	
	});
	
	////tabs channel info
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
	
	
	
	////readmore desc movie detail
	var w = $('#outer');
	var getCurrentHeight = $('#inner').outerHeight();
	console.log('as' + getCurrentHeight);
	if (getCurrentHeight <= 68) {
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
			'max-height': 58 + 'px',
		});
		$('.descLess').hide();
		$('.descMore').show();
	});
	
	function goToByScrollPLM(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 15
        }, 'slow');
    }
	////expand Playlist on Mobile	
	$('.expandPlaylist').click(function() {
		
		var x = $(this).attr('id');
		
		if (x==1) {
			$('#contentPlaylistM').css({
				'max-height': '0'
			});
			$(this).attr('id', '0');
		}else {
			$('#contentPlaylistM').css({
				'max-height': '841px'
			});
			
			$(this).attr('id', '1');
		}
		goToByScrollPLM($(this).attr("id"));
	});
	
	////hide loadmorePLM
	var totalVideo = $('#contentPlaylistM ul li').length;
	//console.log('total video:' + totalVideo)
	if (totalVideo < 9) {
		$('.loadmorePLM').hide();
	}
	
	$('.collapsePlaylist').click(function () {
		goToByScrollPLM($(this).attr("id"));
		$('#contentPlaylistM').css({
			'max-height': '0'
		});
		$('.expandPlaylist').attr('id', '0');
    });
	
	
});
