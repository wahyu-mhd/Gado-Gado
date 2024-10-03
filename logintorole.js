// scripts.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform any additional logic or validation here (optional)

    // Redirect to role-selection.html
    window.location.href = 'role-selection.html';
});
