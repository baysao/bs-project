
//preloader subpage
function subPage() {
	setTimeout(function(){ 
		$('.equa').fadeOut();
	}, 600);

	setTimeout(function(){ 
		removeAnimateStartWeb();
	}, 4000);
}
function removeAnimateStartWeb() {
	$('.equa').remove();
}


