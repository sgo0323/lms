function tab(){
    let tab_button = $('.tab__nav .tab__item');

    tab_button.click(function() {
        let tab_buttonEq = $(tab_button).index(this);

        tab_button.removeClass('tab__item--on');
        $(this).addClass('tab__item--on');
        $('.tab__content').hide();

        $('.tab__content').eq(tab_buttonEq).show();
    });

    // accordion tab
    $('.accordion__btn').click(function() {
        $(this).parents('.accordion__item').toggleClass('accordion__item--on');
    });
}

$(function (){
    tab();
});