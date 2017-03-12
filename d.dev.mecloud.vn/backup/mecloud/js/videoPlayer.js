$(document).ready(function() {
	
	//jQuery to collapse the navbar on scroll
	$("nav.navbar").addClass("fixed");
	
	
	//player Ads
	var checkbox_preroll = $('#preroll'),
		checkbox_midroll = $('#midroll'),
		checkbox_postroll = $('#postroll');
	
	
	function checkBoxAds(){
		var result = false;
		$('.checkboxAds').each(function(){
			if(this.checked){
				result = true;
				return false;
			}
		});
		return result;
	}
	
	function showOption(){
		if(checkBoxAds() == false){
			$('.pick-option').fadeIn();	
		}else{
			$('.pick-option').fadeOut();
		}
	}
	
	//preroll action
	checkbox_preroll.on('click',function(){
		//console.log($(this))
		if (this.checked) {
			$('.preroll-added').fadeIn();
			checkbox_preroll.attr('checked','checked');
		}else {
			$('.preroll-added').fadeOut();
			checkbox_preroll.attr('checked','');
		}
		showOption();
	});
	
	
	
	//midroll action
	checkbox_midroll.on('click',function(){
		if (this.checked){
			$('.midroll-added').fadeIn();
		}else {
			$('.midroll-added').fadeOut();
		}
		showOption();
	});
	
	//postroll action
	checkbox_postroll.on('click',function(){
		if (this.checked){
			$('.postroll-added').fadeIn();
		}else {
			$('.postroll-added').fadeOut();
		}
		showOption();
	});
	
	
	//add backfill
	$('.btn-backfill').click(function(){
		var intId = $('.multi-fields .multi-field').length + 1;
		var fieldWrapper = $('<div class="multi-field form-group"></div>');
		var fType = $("<select class=\"form-control typeAds\"><option>IMA</option><option>VAST</option></select>");
		var fName =$("<input type=\"text\" class=\"form-control\" id=\"field"+ intId +" \"  placeholder=\"Enter back fill\">");
		var btnRemove = $('<a class="btn-removeField" href="#">Remove</a>');
		btnRemove.click(function(){
			$(this).parent().remove();	
			return false;
		})
		
		fieldWrapper.append(fName);
		fieldWrapper.append(fType);
		fieldWrapper.append(btnRemove);
		$(this).closest('.adsRoll').find(".multi-fields").append(fieldWrapper);
	});
	
});