function sidebarFixed() {	
		if(isDesktop) {
		  //position fixed sidebar
		  function onScrollSidebar() {
			  if ($('.activity-channel').height() - $('.sidebar').height() < 70) {
				  return
			  }
			  var getCurrentHeight = $('.channel-profile').height() + $('.nav-profile').height();
			  console.log(getCurrentHeight);
			  if ($(this).scrollTop() > getCurrentHeight) {
				  $('.sidebar').css('position','fixed');
				  $('.sidebar').css('top','75px');
				  if ($(window).height() < 801) {
				  	$('.line-statis.last4sm-rbb').hide();
					$('.follower-user.clearPadding').hide();
				  }
			  }
			  else if ($(this).scrollTop() < getCurrentHeight) {
				  $('.sidebar').css('position','static');
				  $('.line-statis').show();
				  $('.follower-user.clearPadding').show();
			  }
			
		};
		  $(window).on('scroll',onScrollSidebar);
		  $( window ).resize(function() {
			  $(window).on('scroll',onScrollSidebar);
		  });
	  }else {
		var current_width = $(window).width();
		if(current_width > 991) {
			$(window).on('scroll',onScrollSidebar);
		}
	  }
}