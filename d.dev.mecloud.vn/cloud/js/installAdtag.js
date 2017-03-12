$(document).ready(function () {

	$('.switch_options').each(function() {

		//This object
		var obj = $(this);

		var enb = obj.children('.switch_enable'); //cache first element, this is equal to ON
		var dsb = obj.children('.switch_disable'); //cache first element, this is equal to OFF
		var input = obj.children('input'); //cache the element where we must set the value
		var input_val = obj.children('input').val(); //cache the element where we must set the value

		/* Check selected */
		if( 0 == input_val ){
			dsb.addClass('selected');
		}
		else if( 1 == input_val ){
			enb.addClass('selected');
		}

		//Action on user's click(ON)
		enb.on('click', function(){
			$(dsb).removeClass('selected'); //remove "selected" from other elements in this object class(OFF)
			$(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(ON) 
			$(input).val(1).change(); //Finally change the value to 1
		});

		//Action on user's click(OFF)
		dsb.on('click', function(){
			$(enb).removeClass('selected'); //remove "selected" from other elements in this object class(ON)
			$(this).addClass('selected'); //add "selected" to the element which was just clicked in this object class(OFF) 
			$(input).val(0).change(); // //Finally change the value to 0
		});

	});
	
	//tabs tabsAdtag
	$('.tabsAdtag ul li a').click(function(e){
		e.preventDefault();
		$('.tabsAdtag ul li a, .contentAdtag .active').removeClass('active');
		$(this).addClass('active');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('active');
	});

});
///////////////////////////////////////////////////////////////////////
//headBarAdtag
///////////////////////////////////////////////////////////////////////
function fixedHeadAdtag() {
	$('.header').css({position:'relative',top: 0,'padding-right': 0});
	$('.content').css('padding-top','0')
}

//fixed midroll
function fixedMidroll() {
	
	function sticky_relocate() {
		var getCurrentWidth = $('#midroll .headAdtag').parent().width();
        var window_top = $(window).scrollTop();
        var div_top = $('#sticky-anchor').offset().top;;
        if (window_top > div_top) {
            $('#midroll .headAdtag').addClass('fixed');
            $('#midroll .headAdtag').css({
	        	width: getCurrentWidth + 'px'
	        });
        } else {
            $('#midroll .headAdtag').removeClass('fixed');
        }

        

        $(window).resize(function(){
	    	var getCurrentWidth = $('#midroll .headAdtag').parent().width(); 
	    	$('#midroll .headAdtag').css({
	        	width: getCurrentWidth + 'px'
	        });
	    });
        
    }

    $(window).scroll(sticky_relocate);
    	sticky_relocate();

}