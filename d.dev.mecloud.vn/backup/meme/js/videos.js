/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

//Script
$(document).ready(function () {

	
    //Page Script////////////////////////////////////
	/*if(jQuery.browser.mobile)
		{
			$(window).scroll(function () {
				if ($(this).scrollTop() > 54) {
					$('#video-detail').css('top','0');
					$('#video-detail').css('position','fixed');
					$('#header').css('top','-54px');
				} else {
					$('#video-detail').css('top','54px');
					$('#header').css('top','0');
				}
			});
		}*/

    //slideshow meme
    /*var owl = $("#slideshow-meme");
    owl.owlCarousel({
        items: 4,
        scrollPerPage: true,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 1],
        itemsMobile: false
    });*/ 

    //readmore
    $('.desc').readmore({
        maxHeight: 60
    });

	//slideshow relate
    $(".w-suggest-video-detail .suggest-video-detail").owlCarousel({
        items : 5,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1500,4],
        itemsDesktopSmall : [991,4],
        itemsTablet: [768,3],
        itemsMobile : [480,2],
        afterMove : function(){
            if(this.currentItem === this.maximumItem){
              $('.w-suggest-video-detail .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
              $('.w-suggest-video-detail .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
              $('.w-suggest-video-detail .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
              $('.w-suggest-video-detail .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 4){
              $('.w-suggest-video-detail .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
              $('.w-suggest-video-detail .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $(".w-suggest-video-detail .next").click(function(){
        $(".w-suggest-video-detail .suggest-video-detail").trigger('owl.next');
    })
    $(".w-suggest-video-detail .prev").click(function(){
        $(".w-suggest-video-detail .suggest-video-detail").trigger('owl.prev');
    })
	
    //edit delete dropdown
    $('.comment-action').on('show.bs.dropdown', function () {
        $(this).find('.commentMore').css('display','inline-block');
    })
    $('.comment-action').on('hidden.bs.dropdown', function () {
        $(this).find('.commentMore').css('display','none');
    })
    function showExpand(flag){
        if(flag == 'true'){
            $('.btn-expandPlayer').show();
        }else{
            $('.btn-expandPlayer').hide();
        }

    }
    $('.btn-expandPlayer').click(function(){
        $(this).hide();
		$('.ads1160x90').slideUp();
        $('.btn-collapsePlayer').show();
        t = setTimeout(function(){
            $('#video-detail').addClass('expandPlayer');
            console.log($('#parameter').find('.expandPlayer').width());
			console.log($('#parameter').find('.expandPlayer').height());
            setTimeout(function(){
                $('object[id*="meme"]:eq(0)').length>0 ? ( $('object[id*="meme"]:eq(0)').get(0).updateSize($('#parameter').find('.expandPlayer').width(),$('#parameter').find('.expandPlayer').height())):($('.meme-player-base').each(function(){this.dispatchEvent(new Event('resize'))}));
            }, 100);
        }, 200);
        t1 = setTimeout(function(){
            $('.bg-playerMeme').fadeIn();
            $('.bg-playerMeme').addClass('expand-bg');
        }, 500);
        $(".wrapper-video-info .col-md-4").addClass("moveForPlayer");
    });

    $('.btn-collapsePlayer').click(function(){
        $(this).hide();
		$('.ads1160x90').slideDown();
        $('.bg-playerMeme').hide();
        $('.btn-expandPlayer').show();
        $('#video-detail').removeClass('expandPlayer');
        t2 = setTimeout(function(){
            $('.wrapper-video-info .col-md-4').removeClass('moveForPlayer');
            console.log($('#parameter').find('.widthPlayer').width());
			console.log($('#parameter').find('.widthPlayer').height());
            $('object[id*="meme"]:eq(0)').length>0 ? ( $('object[id*="meme"]:eq(0)').get(0).updateSize($('#parameter').find('.widthPlayer').width(),$('#parameter').find('.widthPlayer').height())):($('.meme-player-base').each(function(){this.dispatchEvent(new Event('resize'))}));
        }, 200);
    });
    //Page Script////////////////////////////////////
});