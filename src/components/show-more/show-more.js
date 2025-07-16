function showMore(containerSelector, initialItems = 6, incrementItems = 3) {
  const container = document.querySelector(containerSelector);
  if (!container) return; // Проверяем, существует ли контейнер

  const showMoreBtn = container.querySelector('.show-more__btn');
  const showMoreItems = container.querySelectorAll('.show-more__item').length;
  let items = initialItems;

  showMoreBtn.addEventListener('click', () => {
      items += incrementItems;
      const array = Array.from(container.querySelector('.show-more__list').children);
      const visibleItems = array.slice(0, items);

      visibleItems.forEach(el => el.classList.add('visible'));

      if (visibleItems.length === showMoreItems) {
          showMoreBtn.style.display = 'none';
      }
  });
}

// Пример использования функции для различных контейнеров
showMore('#showMore1');
showMore('#showMore2');
