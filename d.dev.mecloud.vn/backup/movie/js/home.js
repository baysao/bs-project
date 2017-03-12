$(document).ready(function() {
	///////////////////////////////////////////////////////////////////////
	//tooltipMeme
	//////////////////////////////////////////////////////////////////////
	for (var i = 1;i < 200;i++) {
		$myTooltip = $('#tooltipMeme' + i)
		$myTooltip.tooltipster({
			position: 'right',
			offsetX: 7,
			interactive: true,
			content: $('<div class="tooltipInfo"><p class="tooltipInfoEpisode">Tập 10/40</p><a href="#" class="tooltipInfoTitle">Bí kíp luyện rồng 2</a><a href="#" class="tooltipInfoChannel">Lotte Cinema</a><p class="tooltipInfo1Desc">Vốn là một chương trình thực tế nổi tiếng, Grandpas Over Flowers sẽ xuất hiện phiên bản phim truyền hình với... </p><a href="#" class="btn tooltipInfoPlay">Xem Video</a></div>')
		});
	}
	
	//tooltip TVshow
	for (var i = 1;i < 200;i++) {
		$myTooltip = $('#tooltipTVshow' + i)
		$myTooltip.tooltipster({
			position: 'right',
			offsetX: 7,
			interactive: true,
			content: $('<div class="tooltipInfo"><a href="#" class="tooltipInfoTitle">The Voice Kid 2015</a><p class="tooltipInfo1Desc">Vốn là một chương trình thực tế nổi tiếng, Grandpas Over Flowers sẽ xuất hiện phiên bản phim truyền hình với... </p><a href="#" class="btn tooltipInfoPlay">Xem ngay</a></div>')
		});
	}
	
	
	///////////////////////////////////////////////////////////////////////
	//showcase
	///////////////////////////////////////////////////////////////////////
	$('#showcase').on('initialized.owl.carousel', function() {
		var $this = $(this);
		$this.hover(function() {
			
			$this.find('.owl-prev').stop().animate({
				left:0	
			});
			$this.find('.owl-next').stop().animate({
				right:0	
			});	
			$this.find('.btnPlayShowcase').stop().fadeIn();
		}
		,function(){
			$this.find('.owl-prev').stop().animate({
				left:-90	
			});
			$this.find('.owl-next').stop().animate({
				right:-90	
			});		
			$this.find('.btnPlayShowcase').stop().fadeOut();
		});
	})
	$('#showcase').owlCarousel({
		items:1,
		nav:true,
		loop:true,
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});
	
	///////////////////////////////////////////////////////////////////////
	//headline
	///////////////////////////////////////////////////////////////////////
	var headline = $('.headlineContent').newsTicker({
		row_height: 18,
		max_rows: 1,
		duration: 4000,
		prevButton: $('#headlinePrev'),
		nextButton: $('#headlineNext')
	});
	
	
	
	
	
});