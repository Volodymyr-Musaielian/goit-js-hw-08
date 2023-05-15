import throttle from 'lodash.throttle';

const formData = {};

const refs = {
  input: document.querySelector('[name="email"]'),
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
  formData = {};
}

function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);

  if (parsedData) {
    Object.assign(formData, parsedData);
    refs.form.email.value = parsedData.email || '';
    refs.form.message.value = parsedData.message || '';
  }
}
