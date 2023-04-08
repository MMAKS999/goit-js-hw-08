import {throttle} from 'lodash';

const formEl = document.querySelector('.feedback-form');

let valueForm = {};

// функція оновлення даних
function updateStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}


// відслідковування заповнення полів і запис в сховище якщо швидко писати текст невстигне відслідкуватись
formEl.addEventListener('input',(event) => {
  event.preventDefault();
  valueForm.email = event.currentTarget.email.value;
  valueForm.message = event.currentTarget.message.value;
});

//  чому цей метод спрацьовує тільки після додавання попередніх даних, і перестає працювати після перезавантаження Цей метод не працює, коли сторінка відкривається вперше або якщо локальне сховище браузера порожнє. При першому відкритті сторінки метод JSON.parse(localStorage.getItem('feedback-form-state')) повертає null, оскільки у сховищі немає збережених значень форми. Отже, спроба отримати властивість message та email з null призведе до помилки. 
// function updateForm() {
//   formEl.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message ||'';
//   formEl.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
// }

// оновлювати сховище значень не частіше, ніж раз на 0.5 секунд
 const throttledUpdateStorage = throttle(updateStorage, 50);

formEl.addEventListener('input', throttledUpdateStorage);

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
  console.log(valueForm);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}

formEl.addEventListener('submit', (submitForm));
