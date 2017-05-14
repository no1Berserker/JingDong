//顶部广告关闭
$('.close').click(function(){
    $('.top').fadeOut();
})

//位置选择
$('.item').click(function(){
    $(this).addClass('h').siblings('.item').removeClass('h');
    $('.city span').html($(this).html());
})

//模拟模糊搜索
var val;
$('.seach input').on('input change', function(){
    val = $(this).val();
    
    if(val == ''){
        $('.inp-items').css('display', 'none');
    }else {
        $('.inp-items').css('display', 'block');
    }
    
    $('.inp-item').css('display', 'none');
    for(var i = 0; i < $('.inp-item').length; i ++){
        if($('.inp-item').eq(i).text().substr(0, val.length) == val){
           $('.inp-item').eq(i).css('display', 'block');
        }
    }

})

$('.inp-item').on('click', function(){
    $('.seach input').val($(this).html());
    $('.inp-items').css('display', 'none');
})

//幻灯播放
$('.pics').css({'width': $('.pic').width()*$('.pic').length, 'height': $('.pic').height()});
var i = 0, set1;

for(var i = 0; i < $('.pic').length; i ++){
    $('.cs').append('<div class="c"></div>')
}
$('.c').eq(0).addClass('h').siblings('.c').removeClass('h');
$('.cs').css('width', $('.c').width()*$('.c').length + 4*$('.c').length);
$('.cs').css('margin-left', - ($('.c').width()*$('.c').length + 4*$('.c').length)/2);

function time(){
    set1 = setInterval(function(){
        if(i < $('.pic').length - 1){
            i ++;
        }else {
            i = 0;
            $('.pics').eq(i).css({'left': - i*$('.pic').width()});
        }
        $('.pics').stop(true).animate({'left': - i*$('.pic').width()});
        $('.c').eq(i).addClass('h').siblings('.c').removeClass('h');
    }, 2000)   
}

time();

$('.ppt').mouseover(function(){
    clearInterval(set1);
    $('.left, .right').show();
})

$('.ppt').mouseleave(function(){
    time();
    $('.left, .right').hide();
})

$('.left').click(function(){
    if(i > 0){
        i --;
    }else {
        i = $('.pic').length - 1;
    }
    $('.pics').stop(true).animate({'left': - i*$('.pic').width()});
    $('.c').eq(i).addClass('h').siblings('.c').removeClass('h');
})

$('.right').click(function(){
    if(i < $('.pic').length - 1){
        i ++;
    }else {
        i = 0;
    }
    $('.pics').stop(true).animate({'left': - i*$('.pic').width()});
    $('.c').eq(i).addClass('h').siblings('.c').removeClass('h');
})

$('.c').click(function(){
    i = $(this).index();
    $('.pics').stop(true).animate({'left': - i*$('.pic').width()});
    $('.c').eq(i).addClass('h').siblings('.c').removeClass('h');
})

//tab下划线
$('.news-tab1').mouseover(function(){
    $('.news-tab-bg').stop(true).animate({'left': 0});
    $('.news-con').eq(0).addClass('h').siblings('.news-con').removeClass('h');
})

$('.news-tab2').mouseover(function(){
    $('.news-tab-bg').stop(true).animate({'left': 48});
    $('.news-con').eq(1).addClass('h').siblings('.news-con').removeClass('h');
})

$('.list-con').eq(0).css('display', 'block');
$('.li').mouseover(function(){
    var ind = $(this).index();
    $('.bg').css({'left': ind*$('.li').width()});
    $(this).addClass('h').siblings('.li').removeClass('h');
    $('.list-con').eq(ind).css('display', 'block').siblings('.list-con').css('display', 'none');
})

$('.closed').click(function(){
    $('.server-list2').hide();
    $('.server-list1').show();
})

$('.f').mousedown(function(){
    $('.server-list1').hide();
    $('.server-list2').show();
})

//倒计时
var val1 = $('.time').eq(2).html();
var val2 = $('.time').eq(1).html();
var val3 = $('.time').eq(0).html();
var set;
set = setInterval(function(){
    val1 --;
    if(val1 < 0){
        val1 = 59;
    }
    $('.time').eq(2).html(val1);
    if(val1 == 59){
        val2 --;
        if(val2 < 0){
            val2 = 59;
        }
        $('.time').eq(1).html(val2);
        if(val2 == 59){
            val3 --;
            if(val3 < 0){
                val3 = 0;
                val2 = 0;
                val1 = 0;
                clearInterval(set);
            }
            $('.time').eq(2).html(val1);
            $('.time').eq(1).html(val2);
            $('.time').eq(0).html(val3);
        }
    }
}, 1000)

//秒杀ppt
var k = 0;
$('.lef').click(function(){
    if(k > 0){
        k --;
    }else {
        k = 1;
    }
    $('.p-lists').stop(true).animate({'left': -k * 1000});
})

$('.rig').click(function(){
    if(k < 1){
        k ++;
    }else {
        k = 0;
    }
    $('.p-lists').stop(true).animate({'left': -k * 1000});
})

$(window).scroll(function(){
    if($(window).scrollTop() > 500){
        $('.search-top').fadeIn();
    }else {
        $('.search-top').hide();
    }
})








