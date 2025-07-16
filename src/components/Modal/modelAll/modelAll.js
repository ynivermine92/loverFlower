/* model fuciton*/
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

  bindModal('.modal__btn', '.modal__wrapper', '.modal__close') // авторизация
  bindModal('.modalRegist__btn', '.modalRegist__wrapper', '.modalRegist__close') //регистрация 
  bindModal('.modalThank__close', '.modalThank__wrapper', '.modalThank__close') // модел спасибо
/*! удалить  bindModal('.modal__wrapper2 + .modal__wrapper', '.modal__wrapper', '.modal__close'); добавление 2 моделки у которой не ту кнопки через +*/






/* model */
const model = () => {
  
  const verification = document.querySelector('.modal__verification');
  const uzerListVerification = document.querySelector('.user-nav__ul');
  
  verification.addEventListener("click", () => {
    uzerListVerification.classList.toggle('active');
  });
  
  document.addEventListener('click', (e) => {
    if (!uzerListVerification.contains(e.target) && !verification.contains(e.target)) {
      uzerListVerification.classList.remove('active');
    }
  });
  

  /*link model*/
  const ModalinkVerification = document.querySelector('.modal__verification');
  const ModalRegisLink = document.querySelector('.modalRegist__regist');

  /*wrapper model block*/
  const ModalRegistWrapper = document.querySelector('.modalRegist__wrapper');
  const ModalWrapper = document.querySelector('.modal__wrapper');
  const modalThankWrapepr = document.querySelector('.modalThank__wrapper');


  /* model verification */
  const modalVerification = () => {
    const ModalinputEmail = document.querySelector('.modal__mail');
    const ModalPassword = document.querySelector('.modal__password');
    const ModalBtn = document.querySelector('.modal__button');


    /*Modal Valid */
    ModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^[a-zA-Z0-9]+$/;

      let EmailValid = emailRegex.test(ModalinputEmail.value);
      let PasswordValid = passwordRegex.test(ModalPassword.value);

      if (EmailValid) {
        ModalinputEmail.style.color = '#333';
      } else {
        ModalinputEmail.style.color = 'red';
        if (ModalinputEmail.value.trim() === '') {
          ModalinputEmail.value = 'Введите email';
        }

        if (!ModalinputEmail.value.includes('*')) {
          ModalinputEmail.value += '*';
          ModalinputEmail.style.color = 'red';
        }
      }
      ModalinputEmail.addEventListener('click', () => {
        ModalinputEmail.style.color = '#333';
        ModalinputEmail.value = '';
      })


      /*  Password */
      if (PasswordValid) {
        ModalPassword.style.color = '#333';
      } else {
        ModalPassword.style.color = 'red';
        if (ModalPassword.value.trim() === '') {
          ModalPassword.value = 'Введите пароль';
        }

        if (!ModalPassword.value.includes('*')) {
          ModalPassword.value += '*';
          ModalPassword.style.color = 'red';
        }
      }

      ModalPassword.addEventListener('click', () => {
        ModalPassword.style.color = '#333';
        ModalPassword.value = '';
      })

      if (EmailValid && PasswordValid) {
        ModalinputEmail.value = '';
        ModalPassword.value = '';
        ModalWrapper.style.display = 'none'
      }

    });

    ModalinkVerification.addEventListener('click', () => {
      ModalWrapper.style.display = 'none'

      setTimeout(() => {
        ModalRegistWrapper.style.display = 'flex';
      }, 500);
    })
  }
  modalVerification();

  /*  model regist */
  const modalRegist = () => {
    const modalTell = document.querySelector('.modal__tell');
    const ModalRegisInputEmail = document.querySelector('.modal__register-mail');
    const ModalRegitBtn = document.querySelector('.modalRegist__button');


    /*ModalRegist Valid */
    ModalRegitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const tellRegex = /^\+?\d{1,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/;

      let EmailValid = emailRegex.test(ModalRegisInputEmail.value);
      let telldValid = tellRegex.test(modalTell.value);

      if (EmailValid) {
        ModalRegisInputEmail.style.color = '#333';
      } else {
        ModalRegisInputEmail.style.color = 'red';
        if (ModalRegisInputEmail.value.trim() === '') {
          ModalRegisInputEmail.value = 'Вы ввели некорректный email';
        }

        if (!ModalRegisInputEmail.value.includes('*')) {
          ModalRegisInputEmail.value += '*';
          ModalRegisInputEmail.style.color = 'red';
        }
      }

      if (telldValid) {
        modalTell.style.color = '#333';
      } else {
        modalTell.style.color = 'red';
        if (modalTell.value.trim() === '') {
        }

        if (!modalTell.value.includes('*')) {
          modalTell.value += '*';
          modalTell.style.color = 'red';
        }
      }
      if (telldValid && EmailValid) {
        ModalRegisInputEmail.value = '';
        modalTell.value = '';
        ModalRegistWrapper.style.display = 'none'
        setTimeout(() => {
          modalThankWrapepr.style.display = 'flex';
        }, 500);

      }
    })

    ModalRegisLink.addEventListener('click', () => {
      setTimeout(() => {
        ModalWrapper.style.display = 'flex';
      }, 500);
      ModalRegistWrapper.style.display = 'none'
    })
  }
  modalRegist()

  /*  model senk */
  const modalThank = () => {
    const clouseModelThank = document.querySelector('.modalThank__close');
    clouseModelThank.addEventListener('click', () => {
      modalThankWrapepr.style.display = 'none'
    })

  }
  modalThank()

}
model()





