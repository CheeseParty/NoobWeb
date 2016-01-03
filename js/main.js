/* MAIN.JS
 * Script principal
 */

// FONCTIONS

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
        main.off('click',toggleMenu);
        setTimeout(function() {
            nav.css('display','none');
        },200);
    } else {
        menu_btn.css('background','#d1d1d1');
        nav.css('display','block');
        // Listener de fermeture sur le main
        main.on('click',toggleMenu);
    }
};

// Fonction de debounce
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Executé au resize et au chargement (debounced)
var deBouncedResize = debounce(function() {
    if ( $('body').width() > 768 ) {
        // Smooth Scroll aux ancres
        $('a').smoothScroll({offset: -100});
        // Remise en place du nav
        $('header nav')
            .removeClass('menu-shown')
            .addClass('menu-hidden')
            .removeAttr('style');
        $('.menu-btn').css('background','#EAEAEA');
    } else {
        // Smooth Scroll aux ancres
        $('a').smoothScroll({offset: -60});
        // Listener du bouton et des liens du menu
        $('.menu-btn').off();
        $('.header nav a').off();
        $('.menu-btn').click(toggleMenu);
        $('header nav a').click(toggleMenu);
    }
}, 250);

// INITIALISATIONS

// Divers listeners sensibles à la largeur d'écran (debounced)
$(window).resize(deBouncedResize);
deBouncedResize();