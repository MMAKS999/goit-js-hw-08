import {throttle} from 'lodash';

const formEl = document.querySelector('.feedback-form');

// функція оновлення даних



formEl.addEventListener('input', throttle((event) => {
    event.preventDefault();
    const valueForm = {
        email: event.currentTarget.email.value,
        message: event.currentTarget.message.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(valueForm))
}), 500);

//  чому цей метод спрацьовує тільки після додавання попередніх даних, і перестає працювати після перезавантаження Цей метод не працює, коли сторінка відкривається вперше або якщо локальне сховище браузера порожнє. При першому відкритті сторінки метод JSON.parse(localStorage.getItem('feedback-form-state')) повертає null, оскільки у сховищі немає збережених значень форми. Отже, спроба отримати властивість message та email з null призведе до помилки. 
// function updateForm() {
//   formEl.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message ||'';
//   formEl.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
// }

// Функція оновлення форми зі значень зі сховища
updateForm();

function updateForm() {
  const messageEl = formEl.querySelector('textarea[name="message"]');
  const emailEl = formEl.querySelector('input[name="email"]');

  const storedValues = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (emailEl) {
    emailEl.value = storedValues.email || '';
  }

  if (messageEl) {
    messageEl.value = storedValues.message || '';
  }
}

//  Функція очищення форми і сховища після сабміту
function submitForm(event) {
  event.preventDefault();
  const valueForm = JSON.parse(localStorage.gatltem('feedback-form-state'));
  console.log(valueForm);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}

formEl.addEventListener('submit', (submitForm));
