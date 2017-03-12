jQuery(document).ready(function($) {

	$('nav.sub-nav li').on('click', function(event){
		event.preventDefault();
		


		var target = $(this),
			sectionTarget = target.data('menu');
		if( !target.hasClass('nl-selected') ) {
			target.addClass('nl-selected').siblings('.nl-selected').removeClass('nl-selected');
			loadNewContent(sectionTarget);

			var url = sectionTarget + ".html";
			history.pushState(sectionTarget, null, url);



		}
		event.stopPropagation();
            //el.mCustomScrollbar("destroy");
		
	});

	function loadNewContent(newSection) {

		var section = $('<section class="nl-section '+newSection+'"></section>').appendTo($('main'));
		section.load(newSection+'.html .nl-section > *', function(event){
			section.closest('main').attr('class','').addClass(newSection);
			section.closest('main').find('.mask-section').attr('class','').addClass(newSection + ' mask-section animation');
			section.find('.wrapper-core-page').css({
				opacity: 0,
			});
			section.addClass('nl-selected');
			section.prev('.nl-selected').removeClass('nl-selected');
			setTimeout(function(){

				section.find('.wrapper-core-page').addClass('animated fadeIn');
				
				section.prev('.nl-section').remove();
			
				$(".scrollable").mCustomScrollbar({
					autoHideScrollbar:true
				});
			}, 700);
		});

	}

});