$(document).ready(function () {


	//Edit Player
	var btnEditPlayer = $('.btnEditPlayer');
	btnEditPlayer.on('click',function(){
		$(this).hide();
		$(this).closest('.customBox').find('.contentCustomBox').hide();
		$(this).closest('.customBox').find('.contentCustomBoxEdit').show();
		$(this).closest('.wrapperCustomBox').find('.customBox').addClass('editing');
		$(this).closest('.customBox').removeClass('editing');
	});

	$('#btnEditWatermark').one('click',function() {
	    //function sliderbar
	    function sliderbarElement(elementSlider,opacity) {
		    var elementSliderBar = document.querySelector('.js-callback-' + elementSlider);
		    var initElementSliderBar = new Powerange(elementSliderBar, { callback: displayValue, start: opacity });

		    function displayValue() {
				document.getElementById('js-display-' + elementSlider).innerHTML = elementSliderBar.value + '%';
				console.log('value slider ' + elementSlider + ':' + elementSliderBar.value);
		    }
	    }
	    sliderbarElement('maxWidth',10);
	    sliderbarElement('transparent',70);
	});

	//Cancel Edit Player
	var btnCancelEditPlayer = $('.btnCancelEditPlayer');
	btnCancelEditPlayer.on('click',function(){
		btnEditPlayer.show();
		$(this).closest('.customBox').find('.contentCustomBox').show();
		$(this).closest('.customBox').find('.contentCustomBoxEdit').hide();
		$(this).closest('.wrapperCustomBox').find('.customBox').removeClass('editing');
	});
  
  	//function actionSwitch
	function actionSwitch(eleSwitch) { 
	  	if (eleSwitch.is(':checked')) {
	  		eleSwitch.closest('.contentCustomBoxEdit').find('.socialNetwork').show();
	  		eleSwitch.closest('.contentCustomBoxEdit').find('.subRowCB:nth-last-child(2) .fieldCB').css({'border-bottom':'1px solid #f5f5f5','padding-bottom':15});
	  	}else {
	  		eleSwitch.closest('.contentCustomBoxEdit').find('.socialNetwork').hide();
	  		eleSwitch.closest('.contentCustomBoxEdit').find('.subRowCB:nth-last-child(2) .fieldCB').css({border:'none','padding-bottom':0});
	  	}
	  	eleSwitch.on('click',function(){
	  		if (eleSwitch.is(':checked')) {
		  		eleSwitch.closest('.contentCustomBoxEdit').find('.socialNetwork').show();
		  		eleSwitch.closest('.contentCustomBoxEdit').find('.subRowCB:nth-last-child(2) .fieldCB').css({'border-bottom':'1px solid #f5f5f5','padding-bottom':15});
		  	}else {
		  		eleSwitch.closest('.contentCustomBoxEdit').find('.socialNetwork').hide();
		  		eleSwitch.closest('.contentCustomBoxEdit').find('.subRowCB:nth-last-child(2) .fieldCB').css({border:'none','padding-bottom':0});
		  	}
	  	})
  	}
  	actionSwitch($('#switchSharingDuring'));
	actionSwitch($('#switchSharingEndscreen'));

	$('#defaultColor').on('change',function() {
		$('#colorPicker').val($(this).val())
		
		if($(this).val() == "custom") {
			$('#pickColor').css('opacity','1');
			$('#colorPicker').removeAttr('disabled');
		}else{
			$('#pickColor').css('opacity','0.3');
			$('#colorPicker').attr('disabled','disabled');
		}
	});

	//Position watermark
	var posLogo = $('#posLogo');
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

	//Multi selected
	$('.selectCategory').SumoSelect({
		csvDispCount: 4,	
	});
	$('.selectCategoryCustom').SumoSelect({
		csvDispCount: 4,	
	});
	
	//tags player
	$('#tagsPlayer').tagsInput({
	   'height':'116px',
	   'width':'100%',
	   'defaultText':'add tags',
	   'placeholderColor' : '#999999'
	});



	//Aspect sizing
	var responsiveSizing = $('#responsiveSizing'),
		fixedSizing = $('#fixedSizing'),
		dimensions = $('#dimensions'),
		radioSizing = $('input[name=radioSizing]'),
		selectRS = responsiveSizing.find('select'),
		selectFS = fixedSizing.find('select'),
		cbMinHeight = $('#cbMinHeight');

		fixedSizing.hide();
		dimensions.hide();

	var widthSizing = dimensions.find('input[name=widthSizing]'),
		heightSizing = dimensions.find('input[name=heightSizing]');

	function updateDimensions(x,y) {

		var currentWidthSizing = widthSizing.val();
		heightSizing.val(currentWidthSizing*y/x);

		widthSizing.on('keyup',function() {
			var currentWidthSizing = widthSizing.val();
			heightSizing.val(currentWidthSizing*y/x);
		});

		widthSizing.on('change',function() {
			var currentWidthSizing = widthSizing.val();
			heightSizing.val(currentWidthSizing*y/x);
		});
	}

	if (selectRS.val()=="auto") {
		dimensions.hide();
	}
	$('.aspectRatio').on('change',function(){
		if ($(this).val()=="auto") {
			dimensions.hide();
		}else if ($(this).val()=="169") {
			dimensions.show();
			//console.log('dimensions responsive: 16:9');
			updateDimensions(16,9);
		}else if ($(this).val()=="43") {
			dimensions.show();
			//console.log('dimensions responsive: 43');
			updateDimensions(4,3);
		}
	});

	$('.aspectRatio').on('change',function(){
		if ($(this).val()=="custom") {
			console.log('dimensions fixed: custom');
			dimensions.show();
		}else if ($(this).val()=="169") {
			dimensions.show();
			//console.log('dimensions fixed: 16:9');
			updateDimensions(16,9);
		}else if ($(this).val()=="43") {
			dimensions.show();
			//console.log('dimensions fixed: 43');
			updateDimensions(4,3);
		}
	});

	console.log(radioSizing)
	radioSizing.change(function(){
        if($(this).val() == 'responsive'){
			responsiveSizing.show();
			fixedSizing.hide();

			if (selectRS.val()=="169") {
				updateDimensions(16,9);
				dimensions.show();
			}else if (selectRS.val()=="43") {
				updateDimensions(4,3);
				dimensions.show();
			}else if (selectRS.val()=="auto") {
				dimensions.hide();
			}

        }
        else if($(this).val() == 'fixed'){
			responsiveSizing.hide();
			fixedSizing.show();
			dimensions.show();

			if (selectFS.val()=="169") {
				updateDimensions(16,9);
			}else if (selectFS.val()=="43") {
				updateDimensions(4,3);
			}

        }

    });

    //check min height
    cbMinHeight.closest('.fieldCB').find('.wrapperDimension').hide();
    cbMinHeight.on('click',function() {
    	if (cbMinHeight.is(':checked')) {
        	$(this).closest('.fieldCB').find('.wrapperDimension').show();
        }else{
        	$(this).closest('.fieldCB').find('.wrapperDimension').hide();
        }
    });
        

});

