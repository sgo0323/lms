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
    }, 200);
});