$(document).ready(function() {
	//////////////////////////
		//Explore Video
	//////////////////////////
	$(function () {
		
		
		var $container = $('.isotope'),
			colWidth = function () {
				var w = $container.width(), 
					columnNum = 2,
					columnWidth = 0;
				if (w > 1023) {
					columnNum  = 4;
				} else if (w < 1024) {
					columnNum  = 3;
				} 
				if (w < 768) {
					columnNum = 2;
				}
				columnWidth = Math.floor(w/columnNum);
				$container.find('.item-iso').each(function() {
					var $item = $(this),
						width = columnWidth,
						height = columnWidth*2/3;
					$item.css({
						width: width,
						height: height+1
					});
				});
				return columnWidth;
			},
			isotope = function () {
				$container.isotope({
					itemSelector: '.item-iso',
					layoutMode: 'fitRows',
					transitionDuration: '1s',
					masonry: {
						columnWidth: colWidth(),
					}
				});
			};
	    isotope();
	    $(window).on('debouncedresize', isotope);
		
		
		var filterFns = {};
		$('#filters').on('click', 'a', function (evt) {
			evt.preventDefault();
			var filterValue = $(this).attr('data-filter');
			filterValue = filterFns[filterValue] || filterValue;
			$container.isotope({ filter: filterValue });
		});
	   
		$('.btnFilters').each(function (i, btnFilters) {
			var $btnFilters = $(btnFilters);
			$btnFilters.on('click', 'a', function (evt) {
				evt.preventDefault();
				$btnFilters.find('.active').removeClass('active');
				$(this).addClass('active');
			});
		});
	});
	
	//tooltip
	$('[data-toggle="popover"]').popover({
		placement: "auto right",
		trigger:"hover"
	});

});