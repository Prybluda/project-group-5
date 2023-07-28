(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Заборонити стандартну поведінку (перезавантаження сторінки)
    toggleModal();
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function submitForm(event) {
    event.preventDefault(); // Заборонити стандартну поведінку (перезавантаження сторінки)
    // Додатковий код для обробки даних форми або відправки на сервер
    // Наприклад, ви можете використовувати AJAX для асинхронної відправки даних на сервер
  }
})();
