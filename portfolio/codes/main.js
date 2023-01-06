$(function () {
    var headerHight = 50; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
    });
});

document.getElementById("mouse_change1").style.cursor = 'osawa.png';