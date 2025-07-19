

window.addEventListener('DOMContentLoaded', () => {
    const search = () => {
        const searchBtn = document.querySelector('.search__btn-clouse');
        const search = document.querySelector('.search');
        const searchImage = document.querySelector('.menu__search');


        searchBtn.addEventListener('click', () => {
            search.classList.remove('active')
        })
        searchImage.addEventListener('click', () => {
            search.classList.add('active')

        })
    }
    search();




    AOS.init();



})