//relate video
var flagNext = true,
	relateVideo = document.getElementById ("relate-video"),
	contentVideo = document.getElementById ("content-video"),
	headRelateVideo = document.getElementById ("head-relate-video"),
	relateVideoClass = document.getElementsByClassName("relate-video"),
	btnStopAuto = document.getElementById ("btn-stop-auto"),
	timeleftRelate = document.getElementById ("timeleft-relate"),
	currentWidthRelateVideo = relateVideo.offsetWidth;

function initRelate() {
    var heightHeadRelateVideo = headRelateVideo.offsetHeight;
    var currentHeight = relateVideo.offsetHeight - heightHeadRelateVideo;
    contentVideo.style.height = currentHeight + "px";
    
    currentWidthRelateVideo = relateVideo.offsetWidth;
    //console.log("current width: "+currentWidthRelateVideo);
    if (currentWidthRelateVideo < 539) {

    	flagNext = false;
    	
	    var allItemRelateVideo = document.querySelectorAll("a.item-relate-video");

		for (var i = 0; i < allItemRelateVideo.length; i++) {
		    allItemRelateVideo[i].classList.add('mobile');
		}
		headRelateVideo.classList.add('mobile');

		heightHeadRelateVideo = headRelateVideo.offsetHeight;
    	currentHeight = relateVideo.offsetHeight - heightHeadRelateVideo;
    	contentVideo.style.height = currentHeight + "px";

	}else {
		
		var allItemRelateVideo = document.querySelectorAll("a.item-relate-video");
	    
		for (var i = 0; i < allItemRelateVideo.length; i++) {
		    allItemRelateVideo[i].classList.remove('mobile');
		}
		headRelateVideo.classList.remove('mobile');
			
		flagNext = true;

	}

}
initRelate();
window.onresize = OnResizeDocument;
function OnResizeDocument () {
    initRelate();
}
if (currentWidthRelateVideo < 539) {
	flagNext = false;
}
function timeleftRelateProgress() {
	

	timeleftRelate.classList.add('start');
	setTimeout(function(){ 
		if(flagNext == true) {
			relateVideoClass[0].outerHTML = "";
			console.log('play next video');
		}else {
			console.log('remove auto play');
		}
	}, 10000);

	btnStopAuto.addEventListener('click', function(){
		//relateVideo[0].outerHTML = "";
	    headRelateVideo.style.height = 0;
		contentVideo.style.height = 100 + "%";
		flagNext = false;
	});
}
timeleftRelateProgress();