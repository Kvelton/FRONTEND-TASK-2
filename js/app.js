const buttonMenu = document.querySelector('.header__menu-button');
const menuBody = document.querySelector('.menu');
if (buttonMenu) {
    buttonMenu.addEventListener("click", function (e) {
        arrow.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        buttonMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (header) {
        let scrolled = window.pageYOffset;
        if (scrolled >= 10) {
            header.classList.add('_active');
        }
        if (scrolled < 10) {
            header.classList.remove('_active');
        }
    };
})


const title_list1 = document.querySelector('.sightseens');
const arrow = document.querySelector('.welcome-section__arrow');
function handleButtonClick() {
    title_list1.scrollIntoView({ block: "start", behavior: "smooth" });
}

arrow.addEventListener("click", handleButtonClick);

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - 200;

            if (buttonMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                buttonMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                arrow.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}