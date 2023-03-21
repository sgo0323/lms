function modal() {

    // 팝업 오픈
    function open_modal(){
        modal__bg = document.createElement('div');
        modal__bg.className = 'modal__bg';

        if(document.querySelector(target)){ 

            
            if($('body').hasClass('modal--on') !== true){
                $('body').addClass('modal--on').append(modal__bg);
            } 
            
            // $('body').addClass('modal--on').append(modal__bg);
            
            $('.modal__bg').fadeIn(300);
            $(target).show().addClass('modal--fade');

            setTimeout(function(){
                $(target).addClass('modal--showed');
            }, 100);

        }
    }

    function hide_modal(modal_id){
        $('.modal__bg').fadeOut(200);
        $('#'+modal_id).removeClass('modal--showed');

        setTimeout(function(){
            $('.modal__bg').remove();
            $('#'+modal_id).removeClass('fade').hide();
            $('body').removeClass('modal--on');

        }, 200);
    }


    $('[data-type="modal"]').on('click', function(){
        if($(this).attr('data-target')){
            target = $(this).attr('data-target');

            open_modal();
        }
    });
    
    $('[data-dismiss="modal"]').on('click', function(){
        modal_id = $(this).parents('.modal').attr('id');

        hide_modal(modal_id);
    });

    // 팝업 닫기
    $('body').on('click', function(e){
        if($('.modal').css('display') == 'block'){
            modal_id = $('.modal--show').attr('id');
            modal_dialog = $('#'+modal_id).find('.modal__dialog');

            // backdrop 클래스를 갖고있으면 백그라운드 클릭 시 닫힘
            if(modal_dialog.hasClass('backdrop')){
                if(!$('.modal').has(e.target).length){
                    hide_modal(modal_id);
                }
            }
        }
    });
}

$(function (){
    setTimeout(function() {
        modal();
    }, 200);
});