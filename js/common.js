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

    $('.shortcut').focusout(function() {
        $(this).find('.shortcut__content').removeClass('shortcut__content--on');
    });
}

// gnb focus
function gnbFocus() {
    $('.gnb__item').click(function() {
        $('.gnb__item').removeClass('gnb__item--on');
        $(this).addClass('gnb__item--on');
    });
}

// input field button 활성
function inputBtn() {
    $(".input").on("keyup", function() {
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