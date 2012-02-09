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
