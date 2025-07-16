// Модальное окно
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      body.classList.remove('locked');
      clearInterval(intervalId); // Остановка таймера
    }
  });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')

/*! удалить  bindModal('.modal__wrapper2 + .modal__wrapper', '.modal__wrapper', '.modal__close'); добавление 2 моделки у которой не ту кнопки через +*/








 //  для колекциии 
 function bindModal(trigger, modal, close) {
  const triggers = document.querySelectorAll(trigger);
  const modals = document.querySelectorAll(modal);
  const closes = document.querySelectorAll(close);

  const body = document.body;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      modals.forEach(modal => {
        modal.style.display = 'flex';
      });
      body.classList.add('locked');
    });
  });

  closes.forEach(close => {
    close.addEventListener('click', () => {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
      body.classList.remove('locked');
    });


  });

  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('locked');

      }
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
      body.classList.remove('locked');
    }
  });
}

// Пример использования:
bindModal('.btn', '.modal__wrapper2', '.modal__close');
bindModal('.modal__wrapper2 + .modal__wrapper', '.modal__wrapper', '.modal__close');
/*! удалить  bindModal('.modal__wrapper2 + .modal__wrapper', '.modal__wrapper', '.modal__close'); добавление 2 моделки у которой не ту кнопки через +*/