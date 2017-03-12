// Script
$(document).ready(function() {
    //channel Detail Script////////////////////////////////////
    //button statis
    $(".btn-up").click(function() {
        $(".btn-up").hide();
        $(".btn-down").show();
        $(".content-statis-channnel").css('height','76px');
    });
    $(".btn-down").click(function() {
        $(this).hide();
        $(".btn-up").show();
        $(".content-statis-channnel").css('height','434px');
    });

    //dropdown bootstrap row status
    $('.btn-action-rs').popover({
        html : true,
        content: function() {
            return $('.action-rs').html();
        }
    });

    //sidebarFixed
    sidebarFixed();

    //readmore
    $('.desc-detail-channel').readmore({
        maxHeight: 58
    });

    //edit delete dropdown
    $('.feed-comment-rs').on('show.bs.dropdown', function () {
        $(this).find('.commentMore').css('display','inline-block');
    })
    $('.feed-comment-rs').on('hidden.bs.dropdown', function () {
        $(this).find('.commentMore').css('display','none');
    })

    //scroll to element and button Back To Top
    function goToByScroll(id){
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},'slow');
    }
    $(".top").click(function(e) {
        e.preventDefault();
        goToByScroll($(this).attr("id"));

    });

    //channel Detail Script////////////////////////////////////
});