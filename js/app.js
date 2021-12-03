let buttonMenu;
let menuBody;
let title_list1;
let arrow;
let menuLinks;
let buttonToggleItems
let listItemsContainer

function init() {
    buttonMenu = document.querySelector('.header__menu-button');
    menuBody = document.querySelector('.menu');
    if (buttonMenu) {
        buttonMenu.addEventListener("click", onMenuClick)
    }

    window.addEventListener('scroll', handleWindowScroll);

    title_list1 = document.querySelector('.sightseens');
    arrow = document.querySelector('.welcome-section__arrow');

    arrow.addEventListener("click", handleButtonClick);

    menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });
    }
    buttonToggleItems = document.getElementsByClassName('tours-subtext')
    if(buttonToggleItems.length === 0) {
      throw new Error('Кнопка не найдена в document');
    }
    
    listItemsContainer
    listItemsContainer = document.getElementsByClassName('tours')
    
    buttonToggleItems[0].addEventListener(
      'click',
      (event) =>
        handleToggleItemsButtonClick(listItemsContainer[0], event)
    )

}

window.addEventListener("DOMContentLoaded", init);

function handleToggleItemsButtonClick(listItemsContainer, pointerEvent) {
    const classForVisibleHiddenItems = 'tours-block--hidden-visible';
    
    if(pointerEvent.currentTarget.innerText === 'Больше туров') {
      pointerEvent.currentTarget.innerText = 'Меньше туров'
      listItemsContainer.classList.add(classForVisibleHiddenItems)
    } else {
        pointerEvent.currentTarget.innerText = 'Больше туров'
        listItemsContainer.classList.remove(classForVisibleHiddenItems)
    }
  }

function onMenuClick(e) {
    arrow.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    buttonMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
}

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

function handleButtonClick() {
    title_list1.scrollIntoView({ block: "start", behavior: "smooth" });
}

function handleWindowScroll() {
    const header = document.querySelector('.header');
    if (header) {
        let scrolled = window.pageYOffset;
        if (scrolled >= 10) {
            header.classList.add('_active');
        }
        if (scrolled < 10) {
            header.classList.remove('_active');
        }
    };
}