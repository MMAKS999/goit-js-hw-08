import {throttle} from 'lodash';

const formEl = document.querySelector('.feedback-form');

// функція оновлення даних

formEl.addEventListener('input', throttle((event) => {
    event.preventDefault();
    const valueForm = {
        email: event.currentTarget.email.value,
        message: event.currentTarget.message.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}), 500);

// Функція оновлення форми зі значень зі сховища

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

updateForm();

//  Функція очищення форми і сховища після сабміту
function submitForm(event) {
  event.preventDefault();
  const valueForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(valueForm);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}

formEl.addEventListener('submit', (submitForm));
