const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', event => {
  if (!form.checkValidity()) {
    event.preventDefault();
  }
});

let label;
let error;

inputs.forEach(input => {
  input.addEventListener('input', () => {
    error = input.parentNode.children[2];
    if (input.checkValidity()) {
      error.textContent = '';
    }
  });

  input.addEventListener('invalid', () => {
    label = input.parentNode.children[1];
    error = input.parentNode.children[2];

    const errorString = ' cannot be empty';

    if (input.validity.valueMissing) {
      input.className = 'submitted';
      error.textContent = label.textContent + errorString;
    } else if (input.type === 'email' && input.validity.typeMismatch) {
      input.className = 'submitted';
      error.textContent = 'Looks like this is not an email';
    }
  });
});
