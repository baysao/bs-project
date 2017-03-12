//menu hamburger
function mainMenu() {
	$('.navbar-toggle').on('click',function(){
		var x = $(this).attr('id');
		if (x == 1) { 
			$('.sidebar').removeClass('expand');
			$(this).attr('id','0');
		}else {
			$('.sidebar').addClass('expand');
			$(this).attr('id','1');
		}
	});
}

//panel sub arrow
$('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
}).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
});

//tab show
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    copyCode();
})

//zclip copy

function copyCode(){
    $('.btn-copy').each(function(){
        $(this).zclip({
            path:'js/ZeroClipboard.swf',
            copy: function() {
                var thisCode = $(this);
                return thisCode.parent().find('.code-copy').text();
            },
            afterCopy:function(){
                $(this).parent().append('<div class="alert-copy">Copied!</div>');
                $(this).parent().find('.alert-copy').stop().fadeIn();
                setTimeout(function(){
                    $('.alert-copy').fadeOut(300);
                },1000);
                setTimeout(function(){
                    $('.alert-copy').remove();
                },1300);
            }
        });
    });
}



//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

testMobile = isMobile.any();
if (testMobile == null)
{
	//do something
}else {
	//fix click mobile
    //FastClick.attach(document.body);
}