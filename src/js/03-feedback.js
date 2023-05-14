import throttle from 'lodash.throttle';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

populateForm();

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
}

function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);

  if (parsedData.email) {
    refs.form.email.value = parsedData.email;
  }

  if (parsedData.message) {
    refs.form.message.value = parsedData.message;
  }
}
