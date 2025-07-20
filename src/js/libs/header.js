
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const homeTitle = document.querySelector('.home__wrapper')
    const cart = document.querySelector('.sidebar__cart-box')
    const navbar = document.querySelector('.navbar')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
            homeTitle.style.display = 'none';
            cart.style.display = 'none'
            navbar.classList.add('active')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
            navbar.classList.remove('active')
            homeTitle.style.display = 'block';
            cart.style.display = 'block'
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')



        }
    })
}
burgerMenu()


function fixedHeader() {
    const nav = document.querySelector('.header')

    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
}
window.addEventListener('scroll', fixedHeader)
