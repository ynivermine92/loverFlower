document.addEventListener('DOMContentLoaded', () => {
    const thumbsRow = document.getElementById('thumbsRow');
    const btnPrev = document.querySelector('.thumbs-prev');
    const btnNext = document.querySelector('.thumbs-next');
    const mainImage = document.querySelector('.slider__main-image img');
    const thumbs = document.querySelectorAll('#thumbsRow .slider__image img');

    const scrollAmount = thumbsRow.offsetWidth / 3;
    let currentIndex = 0;

    // Подсветка активного и отображение главного изображения
    function updateMainImage(index) {
      if (thumbs[index]) {
        mainImage.src = thumbs[index].src;

        // Удаляем старый актив
        thumbs.forEach(img => img.classList.remove('active-thumb'));
        thumbs[index].classList.add('active-thumb');

        currentIndex = index;
      }
    }

    // Изначально показать первую
    updateMainImage(currentIndex);

    // Обработка клика на миниатюры
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        updateMainImage(index);
      });
    });

    btnPrev.addEventListener('click', () => {
      thumbsRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      if (currentIndex > 0) {
        updateMainImage(currentIndex - 1);
      }
    });

    btnNext.addEventListener('click', () => {
      thumbsRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      if (currentIndex < thumbs.length - 1) {
        updateMainImage(currentIndex + 1);
      }
    });
  });
