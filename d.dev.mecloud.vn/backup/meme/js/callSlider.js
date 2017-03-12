callSliderVideo = function () {
    $("#block1 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
              $('#block1 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
              $('#block1 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
              $('#block1 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
              $('#block1 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
              $('#block1 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
              $('#block1 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block1 .next").click(function(){
        $("#block1 .videos-item").trigger('owl.next');
    })
    $("#block1 .prev").click(function(){
        $("#block1 .videos-item").trigger('owl.prev');
    })


    $("#block2 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block2 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block2 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block2 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block2 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block2 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block2 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block2 .next").click(function(){
        $("#block2 .videos-item").trigger('owl.next');
    })
    $("#block2 .prev").click(function(){
        $("#block2 .videos-item").trigger('owl.prev');
    })


    $("#block3 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block3 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block3 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block3 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block3 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block3 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block3 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block3 .next").click(function(){
        $("#block3 .videos-item").trigger('owl.next');
    })
    $("#block3 .prev").click(function(){
        $("#block3 .videos-item").trigger('owl.prev');
    })

    $("#block4 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block4 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block4 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block4 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block4 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block4 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block4 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block4 .next").click(function(){
        $("#block4 .videos-item").trigger('owl.next');
    })
    $("#block4 .prev").click(function(){
        $("#block4 .videos-item").trigger('owl.prev');
    })

    $("#block5 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block5 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block5 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block5 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block5 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block5 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block5 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block5 .next").click(function(){
        $("#block5 .videos-item").trigger('owl.next');
    })
    $("#block5 .prev").click(function(){
        $("#block5 .videos-item").trigger('owl.prev');
    })

    $("#block6 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block6 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block6 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block6 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block6 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block6 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block6 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block6 .next").click(function(){
        $("#block6 .videos-item").trigger('owl.next');
    })
    $("#block6 .prev").click(function(){
        $("#block6 .videos-item").trigger('owl.prev');
    })

    $("#block7 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block7 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block7 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block7 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block7 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block7 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block7 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block7 .next").click(function(){
        $("#block7 .videos-item").trigger('owl.next');
    })
    $("#block7 .prev").click(function(){
        $("#block7 .videos-item").trigger('owl.prev');
    })

    $("#block8 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block8 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block8 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block8 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block8 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block8 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block8 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block8 .next").click(function(){
        $("#block8 .videos-item").trigger('owl.next');
    })
    $("#block8 .prev").click(function(){
        $("#block8 .videos-item").trigger('owl.prev');
    })

    $("#block9 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block9 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block9 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block9 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block9 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block9 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block9 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block9 .next").click(function(){
        $("#block9 .videos-item").trigger('owl.next');
    })
    $("#block9 .prev").click(function(){
        $("#block9 .videos-item").trigger('owl.prev');
    })

    $("#block10 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block10 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block10 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block10 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block10 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block10 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block10 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block10 .next").click(function(){
        $("#block10 .videos-item").trigger('owl.next');
    })
    $("#block10 .prev").click(function(){
        $("#block10 .videos-item").trigger('owl.prev');
    })

    $("#block11 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block11 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block11 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block11 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block11 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block11 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block11 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block11 .next").click(function(){
        $("#block11 .videos-item").trigger('owl.next');
    })
    $("#block11 .prev").click(function(){
        $("#block11 .videos-item").trigger('owl.prev');
    })

    $("#block12 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block12 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block12 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block12 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block12 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block12 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block12 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block12 .next").click(function(){
        $("#block12 .videos-item").trigger('owl.next');
    })
    $("#block12 .prev").click(function(){
        $("#block12 .videos-item").trigger('owl.prev');
    })

    $("#block13 .videos-item").owlCarousel({
        items : 6,
        pagination : false,
        scrollPerPage : true,
        itemsDesktop : [1366,6],
        itemsDesktopSmall : [991,2],
        itemsTablet: [768,1],
        itemsMobile : [480,1],
        afterMove : function(){
            if(this.currentItem == this.maximumItem){
                $('#block13 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem < this.maximumItem){
                $('#block13 .customNavigation .next').removeClass('disabled').removeAttr('disabled');
            }
            if(this.currentItem == 0){
                $('#block13 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem > 0){
                $('#block13 .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
            }
        },
        afterInit : function(){

            if(this.itemsAmount <= 6){
                $('#block13 .customNavigation .next').addClass('disabled').attr('disabled','disabled');
            }
            if(this.currentItem == 0){
                $('#block13 .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
            }

        }
    });
    // Custom Navigation Events
    $("#block13 .next").click(function(){
        $("#block13 .videos-item").trigger('owl.next');
    })
    $("#block13 .prev").click(function(){
        $("#block13 .videos-item").trigger('owl.prev');
    })

    $(".contest-banner").owlCarousel({
		items : 1,
		pagination : false,
		itemsDesktop : [1366,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [768,1],
		itemsMobile : [480,1],
		scrollPerPage : true,
		afterMove : function(){
			if(this.currentItem == this.maximumItem){
			  $('.wrapper-contest .customNavigation .next').addClass('disabled').attr('disabled','disabled');
			}
			if(this.currentItem < this.maximumItem){
			  $('.wrapper-contest .customNavigation .next').removeClass('disabled').removeAttr('disabled');
			}
			if(this.currentItem == 0){
			  $('.wrapper-contest .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
			}
			if(this.currentItem > 0){
			  $('.wrapper-contest .customNavigation .prev').removeClass('disabled').removeAttr('disabled');
			}
		},
		afterInit : function(){
			
			if(this.itemsAmount <= 1){
			  $('.wrapper-contest .customNavigation .next').addClass('disabled').attr('disabled','disabled');
			}
			if(this.currentItem == 0){
			  $('.wrapper-contest .customNavigation .prev').addClass('disabled').attr('disabled','disabled');
			}
		}
	});
	// Custom Navigation Events
	$(".wrapper-contest .next").click(function(){
		$(".wrapper-contest .contest-banner").trigger('owl.next');
	})
	$(".wrapper-contest .prev").click(function(){
		$(".wrapper-contest .contest-banner").trigger('owl.prev');
	})
}