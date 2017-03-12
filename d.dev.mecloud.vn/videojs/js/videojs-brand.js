/*! videojs-poster - v0.0.0 - 2015-12-15
 * Modified by Tanh Nguyen */
(function(window, videojs) {
	'use strict';

	var defaults = {
		link:'http://mecloud.vn',
        image: 'brand.png',
        styleBrand: 'icon'
	}
	
	/**
	* Initialize the plugin.
	* @param options (optional) {object} configuration for the plugin
	*/
	var videoJsBrand = function(options) {
		var settings = videojs.mergeOptions(defaults, options),
		    player = this;

		var meBrand = new mmBrand(settings,player),
        	dommeBrand = meBrand.createPoster();
        
        meBrand.el_ = dommeBrand;

        var getElementScreen = player.controlBar.el_.querySelector('.vjs-fullscreen-control');
        //console.log(getElementScreen);
        player.controlBar.el_.insertBefore(dommeBrand,getElementScreen);


        player.videoJsBrand.update = function(settings) {
            meBrand.updateBrand(settings)
        }
        /*player.videoJsBrand.getConfig = function(settings){
            return meBrand
        }*/

	}

    function mmBrand(settings,player) {
        this.player = player;
    	this.link = settings.link;
    	this.image = settings.image;
        this.imageHover = settings.imageHover;
    	this.styleBrand = settings.styleBrand;
    }

    mmBrand.prototype.updateBrand = function(settings){ 
    	this.link = settings.link || this.link;
    	this.image = settings.image || this.image;
        this.imageHover = settings.imageHover;
    	this.styleBrand = settings.styleBrand || this.styleBrand;

        this.el_.className = 'btn-brand vjs-control ' + this.styleBrand + '-style';
        this.el_.href = this.link;
        this.el_.querySelector('.img-brand').src = this.image;

        this.el_.querySelector('.img-brand').setAttribute('style', 'width:auto !important');
        console.log("xxxxxxx")
        window.imgBrand = this.el_.querySelector('.img-brand')

        //console.log(this.imageHover.length);
        var elementImageHover = this.el_.querySelector('img.img-brand-hover');

        if(this.imageHover == '') {
            if(elementImageHover != 'undefined' && elementImageHover != null) elementImageHover.parentNode.removeChild(this.el_.querySelector('.img-brand-hover'));
            
        }else {

            if(elementImageHover != 'undefined' && elementImageHover != null) {
                elementImageHover.src = this.imageHover;
            }else{
                var dImageHover = document.createElement('img');
                dImageHover.className = "img-brand-hover"; 
                dImageHover.src = this.imageHover;

                this.el_.querySelector('.wrapper-img-brand').appendChild(dImageHover);
            }
           
        }
        
    }

	mmBrand.prototype.createPoster = function(){ 
		//div brand btn
        var dvjsBrand = document.createElement('a');

        //setting
        dvjsBrand.className = 'btn-brand vjs-control ' + this.styleBrand + '-style';
        dvjsBrand.id = 'vjs-brand';
        dvjsBrand.href = this.link;
        dvjsBrand.target = "_blank";

        var dSpan = document.createElement('span');
        dvjsBrand.appendChild(dSpan);

        var wrapSpan = document.createElement('span');
        wrapSpan.className = "wrapper-img-brand";
        dSpan.appendChild(wrapSpan);

        var dImage = document.createElement('img');
        dImage.className = "img-brand";
        dImage.setAttribute('style', 'width:auto !important');

        dImage.src = this.image;
        wrapSpan.appendChild(dImage);

        var dImageHover = document.createElement('img');
        dImageHover.className = "img-brand-hover";
        dImageHover.setAttribute('style', 'width:auto !important');
        dImageHover.src = this.imageHover;
        wrapSpan.appendChild(dImageHover);

        return dvjsBrand;
	}   

	// register the plugin
	videojs.plugin('videoJsBrand', videoJsBrand);
})(window, window.videojs);
