jQuery(function($) {
	
	
	//detect mobile
	var isDesktop = (function(){
		try {
			document.createEvent("TouchEvent");
		}
		catch(e){
			return true;
		}
		return false;
	})();
	
	function onScrollInit( items, trigger ) {
		items.each( function() {
		var osElement = $(this),
			osAnimationClass = osElement.attr('data-os-animation'),
			osAnimationDelay = osElement.attr('data-os-animation-delay');
			osRemoveAnimation = osElement.attr('data-os-animation-remove');

			osElement.css({
				'-webkit-animation-delay':  osAnimationDelay,
				'-moz-animation-delay':     osAnimationDelay,
				'animation-delay':          osAnimationDelay
			});
			var osTrigger = ( trigger ) ? trigger : osElement;

			osTrigger.waypoint(function() {
				osElement.addClass('animated').addClass(osAnimationClass);
				},{
					triggerOnce: true,
					offset: '80%'
				});
			});
		}

		if (isDesktop) {
		 onScrollInit( $('.os-animation') );
		}else {
			$('.os-animation').css('opacity','1');
		}

	 
});