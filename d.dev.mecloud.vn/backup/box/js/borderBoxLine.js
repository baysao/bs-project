/*!
+ jQuery Border Box Line Effect
+ Author: Amon
+ Version: 1.0
*/

(function($) {

	$.fn.boxLineEffect = function(options) {

		var settings = $.extend({
			colorLine: 'yellow',
			colorLineOver: 'red',
			sizeLine: 10,
			effect:"demo-1"

		}, options);

		return this.each(function(countElement,element) {

			var htmlBoxLineEffect;
			htmlBoxLineEffect = '<div class="box-line"> <div class="line-top"> <div class="wrapper-line-top clearfix"><span></span><span></span><span></span></div></div><div class="line-right"> <div class="wrapper-line-right clearfix"><span></span><span></span><span></span></div></div><div class="line-bottom"> <div class="wrapper-line-bottom clearfix"><span></span><span></span><span></span></div></div><div class="line-left"> <div class="wrapper-line-left clearfix"><span></span><span></span><span></span></div></div></div>'

			$(this).append(htmlBoxLineEffect);

			//Size Line
			$(this).find('.line-top span, .line-bottom span').css({
				'height': settings['sizeLine'] + 'px'
			});
			$(this).find('.line-right span, .line-left span').css({
				'width': settings['sizeLine'] + 'px'
			});

			//Color Line demo 1
			function colorLineF(obj) {
				obj.find('.box-line span').css({
					'background-color': settings['colorLine']
				});
			}
			colorLineF($(this));
			function colorLineOverF(obj) {
				obj.find('.box-line span').css({
					'background-color': settings['colorLineOver']
				});
			}

			if(settings['effect']=="demo-1") {
				$(element).mouseover(function(){
				    $(this).addClass('box-active-demo-1');
				    	colorLineOverF($(this));
				});
				$(element).mouseout(function(){
				    $(this).removeClass('box-active-demo-1');
				    colorLineF($(this));
				});
			}

			if(settings['effect']=="demo-2") {
				$(element).mouseover(function(){
				    $(this).addClass('box-active-demo-2');
				    	colorLineOverF($(this));
				});
				$(element).mouseout(function(){
				    $(this).removeClass('box-active-demo-2');
				    colorLineF($(this));
				});
			}



		});

	}


}(jQuery));