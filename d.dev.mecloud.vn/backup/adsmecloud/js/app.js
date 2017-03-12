$(document).ready(function() {
    
    $('.wrapper').hide();
    $(window).load(function() {
        $('.preloader').fadeOut();
        $('.wrapper').fadeIn();
    });

	$('#fullpage').fullpage({
        anchors: ['whychooseus', 'technology', 'publisher', 'advertiser'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){

            //section technology
            if(anchorLink == 'technology'){
                //moving the image
                $('section.technology').css('background-color','#ff6e61');
                $('section.technology').find('.block').addClass('animated fadeInUp');
                $('section.technology').find('img').addClass('animated fadeInDown');

            }

            //section publisher 
            if(anchorLink == 'publisher'){
                //moving the image
                $('section.publisher').css('background-color','#2ab159');
                $('section.publisher').find('.block').addClass('animated fadeInUp');
                $('section.publisher').find('img').addClass('animated zoomIn');
            }

            //section advertiser
            if(anchorLink == 'advertiser'){
                //moving the image
                $('section.advertiser').css('background-color','#e6a73a');
                $('section.advertiser').find('.block').addClass('animated fadeInUp');
                $('section.advertiser').find('img').addClass('animated zoomIn');
            }
        }
    });

    //tabs ads

    $('ul.tabs li a').click(function(e){
        
        console.log('herer');

        var $this = $(this); 
        e.preventDefault();
        
        $('ul.tabs li a, .tabs-content .active').removeClass('active');
        $this.addClass('active');

        var currentTab = $this.attr('href');

        $(currentTab).addClass('active');

    });
	
	
});