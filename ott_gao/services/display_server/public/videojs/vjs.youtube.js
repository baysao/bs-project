(function(){function h(a,b,c){a.addEventListener?a.addEventListener(b,c,!0):a.attachEvent(b,c)}function f(a,b){if("undefined"===typeof a)return!1;try{a["innerText"in a?"innerText":"textContent"]=b}catch(c){a.setAttribute("innerText",b)}}videojs.Youtube=videojs.MediaTechController.extend({init:function(a,b,c){this.features.progressEvents=!1;this.features.timeupdateEvents=!1;videojs.MediaTechController.call(this,a,b,c);this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);this.isAndroid=/(Android)/g.test(navigator.userAgent);
this.playVideoIsAllowed=!(this.isIos||this.isAndroid);if("undefined"!==typeof b.source)for(var d in b.source)b.source.hasOwnProperty(d)&&(a.options()[d]=b.source[d]);this.userQuality=videojs.Youtube.convertQualityName(a.options().quality);this.player_=a;this.playerEl_=document.getElementById(a.id());this.playerEl_.className+=" vjs-youtube";this.qualityButton=document.createElement("div");this.qualityButton.setAttribute("class","vjs-quality-button vjs-menu-button vjs-control");this.qualityButton.setAttribute("tabindex",
0);b=document.createElement("div");this.qualityButton.appendChild(b);this.qualityTitle=document.createElement("span");b.appendChild(this.qualityTitle);"undefined"!==a.options().quality&&f(this.qualityTitle,a.options().quality||"auto");this.startSeconds=NaN;"undefined"!==a.options().startSeconds&&(this.startSeconds=a.options().startSeconds);b=document.createElement("div");b.setAttribute("class","vjs-menu");this.qualityButton.appendChild(b);this.qualityMenuContent=document.createElement("ul");this.qualityMenuContent.setAttribute("class",
"vjs-menu-content");b.appendChild(this.qualityMenuContent);this.id_=this.player_.id()+"_youtube_api";this.el_=videojs.Component.prototype.createEl("iframe",{id:this.id_,className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0,width:"100%",height:"100%"});this.el_.setAttribute("allowFullScreen","");this.playerEl_.insertBefore(this.el_,this.playerEl_.firstChild);/MSIE (\d+\.\d+);/.test(navigator.userAgent)?this.addIframeBlocker(Number(RegExp.$1)):/(iPad|iPhone|iPod|android)/g.test(navigator.userAgent)||
(this.el_.className+=" onDesktop",this.addIframeBlocker());this.parseSrc(a.options().src);this.playOnReady=this.player_.options().autoplay||!1;this.forceSSL=!("undefined"!==typeof this.player_.options().forceSSL&&!0!==this.player_.options().forceSSL);this.forceHTML5=!("undefined"!==typeof this.player_.options().forceHTML5&&!0!==this.player_.options().forceHTML5);this.updateIframeSrc();var e=this;a.ready(function(){e.playerEl_.querySelectorAll(".vjs-control-bar")[0].appendChild(e.qualityButton);e.playOnReady&&
!e.player_.options().ytcontrols&&("undefined"!==typeof e.player_.loadingSpinner&&e.player_.loadingSpinner.show(),"undefined"!==typeof e.player_.bigPlayButton&&e.player_.bigPlayButton.hide());a.trigger("loadstart")});this.player_.options().ytcontrols?this.player_.controls(!1):(b=this.player_.poster(),(!b||0<b.indexOf("img.youtube.com/")||0<b.indexOf("i.ytimg.com/"))&&null==this.videoId&&"undefined"!==typeof this.iframeblocker&&(this.iframeblocker.style.backgroundColor="black"));this.on("dispose",function(){this.ytplayer&&
this.ytplayer.destroy();this.player_.options().ytcontrols||this.player_.off("waiting",this.bindedWaiting);this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_);this.qualityButton.parentNode&&this.qualityButton.parentNode.removeChild(this.qualityButton);"undefined"!==typeof this.player_.loadingSpinner&&this.player_.loadingSpinner.hide();"undefined"!==typeof this.player_.bigPlayButton&&this.player_.bigPlayButton.hide();this.iframeblocker&&this.playerEl_.removeChild(this.iframeblocker)})}});
videojs.Youtube.prototype.updateIframeSrc=function(){var a={enablejsapi:1,iv_load_policy:3,playerapiid:this.id(),disablekb:1,wmode:"transparent",controls:this.player_.options().ytcontrols?1:0,html5:(this.player_.options(),1),playsinline:this.player_.options().playsInline?1:0,showinfo:0,modestbranding:1,rel:0,autoplay:this.playOnReady?1:0,loop:this.player_.options().loop?1:0,list:this.playlistId,vq:this.userQuality};"file:"===window.location.protocol&&delete a.origin;for(var b in a)!a.hasOwnProperty(b)||
"undefined"!==typeof a[b]&&null!==a[b]||delete a[b];var c=this;null===this.videoId?(this.el_.src="about:blank",setTimeout(function(){c.triggerReady()},500)):(this.el_.src=(this.forceSSL||"file:"===window.location.protocol?"https:":window.location.protocol)+"//www.youtube.com/embed/"+this.videoId+"?"+videojs.Youtube.makeQueryString(a),this.player_.options().ytcontrols?this.player_.controls(!1):"undefined"===typeof this.player_.poster()&&setTimeout(function(){var a=c.playerEl_.querySelectorAll(".vjs-poster")[0];
a.style.backgroundImage="url(https://img.youtube.com/vi/"+c.videoId+"/0.jpg)";a.style.display=""},100),this.bindedWaiting=function(){c.onWaiting()},this.player_.on("waiting",this.bindedWaiting),videojs.Youtube.apiReady?this.loadYoutube():(videojs.Youtube.loadingQueue.push(this),videojs.Youtube.apiLoading||(a=document.createElement("script"),a.onerror=function(a){c.onError(a)},a.src=this.forceSSL||"file:"===window.location.protocol?"https://www.youtube.com/iframe_api":"//www.youtube.com/iframe_api",
b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b),videojs.Youtube.apiLoading=!0)))};videojs.Youtube.prototype.onWaiting=function(){this.player_.bigPlayButton.hide()};videojs.Youtube.prototype.addIframeBlocker=function(a){this.iframeblocker=videojs.Component.prototype.createEl("div");this.iframeblocker.className="iframeblocker";this.iframeblocker.style.position="absolute";this.iframeblocker.style.left=0;this.iframeblocker.style.right=0;this.iframeblocker.style.top=0;this.iframeblocker.style.bottom=
0;this.iframeblocker.style.zIndex=9999;a&&9>a?this.iframeblocker.style.opacity=.01:this.iframeblocker.style.background="rgba(255, 255, 255, 0.01)";var b=this;h(this.iframeblocker,"mousemove",function(a){b.player_.userActive()||b.player_.userActive(!0);a.stopPropagation();a.preventDefault()});h(this.iframeblocker,"click",function(){b.paused()?b.play():b.pause()});this.playerEl_.insertBefore(this.iframeblocker,this.el_.nextSibling)};videojs.Youtube.prototype.parseSrc=function(a){if(this.srcVal=a){var b=
a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);this.videoId=b&&11===b[2].length?b[2]:null;b=a.match(/[?&]list=([^#\&\?]+)/);null!==b&&1<b.length?this.playlistId=b[1]:this.playlistId&&delete this.playlistId;b=a.match(/[?&]vq=([^#\&\?]+)/);null!==b&&1<b.length&&(this.userQuality=b[1],f(this.qualityTitle,videojs.Youtube.parseQualityName(this.userQuality)))}};videojs.Youtube.prototype.exitFullScreen=function(a){this.startSeconds=this.ytplayer.getCurrentTime();var b=this.duration();
this.ytplayer.pauseVideo();this.ytplayer=null;delete this.ytplayer;VBX.Layout.reconfigVideoPlayer(b,this.startSeconds);"undefined"!==typeof a&&null!=a&&a()};videojs.Youtube.prototype.src=function(a){if("undefined"!==typeof a){this.parseSrc(a);if("about:blank"===this.el_.src){this.updateIframeSrc();return}delete this.defaultQuality;null!==this.videoId&&(a={videoId:this.videoId,suggestedQuality:this.userQuality},!isNaN(this.startSeconds)&&0<this.startSeconds&&(a.startSeconds=this.startSeconds),this.player_.options().autoplay&&
this.playVideoIsAllowed?this.ytplayer.loadVideoById(a):this.ytplayer.cueVideoById(a),this.iframeblocker&&(this.iframeblocker.style.display="none"))}return this.srcVal};videojs.Youtube.prototype.currentSrc=function(){return this.srcVal||""};videojs.Youtube.prototype.load=function(){};videojs.Youtube.prototype.play=function(){if(null!==this.videoId)if(this.player_.options().ytcontrols||this.player_.trigger("waiting"),this.isReady_){try{this.ytplayer.setVolume(100*this.player_.volume())}catch(a){}0<
this.volumeVal?this.ytplayer.unMute():this.ytplayer.mute();this.playVideoIsAllowed&&this.ytplayer.playVideo()}else this.playOnReady=!0};videojs.Youtube.prototype.pause=function(){this.ytplayer.pauseVideo()};videojs.Youtube.prototype.paused=function(){return this.ytplayer?this.lastState!==YT.PlayerState.PLAYING&&this.lastState!==YT.PlayerState.BUFFERING:!0};videojs.Youtube.prototype.currentTime=function(){return this.ytplayer&&this.ytplayer.getCurrentTime?this.ytplayer.getCurrentTime():0};videojs.Youtube.prototype.setCurrentTime=
function(a){this.ytplayer.seekTo(a,!0);this.player_.trigger("timeupdate")};videojs.Youtube.prototype.duration=function(){return this.ytplayer&&this.ytplayer.getDuration?this.ytplayer.getDuration():0};videojs.Youtube.prototype.volume=function(){this.ytplayer&&isNaN(this.volumeVal)&&(this.volumeVal=this.ytplayer.getVolume()/100,this.player_.volume(this.volumeVal));return this.volumeVal};videojs.Youtube.prototype.setVolume=function(a){"undefined"!==typeof a&&a!==this.volumeVal&&(this.ytplayer.setVolume(100*
a),this.volumeVal=a,this.player_.trigger("volumechange"))};videojs.Youtube.prototype.muted=function(){return this.mutedVal};videojs.Youtube.prototype.setMuted=function(a){a?(this.ytplayer.mute(),this.player_.volume(0)):(this.ytplayer.unMute(),this.player_.volume(this.volumeVal));this.mutedVal=a;this.player_.trigger("volumechange")};videojs.Youtube.prototype.buffered=function(){if(this.ytplayer&&this.ytplayer.getVideoLoadedFraction){var a=this.ytplayer.getDuration(),a=this.ytplayer.getVideoLoadedFraction()*
a;return videojs.createTimeRange(0,a)}return videojs.createTimeRange(0,0)};videojs.Youtube.prototype.played=function(){if(this.ytplayer&&this.ytplayer.getCurrentTime){var a=this.ytplayer.getCurrentTime();return videojs.createTimeRange(0,a)}return videojs.createTimeRange(0,0)};videojs.Youtube.prototype.supportsFullScreen=function(){return!0};videojs.Youtube.isSupported=function(){return!0};videojs.Youtube.prototype.isFullscreen=function(){var a=document;return!!(a.webkitIsFullScreen||a.mozFullScreen||
a.msFullscreenElement||a.fullscreenElement||null!=this.playerEl_&&this.playerEl_.webkitDisplayingFullscreen)};videojs.Youtube.canPlaySource=function(a){return"video/youtube"===a.type};videojs.Youtube.canControlVolume=function(){return!0};videojs.Youtube.loadingQueue=[];videojs.Youtube.prototype.loadYoutube=function(){this.ytplayer=new YT.Player(this.id_,{events:{onReady:function(a){a.target.vjsTech.onReady()},onStateChange:function(a){a.target.vjsTech.onStateChange(a.data)},onPlaybackQualityChange:function(a){a.target.vjsTech.onPlaybackQualityChange(a.data)},
onError:function(a){a.target.vjsTech.onError(a.data)}}});this.ytplayer.vjsTech=this};videojs.Youtube.makeQueryString=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+"="+a[c]);return b.join("&")};window.onYouTubeIframeAPIReady=function(){for(var a;a=videojs.Youtube.loadingQueue.shift();)a.loadYoutube();videojs.Youtube.loadingQueue=[];videojs.Youtube.apiReady=!0};videojs.Youtube.prototype.onReady=function(){this.isReady_=!0;this.triggerReady();this.player_.trigger("loadedmetadata");
this.player_.trigger("durationchange");this.player_.trigger("timeupdate");var a=this.player_.poster();0<a.indexOf("img.youtube.com/")||0<a.indexOf("i.ytimg.com/")?(this.player_.poster(" "),this.addClass(this.playerEl_,"has-youtube-poster"),"undefined"!==typeof this.iframeblocker&&(this.iframeblocker.style.display="none")):(this.removeClass(this.playerEl_,"has-youtube-poster"),"undefined"!==typeof this.iframeblocker&&(this.iframeblocker.style.display=""));"undefined"!==typeof this.player_.loadingSpinner&&
this.player_.loadingSpinner.hide();this.player_.options().muted&&this.setMuted(!0);this.playOnReady&&(this.playOnReady=!1,this.play());!isNaN(this.startSeconds)&&0<this.startSeconds&&this.ytplayer.seekTo(this.startSeconds,!0)};videojs.Youtube.prototype.startSeconds=NaN;videojs.Youtube.prototype.updateQualities=function(){function a(a){h(a,"click",function(){var a=this.getAttribute("data-val");c.ytplayer.setPlaybackQuality(a);c.userQuality=a;f(c.qualityTitle,videojs.Youtube.parseQualityName(a));(a=
c.qualityMenuContent.querySelector(".vjs-selected"))&&videojs.Youtube.removeClass(a,"vjs-selected");videojs.Youtube.addClass(this,"vjs-selected")})}var b=this.ytplayer.getAvailableQualityLevels(),c=this;0>b.indexOf(this.userQuality)&&f(c.qualityTitle,videojs.Youtube.parseQualityName(this.defaultQuality));if(0===b.length)this.qualityButton.style.display="none";else{for(this.qualityButton.style.display="";this.qualityMenuContent.hasChildNodes();)this.qualityMenuContent.removeChild(this.qualityMenuContent.lastChild);
for(var d=0;d<b.length;++d){var e=document.createElement("li");e.setAttribute("class","vjs-menu-item");f(e,videojs.Youtube.parseQualityName(b[d]));e.setAttribute("data-val",b[d]);b[d]===this.quality&&videojs.Youtube.addClass(e,"vjs-selected");a(e);this.qualityMenuContent.appendChild(e)}}};videojs.Youtube.prototype.setAutoplay=function(a){};videojs.Youtube.prototype.onStateChange=function(a){if(a!==this.lastState){switch(a){case -1:this.player_.trigger("durationchange");break;case YT.PlayerState.ENDED:this.player_.options();
this.player_.trigger("ended");break;case YT.PlayerState.PLAYING:"undefined"!==typeof this.player_.bigPlayButton&&this.player_.bigPlayButton.hide();this.playVideoIsAllowed=!0;this.updateQualities();this.player_.trigger("timeupdate");this.player_.trigger("durationchange");this.player_.trigger("playing");this.player_.trigger("play");break;case YT.PlayerState.PAUSED:this.player_.trigger("pause");break;case YT.PlayerState.BUFFERING:this.player_.trigger("timeupdate"),this.player_.options().ytcontrols||
this.player_.trigger("waiting")}this.lastState=a}};videojs.Youtube.convertQualityName=function(a){switch(a){case "144p":return"tiny";case "240p":return"small";case "360p":return"medium";case "480p":return"large";case "720p":return"hd720";case "1080p":return"hd1080"}return"auto"};videojs.Youtube.parseQualityName=function(a){switch(a){case "tiny":return"144p";case "small":return"240p";case "medium":return"360p";case "large":return"480p";case "hd720":return"720p";case "hd1080":return"1080p"}return"auto"};
videojs.Youtube.prototype.onPlaybackQualityChange=function(a){if("undefined"===typeof this.defaultQuality&&(this.defaultQuality=a,"undefined"!==typeof this.userQuality))return;this.quality=a;f(this.qualityTitle,videojs.Youtube.parseQualityName(a));switch(a){case "medium":this.player_.videoWidth=480;this.player_.videoHeight=360;break;case "large":this.player_.videoWidth=640;this.player_.videoHeight=480;break;case "hd720":this.player_.videoWidth=960;this.player_.videoHeight=720;break;case "hd1080":this.player_.videoWidth=
1440;this.player_.videoHeight=1080;break;case "highres":this.player_.videoWidth=1920;this.player_.videoHeight=1080;break;case "small":this.player_.videoWidth=320;this.player_.videoHeight=240;break;case "tiny":this.player_.videoWidth=144;this.player_.videoHeight=108;break;default:this.player_.videoWidth=0,this.player_.videoHeight=0}this.player_.trigger("ratechange")};videojs.Youtube.prototype.onError=function(a){this.player_.error(a);if(100===a||101===a||150===a)this.player_.bigPlayButton.hide(),this.player_.loadingSpinner.hide(),
this.player_.posterImage.hide()};videojs.Youtube.addClass=function(a,b){-1===(" "+a.className+" ").indexOf(" "+b+" ")&&(a.className=""===a.className?b:a.className+" "+b)};videojs.Youtube.removeClass=function(a,b){var c,d;if(-1!==a.className.indexOf(b)){c=a.className.split(" ");for(d=c.length-1;0<=d;d--)c[d]===b&&c.splice(d,1);a.className=c.join(" ")}};videojs.Youtube.prototype.addClass=function(a,b){-1==(" "+a.className+" ").indexOf(" "+b+" ")&&(a.className=""===a.className?b:a.className+" "+b)};
videojs.Youtube.prototype.removeClass=function(a,b){var c,d;if(-1!=a.className.indexOf(b)){c=a.className.split(" ");for(d=c.length-1;0<=d;d--)c[d]===b&&c.splice(d,1);a.className=c.join(" ")}};var g=document.createElement("style");g.setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(g);g.styleSheet?g.styleSheet.cssText=" .vjs-youtube .vjs-poster { background-size: contain; }.vjs-youtube .vjs-poster, .vjs-youtube .vjs-loading-spinner, .vjs-youtube .vjs-text-track-display{    pointer-events: none !important; }.vjs-youtube.vjs-user-active .iframeblocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-tech.onDesktop { pointer-events: none; }.vjs-quality-button > div:first-child > span:first-child { position:relative;top:7px }":
g.appendChild(document.createTextNode(" .vjs-youtube .vjs-poster { background-size: contain; }.vjs-youtube .vjs-poster, .vjs-youtube .vjs-loading-spinner, .vjs-youtube .vjs-text-track-display{    pointer-events: none !important; }.vjs-youtube.vjs-user-active .iframeblocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-tech.onDesktop { pointer-events: none; }.vjs-quality-button > div:first-child > span:first-child { position:relative;top:7px }"));Array.prototype.indexOf||(Array.prototype.indexOf=
function(a,b){var c=this.length>>>0,d=Number(b)||0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d<c;d++)if(d in this&&this[d]===a)return d;return-1})})();
