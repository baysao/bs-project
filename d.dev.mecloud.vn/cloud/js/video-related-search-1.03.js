// @Author: Phuong Dao 
// Version: 1.00
var mmVideoRelated = mmVideoRelated || {};
// "Package" 
// Similar to how you would establish a package in other languages
(function() {
	
	/////////////Search suggest
	var itemsVideo = [
	  {
		value: "Lệ rơi cover chắc ai đó sẽ về",
		thumb: "images/img1.jpg",
		title: "Lệ rơi cover chắc ai đó sẽ về",
		date: "21/11/2014",
		uploader: "Thể thao 24/7"
	  },
	  {
		value: "Mãi mãi là niềm đau - Mỹ Lệ",
		thumb: "images/img2.jpg",
		title: "Mãi mãi là niềm đau - Mỹ Lệ",
		date: "21/11/2014",
		uploader: "GIT"
	  },
	  {
		value: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		thumb: "images/img3.jpg",
		title: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		date: "21/11/2014",
		uploader: "Lý Hải Pro"
	  },
	  {
		value: "Lệ rơi cover chắc ai đó sẽ về",
		thumb: "images/img4.jpg",
		title: "Lệ rơi cover chắc ai đó sẽ về",
		date: "21/11/2014",
		uploader: "Thể thao 24/7"
	  },
	  {
		value: "Mãi mãi là niềm đau - Mỹ Lệ",
		thumb: "images/img5.jpg",
		title: "Mãi mãi là niềm đau - Mỹ Lệ",
		date: "21/11/2014",
		uploader: "GIT"
	  },
	  {
		value: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		thumb: "images/img6.jpg",
		title: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		date: "21/11/2014",
		uploader: "Lý Hải Pro"
	  },
	  {
		value: "Lệ rơi cover chắc ai đó sẽ về",
		thumb: "images/img7.jpg",
		title: "Lệ rơi cover chắc ai đó sẽ về",
		date: "21/11/2014",
		uploader: "Thể thao 24/7"
	  },
	  {
		value: "Mãi mãi là niềm đau - Mỹ Lệ",
		thumb: "images/img8.jpg",
		title: "Mãi mãi là niềm đau - Mỹ Lệ",
		date: "21/11/2014",
		uploader: "GIT"
	  },
	  {
		value: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		thumb: "images/img9.jpg",
		title: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		date: "21/11/2014",
		uploader: "Lý Hải Pro"
	  }
	  
	];

	// "Class"
	var mm = function(params) {
		this.initialize(params);
	}

	var p = mm.prototype;
	p.url = null;
	p.videoId = null;
	p.channelId = null;
	p.element = null;
	
    p.initialize = function(params){
		this.url = params.url;
		this.channelId = params.channelId;
		this.videoId = params.videoId;
		this.element = params.element;
    }

    p.search = function(){
		var url = this.url;
		var channelId = this.channelId;
		var videoId = this.videoId;
		$( ".sortable" ).sortable({
			placeholder: "highlight"
		});
		this.element.autocomplete({
			//minLength: 2,
			source: 
			/*function(request, response) {
				$('.btnDelRelate').html('<img style="height:20px" src="http://static.mecloud.vn/images/bx_loader.gif">');
				$('.btnDelRelate').attr('onclick', 'return false;');
				var size = 5;
				var videoIds;
				if($('.itemVideoId').length > 0){
					videoIds = '';
					$('.itemVideoId').each(function( index ) {
						if(index > 0){
								videoIds+=',';
						}
						videoIds+= $(this).val();
					});
				}
				/*$.post(url, {'name' : request.term, 'size': size, 'videoId': videoId, 'videoIds': videoIds, 'channelId': channelId}, function( data ) {
					
					$('.btnDelRelate').attr('onclick', 'mmVideoRelatedAction.cancel(); return false;');
					$('.btnDelRelate').html('<i class="fa fa-times"></i>');
					response(data);
					return;
				}, "json");
			}*/
			itemsVideo,
			open: function( event, ui ) {
				$('li.ui-menu-item p').css('overflow','hidden').css('white-space','nowrap').css('padding-right','40px').css('text-overflow','ellipsis');
				$('ul.suggestList').css('background-color','#fafbfb').css('border-radius','0');
			},
			select: function( event, ui ) {
				$( "<li>" )
					.append('<input type="hidden" class="itemVideoId" name="itemVideoId" value="'+ ui.item.value +'" />')
					.append('<span class="dragable"><i class="fa fa-arrows"></i></span>')
					.append('<a onclick="return false;" href="#">'+
						' <img src="'+ ui.item.thumb +'" /> <p> '+ ui.item.title +
						'<br />' +
						' <span style="white-space:normal;">'+ ui.item.uploader + ' - ' + ui.item.date +'</span></p></a>')
					.append('<span class="durationVD">05:10</span>')
					.append('<span class="dragable"><i class="fa fa-arrows"></i></span>')
					.append('<a href="#" class="btn btnViewSuggest"><i class="fa fa-eye"></i></a>')
					.append('<a onclick="mmVideoRelatedAction.removeItem($(this));" href="javascript:;" class="btn btnDelSuggest remove-item"><i class="fa fa-trash-o"></i></a>')
					.appendTo('ul.videos-related-list');
				mmVideoRelatedAction.cancel();
				return false;
			},
			change: function( event, ui ) {
				mmVideoRelatedAction.cancel();
			},
			create: function() {
				$(this).data('ui-autocomplete')._renderItem = function( ul, item ) {
					return $( '<li>' )
						.append("<img src='" + item.thumb + "' />")
						.append( "<p>" + item.title + "</p>" )
						.append( "<p class='uploaderSuggest'>" + item.uploader + " - " + item.date + "</p>" )
						.appendTo( ul );
				};
				
			}
			
		});
	}
	mmVideoRelated = mm;
}());

window.mmVideoRelatedAction = function() {}
window.mmVideoRelatedAction.prototype = {
	
	cancel: function(){
		$('#searchVideo').val('');
		$('#searchVideo').focus();
	},
	removeItem: function(obj){
		if(confirm("Bạn muốn xóa video này?")){
			obj.closest('li').remove();
		}
		return false;
	}
}
window.mmVideoRelatedAction  = new mmVideoRelatedAction();

