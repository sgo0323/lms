function is_screen(max_width) {
    var output;
    if (!!window.matchMedia || !!window.msMatchMedia) {
        output = window.matchMedia('(max-width:' + max_width + 'px)').matches
    } else {
        output = ($(window).width() <= max_width) ? !0 : !1
    }
    return output;
}

// header shortcut
function headerShortcut() {
    $('.shortcut__btn').click(function() {
        $(this).parents('.shortcut').find('.shortcut__content').toggleClass('shortcut__content--on');
    });

    $(document).mouseup(function (e){
        if($(".shortcut").has(e.target).length === 0){
            $('.shortcut__content').removeClass('shortcut__content--on');
        }
    });
}

/*
// gnb test 
function gnbTest() {
    var pageUrl = window.location.href; //창의 url을 가져온다.
    console.log('pageUrl+'+pageUrl);

    $(document).on('load', function(){ //load가 되었을때 실행
        $('.gnb .gnb__list').siblings('li').removeClass('gnb__item--on'); //다른 active가 있으면 지워준다.
        
        if (pageUrl.indexOf('learning') > -1) { //url에 about이라는 글자가 있으면 실행
            console.log('learning');
            $('.gnb__item').eq(1).addClass('gnb__item--on');            
        } else if (pageUrl.indexOf('report') > -1) { //url에 contact라는 글자가 있으면 실행
            console.log('report');
            $('.gnb__list > li').eq(2).addClass('gnb__item--on');
        } else if (pageUrl.indexOf('student') > -1) { //url에 contact라는 글자가 있으면 실행
            console.log('student');
            $('.gnb__list > li').eq(3).addClass('gnb__item--on');
        } else if (pageUrl.indexOf('academy') > -1) { //url에 contact라는 글자가 있으면 실행
            console.log('academy');
            $('.gnb__list > li').eq(4).addClass('gnb__item--on');
        } else {
            console.log('pageUrl');
            $('.gnb__list > li').eq(0).addClass('gnb__item--on'); 
            //메인 url은 main이라는 단어가 들어가지 않아서 모든 조건이 아닐때 실행하도록 함
        }
    });
}
*/

// gnb focus
function gnbFocus() {
    $('.gnb__item').click(function() {
        $('.gnb__item').removeClass('gnb__item--on');
        $(this).addClass('gnb__item--on');

        // gnb sub 노출
        if($(this).hasClass('gnb-sub')) {
            $('.gnb-sub .gnb-sub__list').css('display','none'); 
            $(this).find('.gnb-sub__list').css('display','block');
        }
    });

    // gnb sub 비노출
    $(document).mouseup(function (e){
        if($('.gnb-sub').has(e.target).length === 0){
            $('.gnb-sub__list').css('display','none');
        }
    });
}

// input text field button 활성
function inputBtn() {
    $('.input').on('keyup', function() {
        var flag = true;
        flag = $(this).val().length > 0 ? false : true;
        $(this).parents('.input__field').find('.btn').attr('disabled', flag);
    });
}

$(function() {
    setTimeout(function() {
        // header shortcut
        headerShortcut();

        // gnb focus
        gnbFocus();

        // input field button 활성
       inputBtn();
       
       //gnbTest();
    }, 200);
});