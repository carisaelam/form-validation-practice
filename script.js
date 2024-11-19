// DOM Elements
const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

// Event Listeners

// Email
email.addEventListener('input', (e) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
    console.log('valid');
  } else {
    showError(email);
  }
});

// Functions
function showError(element) {
  let errorSpan = document.querySelector(`#${element.id} + span.error`);

  let message;

  if (element.validity.valueMissing) {
    message = 'Missing value';
  } else if (element.validity.typeMismatch) {
    message = 'Wrong type';
  } else if (element.validity.tooShort) {
    message = 'Too short';
  } else if (element.validity.tooLong) {
    message = 'Too long';
  }
  
  errorSpan.className = 'error active';
  errorSpan.textContent = message;
}
