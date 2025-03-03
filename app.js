const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('#errorMessage');


const inputs = [email, phone, password, confirmPassword];

inputs.forEach(input => {
    input.addEventListener('focusin', () => {
      errorMessage.textContent = '';
        input.classList.remove('error');
        if (input === password || input === confirmPassword) {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
            }      
  });
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = 'Passwords do not match';
        return;
    }
    if (
    !phone.value.match(/(?:(\+)?([0-9]{1,3})?[-. ]?([0-9]{1,3})[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,4}))/) || !phone.value
) {
    phone.classList.add('error');
        errorMessage.textContent = 'Invalid phone number';
        return;
    }
if (password.value.length < 8) {
        password.classList.add('error');
        errorMessage.textContent = 'Password must be at least 8 characters long';
        return;
 
   }
if (!password.value.match(/[a-z]/)) {
     password.classList.add('error');
        errorMessage.textContent = 'Password must contain at least one lowercase letter';
        return;   
}

if (!password.value.match(/[A-Z]/)) {
    password.classList.add('error');
    errorMessage.textContent = 'Password must contain at least one uppercase letter';
    return;
}

if (!password.value.match(/\d+/g )) {
    password.classList.add('error');
    errorMessage.textContent = 'Password must contain at least one number';
    return;
}

errorMessage.textContent = 'Form submitted successfully!';
setTimeout(() => {
    window.location.reload();
    }, 2000);
}

const form = document.querySelector('form');
form.addEventListener('submit', submit);