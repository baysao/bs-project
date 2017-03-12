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

$(document).ready(function() {
    //Global Script/////////////////////////////////////
	
	//call search box google
	var cx = 'partner-pub-7266710804606728:7791612205';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		'//www.google.com/cse/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
	
	///////////////////////////////////////////////////////////////////////
	//on click dropdownDiv 
	///////////////////////////////////////////////////////////////////////
	var $dropdownDiv = $(".dropdownDiv");
	$(".btnDropdown").click(function(e) {
		e.preventDefault();
		$('body').find('.dropdownDiv').hide().css('opacity','0');
		$thisDropdown = $(this).closest('.dropdown').find('.dropdownDiv');
		var X=$(this).attr('id');
		if(X==1) {
			//$(".dropdownDiv").hide();
			$thisDropdown.animate({'margin-top': 0 + 'px', opacity: 0}, 300, function(){
				$(this).css({'margin-top':''}).removeClass('open');
			});
			$(this).attr('id', '0');
		}
		else {
			$(".dropdownDiv").show();
			$thisDropdown.show();
			$thisDropdown.css({'margin-top': 0 + 'px', opacity: 0}).animate({'margin-top': 16 + 'px', opacity: 1}, 300, function(){
            	$(this).css({'margin-top':''});
			});
			$(this).attr('id', '1');
		}
	});
	
	//Mouse click on sub menu
	$(".dropdownDiv").mouseup(function() {
		return false
	});
	
	//Mouse click on my account link
	$(".btnDropdown").mouseup(function() {
		return false
	});
	
	//Document Click
	$(document).mouseup(function() {
		$('body').find('.dropdownDiv').hide();
		$dropdownDiv.animate({'margin-top': 0 + 'px', opacity: 0}, 300, function(){
			$(this).css({'margin-top':''}).removeClass('open');
		});
		$(".btnDropdown").attr('id', '');
	});
	
    //placeholder
    $('input, textarea').placeholder();

    // Add slideup & fadein animation to dropdown
    $('.dropdown').on('shown.bs.dropdown', function(e){
        var $dropdown = $(this).find('.dropdown-menu');
        var orig_margin_top = parseInt($dropdown.css('margin-top'));
        $dropdown.css({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
            $(this).css({'margin-top':''});
        });
		
		$('.notification .dropdown-menu').click(function(e){
			return false
		});
		$('.browseCategory .dropdown-menu').click(function(e){
			if($(e.target).hasClass('returnFalse')){
							return false;
			};

		});

    });
    // Add slidedown & fadeout animation to dropdown
    $('.dropdown').on('hidden.bs.dropdown', function(e){
        var $dropdown = $(this).find('.dropdown-menu');
        var orig_margin_top = parseInt($dropdown.css('margin-top'));
        $dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}, 300, function(){
            $(this).css({'margin-top':'', display:''});
        });
    });

    //limit strim notification
    $(".notification-status").each(function(i){
        len=$(this).text().length;
        if(len>50)
        {
            $(this).text($(this).text().substr(0,50)+'...');
        }
    });

    //backtotop
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.topPage').fadeIn();
        } else {
            $('.topPage').fadeOut();
        }
    });
	
	//tooltip page
	$('[data-toggle="popover"]').popover();

	$('body').on('click', function (e) {
		$('[data-toggle="popover"]').each(function () {
			//the 'is' for buttons that trigger popups
			//the 'has' for icons within a button that triggers a popup
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
	});
		
    //scroll to element and button Back To Top
    function goToByScroll(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top -60
        }, 'slow');
    }
    $(".scrollToElement").click(function (e) {
        e.preventDefault();
        goToByScroll($(this).attr("id"));
    });
	

    if (isDesktop) {
		//tooltip
		$('.tooltipMeme').tooltip({
			animated: 'fade',
			placement: 'bottom'
		});
		//tooltipTop
		$('.tooltipMemeTop').tooltip({
			animated: 'fade',
			placement: 'top'
			
		});
		$('.btnSetting ').hover(function(){
			var obj = $(this).parents("#channelList").find('.tooltip').last().hide();
			//console.log(obj);
		});
		
		
		
        //slimscroll relate video
        $('.scrollable').slimScroll({
            size: '5px',
            distance: '2px',
            color: "#888888",
            allowPageScroll: true
        });
		
		//disable scrollbar
		$(".scrollable").bind("mouseover", function () {
			disabler.disable_scrolling();
		});
		$(".scrollable").bind("mouseleave", function () {
			disabler.enable_scrolling();
		});

    }else {
		$('body').find('.video-item-thumb img').removeClass('animateImg');	
		$('body').find('.video-item-play').remove();	
		$('body').find('.video-relate-img span').remove();	
	}
	
	//notifation meme
	$('.closeNof').click(function(){
		$('.memeNotification').fadeOut();
	});

    //End Global Script////////////////////////////////
});