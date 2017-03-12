$(document).ready(function () {
	//collapsible menu
	$('.expandcollapse').click(function () {

		var newstate = $(this).attr('state') ^ 1,
			icon = newstate ? "plus-square-o" : "minus-square-o",
			text = newstate ? "Mở tất cả" : "Đóng tất cả";

		// if state=0, show all the accordion divs within the same block (in this case, within the same section)
		if ($(this).attr('state') === "0") {
			//console.log('1');
			$(this).siblings('div').find('div.accordion-body.in').collapse('hide');
		}
		// otherwise, collapse all the divs
		else {
			//console.log('2');
			$(this).siblings('div').find('div.accordion-body:not(.in)').collapse('show');
			
		}

		$(this).html("<i class=\"fa fa-" + icon + "\"></i> " + text);

		$(this).attr('state', newstate)

	});

});