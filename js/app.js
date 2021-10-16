const bottonMenu = document.querySelector('.header__menu-button');
if(bottonMenu){
    const menuBody = document.querySelector('.menu__body');
    bottonMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        bottonMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}