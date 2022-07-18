$(document).ready(function(){
    slide_num = 0;
    // slide li 버튼
    $('#slide_bt>li').click(function(){
        $(this).css({'background-color':'#fff','width':'10px','height':'10px'})
        $(this).siblings().css({'background-color':'#d6cfcd','width':'6px','height':'6px'})
        slide_num = $(this).index() * -100
        $('#slide').stop().animate({left: slide_num+'%' },300)
    })
   
    // slide left right 버튼으로 
    $('#btn_next').click(function(){
        if( slide_num <= -600 ){ 
            slide_num = 0;
            $('#slide').css({'left':0})
         }
        slide_num = slide_num - 100;
        $('#slide').stop().animate({left:slide_num+'%'},300)
        slide_btn_num = slide_num/-100
        if( slide_btn_num == 6 ){ slide_btn_num = 0 }
            $('#slide_bt>li').eq( slide_btn_num ).css({'background-color':'#fff','width':'10px','height':'10px'}).siblings().css({'background-color':'#d6cfcd','width':'6px','height':'6px'})
            
    })

    $('#btn_prev').click(function(){
        if( slide_num >= 0 ){
            $('#slide').css({'left':'-600%'})
             slide_num = -600
            }
        slide_num = slide_num + 100;
        if( slide_num > 0 ){ slide_num = -600 }
        $('#slide').stop().animate({left:slide_num+'%'},300)
        $('#slide_bt>li').eq( slide_num/-100 ).css({'background-color':'#fff','width':'10px','height':'10px'}).siblings().css({'background-color':'#d6cfcd','width':'6px','height':'6px'})
    })

    // product_slide
    $('#product_bt>li').click(function(){
        $(this).css({'width':'10px','height':'10px','background-color':'#2c1810'})
        $(this).siblings().css({'width':'6px','height':'6px','background-color':'#999'})
    })
    $('#product_bt>li:nth-child(1)').click(function(){
        $('.product_slide').animate({left:0},200)
    })
    $('#product_bt>li:nth-child(2)').click(function(){
        $('.product_slide').animate({left:'-269px'},200)
    })
    $('#product_bt>li:nth-child(3)').click(function(){
        $('.product_slide').animate({left:'-538px'},200)
    })
    $('#product_bt>li:nth-child(4)').click(function(){
        $('.product_slide').animate({left:'-807px'},200)
    })


    // sub menu 
    $('#header2_right').mouseover(function(){
        $(this).children('#menubg').stop().slideDown(200)
    })
    $('#header2_right').mouseout(function(){
        $(this).children('#menubg').stop().slideUp(200)
    })

    $('#header2_right>li').mouseover(function(){
        $(this).children().stop().fadeIn()
    })
    $('#header2_right>li').mouseout(function(){
        $(this).children().stop().fadeOut()
    })

    // popup
    $('#popup_bt').click(function(){
        $('#popup').css({'display':'none'})
    })
    $('#topbanner_bt').click(function(){
        $('#topbanner_content').slideToggle(200);
    })

    
    // scroll
    $(window).scroll(function(){
        sc = $(window).scrollTop();
       // $('#scroll_text').text(sc)
        if( sc>=1300 ){
            $('#banner1_1').animate({'left':'-220px','opacity':'1'},800)
            $('#banner1_2').animate({'left':'-80px','opacity':'1'},800)
        }
        if( sc>=2500 ){
            $('#banner2_box1').css({'transform':'rotateY(0deg)','opacity':'1'})
            $('#banner2_box2').css({'transform':'rotateY(0deg)','opacity':'1'})
        }
    })
})