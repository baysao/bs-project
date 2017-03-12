// remove class show in all element
function removeAllClassShow() {
    var elements = document.getElementsByClassName('show');
    var n = elements.length;
    for (n = n-1; n >= 0; n--) {
        elements[n].className = elements[n].className.replace(' show', '');
    }
}

// remove class active in all element
function removeAllClassActive() {
    var elements = document.getElementsByClassName('active');
    var n = elements.length;
    for (n = n-1; n >= 0; n--) {
        elements[n].className = elements[n].className.replace(' active', '');
    }
}

//btn play pause
var btnPlay = document.getElementById("btn-play");
var btnPause = document.getElementById("btn-pause");

var statusPlay = document.getElementById("status-play");
var statusPause = document.getElementById("status-pause");

btnPlay.addEventListener('click', function(){

	this.classList.add('hide');
    btnPause.classList.remove('hide');

    statusPlay.classList.add('flash');
    setTimeout(function(){ 
        statusPlay.classList.remove('flash');
     }, 1000);

});
btnPause.addEventListener('click', function(){

	this.classList.add('hide');
    btnPlay.classList.remove('hide');

    statusPause.classList.add('flash');
    setTimeout(function(){ 
        statusPause.classList.remove('flash');
     }, 1000);

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

//list num video
var btnPickNum = document.getElementById("btn-pick-num");
var listNumVideo = document.getElementById("list-num-video");

btnPickNum.addEventListener('click', function(){

    var className=listNumVideo.getAttribute("class")
    if(className=="list-num-video"){
        listNumVideo.classList.add('show');
    }else {
        listNumVideo.className="list-num-video show";
        listNumVideo.classList.remove('show');
    }

});

//playlist
var controlsMep = document.getElementsByClassName("controls"),
    wrapperControls = document.getElementsByClassName("wrapper-controls"),
    wrapperPlaylist = document.getElementsByClassName("wrapper-playlist"),
    outterPlaylist = document.getElementById('outterPlaylist'),
    btnPlaylist = document.getElementById("btn-playlist"),
    playlist = document.getElementById("playlist");

btnPlaylist.addEventListener('click', function(){
    var className=playlist.getAttribute("class");
    var positionPlaylist;
    //console.log(className);

    function showPlaylist(positionPlaylist) {
        playlist.className= positionPlaylist + " show";
        btnPlaylist.classList.remove('has-tooltip');
        btnPlaylist.classList.add('active');
        controlsMep[0].classList.add('active');
    }

    function hidePlaylist(positionPlaylist) {
        playlist.className= positionPlaylist;
        btnPlaylist.classList.add('has-tooltip');
        btnPlaylist.classList.remove('active');
        controlsMep[0].classList.remove('active');
    }

    switch(className) {
        case "innerPlaylistRight":
            removeAllClassShow();
            removeAllClassActive();
            showPlaylist("innerPlaylistRight");
            break;
        case "innerPlaylistRight show":
            hidePlaylist("innerPlaylistRight");
            break;

        case "innerPlaylistBottom":
            removeAllClassShow();
            removeAllClassActive();
            showPlaylist("innerPlaylistBottom");
            break;
        case "innerPlaylistBottom show":
            hidePlaylist("innerPlaylistBottom");
            break;

        case "innerPlaylistBottomMobile":
            removeAllClassShow();
            removeAllClassActive();
            showPlaylist("innerPlaylistBottomMobile");
            break;
        case "innerPlaylistBottomMobile show":
            hidePlaylist("innerPlaylistBottomMobile");
            break;

        case "outterPlaylistRight":
            showPlaylist("outterPlaylistRight");

            outterPlaylist.setAttribute('style','height:360px;'),
            wrapperPlaylist[0].setAttribute("style", "width:640px;");

            break;
        case "outterPlaylistRight show":
            hidePlaylist("outterPlaylistRight");

            outterPlaylist.setAttribute('style','height:528px;'),
            setTimeout(function(){ 
                wrapperPlaylist[0].setAttribute("style", "width:940px;");
            }, 300);
            
            break;

        case "outterPlaylistBottomList":
            showPlaylist("outterPlaylistBottomList");

            outterPlaylist.setAttribute('style','height:640px;'),
            playlist.setAttribute("style", "height:280px;");

            break;
        case "outterPlaylistBottomList show":
            hidePlaylist("outterPlaylistBottomList");

            outterPlaylist.setAttribute('style','height:360px;'),
            setTimeout(function(){ 
                playlist.setAttribute("style", "height:280px;");
            }, 300);

            break;

        case "outterPlaylistBottom":
            showPlaylist("outterPlaylistBottom");

            outterPlaylist.setAttribute('style','height:565px;'),
            playlist.setAttribute("style", "height:205px;");

            break;
        case "outterPlaylistBottom show":
            hidePlaylist("outterPlaylistBottom");

            outterPlaylist.setAttribute('style','height:360px;')
            setTimeout(function(){ 
                playlist.setAttribute("style", "height:205px;");
            }, 300);

            break;

        default:
            console.log('not compare with case');
            return;
    }

    

});


var classNamePlaylist=playlist.getAttribute("class");
console.log(classNamePlaylist);


//list quality
var btnQuality = document.getElementById("btn-quality");
var qualityList = document.getElementById("quality-list");




btnQuality.addEventListener('click', function(){
    var classNameQuality=qualityList.getAttribute("class");

    function showQuality() {
        qualityList.className="quality-list show";
        btnQuality.classList.remove('has-tooltip');
        btnQuality.classList.add('active');
    }

    function hideQuality() {
        qualityList.className="quality-list";
        btnQuality.classList.add('has-tooltip');
        btnQuality.classList.remove('active');
    }
    
    if(classNameQuality=="quality-list"){
        showQuality();
    }else {
        hideQuality();
    }

    if((classNameQuality=="quality-list")&&(classNamePlaylist=="innerPlaylistRight" || classNamePlaylist=="innerPlaylistBottom" || classNamePlaylist=="innerPlaylistBottomMobile")){
        removeAllClassShow();
        removeAllClassActive();
        showQuality();
    }
    

});

/*if(className == 'outterPlaylistRight') {
    resizeOutterPlaylist();
    window.onresize = OnResizeDocument;
    function OnResizeDocument () {
        resizeOutterPlaylist();
    }
}

function resizeOutterPlaylist() {

    var widthOutterPlaylist = outterPlaylist.offsetWidth;
    var heightOutterPlaylist = widthOutterPlaylist*9/16;
    var widthWrapperPlaylist = widthOutterPlaylist - 300;


    console.log('widthOutterPlaylist:' + widthOutterPlaylist);
    console.log('heightOutterPlaylist:' + heightOutterPlaylist);

    outterPlaylist.setAttribute('style','height:' + wrapperPlaylist[0].offsetHeight + 'px;')
    wrapperPlaylist[0].setAttribute("style", "width:" + widthOutterPlaylist + "px;");

}*/

