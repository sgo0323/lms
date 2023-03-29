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

// dashboard/index.html 클래스 독해력 분포 popup
function attainmentModal() {
    $('.attainment__link').click(function() {
        $('.attainment__modal').show().addClass('modal--fade');
        setTimeout(function(){
            $('.attainment__modal').addClass('modal--showed');
        }, 100);
    });
    
    $('[data-dismiss="modal"]').on('click', function(){
        $('.attainment__modal').hide().removeClass('modal--showed');
    });
}

// textarea length
function textareaLength() {
    $('.textarea').keyup(function (e) {
        let content = $(this).val();
        
        // 글자수 세기
        if (content.length == 0 || content == '') {
            $('.textarea-count').text('0자');
        } else {
            $('.textarea-count').text(content.length + '자');
        }
        
        // 글자수 제한
        if (content.length > 2000) {
            // 2000자 부터는 타이핑 되지 않도록
            $(this).val($(this).val().substring(0, 2000));
        };
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

       // dashboard/index.html 클래스 독해력 분포 popup
       attainmentModal();

       // textarea length
       textareaLength();
    }, 200);
});