

window.addEventListener('DOMContentLoaded', () => {
    const search = () => {
        const searchBtn = document.querySelector('.search__btn-clouse');
        const search = document.querySelector('.search');
        const searchImage = document.querySelector('.menu__search');

        const sidebar = document.querySelector('.sidebar');


        searchBtn.addEventListener('click', () => {
            search.classList.remove('active')
            sidebar.style.zIndex = '1';
        })
        searchImage.addEventListener('click', () => {
            search.classList.add('active')
            sidebar.classList.add('active')
            sidebar.style.zIndex = '-1';
        })
    }
    search();




    AOS.init();



})