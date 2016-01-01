/* MAIN.JS
 * Script principal
 */

// Listener du bouton menu
$('.menu-btn').on("click",toggleMenu);

// Fonction de toggling du menu
function toggleMenu() {
    // Variables
    var nav = $('header nav');
    var menu_btn = $('.menu-btn');
    var main = $('.main-container');
    
    // Toggling
    nav.toggleClass('menu-hidden');
    nav.toggleClass('menu-shown');
    
    // Délai avant le display:none si on le cache
    if ( nav.hasClass('menu-hidden') ) {
        menu_btn.css('background','#EAEAEA');
        // Listener de fermeture sur le main
        main.off("click",toggleMenu);
        setTimeout(function() {
            nav.css('display','none');
        },200);
    } else {
        menu_btn.css('background','#d1d1d1');
        nav.css('display','block');
        // Listener de fermeture sur le main
        main.on("click",toggleMenu);
    }
};

