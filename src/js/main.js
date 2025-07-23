
window.addEventListener('DOMContentLoaded', () => {
    const search = () => {
        const searchBtn = document.querySelector('.search__btn-clouse');
        const search = document.querySelector('.search');
        const searchImage = document.querySelectorAll('.menu__search');

        const sidebar = document.querySelector('.sidebar');


        searchBtn.addEventListener('click', () => {
            search.classList.remove('active')
            sidebar.style.zIndex = '1';
        })

        searchImage.forEach((item) => {
            item.addEventListener('click', () => {
                search.classList.add('active')
                sidebar.classList.add('active')
                sidebar.style.zIndex = '-1';
            })
        })
    }
    search();




    AOS.init({
        offset: 0,
        once: true
    });






    let swiper;

    function initSwiper() {
        if (window.innerWidth > 450) {
            if (!swiper) {
                swiper = new Swiper('.swiper', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                });
            }
        } else {
            if (swiper) {
                swiper.destroy(true, true); 
                swiper = null;
            }
        }
    }

    // Запускаем при загрузке и ресайзе
    window.addEventListener('load', initSwiper);
    window.addEventListener('resize', initSwiper);





})