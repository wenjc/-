$(function () {
    $(".nav_list li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    });
    var isShow = true;
    $(".menu").click(function () {
        if (isShow) {
            $(".nav_list").slideDown(300)
        } else {
            $(".nav_list").slideUp(300)
        }
        isShow = !isShow
    });
    /*根据地址栏的hash值 来设置头部导航内的子项的绿色背景*/
    var hash = window.location.hash.substr(1);
    $(".nav_list li").eq(hash).addClass("active").siblings().removeClass("active")
})