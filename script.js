document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Example validation
    if (username === 'mirror' && password === '123456') {
        alert('Login successful!');
        errorMessage.textContent = '';
        // Redirect or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
