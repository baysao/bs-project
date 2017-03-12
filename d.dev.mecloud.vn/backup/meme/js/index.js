//Script
$(document).ready(function() {

    //Page Script////////////////////////////////////
	
	
    //intro text
    $(".intro-meme").owlCarousel({
        navigation : false,
        pagination : true,
        autoPlay: 9000,
        slideSpeed : 100,
        paginationSpeed : 400,
        singleItem: true,
        transitionStyle : "fade",
        afterMove : function(){
            var owl = $(".intro-meme").data('owlCarousel');
            if(this.currentItem === this.maximumItem){
                owl.stop();
            }
        }
    });
	
	//call slider video
	callSliderVideo();
	
    //arrow Home
    function goToByScroll1(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 55
        }, 'slow');
    }
    $(".btn-arrow, .btn-watch").click(function (e) {
        e.preventDefault();
        goToByScroll1($(this).attr("id"));

    });

    
	


    //End Page Script/////////////////////////////////////////////////
});