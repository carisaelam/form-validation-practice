// DOM Elements
const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

const zipcode = document.getElementById('zipcode');
const zipcodeError = document.querySelector('#zipcode + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector(
  '#confirm-password + span.error'
);

// Event Listeners

// Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submit clicked');
});

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

// Country
country.addEventListener('input', (e) => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.className = 'error';
    console.log('valid');
  } else {
    showError(country);
  }
});

// Zip Code
zipcode.addEventListener('input', (e) => {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = '';
    zipcodeError.className = 'error';
    console.log('valid');
  } else {
    showError(zipcode);
  }
});

// Password
password.addEventListener('input', (e) => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
    console.log('valid');
  } else {
    showError(password);
  }
});

// Confirm Password
confirmPassword.addEventListener('input', (e) => {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'error';
    confirmPassword.className = 'error active'
    console.log('valid');
  } else {
    confirmPasswordError.textContent = 'Passwords must match';
    confirmPassword.className = 'error active invalid';
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
  } else if (element.validity.patternMismatch) {
    message = 'Zipcode must be five digits';
  } else if (element.validity.tooShort) {
    message = 'Too short';
  } else if (element.validity.tooLong) {
    message = 'Too long';
  } else {
    message = '';
  }

  errorSpan.className = 'error active';
  errorSpan.textContent = message;
}
