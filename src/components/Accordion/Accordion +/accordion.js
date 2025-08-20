// Аккордеон
function accordion(containerSelector) {
    const container = document.querySelector(containerSelector);
    const items = container.querySelectorAll('.accordion__item-trigger');
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active');
            } else {
                container
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'));
                parent.classList.add('accordion__item-active');
            }
        });
    });
}
accordion('#accordion1');
/* accordion('#accordion2'); */