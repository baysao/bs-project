/*! videojs-watermark - v0.0.0 - 2015-12-15
 * Modified by Tanh Nguyen */
(function(window, videojs) {
	'use strict';

	var defaults = {
		logoLink:'',
		posX : 10 ,
    	posY : 10,
    	opacity :0.7,
    	maxWidthLogo : 10,
    	webLink :'http://mecloud.vn',
    	autoHide :false
	}
	
	
	
	/**
	* Initialize the plugin.
	* @param options (optional) {object} configuration for the plugin
	*/
	var videoJsWatermark = function(options) {

		var settings = videojs.mergeOptions(defaults, options),
		    player = this;
	    //console.log(settings);

		var mepWatermark = new mmWatermark(settings, player);
    	mepWatermark.createWatermark();
    	player.mmWatermark = mepWatermark;


        player.videoJsWatermark.update = function(settings){
        	mepWatermark.update(settings)
        }

        player.videoJsWatermark.getConfig = function(settings){
        	return mepWatermark
        }
    }


	//watermark 
    /*
     * 
     */
    function mmWatermark(settings, player) {

    	this.player = player;
    	this.logoLink = settings.logoLink;
        this.webLink = settings.webLink;
        this.opacity = settings.opacity;
        this.position = settings.position; //
        this.posX = settings.posX;
        this.posY = settings.posY;
        this.autoHide = settings.autoHide;
        this.maxWidthLogo = settings.maxWidthLogo;
        this.dvjsWatermark = null;
        this.styleDefault = null;

        var self = this;
        var getHeightControlBar = player.controlBar.height();
        var disWatermark = 10; //distance from logo to controlBar
		var posBottomDefault = getHeightControlBar + disWatermark;

		function autoHideLogo(){
			//console.log("======== " + self.autoHide)
			if (self.autoHide === false || player.userActive()) {
	        	self.dvjsWatermark.style.opacity = self.opacity;
	        	//console.log('show logo');
	        } else if (self.autoHide === true){
	        	self.dvjsWatermark.style.opacity = '0';
	        	//console.log('hide logo');
	        }
		}

		

        player.on("play", function(){
        	switch (self.position) {
	        	case 'topLeft':
	        		self.dvjsWatermark.setAttribute("style", "top:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault); 
	        		break;
	        	case 'topRight':
	        		self.dvjsWatermark.setAttribute("style", "top:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault); 
	        		break;
	        	case 'bottomLeft':
	        		if(self.posY <= posBottomDefault) {
						self.dvjsWatermark.setAttribute("style", "bottom:" + posBottomDefault + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
		        	} else {
		        		self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
        				
		        	}

		        	console.log(self.player.el_.querySelector('.vjs-remaining-time'));
		        	self.player.el_.querySelector('.vjs-remaining-time').classList.add('fixPos');

	        		break;
	        	default:
	        		if(self.posY <= posBottomDefault) {
						self.dvjsWatermark.setAttribute("style", "bottom:" + posBottomDefault + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
		        	} else {
		        		self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
		        	}
		        	self.player.el_.querySelector('.vjs-remaining-time').classList.remove('fixPos');

	        		break;
	        }
	        autoHideLogo()
		});
	

		player.on("useractive", function(){
			//console.log("useractive handle")
			switch (self.position) {
	        	case 'topLeft':
	        		self.dvjsWatermark.setAttribute("style", "top:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault); 
	        		break;
	        	case 'topRight':
	        		self.dvjsWatermark.setAttribute("style", "top:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault); 
	        		break;
	        	case 'bottomLeft':
	        		if(self.posY <= posBottomDefault) {
						self.dvjsWatermark.setAttribute("style", "bottom:" + posBottomDefault + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
		        	} else {
		        		self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
        				
		        	}
		        	self.player.el_.querySelector('.vjs-remaining-time').classList.add('fixPos');
	        		break;
	        	default:
	        		if(self.posY <= posBottomDefault) {
						self.dvjsWatermark.setAttribute("style", "bottom:" + posBottomDefault + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
		        	} else {
		        		self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
        				
		        	}
		        	self.player.el_.querySelector('.vjs-remaining-time').classList.remove('fixPos');
	        		break;
	        }
	        autoHideLogo()
	        
		});


		player.on("userinactive", function(){
			
			//console.log("userinactive handle")
			switch (self.position) {
	        	case 'topLeft':
	        		self.dvjsWatermark.setAttribute("style", "top:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault); 
	        		break;
	        	case 'topRight':
	        		self.dvjsWatermark.setAttribute("style", "top:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault); 
	        		break;
	        	case 'bottomLeft':
	        		if (!player.paused()){
		        		
	        			self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
			        }else {
			        	if(self.posY <= posBottomDefault) {
			        		self.dvjsWatermark.setAttribute("style", "bottom:" + posBottomDefault + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
			        	}else {
			        		self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "left:" + self.posX + "px;" + self.styleDefault);
			        	}
			        }
			        self.player.el_.querySelector('.vjs-remaining-time').classList.add('fixPos');
	        		break;
	        	default:
	        		//console.log(self.posY)
	        		if (!player.paused()){
		        		
	        			self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
			        }else {
			        	if(self.posY <= posBottomDefault) {
			        		self.dvjsWatermark.setAttribute("style", "bottom:" + posBottomDefault + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
			        	}else {
			        		self.dvjsWatermark.setAttribute("style", "bottom:" + self.posY + "px;" + "right:" + self.posX + "px;" + self.styleDefault);
			        	}
			        }
			        self.player.el_.querySelector('.vjs-remaining-time').classList.remove('fixPos');

	        		break;
	        }
	        autoHideLogo()
		});
		
    }



    mmWatermark.prototype.update = function(settings){ 
    	this.logoLink = settings.logoLink;
        this.webLink = settings.webLink || this.webLink;
        this.opacity = settings.opacity || this.opacity;
        this.position = settings.position || this.position;
        this.posX = settings.posX || this.posX ;
        this.posY = settings.posY || this.posY;

        if (settings.autoHide==="true")
        	settings.autoHide = true;
        else if (settings.autoHide==="false")
        	settings.autoHide = false;

        this.autoHide = typeof(settings.autoHide)=="undefined" ? this.autoHide :  settings.autoHide ;
        
        this.maxWidthLogo = settings.maxWidthLogo || this.maxWidthLogo;


        var elementLogoLink = this.el_.querySelector('img');
        //console.log(elementLogoLink)

        if(this.logoLink == '') {

        	if(elementLogoLink != "undefined" && elementLogoLink != null){
        		elementLogoLink.parentNode.removeChild(this.el_.querySelector('img'));
        	}
            
        }else {

        	if(elementLogoLink != "undefined" && elementLogoLink != null){
        		elementLogoLink.src = this.logoLink;
        	}else {
        		var dLogoLink = document.createElement('img');
	            dLogoLink.src = this.logoLink;
	            this.el_.appendChild(dLogoLink);
        	}

            

        }

        this.updateWaterMark();
        
    }

    mmWatermark.prototype.updateWaterMark = function(){
    	//console.log("autohide " + this.autoHide)

    	this.dvjsWatermark.setAttribute('href',this.webLink);
		this.dvjsWatermark.logo_.src = this.logoLink
    	this.dvjsWatermark.style.maxWidth = this.maxWidthLogo + '%';
        this.dvjsWatermark.style.opacity = this.opacity;


        this.dvjsWatermark.style.bottom = ""
        this.dvjsWatermark.style.top = ""
        this.dvjsWatermark.style.left = ""
        this.dvjsWatermark.style.right = ""

        this.styleDefault = this.dvjsWatermark.style.cssText;



        //console.log(this.styleDefault)
        if (player.userActive()){
        	this.player.trigger("useractive")
        }
        else{
        	this.player.trigger("userinactive")
        }
    }

	mmWatermark.prototype.createWatermark = function(){ 
		//div logo-watermark
        this.dvjsWatermark = document.createElement('a');

    	var currentPos = this.position,
        	self = this;

        //setting
        this.dvjsWatermark.className = 'logo-watermark';
        this.dvjsWatermark.id = 'vjs-watermark';
        this.dvjsWatermark.setAttribute('href',self.webLink);

        this.dvjsWatermark.style.maxWidth = self.maxWidthLogo + '%';
        this.dvjsWatermark.style.opacity = self.opacity;
		this.styleDefault = this.dvjsWatermark.style.cssText; //cssText can add more style...

        this.player.el_.appendChild(this.dvjsWatermark);

        this.el_ = this.dvjsWatermark;

        
        var imageEl = document.createElement('img');
        imageEl.src = this.logoLink;

        this.dvjsWatermark.appendChild(imageEl);

        this.dvjsWatermark.logo_ = imageEl;

        console.log('this.logoLink:' + this.logoLink);

        if(this.logoLink == '') {
        	console.log('ko gia tri: ' + this.logoLink);
            this.el_.removeChild(this.el_.querySelector('img'));
            
        }else {
            console.log('co gia tri: ' + this.logoLink);
            var dLogoLink = document.createElement('img');
            dLogoLink.src = this.logoLink;
            this.el_.appendChild(dLogoLink);

        }

	}   

	// register the plugin
	videojs.plugin('videoJsWatermark', videoJsWatermark);
})(window, window.videojs);
