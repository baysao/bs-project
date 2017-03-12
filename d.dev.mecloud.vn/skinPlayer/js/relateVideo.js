//list quality
var btnQuality = document.getElementById("btn-quality");
var qualityList = document.getElementById("quality-list");

btnQuality.addEventListener('click', function(){

	var className=qualityList.getAttribute("class")
	if(className=="quality-list"){
		qualityList.className="quality-list show";
		btnQuality.classList.remove('has-tooltip');
        btnQuality.classList.add('active');
	}else {
		qualityList.className="quality-list";
		btnQuality.classList.add('has-tooltip');
        btnQuality.classList.remove('active');
	}

});

//btn fullscreen - exit fullscreen
var btnFullscreen = document.getElementById("btn-fullscreen");
var btnExitFullscreen = document.getElementById("btn-exitfullscreen");
btnFullscreen.addEventListener('click', function(){
	this.classList.add('hide');
    btnExitFullscreen.classList.remove('hide');
});
btnExitFullscreen.addEventListener('click', function(){
	this.classList.add('hide');
    btnFullscreen.classList.remove('hide');
});


//player-holder
var playHolder = document.getElementById("player-holder");
playHolder.addEventListener('click', function(){
    this.outerHTML = "";
});


//relate video
function initRelate() {

    var relateVideo = document.getElementById ("relate-video");
    var contentVideo = document.getElementById ("content-video");

    var currentWidthRelateVideo = relateVideo.offsetWidth;

    if (currentWidthRelateVideo < 539) {

    	console.log("current width: "+currentWidthRelateVideo);

    	relateVideo.classList.add('mobile');
	    //var allItemRelateVideo = document.querySelectorAll("a.item-relate-video");

		//for (var i = 0; i < allItemRelateVideo.length; i++) {
		   // allItemRelateVideo[i].classList.add('mobile');
		//}

	}else {
		/*var allItemRelateVideo = document.querySelectorAll("a.item-relate-video");
	    
		for (var i = 0; i < allItemRelateVideo.length; i++) {
		    allItemRelateVideo[i].classList.remove('mobile');
		}*/
		relateVideo.classList.remove('mobile');
	}

}
initRelate();
window.onresize = OnResizeDocument;
function OnResizeDocument () {
    initRelate();
}