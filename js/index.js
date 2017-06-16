/**
 * Created by apple on 2017/5/1.
 */


//除了animate.css库,css库只能够执行一次,另外一种用jquery.easing来实现
//$('.box').find('.p1').delay(500).animate({
//    left: '0',
//}, 1500, 'easeOutExpo');
//$('.box').find('.p2').delay(500).animate({
//    right: '0',
//}, 1500, 'easeOutExpo');
//$('.box').find('h1').show(2000);

$(function(){
    $('#dowebok').fullpage({
//		sectionsColor: ['#e6e6e6', '#4BBFC3', '#7BAABE', '#f90'],
        //项目导航
        navigation: true,
        //循环
        loopBottom: true,
        //左右滑块的项目导航
        slidesNavigation:true,
        controlArrowColor:'#fff',

        //为什么只能够同时执行不可以分步一个一个执行 用遍历也不可以
        afterLoad: function(anchorLink, index){
            if(index == 2){
                //$('.title').delay(500).fadeIn(2000);
                $('.exp').delay(500).animate({
                    opacity: '1'
                }, 1500, 'easeOutBounce');
            }
        },
        onLeave: function(index, direction){
            if(index == 2 ){
                $('.exp').delay(500).animate({
                    opacity:'0'
                }, 1500, 'easeOutExpo');
            }
        }
    });


    //slide/屏幕自动滚动 插件自带属性
    setInterval(function(){
        //$.fn.fullpage.moveSlideRight();
		//$.fn.fullpage.moveSectionDown();
    }, 5000);

    //半响应式只是为了屏幕小于1024出现滚动条
    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $windowwidth = $(window).width();
        console.log($windowwidth);
        if($windowwidth < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    //详细介绍
    //1:点击添加数据（事件）
    $("#btn").click(function(){

        $(".text").show();
        $(".mask").show();
    });

    //2：点击关闭按钮
    $(".mask,.hide").click(function(){
        $(".text").hide();
        $(".mask").hide();
    })




    //jquery.easing.js


    jQuery.extend( jQuery.easing,
        {
            easeOutExpo: function (x, t, b, c, d) {
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
        });








});