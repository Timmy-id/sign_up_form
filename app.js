const username = document.querySelector('#username');
const email = document.querySelector('#email');
const button = document.querySelector('#btn-submit');
const passwordToggle = document.querySelector('#passwordToggle');
const password = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

const validate = (e) => {
    e.preventDefault();

    if(username.value === '') {
        alert('Please enter your username');
        username.focus();
        return false;
    }

    if (email.value === '') {
        alert('Please enter your email');
        email.focus();
        return false;
    }

    if(!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return false;
    }

    if(password.value === '') {
        alert('Please enter your password');
        password.focus();
        return false
    } else if (password2.value === '') {
        alert('Please enter confirm password');
        password2.focus()
        return false;
    } else if (password.value != password2.value) {
        alert('Passwords do not match');
        return false;
    }
    return alert(`Welcome ${username.value}`);
}

const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

button.addEventListener('click', validate);

passwordToggle.addEventListener('click', function(e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
})