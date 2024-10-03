// role-selection.js

document.getElementById('roleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected role from the dropdown
    const selectedRole = document.getElementById('role').value;

    // Redirect based on the selected role
    if (selectedRole === 'Student') {
        window.location.href = 'student-dashboard.html'; // Redirect to student dashboard
    } else if (selectedRole === 'Teacher') {
        window.location.href = 'teacher-dashboard.html'; // Redirect to teacher dashboard (or another page)
    }
});
