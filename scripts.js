// scripts.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Perform any validation or processing here if needed
    
    // Redirect to login page after sign-up process
    window.location.href = 'login.html';
});
