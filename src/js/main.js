
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
        duration: 3000,
        once: false
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


    window.addEventListener('load', initSwiper);
    window.addEventListener('resize', initSwiper);

    /* header position */
    const headerLocalHome = () => {
        const isHome = location.pathname === '/' || location.pathname.endsWith('index.html');
        const header = document.querySelector('header');

        if (isHome) {
            header.classList.add('home-header');
        } else {
            header.classList.remove('home-header');
        }
    }
    headerLocalHome()

    /* select popular */
    const selectPopular = () => {

        const select = document.querySelector('.selector__inner');
        select.addEventListener('click', () => {
            select.classList.toggle('active');
        })
    }
    selectPopular()

    /* filterPrace */
    const filterPrace = () => {
        const lower = document.getElementById("lower");
        const upper = document.getElementById("upper");
        const track = document.querySelector(".slider-track");

        const min = parseInt(lower.min);
        const max = parseInt(upper.max);

        const minGap = 10;


        const priceMin = document.querySelector(".price");
        const priceMax = document.querySelector(".price__max");

        function updateTrack(e) {
            let lowerVal = parseInt(lower.value);
            let upperVal = parseInt(upper.value);

            if (upperVal - lowerVal <= minGap) {
                if (e.target === lower) {
                    lower.value = upperVal - minGap;
                } else {
                    upper.value = lowerVal + minGap;
                }
                lowerVal = parseInt(lower.value);
                upperVal = parseInt(upper.value);
            }

            const percent1 = ((lowerVal - min) / (max - min)) * 100;
            const percent2 = ((upperVal - min) / (max - min)) * 100;

            track.style.left = percent1 + "%";
            track.style.width = (percent2 - percent1) + "%";


            priceMin.textContent = lowerVal;
            priceMax.textContent = upperVal;
        }

        lower.addEventListener("input", updateTrack);
        upper.addEventListener("input", updateTrack);

        updateTrack();
    }
    filterPrace();


    /* categoriesCart */
    const categoriesCart = () => {
        const track = document.querySelector(".categories__link");

    }
    categoriesCart()

    const TopHeadebasket = () => {
        const bredcrubs = document.querySelector('.top');
        const basket = document.querySelector('.header__user-items');
        if (bredcrubs) {
            basket.classList.add('active');
        }

    }
    TopHeadebasket()




    const filterToggle = (e) => {
        const cartItms = document.querySelector('.categories__content');
        const filterBtn = document.querySelector('.categories__filter-box');
        const burger = document.querySelector('.burger');
        const filter = document.querySelector('.filter');
        const body = document.querySelector('body');

        filterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            filter.classList.toggle('active');
            filterBtn.classList.toggle('active');
            body.classList.toggle('locked', filter.classList.contains('active'));
            if (filter.classList.contains('active')) {
                cartItms.classList.add('blocked');
            } else {
                cartItms.classList.remove('blocked');
            }
        });



        burger.addEventListener('click', () => {
            filterBtn.style.opacity = burger.classList.contains('active') ? '0' : '1';
            filterBtn.classList.remove('active');
        });



        document.addEventListener('click', function (event) {
            const filter = document.querySelector('.filter.active');
            const filterBtn = document.querySelector('.categories__filter-box');

            if (filter && !filter.contains(event.target) && !filterBtn.contains(event.target)) {
                filter.classList.remove('active');
                document.body.classList.remove('locked');
                filterBtn.classList.remove('active');
                cartItms.classList.remove('blocked');
            }

        });
    };
    filterToggle();





})