/* MAIN.JS
 * Script principal
 */

// Toggling du menu
$(".menu-btn").click(function() {
    // Variables
    var nav = $("header nav");
    
    // Toggling
    if ( nav.css("display") == "none" ) {
        nav.css("display","block");
        setTimeout(function() {
            nav.css("opacity",1);
            nav.css("width","100%");
        },0);
    } else {
        nav.css("opacity","0");
        nav.css("width","110%");
        setTimeout(function() {
            nav.css("display","none");
        },200);
    }
    console.log("done");
});

