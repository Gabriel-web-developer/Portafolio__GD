
// animacion para scroll

window.addEventListener('scroll', function(){
    
    let header = document.getElementById('header');
    var scroll = document.scrollingElement.scrollTop;

    if (scroll > 20) {
        header.classList.add('nav_mod');
    }else {
        header.classList.remove('nav_mod');
    }

});


// menu-bar

document.getElementById("btn__menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
portada = document.getElementById("container__all");
main = document.getElementById("skills");
footer = document.getElementById("contact");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    footer.classList.toggle('move__content__body');
    main.classList.toggle('move__content__body');
    menu.classList.toggle('move_content');
    portada.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){

        footer.classList.remove('move__content__body');
        main.classList.remove('move__content__body');
        menu.classList.remove('move_content');
        portada.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

})