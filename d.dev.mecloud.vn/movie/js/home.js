$(document).ready(function() {
	
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