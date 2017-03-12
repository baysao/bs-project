function preloaderPage(targetPage, imagePage) {
	var calcPercent;
	
	$progress = $('.logoBlue');
	$percent = $('.percentage');
	
	preload(imagePage);
	
	$(window).load(function(){
		
		$progress.animate({
			width: '100%'	
		},10,function(){
				
			$percent.text('100%');
			clearInterval(calcPercent);
			
			animateLogo();
			//
			switch(targetPage){
				case 'index':
					indexPage();
					break;
				case 'subPage':
					subPage();
					break;	
			}
			if(targetPage){
				
			}
			
				
		});
		
		function animateLogo() {
			$('.preloaderLogo').addClass('animationLogo');
			
			setTimeout(function(){ 
				$('.preloaderLogo').css('display','none');
			}, 1000);
			
		}
		
		
			
	});
	
	function preload(imgArray) {
		var increment = Math.floor(100/imgArray.length);
		$(imgArray).each(function() {
			$('<img>').attr("src", this).load(function(){
				$progress.animate({
					width: '+=' + increment + '%'	
				},100);	
			});
		});	
	}
	
	calcPercent = setInterval(function(){
		$percent.text(Math.floor(($progress.width()/$('.logoGrey').width())*100) + '%');	
	},100);
	
}