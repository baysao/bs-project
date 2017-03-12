$(document).ready(function() {
	//tab player
	 $(".thumbHL a").hover(function(event) {
        event.preventDefault();
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		var player = $(this).attr("href");
		$(".playerContent").not(player).hide();
        $(player).show();
    });
	
	///////////////////////////////////////////////////////////////////////
	//Slider channel
	///////////////////////////////////////////////////////////////////////
	for(i=1;i<200;i++){
		slideSmall = $('#slide' + i);
		slideSmall.on('initialized.owl.carousel', function(event) {
			var items = event.item.count;
			var currentItem = event.item.index;
			if (items <= 4) {
				slideSmall.find('.owl-nav').hide();
			}
			if(currentItem == 0) {
				slideSmall.find('.owl-prev').hide();
			}	
			
			$('.owl-controls').hide();
			$('.sliderChannel').hover(function(){
				$(this).find('.owl-controls').show();
			},function(){
				$(this).find('.owl-controls').hide();
			});
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
			items:4,
			margin:20,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{0:{items:2,slideBy:2},768:{items:3,slideBy:3},991:{items:4,slideBy:4}}
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
	
	
	
	
	
	
	
			
});