/* global js */
var s = document.createElement('style'), 
    r = document.querySelectorAll('input[type=range]'),
    valOpacity = document.getElementById('valOpacity'), 
    prefs = ['webkit-slider-runnable', 'moz-range'], 
    styles = [], 
    l = prefs.length,
    n = r.length;

document.body.appendChild(s);

var getTrackStyleStr = function(el) {
  var str = '', 
      j = el.dataset.idx, 
      min = el.min || 0, 
      perc = (el.max) ? ~~(100*(el.value - min)/(el.max - min)) : el.value, 
      val = perc + '% 100%';

      valOpacity.innerHTML = perc + '%';
      valOpacity.setAttribute('data-opacity',perc/100);
      
  for(var i = 0; i < l; i++) {
    str += '.js input[type=range]:nth-of-type(' + j + ')::-' + prefs[i] + '-track{background-size:' + val + '}';
  }
    
  return str;
};

var getTipStyleStr = function(el) {
  var str = '.js input[type=range]:nth-of-type(' + el.dataset.idx + ') /deep/ #thumb:after{content:"' + el.value + '%"}';
  
  return str;
};

for(var i = 0; i < n; i++) {
  styles.push('');
  
  r[i].addEventListener('input', function() {    
    styles[this.dataset.idx] = getTrackStyleStr(this);
    if(this.classList.contains('tip')) {
      styles[this.dataset.idx] += getTipStyleStr(this);
    }
    
    s.textContent = styles.join('');
  }, false);
}

//////Mix it up//////////
$('#grid').masonry({
  // options
  itemSelector: '.box-control',
  //columnWidth: 200
});

//////Custom poster/////
var vjsPoster = $("#vjs-poster"),
    posPoster = $('#posPoster'),
    defaultPoster = $('#defaultPoster');
    //autoPlayPoster = $('#autoPlayPoster');
    offTitlePoster = $('#offTitlePoster');
    showControlBar = $('#showControlBar');
    buttonPlayId = $('#buttonPlayId');

videojs.getPlayers()['mePlayer'].on('ready', function(){

    var posterConfig = this.mePoster.getConfig();
    if (posterConfig.offTitle=="true") {
        offTitlePoster.attr('checked','true');
    } else {
        offTitlePoster.removeAttr('checked');
    }

    posPoster.on('change', function() {
        if ($(this).val() == 'bottom') {
            $('#scb').hide(); 
        }else {
            $('#scb').show();  
        }
    });

    offTitlePoster.on('click',function(){
        if ($(this).is(':checked')) {
            $(this).val('true');
            //console.log(offTitlePoster.val())
        }else {
            $(this).val('false');
            //console.log(offTitlePoster.val())
        }
    });  

    if (posterConfig.buttonPlay=="false") {
        buttonPlayId.removeAttr('checked');
    } else {
        buttonPlayId.attr('checked','true');
    }

    buttonPlayId.on('click',function(){
        if ($(this).is(':checked')) {
            $(this).val('true');
            //console.log(offTitlePoster.val())
        }else {
            $(this).val('false');
            //console.log(offTitlePoster.val())
        }
    }); 

    if (posterConfig.buttonPlay=="false") {
        buttonPlayId.removeAttr('checked');
    } else {
        buttonPlayId.attr('checked','true');
    }

    buttonPlayId.on('click',function(){
        if ($(this).is(':checked')) {
            $(this).val('true');
            //console.log(offTitlePoster.val())
        }else {
            $(this).val('false');
            //console.log(offTitlePoster.val())
        }
    }); 

    if (posterConfig.showControlBar=="false") {
        showControlBar.removeAttr('checked');
    } else {
        showControlBar.attr('checked','true');
    }

    showControlBar.on('click',function(){
        if ($(this).is(':checked')) {
            $(this).val('true');
            //console.log(showControlBar.val())
        }else {
            $(this).val('false');
            //console.log(showControlBar.val())
        }
    }); 


})

$('#btnPoster').click(function() {
    console.log('btnPoster handle')
    videojs.getPlayers()['mePlayer'].mePoster.updatePoster({
        image: defaultPoster.val(),
        position: posPoster.val(),
        offTitle: offTitlePoster.val(),
        buttonPlay: buttonPlayId.val(),
        showControlBar: showControlBar.val()
    });
});



//////Custom skin color/////
var videoJS = $(".video-js"),
    skinColor = $('#skinColor'),
    colorPicker = $('#colorPicker'),
    player = videojs('mePlayer');


skinColor.change(function() {
    var valColor = skinColor.val(),
        getCurrentColor;

    updateSkinColor(valColor);

    switch(valColor) {
        case '#3ea9f5':
            getCurrentColor = colorPicker.val('#3ea9f5');
            colorPicker.lastColor = '#3ea9f5';
        break;
        case '#f39c12':
            getCurrentColor = colorPicker.val('#f39c12');
            colorPicker.lastColor = '#f39c12';
        break;
        case '#2ecc71':
            getCurrentColor = colorPicker.val('#2ecc71');
            colorPicker.lastColor = '#2ecc71';
        break;

    }

    if (valColor == "#8e44ad") {
        $('#pickColor').css('opacity','1');
        colorPicker.removeAttr('disabled');
        //console.log(colorPicker.lastColor);
        customColorSkin(colorPicker.lastColor);

    }else {
        $('#pickColor').css('opacity','0.2');
        colorPicker.attr('disabled', 'disabled');
    }

});
function customColorSkin(color_) {
    updateSkinColor(color_);
}
// update skin color
function updateSkinColor(color) {

    //console.log(color);
    var styleSkinColor =    '.mep.video-js.vjs-color-custom .vjs-play-progress, .mep.video-js.vjs-color-custom .vjs-volume-level, .mep.video-js.vjs-color-custom .vjs-resolution-button .vjs-menu li.vjs-selected, .mep.video-js.vjs-color-custom .vjs-resolution-button .vjs-menu li.vjs-selected:hover, .mep.video-js.vjs-color-custom .vjs-resolution-button .vjs-menu li.vjs-selected:focus {background-color:' + color + ';}' +
                        '.mep.video-js.vjs-color-custom .vjs-loading-spinner:before{border-left-color: '+color+';border-right-color: '+color+';}'+
                        '.mep.video-js.vjs-color-custom .vjs-loading-spinner:after{border-top-color: '+color+';border-bottom-color: '+color+';}'
    document.getElementById('vjs-skin-color').innerHTML = styleSkinColor;

}


// custom watermark
var btnWatermark = $('#btnWatermark'),
    logoImageWatermark = $('#logoImageWatermark'),
    posLogo = $('#posLogo'),
    posXlogo = $('#posXlogo'),
    posYlogo = $('#posYlogo'),
    linkWatermark = $('#linkWatermark'),
    widthLogo = $('#widthLogo'),
    autoHideWatermark = $('#autoHideWatermark');

videojs.getPlayers()['mePlayer'].on('ready', function(){
    var watermarkConfig = this.videoJsWatermark.getConfig();
    //console.log(watermarkConfig.autoHide)
    if (watermarkConfig.autoHide) {
        autoHideWatermark.attr('checked','true');
    } else {
       autoHideWatermark.removeAttr('checked');
    }

    autoHideWatermark.on('click',function(){
        if (autoHideWatermark.is(':checked')) {
            autoHideWatermark.val('true');
           // console.log(autoHideWatermark.val())
        }else {
            autoHideWatermark.val('false');
            //console.log(autoHideWatermark.val())
        }
    });  

})


btnWatermark.on('click',function(){

    videojs.getPlayers()['mePlayer'].videoJsWatermark.update({
        opacity: valOpacity.dataset.opacity, //default is 10% compare with player
        maxWidthLogo: widthLogo.val(),
        webLink: linkWatermark.val(),
        logoLink: logoImageWatermark.val(),
        posX: posXlogo.val(),   // x align with position, default value is 10px
        posY: posYlogo.val(),   // y align with position, default value is 10px
        position: posLogo.val(), // topRight, bottomLeft, bottomRight is default
        autoHide: autoHideWatermark.val() 
    });
    


});
posLogo.change(function(){
    $('.pos-item').removeClass('selected');
    switch(posLogo.val()) {
        case 'topLeft':
            $('.top-left').addClass('selected');
        break;
        case 'topRight':
            $('.top-right').addClass('selected');
        break;
        case 'bottomLeft':
            $('.bottom-left').addClass('selected');
        break;
        case 'bottomRight':
            $('.bottom-right').addClass('selected');
        break;
    }
});

///////// Brand custom ////////////
var brandLink = $('#brandLink'),
    brandLogo = $('#brandLogo'),
    brandLogoHover = $('#brandLogoHover'),
    brandStyle = $('#brandStyle'),
    btnBrand = $('#btnBrand');

btnBrand.on('click',function(){

    console.log('hover: ' + brandLogoHover.val());

    videojs.getPlayers()['mePlayer'].videoJsBrand.update({
        link: brandLink.val(),
        image: brandLogo.val(),
        imageHover: brandLogoHover.val(),
        styleBrand: brandStyle.val()

    });
    
});