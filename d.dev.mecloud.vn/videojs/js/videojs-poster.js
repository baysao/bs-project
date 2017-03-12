/*! videojs-poster - v0.0.0 - 2015-12-15
 * Modified by Tanh Nguyen */
(function(window, videojs) {
	'use strict';

	var defaults = {
		title:'[Official Trailer] Tuấn Hưng - Word Tour Đam Mê in Australia',
        image: 'poster.png',
        position: 'top',
        autoplay: false,
        offTitle: false,
        buttonPlay: true,
        showControlBar: false
	}
		

	
	/**
	* Initialize the plugin.
	* @param options (optional) {object} configuration for the plugin
	*/
	var videoJsPoster = function(options) {
		var settings = videojs.mergeOptions(defaults, options),
		    player = this;

		var mePoster = new mmPoster(settings,player),
        	domMePoster = mePoster.createPoster();

        mePoster.el_ = domMePoster;
        player.el_.appendChild(domMePoster);

        var domMePlay = mePoster.createPlay();
        player.el_.appendChild(domMePlay);
        
        if (settings.autoplay) {
		    player.play();
		    mePoster.el_.style.display = 'none';
		}

		player.mePoster = mePoster;
        //player.mePlay = mePlay;

	}
	//player-holder 
    /*
     * 
     */

    function mmPoster(settings,player) {
        this.player = player;
    	this.title = settings.title;
    	this.image = settings.image;
    	this.position = settings.position;
        this.showControlBar = settings.showControlBar;
    	this.autoplay = settings.autoplay;
    	this.offTitle = settings.offTitle;
        this.buttonPlay = settings.buttonPlay == "true" ? true : settings.buttonPlay == "false" ? false : true; 

        if ((this.position == 'bottom' && this.showControlBar == false) || (this.position == 'bottom' && this.showControlBar == true) || this.showControlBar == false) {
            this.player.el_.querySelector('.vjs-control-bar').style.cssText = 'z-index: 4';
        }else {
            this.player.el_.querySelector('.vjs-control-bar').style.cssText = 'z-index: 999';
        }

        player.on("play", function(){
            this.el_.querySelector('.vjs-poster').style.cssText = 'display: none';
        });

    }

    mmPoster.prototype.updatePoster = function(settings){ 
    	//console.log("updatePoster " + this.player.el_.id)
    	this.title = settings.title || this.title;
    	this.image = settings.image || this.image ;
    	this.position = settings.position || this.position;
        this.showControlBar = settings.showControlBar == "true" ? true : settings.showControlBar == "false" ? false : this.showControlBar;
    	this.autoplay = settings.autoplay == "true" ? true : settings.autoplay == "false" ? false : this.autoplay;
    	this.offTitle = settings.offTitle == "true" ? true : settings.offTitle == "false" ? false : this.offTitle; 
        this.buttonPlay = settings.buttonPlay == "true" ? true : settings.buttonPlay == "false" ? false : true; 

        if ((this.position == 'bottom' && this.showControlBar == false) || (this.position == 'bottom' && this.showControlBar == true) || this.showControlBar == false) {
            this.el_.parentNode.querySelector('.vjs-control-bar').style.cssText = 'z-index: 4';
        }else {
            this.el_.parentNode.querySelector('.vjs-control-bar').style.cssText = 'z-index: 999';
        }
    	
    	if (this.offTitle){
    		this.el_.className = 'vjs-poster ' + 'pos' + this.position + ' offTitle';
		}else {
			this.el_.className = 'vjs-poster ' + 'pos' + this.position;
		}
    	
        this.el_.style["background-image"]='url(' + this.image + ')';
        this.el_.querySelector(".title-mep").innerHTML = this.title;
        //console.log(this.el_.style)
        this.el_.style.display="block";
        if (this.autoplay){
	    	this.player.play();
	    	this.el_.style.display = 'none';
		}
    }

    mmPoster.prototype.getConfig = function(settings){
    	return this
    }

	mmPoster.prototype.createPoster = function(){ 
		//div player holder
        var dvjsPoster = document.createElement('div');

        dvjsPoster.className = 'vjs-poster ' + 'pos' + this.position;
        dvjsPoster.id = 'vjs-poster';

        var attBackground  = document.createAttribute('style');
        attBackground.value="background-image:url(" + this.image + ")";
        dvjsPoster.setAttributeNode(attBackground);

        var wrapperBtnBig = document.createElement('div');
        wrapperBtnBig.className = 'wrapper-btn-big-play';
        dvjsPoster.appendChild(wrapperBtnBig);

		var btnBigPlay = document.createElement('div');
		btnBigPlay.className = 'btn-big-play';        
		wrapperBtnBig.appendChild(btnBigPlay);

		var iconBigPlay = document.createElement('div');
		iconBigPlay.className = 'icon-play';        
		btnBigPlay.appendChild(iconBigPlay);

		var iconSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16.6px" height="18.963px" viewBox="0 0 16.6 18.963" enable-background="new 0 0 16.6 18.963" xml:space="preserve"><path d="M0,1.942c0-1.777,1.31-2.461,2.911-1.519l12.488,7.346c1.601,0.942,1.601,2.483,0,3.425L2.911,18.54C1.31,19.481,0,18.798,0,17.021V1.942z"/></svg>'
		iconBigPlay.innerHTML = iconSvg;

		var titleMep = document.createElement('div');
		titleMep.className = "title-mep";
		titleMep.innerHTML = this.title;
		btnBigPlay.appendChild(titleMep);
		var self = this;

		dvjsPoster.addEventListener('click',function(){
	        	self.player.play();
		        this.style.display = 'none';
	    });

        return dvjsPoster;

	} 



    mmPoster.prototype.createPlay = function(){ 

        var statusPlay = document.createElement('div');
        statusPlay.className = "status-player";

        var iconSvgPlay = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16.6px" height="18.963px" viewBox="0 0 16.6 18.963" enable-background="new 0 0 16.6 18.963" xml:space="preserve"><path d="M0,1.942c0-1.777,1.31-2.461,2.911-1.519l12.488,7.346c1.601,0.942,1.601,2.483,0,3.425L2.911,18.54C1.31,19.481,0,18.798,0,17.021V1.942z"/></svg>';
        statusPlay.innerHTML = iconSvgPlay;

        var self = this;
        
        statusPlay.addEventListener("click",function(){
            self.player.play();
        });
        
        this.player.on('pause',function(){
            if (self.buttonPlay)
                this.el_.querySelector('.status-player').classList.add('flash');
        })
        this.player.on('play',function(){
            this.el_.querySelector('.status-player').classList.remove('flash');
        })
        console.log('createPlay')
        this.statusPlay = statusPlay
        return statusPlay;

    }   

    mmPoster.prototype.hideButtonPlay = function() {
        this.statusPlay.classList.remove('flash');
    }
    mmPoster.prototype.showButtonPlay = function() {
        if (this.buttonPlay)
            this.statusPlay.classList.add('flash');
    }

	// register the plugin
	videojs.plugin('videoJsPoster', videoJsPoster);
})(window, window.videojs);
