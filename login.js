function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
    } else {
        alert('Please enter all fields.');
    }
}

function validateSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        alert('Sign-up successful!');
    } else {
        alert('Please enter all fields.');
    }
}

function validateContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        alert('Please enter all fields.');
    }
}
