document.addEventListener('DOMContentLoaded', function() {
  function readMore(containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) return; // Проверяем, существует ли контейнер

      const btns = container.querySelectorAll(".read-more__btn");

      btns.forEach((btn) => {
          btn.addEventListener("click", function () {
              const content = this.previousElementSibling;
              if (btn.classList.toggle("active")) {
                  btn.textContent = "Скрыть";
                  content.style.maxHeight = content.scrollHeight + "px";
              } else {
                  btn.textContent = "Читать дальше";
                  content.style.maxHeight = null;
              }
          });
      });
  }

  // Пример использования функции для различных контейнеров
  readMore('#readMore1');
  readMore('#readMore2');
});
