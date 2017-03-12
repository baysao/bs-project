/*! videojs-skin - v0.0.0 - 2015-12-18
 * Modified by Tanh Nguyen*/

(function(window, videojs) {
	/* jshint eqnull: true*/
	'use strict';

	var defaults = {
		color: "#3ea9f5",
		live: false,
        viewer: true,
        online: false // stop broadcast , start broadcast
	},
		videoJsSkin;

	
	/**
	* Initialize the plugin.
	* @param options (optional) {object} configuration for the plugin
	*/
	videoJsSkin = function(options) {
		var settings = videojs.mergeOptions(defaults, options);
		var player  = this;

		



		//resize player video
		function resizePlayer() {

		    //apectio 16:9
			console.log(player.el_.offsetWidth);

			player.el_.style.height = (player.el_.offsetWidth) *9/16 + "px";

		}
		resizePlayer();
		window.onresize = OnResizeDocument;
		function OnResizeDocument () {
		    resizePlayer();
		}

		//init live streaming

		this.controlBar.liveDisplay.el_.innerHTML="";

		var dLiveStreaming = document.createElement('div');
		dLiveStreaming.className = "live-streaming";

		console.log(settings.live)
		if(settings.live) {
			this.controlBar.liveDisplay.el_.appendChild(dLiveStreaming);
		}

		function offline(){
			console.log('append ngoai tuyen')
			player.pause();
			
			//TODO: append offline div
			var liveStreamingOffline = document.createElement('div');
			liveStreamingOffline.className = "live-streaming-offline";
			liveStreamingOffline.id = 'lsNotReady';

			var statusOfflineLs = document.createElement('div');
			statusOfflineLs.className = 'status-offline-ls';
			liveStreamingOffline.appendChild(statusOfflineLs);

			var contentLs = document.createElement('div');
			contentLs.className = 'content-ls';
			statusOfflineLs.appendChild(contentLs);

			var textOffline = document.createElement('div');
			textOffline.className = "text-offline";
			textOffline.innerHTML = "Luồng này"
			contentLs.appendChild(textOffline);

			var txtOfflineTitle = document.createElement('div');
			txtOfflineTitle.className = "txt-offline-title";
			txtOfflineTitle.innerHTML = "Ngoại tuyến"
			contentLs.appendChild(txtOfflineTitle);

			if(settings.live) {
				player.el_.appendChild(liveStreamingOffline);
			}

		}

		function online(){
			console.log('remove append ngoai tuyen')
			player.play();
			//TODO: remove offline div

			player.el_.removeChild(player.el_.querySelector('.live-streaming-offline'));

		}

		if(settings.online == false) {
			offline();
		}
		this.updateOnline = function(onOff) {
			//console.log('online: ' + onOff);
			if (!onOff){
				offline();
			} else {
				this.off('play',offline);
				online();
			}
		}
		var dLiveStreamingText = document.createElement('span');
		dLiveStreamingText.className = "text-ls";
		dLiveStreaming.appendChild(dLiveStreamingText);
		dLiveStreamingText.innerHTML="LIVE";

		var dLiveStreamingVisit = document.createElement('span');
		dLiveStreamingVisit.className = "visitor-ls";
		dLiveStreaming.appendChild(dLiveStreamingVisit);

		var dLiveStreamingPlaying = document.createElement('span');
		dLiveStreamingPlaying.className = "playing-ls";
		dLiveStreaming.appendChild(dLiveStreamingPlaying);
		

		if(settings.viewer) {
			dLiveStreamingVisit.innerHTML="0";
			dLiveStreamingPlaying.innerHTML=" đang xem";
		}

		/*this.on("play", function(){
			console.log('seek currentTime');
			//this.currentTime(1000000);
		});*/

		this.updateSkinColor = function(color){
			updateSkinColor_(color);
		}

		this.updateViewer = function(visitor) {

			function convert2String(a){
				var b = String(a)
				var i = 0;
				while(true){
					i += 3;
					if (b.length-i<=0) break;
					b = b.substring(0,b.length-i) + "," +b.substring(b.length-i);
					i++;
			        console.log(b)
		        }
				return b
			}

			if(settings.live) {
				this.controlBar.liveDisplay.el_.querySelector('.visitor-ls').innerHTML = convert2String(visitor);
			}

			
		}

		this.updateSkinColor(settings.color);

		

		//contextmenu

		/**
		* Function to check if we clicked inside an element with a particular class
		* name.
		* 
		* @param {Object} e The event
		* @param {String} className The class name to check against
		* @return {Boolean}
		*/
		function clickInsideElement( e, className ) {
			var el = e.srcElement || e.target;

			if ( el.classList.contains(className) ) {
				return el;
			} else {
				while ( el = el.parentNode ) {
					if ( el.classList && el.classList.contains(className) ) {
					return el;
					}
				}
			}

			return false;
		}


		var playerOnBody = player.el_.ownerDocument.body;
		//console.log(playerOnBody);
		var taskItemInContext;
		var videoJsClass = "video-js";

		var codeEmbed = "Embed example"

		function createContextMenu() {
			var dContextMenu = document.createElement('div');
			dContextMenu.className = "vjs-context-menu";
			dContextMenu.id = "vjs-context-menu";
			playerOnBody.appendChild(dContextMenu);

			var dListContextMenu = document.createElement('ul');
			dListContextMenu.className = "list-context-menu";
			dContextMenu.appendChild(dListContextMenu);

			var dmaskContextMenu = document.createElement('div');
			dmaskContextMenu.className = "mask-context-menu";
			player.el_.appendChild(dmaskContextMenu);	

			//create list
			var dItemListContextMenu = document.createElement('li');
			dListContextMenu.appendChild(dItemListContextMenu);

			
			var dLinkListContextMenu = document.createElement('a');
			dLinkListContextMenu.className = "link-context-menu";
			dLinkListContextMenu.href = "http://mecloud.vn";
			dLinkListContextMenu.target = "_blank";
			dLinkListContextMenu.innerHTML = "About MeCloud Player HTML5";
			dItemListContextMenu.appendChild(dLinkListContextMenu);

		}
		createContextMenu(); 

	
		function onContextMenu() {
			playerOnBody.querySelector('.vjs-context-menu').classList.add("active");
			player.el_.querySelector('.mask-context-menu').style.display = "block";
		}
		
		function offContextMenu() {
			playerOnBody.querySelector('.vjs-context-menu').classList.remove("active");
			player.el_.querySelector('.mask-context-menu').style.display = "none";
		}


		/**
		* Listens for contextmenu events.
		*/
		

		document.addEventListener( "contextmenu", function(e) {
			taskItemInContext = clickInsideElement( e, videoJsClass );
			if (taskItemInContext) {
				e.preventDefault();
				onContextMenu();
				//console.log('onMenu');


				positionMenu(e);
			} else {
				taskItemInContext = null;
				//console.log('offMenu');
				offContextMenu();
				
				
			}
		});


		 //detect iframe
	    if(window.location == window.top.location) {
	      console.log('no iframe');
	      player.el_.querySelector('.vjs-resolution-button').classList.remove('withIframe');
	    }else {
	      console.log(player.el_.querySelector('.vjs-resolution-button'));
	      //window.player = player.el_.querySelector('.vjs-menu');
	      player.el_.querySelector('.vjs-resolution-button').classList.add('withIframe');
	    }

		/**
		* Listens for click events.
		*/
		document.addEventListener( "click", function(e) {
			var contextMenuLink = "link-context-menu";
			var clickeElIsLink = clickInsideElement( e, contextMenuLink );

			if ( clickeElIsLink ) {
				//e.preventDefault();
				//menuItemListener(clickeElIsLink);

			} else {
				var button = e.which || e.button;
				if ( button === 1 ) {
				  offContextMenu();
				}
			}
		});

		/**
		* Window resize event listener
		*/
		window.onresize = function(e) {
			offContextMenu();
		};

		/**
		* Get's exact position of event.
		* 
		* @param {Object} e The event passed in
		* @return {Object} Returns the x and y position
		*/
		function getPosition(e) {
			var posx = 0;
			var posy = 0;

			if (!e) var e = window.event;

			if (e.pageX || e.pageY) {
				posx = e.pageX;
				posy = e.pageY;
			} else if (e.clientX || e.clientY) {
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}

			return {
				x: posx,
				y: posy
			}
		}
	
		/**
		* Positions the menu properly.
		* 
		* @param {Object} e The event
		*/
		function positionMenu(e) {
			var clickCoords;
			var clickCoordsX;
			var clickCoordsY;	
			var menuState = 0;
			var playerWidth;
			var menuWidth;
			var menuHeight;
			var menuPosition;
			var menuPositionX;
			var menuPositionY;

			var windowWidth;
			var windowHeight;
			var menu = playerOnBody.querySelector('#vjs-context-menu');
			clickCoords = getPosition(e);
			clickCoordsX = clickCoords.x;
			clickCoordsY = clickCoords.y;

			//playerWidth = playerWidth.offsetWidth;

			menuWidth = menu.offsetWidth + 4;
			menuHeight = menu.offsetHeight + 4;

			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;

			/*console.log(clickCoords);

			console.log('windowWidth: ' + windowWidth);
			console.log('menuWidth: ' + menuWidth);
			console.log('clickCoordsX: ' + clickCoordsX);*/

			if ( (windowWidth - clickCoordsX) < menuWidth ) {
				menu.style.left = windowWidth - menuWidth + "px";
			} else {
				menu.style.left = clickCoordsX + "px";
			}

			if ( (windowHeight - clickCoordsY) < menuHeight ) {
				menu.style.top = windowHeight - menuHeight + "px";
			} else {
				menu.style.top = clickCoordsY + "px";
			}
		}


	}

	

	function updateSkinColor_(color) {
	    var styleSkinColor =    '.mep.video-js.vjs-color-custom .vjs-play-progress, .mep.video-js.vjs-color-custom .vjs-volume-level, .mep.video-js.vjs-color-custom .vjs-resolution-button .vjs-menu li.vjs-selected, .mep.video-js.vjs-color-custom .vjs-resolution-button .vjs-menu li.vjs-selected:hover, .mep.video-js.vjs-color-custom .vjs-resolution-button .vjs-menu li.vjs-selected:focus {background-color:' + color + ';}' +
                        '.mep.video-js.vjs-color-custom .vjs-loading-spinner:before{border-left-color: '+color+';border-right-color: '+color+';}'+
                        '.mep.video-js.vjs-color-custom .vjs-loading-spinner:after{border-top-color: '+color+';border-bottom-color: '+color+';}'
	    var styleTag = document.getElementById('vjs-skin-color')
	    if (!styleTag){
	    	styleTag = document.createElement("style");
	    	styleTag.id = "vjs-skin-color";
	    	styleTag.innerHTML = styleSkinColor;
	    	document.head.appendChild(styleTag)
	    } else{
	    	document.getElementById('vjs-skin-color').innerHTML = styleSkinColor;
	    }
	    
    	

	}
	
	// register the plugin
	videojs.plugin('videoJsSkin', videoJsSkin);
})(window, window.videojs);
