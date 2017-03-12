/*! videojs-resolution-switcher - v0.0.0 - 2015-7-26
 * Copyright (c) 2015 Kasper Moskwiak
 * Modified by Pierre Kraft
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
  /* jshint eqnull: true*/
  'use strict';

  var defaults = {},
      videoJsResolutionSwitcher;

  function setSourcesSanitized(player, sources) {

    //Assign Label HD Resolution
    //vmp-resolution-button-staticlabel
    var _children = player.controlBar.resolutionSwitcher.el_.children;
    var staticLabel = getElementFromArrayByClassName(_children, 'vmp-resolution-button-staticlabel');
    //var staticLabel = player.controlBar.resolutionSwitcher.el_.children[1];
    var labelHD = "";
    if(sources[0].res == '1080' || sources[0].res == '720') labelHD = "<i>HD</i>";
    if (staticLabel != false) staticLabel.innerHTML = labelHD;
    //END Assign Label HD Resolution

    return player.src(sources.map(function(src) {
      return {src: src.src, type: src.type, res: src.res};
    }));
  }

  function getElementFromArrayByClassName(elements, className){
    if (typeof(elements) != "undefined"){
      for (var i = 0; i < elements.length; i++) {
        if(elements[i].className == className) return elements[i];
      };
    }
    
    return false;
  }

 
  


  /*
   * Resolution menu item
   */
  var MenuItem = videojs.getComponent('MenuItem');

  var ResolutionMenuItem = videojs.extend(MenuItem, {
    constructor: function(player, options, onClickListener, label){
      this.onClickListener = onClickListener;
      this.label = label;
      // Sets this.player_, this.options_ and initializes the component
      MenuItem.call(this, player, options);
      this.src = options.src;

      this.on('click', this.onClick);
      this.on('touchstart', this.onClick);

      if (options.initialySelected) {
        this.showAsLabel();
        this.selected(true);
      }
     
    },
    showAsLabel: function() {
      // Change menu button label to the label of this item if the menu button label is provided
      if(this.label) {
        this.label.innerHTML = this.options_.label;
      }
    },
    onClick: function(){
      this.onClickListener(this);
      // Hide bigPlayButton
      this.player_.bigPlayButton.hide();
      // Remember player state
      var currentTime = this.player_.currentTime();
      var isPaused = this.player_.paused();
      this.showAsLabel();
      // Change player source and wait for loadeddata event, then play video
      // loadedmetadata doesn't work right now for flash.
      // Probably because of https://github.com/videojs/video-js-swf/issues/124
      setSourcesSanitized(this.player_, this.src).one('loadeddata', function() {
        this.player_.currentTime(currentTime);
        if(!isPaused){
          // Start playing and hide loadingSpinner (flash issue ?)
          this.player_.play().handleTechSeeked_();
        }
        this.player_.trigger('resolutionchange');
      });
    }
  });


  /*
   * Resolution menu button
   */


   

   var MenuButton = videojs.getComponent('MenuButton');
   var ResolutionMenuButton = videojs.extend(MenuButton, {
     constructor: function(player, options, settings, label){
      this.sources = options.sources;
      this.label = label;
      this.label.innerHTML = options.initialySelectedLabel;
      // Sets this.player_, this.options_ and initializes the component
      MenuButton.call(this, player, options);
      //videojs.controlBar.resolutionSwitcher.children_[0]
      this.controlText('Quality');
      this.controlTextEl_.parentNode.removeChild(this.controlTextEl_);



      if(settings.dynamicLabel){
        this.el().appendChild(label);
      }else{
        //console.log(this.el());
        var staticLabel = document.createElement('span');
        staticLabel.classList.add('vmp-resolution-button-staticlabel');
        this.el().appendChild(staticLabel);

      }



     },

     /*handleClick: function() {
      if (this.buttonPressed_) {
        this.unpressButton();
        console.log('1');
      } else {
        this.pressButton();
        console.log('2');
      }    
      var self = this;
       window.addEventListener('mouseup',function(event) {
        var vmpMenu = document.getElementsByClassName("vmp-menu");
        if (event.target != vmpMenu[5] && event.target.parentNode != vmpMenu[5]){
          self.unpressButton();
          console.log(vmpMenu[5]);
        }
      });   
     },*/
     createItems: function(){
       var menuItems = [];
       var labels = (this.sources && this.sources.label) || {};
       var onClickUnselectOthers = function(clickedItem) {
        menuItems.map(function(item) {
          item.selected(item === clickedItem);
        });
       };

       for (var key in labels) {
         if (labels.hasOwnProperty(key)) {
          menuItems.push(new ResolutionMenuItem(
            this.player_,
            {
              label: key,
              src: labels[key],
              initialySelected: key === this.options_.initialySelectedLabel
            },
            onClickUnselectOthers,
            this.label));
          }
       }

       
       
       return menuItems;



     }
   });

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  videoJsResolutionSwitcher = function(options) {
    var settings = videojs.mergeOptions(defaults, options),
        player = this,
        label = document.createElement('span');

    label.classList.add('vmp-resolution-button-label');

    

    player.updateSrc = function(src){
      
      //Return current src if src is not given
      if(!src){ return player.src(); }
      // Dispose old resolution menu button before adding new sources
      if(player.controlBar.resolutionSwitcher){
        player.controlBar.resolutionSwitcher.dispose();
        delete player.controlBar.resolutionSwitcher;
      }
      //Sort sources
      src = src.sort(compareResolutions);
      var groupedSrc = bucketSources(src);
      var choosen = chooseSrc(groupedSrc, src);
      var menuButton = new ResolutionMenuButton(player, { sources: groupedSrc, initialySelectedLabel: choosen.label , initialySelectedRes: choosen.res}, settings, label);
      menuButton.el().classList.add('vmp-resolution-button');

      player.controlBar.resolutionSwitcher = player.controlBar.addChild(menuButton);

      //custom quality UI
      var vmpTitleRes = player.controlBar.resolutionSwitcher.controlTextEl_;
      //var vmpMenuRes = player.controlBar.resolutionSwitcher.el_.children[0];
      //console.log(vmpMenuRes)
      //vmpMenuRes.insertBefore(vmpTitleRes,vmpMenuRes.children[0]);
      // end custom quality UI



      return setSourcesSanitized(player, choosen.sources);


    };



    /**
     * Method used for sorting list of sources
     * @param   {Object} a source object with res property
     * @param   {Object} b source object with res property
     * @returns {Number} result of comparation
     */
    function compareResolutions(a, b){
      if(!a.res || !b.res){ return 0; }
      return (+b.res)-(+a.res);
    }

    /**
     * Group sources by label, resolution and type
     * @param   {Array}  src Array of sources
     * @returns {Object} grouped sources: { label: { key: [] }, res: { key: [] }, type: { key: [] } }
     */
    function bucketSources(src){
      var resolutions = {
        label: {},
        res: {},
        type: {}
      };
      src.map(function(source) {
        initResolutionKey(resolutions, 'label', source);
        initResolutionKey(resolutions, 'res', source);
        initResolutionKey(resolutions, 'type', source);

        appendSourceToKey(resolutions, 'label', source);
        appendSourceToKey(resolutions, 'res', source);
        appendSourceToKey(resolutions, 'type', source);
      });
      return resolutions;
    }

    function initResolutionKey(resolutions, key, source) {
      if(resolutions[key][source[key]] == null) {
        resolutions[key][source[key]] = [];
      }
    }

    function appendSourceToKey(resolutions, key, source) {
      resolutions[key][source[key]].push(source);
    }

    /**
     * Choose src if option.default is specified
     * @param   {Object} groupedSrc {res: { key: [] }}
     * @param   {Array}  src Array of sources sorted by resolution used to find high and low res
     * @returns {Object} {res: string, sources: []}
     */
    function chooseSrc(groupedSrc, src){
      var selectedRes = settings.default;
      var selectedLabel = '';

      if (selectedRes === 'high') {
        selectedRes = src[0].res;
        selectedLabel = src[0].label;
      } else if (selectedRes === 'low' || selectedRes == null) {
        // Select low-res if default is low or not set
        selectedRes = src[src.length - 1].res;
        selectedLabel = src[src.length -1].label;
      } else if (groupedSrc.res[selectedRes]) {
        selectedLabel = groupedSrc.res[selectedRes][0].label;
      }
      
      if(selectedRes === undefined){
        return {res: selectedRes, label: selectedLabel, sources: groupedSrc.label[selectedLabel]};
      }
      return {res: selectedRes, label: selectedLabel, sources: groupedSrc.res[selectedRes]};
    }

    // Create resolution switcher for videos form <source> tag inside <video>
    if(player.options_.sources.length > 1){
      player.updateSrc(player.options_.sources);

      //console.log(player.options_.sources);

      /*var arrayRes = player.options_.sources;
      console.log(arrayRes);

      for (i = 0; i<arrayRes.length; i++) {
        if(arrayRes[i].res == "1080" || arrayRes[i].res == "720") {

        }
      }
      if (player.options_.sources.res == 1080) {
        console.log('Full HD');
      }*/
    }

  };

  


  // register the plugin
  videojs.plugin('videoJsResolutionSwitcher', videoJsResolutionSwitcher);
})(window, window.videojs);
