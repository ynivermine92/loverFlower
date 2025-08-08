
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
        if (select) {
            select.addEventListener('click', () => {
                select.classList.toggle('active');
            })

        }
    }
    selectPopular()

    /* filterPrace */
    const filterPrace = () => {
        const lower = document.getElementById("lower");
        const upper = document.getElementById("upper");
        const track = document.querySelector(".slider-track");

        if (lower && upper && track) {
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
        if (filterBtn) {
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
        }



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



    /*   slider product */
    const sliderThumbs = new Swiper('.thumbs-container', {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev'
        },
        freeMode: true,
        breakpoints: {
            0: { direction: 'horizontal', slidesPerView: 1.5 },
            360: { direction: 'horizontal', slidesPerView: 2 },
            500: { direction: 'horizontal', slidesPerView: 3 },
            1000: { direction: 'vertical' }
        }
    });

    const sliderImages = new Swiper('.images-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: false,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev'
        },
        grabCursor: false,
        simulateTouch: false,
        allowTouchMove: false,
        thumbs: {
            swiper: sliderThumbs
        },
        breakpoints: {
            0: { direction: 'vertical' },
            1000: { direction: 'vertical' }
        }
    });




    /* select counter */
    document.querySelectorAll(".counter").forEach((counter) => {
        const counterInput = counter.querySelector(".counter__input");
        const btnMinus = counter.querySelector(".minus");
        const btnPlus = counter.querySelector(".plus");
        let count = counterInput.value;

        counterInput.addEventListener("keyup", (e) => {
            let self = e.currentTarget;

            if (self.value == "0") self.value = 1;

            count = counterInput.value;

            disabledBtnMinus();
            disabledBtnPlus();
        });

        counterInput.addEventListener("keypress", (e) => {
            let code = e.which ? e.which : e.keyCode;
            if (code > 31 && (code < 48 || code > 57)) {
                e.preventDefault();
            }
        });

        counterInput.addEventListener("change", (e) => {
            let self = e.currentTarget;

            if (!self.value) self.value = 1;

            count = counterInput.value;

            disabledBtnMinus();
            disabledBtnPlus();
        });

        counterInput.addEventListener("focus", (e) => {
            counterInput.value = "";
        });

        counterInput.addEventListener("blur", (e) => {
            let self = e.currentTarget;

            if (!self.value) self.value = 1;

            count = counterInput.value;

            disabledBtnMinus();
        });

        btnPlus.addEventListener("click", (e) => {
            e.preventDefault();

            count++;

            disabledBtnMinus();
            disabledBtnPlus();

            counterInput.value = count;
        });

        btnMinus.addEventListener("click", (e) => {
            e.preventDefault();

            count--;

            disabledBtnMinus();

            count <= 999
                ? btnPlus.classList.remove("disabled")
                : btnPlus.classList.add("disabled");

            counterInput.value = count;
        });

        function disabledBtnMinus() {
            count == 1
                ? btnMinus.classList.add("disabled")
                : btnMinus.classList.remove("disabled");
        }

        function disabledBtnPlus() {
            count >= 999
                ? btnPlus.classList.add("disabled")
                : btnPlus.classList.remove("disabled");
        }
    });


    /* tabs */
    function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
        const header = document.querySelector(headerSelector),
            tabs = document.querySelectorAll(tabSelector),
            contents = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            contents.forEach(item => {
                item.style.display = 'none';
            });
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            contents[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tabs.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

    tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');




  /*rating*/
    const stars = document.querySelectorAll(".rating__star");
    for (const star of stars) {
        star.addEventListener("click", () => {
            for (const star of stars) {
                star.classList.remove("active");
            }
            star.classList.add("active");

            const { rate } = star.dataset;
            star.parentNode.dataset.rateTotal = star.dataset.rate;
        });
    }


})