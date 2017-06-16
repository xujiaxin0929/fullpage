/**
 * Created by apple on 2017/5/1.
 */


//����animate.css��,css��ֻ�ܹ�ִ��һ��,����һ����jquery.easing��ʵ��
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
        //��Ŀ����
        navigation: true,
        //ѭ��
        loopBottom: true,
        //���һ������Ŀ����
        slidesNavigation:true,
        controlArrowColor:'#fff',

        //Ϊʲôֻ�ܹ�ͬʱִ�в����Էֲ�һ��һ��ִ�� �ñ���Ҳ������
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


    //slide/��Ļ�Զ����� ����Դ�����
    setInterval(function(){
        //$.fn.fullpage.moveSlideRight();
		//$.fn.fullpage.moveSectionDown();
    }, 5000);

    //����Ӧʽֻ��Ϊ����ĻС��1024���ֹ�����
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

    //��ϸ����
    //1:���������ݣ��¼���
    $("#btn").click(function(){

        $(".text").show();
        $(".mask").show();
    });

    //2������رհ�ť
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