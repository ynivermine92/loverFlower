
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
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
