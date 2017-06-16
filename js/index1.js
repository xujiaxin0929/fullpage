
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


        afterLoad: function(anchorLink, index){
            if(index == 2){
				$('.exp:eq(0)').fadeTo(1000,1,function(){
					$('.exp:eq(1)').fadeTo(1000,1,function(){
						$('.exp:eq(2)').fadeTo(1000,1,function(){
							$('.exp:eq(3)').fadeTo(1000,1,function(){
								$('.exp:eq(4)').fadeTo(1000,1,function(){
									$('.exp:eq(5)').fadeTo(1000,1,function(){
										$('.exp:eq(6)').fadeTo(1000,1,function(){
											$('.exp:eq(7)').fadeTo(1000,1,function(){
												$('.exp:eq(8)').fadeTo(1000,1,function(){
													$('.exp:eq(9)').fadeTo(1000,1,function(){
														$('.exp:eq(10)').fadeTo(1000,1,function(){
															$('.exp:eq(11)').fadeTo(1000,1)
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
            }
     
        },
        onLeave: function(index, direction){
            if(index == 2 ){
                $('.exp').animate({
                    opacity:'0'
                }, 0, 'easeOutExpo');
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
        });

	 //所有的tab 导航栏的点击事件
                        $(".tab-item").click(function(){
                                
                                $(this).addClass("active").siblings().removeClass("active");
                                var index=$(this).index();
                                $(".products div").eq(index).show().siblings().hide();

                        })


	//找到所有的li 注册鼠标移入事件
            $(".Interlaced li").mouseenter(function () {
                //鼠标移入当前的li 当前li高亮 其他兄弟元素背景色变为白色
                $(this).css("background", "pink").siblings().css("background", "white");
            });
            //找到ul 给ul注册鼠标移出事件
            //鼠标离开ul 所有li都变成白色
            $(".Interlaced").mouseleave(function () {
                $(".Interlaced li").css("background","white");
            });





});