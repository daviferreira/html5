$(function(){
        
    var menu = '';
    $('li.parent-menu > a, .submenu, li.parent-menu').hover(
            function(){
                clearTimeout(menu);
                $(this).parent().find('.submenu').fadeIn(); 
            },
            function(){
                var submenu = $(this).parent().find('.submenu');
                menu = setTimeout(function(){
                    submenu.fadeOut(); 
                }, 300);
            }
    );

    inativa_busca();

    $('#fld-search')
        .focusin(function(){
            $(this)
                .removeClass('inactive'); 
            if($(this).val() == 'Pesquisar...')
                $(this).val('');
        })
        .focusout(function(){
            inativa_busca();
        });

});

var inativa_busca = function(){
    if($('#fld-search').val() == ''){
        $('#fld-search')
            .addClass('inactive')
            .val('Pesquisar...');
    }
};
