const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleSelect = document.getElementById('role');
const rememberMeCheckbox = document.getElementById('remember-me');
const loginErrorParagraph = document.getElementById('login-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const role = roleSelect.value.trim();

    if (username === '' || password === '' || role === '') {
        loginErrorParagraph.textContent = 'Please fill in all fields.';
        return;
    }

    // Add validation for username, password, and role here
    // For example:
    if (username !== 'admin' || password !== 'password') {
        loginErrorParagraph.textContent = 'Invalid username or password.';
        return;
    }

    // If validation passes, submit the form
    form.submit();
});

usernameInput.addEventListener('input', () => {
    const usernameErrorParagraph = document.getElementById('username-error');
    usernameErrorParagraph.textContent = '';
});
