$(document).ready(function () {
	
	//datepicker
	$('#dp, #dp1').datepicker();
	
	//demo suggest member
	$('#inputSuggestMember').focus(function() {
		$('.itemSuggestLme').addClass('show');
	});
	
	$('#inputSuggestMember').blur(function() {
		$('.itemSuggestLme').removeClass('show');
	});
  
	
});