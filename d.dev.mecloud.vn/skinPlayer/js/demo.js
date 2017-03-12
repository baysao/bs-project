//btn play pause
var btnPlay = document.getElementById("btn-play");
var btnPause = document.getElementById("btn-pause");

var statusPlay = document.getElementById("status-play");
var statusPause = document.getElementById("status-pause");

btnPlay.addEventListener('click', function(){

	this.classList.add('hide');
    btnPause.classList.remove('hide');

    statusPlay.classList.remove('flash');


});
btnPause.addEventListener('click', function(){

	this.classList.add('hide');
    btnPlay.classList.remove('hide');

    statusPlay.classList.add('flash');


});

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

//loading-quality
var btnLoadingQuality = document.getElementById("loading-quality");
var settingSVG = document.getElementById("settingSVG");
btnLoadingQuality.addEventListener('click', function(){

    var className=settingSVG.getAttribute("class")
    if(className=="loadingQuality"){
        settingSVG.classList.remove('loadingQuality');
    }else {
        settingSVG.classList.add('loadingQuality');
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

//////////////////////////////////
// responsive mobile
//////////////////////////////////
/*function resizePlayer() {

    var mepPlayer = document.getElementById ("mep-player")
    var contentVideo = document.getElementById ("content-video");

    var currentHeight = relateVideo.offsetHeight - 80;
    contentVideo.style.height = currentHeight + "px";

}
resizePlayer();
window.onresize = OnResizeDocument;
function OnResizeDocument () {
    resizePlayer();
}*/

/*
//change color
var btnDefaultColor = document.getElementById("btn-default-color");
var btnRedColor = document.getElementById("btn-red-color");
var btnCyanColor = document.getElementById("btn-cyan-color");
//var queryBtnColor = document.querySelector("ul.change-color li");

btnDefaultColor.addEventListener('click', function(cssFile, cssLinkIndex) {

	//for change color
    //console.log('default');
    //queryBtnColor.classList.remove('selected');
    //this.classList.add('selected');

	var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "style.css");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

});
btnRedColor.addEventListener('click', function(cssFile, cssLinkIndex) {

	//for change color
    //console.log('red');
    //queryBtnColor.classList.remove('selected');
    //this.classList.add('selected');

	var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "style-red.css");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

});

btnCyanColor.addEventListener('click', function(cssFile, cssLinkIndex) {

	var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "style-cyan.css");
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

});*/

//player-holder
var playHolder = document.getElementById("player-holder");
playHolder.addEventListener('click', function(){
    this.outerHTML = "";
});

