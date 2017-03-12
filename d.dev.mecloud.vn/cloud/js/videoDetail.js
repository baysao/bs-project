$(document).ready(function () {
	//embed script
	$('#embedScript').click(function(){
		$(this).select();
	});
	
	//select Embed
	$('.selectEmbed').SumoSelect({
		placeholder: 'Kích thước'
	});
	
	//multiselect
	$('.selectSection').SumoSelect({
		csvDispCount: 3,	
	});
	$('.selectCategory').SumoSelect({
		csvDispCount: 5,	
	});
	
	//call link input
	$('.btnLinkVideo').click(function(){
		
		var X=$(this).attr('id');
		if(X==1) {
			$('.enterLinkVideo').stop().fadeOut();
			$(this).attr('id', '0');
		}
		else {
			$('.enterLinkVideo').stop().fadeIn();
			$(this).attr('id', '1');
		}	
		return false;
	});
	
	//Add Tags
	$('#tags').tagsInput({
	   'height':'195px',
	   'width':'100%',
	   'defaultText':'Thêm từ khóa',
	   'placeholderColor' : '#999999'
	});
	
	//Call popup crop image
	$( "#callCropThumb" ).one( 'click', function(){
		cropImageThumb();
	});
	
	//publish time
	$('#dp2').datepicker();
	
	
	//////sortable
	$( ".sortable" ).sortable({
      placeholder: "highlight"
    });
	
	// START VIDEOS RELATED
	var mm = new mmVideoRelated({ 
		url : "http://mecloud.vn/video/action/search-video-related-ajax",
		videoId :   58,
		channelId: 1,
		element : $("#itemsVideo"),
	});
	mm.search();
	
});