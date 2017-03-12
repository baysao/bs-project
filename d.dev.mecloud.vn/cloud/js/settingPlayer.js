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
	var aspectRatio = $('#aspectRatio'),
		dimensions = $('#dimensions'),
		radioSizing = $('input[name=radioSizing]'),
		cbMinHeight = $('#cbMinHeight');

		dimensions.hide();

    //check min height
    cbMinHeight.closest('.fieldCB').find('.wrapperDimension').hide();
    cbMinHeight.on('click',function() {
    	if (cbMinHeight.is(':checked')) {
        	$(this).closest('.fieldCB').find('.wrapperDimension').show();
        }else{
        	$(this).closest('.fieldCB').find('.wrapperDimension').hide();
        }
    });

    window.sizing = {
    	radioSizing: function(object){
    		var value = object.val();
    		//console.log(value);
    		var dimensions = object.closest('div.rowCB').find('#dimensions');
    		var aspectRatioSelect = object.closest('div.rowCB').find('select[name=aspectSelect]');
    		var unitSelect = object.closest('div.rowCB').find('select[name=unitSelect]');

    		if(value == 'responsive'){

	        	aspectRatioSelect.find(":first").text('Auto');
				aspectRatioSelect.find(":first").val('auto');

				unitSelect.prepend('<option value="%">%</option>');

				if (aspectRatioSelect.val()=="16:9") {
					dimensions.show();
				}else if (aspectRatioSelect.val()=="4:3") {
					dimensions.show();
				}else if (aspectRatioSelect.val()=="auto") {
					dimensions.hide();
				}

	        }else if(value == 'fixed'){
				dimensions.show();
				aspectRatioSelect.find(":first").text('Custom');
				aspectRatioSelect.find(":first").val('custom');

				unitSelect.find(":first").remove();
				//unitSelect.attr('selected', 'selected');

				if (aspectRatioSelect.val()=="custom") {
					object.closest('div.rowCB').find('input[name=heightSizing]').removeAttr('disabled');
				}

	        }
    	},
    	aspectRatioSelect: function(object){
    		var value = object.val();
    		var dimensions = object.closest('div.rowCB').find('#dimensions');
    		var widthSizingObject = object.closest('div.rowCB').find('input[name=widthSizing]');

    		if (value=="auto") {
			//console.log('dimensions fixed: auto');
				dimensions.hide();
			}else{
				dimensions.show();
				
				if (value=="custom") {
					object.closest('div.rowCB').find('input[name=heightSizing]').removeAttr('disabled').val('');
					widthSizingObject.val('');
				}else {
					widthSizingObject.val('100');
					this.updateDimensions(widthSizingObject);
				}
			}
			
    	},
    	updateDimensions: function(object){
    		var currentWidthSizing = object.val();
    		var heightSizing = object.closest('div').find('input[name=heightSizing]');
    		var aspectRatioSelect = object.closest('div.rowCB').find('select');
    		var flag = aspectRatioSelect.val();
    		if(flag != 'custom' && flag != 'auto'){

    			heightSizing.attr('disabled','disabled');
    			var flagX_Y = flag.split(':');
	    		//console.log(flagX_Y)
	    		if(flagX_Y.length > 0 ){
	    			var total = parseFloat((currentWidthSizing*flagX_Y[1]/flagX_Y[0]).toFixed(2));
	    			heightSizing.val(total>0 ? total : '');
	    		}
    		}
    		
    	}
    }
        

});

