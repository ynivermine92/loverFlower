const sliderThumbs = new Swiper('.thumbs-container', {
	direction: 'vertical',
	slidesPerView: 3,
	spaceBetween: 24,
	navigation: {
		nextEl: '.slider__next',
		prevEl: '.slider__prev'
	},
	freeMode: true,
	breakpoints: {
		0: { direction: 'horizontal' },
		768: { direction: 'vertical' }
	}
});

const sliderImages = new Swiper('.images-container', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 32,
	mousewheel: true,
	navigation: {
		nextEl: '.slider__next',
		prevEl: '.slider__prev'
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderThumbs
	},
	breakpoints: {
		0: { direction: 'horizontal' },
		768: { direction: 'vertical' }
	}
});
