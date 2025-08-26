
const userBlock = document.querySelector('.header__user-items');
const mainHome = document.querySelector('main');

function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const navbar = document.querySelector('.navbar')


    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
            navbar.classList.add('active')
            userBlock.style.display = 'none'
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
            navbar.classList.remove('active')
            userBlock.style.display = 'flex'
        }
    })


    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98 && mainHome) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
            userBlock.classList.remove('active')
        } else {
            userBlock.classList.add('active')
        }
    })

    if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('locked')
        userBlock.classList.remove('active')
    } else {
        userBlock.classList.add('active')
    }
}


burgerMenu()


function fixedHeader() {
    const sidebar = document.querySelector('.sidebar');
    const nav = document.querySelector('.header');

    if (window.scrollY > 0) {
        nav.classList.add('fixed');
        if (mainHome.classList.contains("main-home")) {
            sidebar.style.opacity = 0;
        }
        userBlock.classList.add('active');
    } else {
        nav.classList.remove('fixed');
        if (mainHome.classList.contains("main-home")) {
            sidebar.style.opacity = 1;
        }
        if (window.innerWidth > 991.98) {
            userBlock.classList.remove('active');
        }
    }
}

window.addEventListener('scroll', fixedHeader);


