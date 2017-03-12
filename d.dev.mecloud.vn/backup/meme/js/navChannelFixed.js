 // Hide Header on on scroll down
		function navHeader() {
			var didScroll;
			var lastScrollTop = 0;
			var delta = 5;
			var navbarHeight = $('#header').outerHeight();
			
			$(window).scroll(function(event){
				didScroll = true;
			});
			
			setInterval(function() {
				if (didScroll) {
					hasScrolled();
					didScroll = false;
				}
			}, 250);
			
			function hasScrolled() {
				var st = $(this).scrollTop();
				
				// Make sure they scroll more than delta
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				
				// If they scrolled down and are past the navbar, add class .nav-up.
				// This is necessary so you never see what is "behind" the navbar.
				
				if (st > lastScrollTop && st > navbarHeight){
					// Scroll Down
					$("#header").removeClass('showHeader').addClass('hideHeader');
					$(".menu-category").css('display','none');
					//call btn top
					$('.top').fadeIn();
				} else {
					// Scroll Up
					if(st + $(window).height() < $(document).height()) {
						$("#header").removeClass('hideHeader').addClass('showHeader');
						$('.main-menu').css('margin-top','10px');
						$('.menu-top').css('height','28px');
						$('.menu-top').css('margin-top','13px');
						$('ul.menu-top li').css('width','40px');
						$('.logo-b').addClass('logo-s');
						$('.search').css('margin-top','10px');
						$('.browse').css('display','block');
					}
				}
				//var currentTop = $(window).scrollTop();
				if (st <50){
					// Scroll Down
					$("#header").removeClass('showHeader');
					$(".menu-category").css('display','none');
					$('.browse').css('display','none');
					$('.main-menu').css('margin-top','0px');
					$('.search').css('margin-top','10px');
					$('.logo-b').removeClass('logo-s');
					$('.menu-top').css('height','50px');
					$('.menu-top').css('margin-top','10px');
					$('ul.menu-top li').css('width','75px');
					
					//hide btn top
					$('.top').fadeOut();
					}
				
				lastScrollTop = st;
			}
		}
		//scroll to element
		
				function goToByScroll(id){
					  // Reove "link" from the ID
					id = id.replace("link", "");
					  // Scroll
					$('html,body').animate({
						scrollTop: $("#"+id).offset().top},
						'slow');
				}
			
				$(".btn-comment, .top").click(function(e) { 
					  // Prevent a page reload when a link is pressed
					e.preventDefault(); 
					  // Call the scroll function
					goToByScroll($(this).attr("id"));           
				});