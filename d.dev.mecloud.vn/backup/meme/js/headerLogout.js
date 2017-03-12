function headerLogout() {
	if (isDesktop) {
		//set header for home
		$('#header').hide();
		$('.wrapper-content').css('padding-top','0px')
		$(window).scroll(function () {
			var getHeightIntro = $('.wrapper-video').height() - 55;
			if ($(this).scrollTop() > getHeightIntro) {
				$('#header').fadeIn();
			} else if ($(this).scrollTop() < getHeightIntro) {
				$('#header').fadeOut();
			}
		});
		//callheader
		$('#header').affix();
		
	}
	else {
		
		function onScroll() {
				var getHeightIntro = $('.wrapper-video').height() - 55;
				if ($(this).scrollTop() > getHeightIntro) {
					$('#header').fadeIn();
					$('#header').affix();
					
				} else if ($(this).scrollTop() < getHeightIntro) {
					$('#header').hide();
				}
				//callheader
				
			};
			var current_width = $(window).width();
			if(current_width > 1024) {
				$(window).on('scroll',onScroll);
				$('#header').hide();
				$('.wrapper-content').css('padding-top','0px');
				$(window).on('scroll',onScroll);
			}else if(current_width < 1920) {
					$('#header').show();
					$('.wrapper-content').css('padding-top','54px');
					$(window).off('scroll',onScroll);
				}
			
		$( window ).resize(function() {
			var current_width = $(window).width();
		   //do something with the width value here!
			if(current_width > 1024) {
			  //set header for home
				$('#header').hide();
				$('.wrapper-content').css('padding-top','0px');
				$(window).on('scroll',onScroll);
				//callheader
			}else if(current_width < 1920) {
					$('#header').show();
					$('.wrapper-content').css('padding-top','54px');
					$(window).off('scroll',onScroll);
				}
		});
	}
}