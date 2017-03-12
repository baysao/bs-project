//index
function addAnimation($element,$method,$delay) {
	$element.addClass('os-animation animated' + $method + $delay);
}

function removeAnimation($element,$method,$delay) {
	$element.removeClass('os-animation animated' + $method + $delay);
}

function indexPage() {

	setTimeout(function(){ 
		$('.equa').addClass('animation');
		$('aside, nav.sub-nav, nav.sub-nav ul li a').addClass('after_ani');

		addAnimation($('.solution'),' pulse',' delay1s6ms');
		$('.solution').addClass('infinite');

		addAnimation($('.youtube'),' flipInY',' delay2s3ms');
		addAnimation($('.adsense'),' flipInY',' delay2s3ms');
		
	}, 600);

	setTimeout(function(){ 
		removeAnimateStartWeb();
	}, 4000);
}
function removeAnimateStartWeb() {
	$('.equa').remove();
	$('aside, nav.sub-nav, nav.sub-nav ul li a').removeClass('after_ani before_ani');
	removeAnimation($('.youtube'),' flipInY',' delay2s3ms');
	removeAnimation($('.adsense'),' flipInY',' delay2s3ms');
}
	