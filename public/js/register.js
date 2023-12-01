function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Perform additional validation if needed

    // If all validation passes, you can submit the form or perform other actions.
    alert("Registration successful!");
    // You can also use AJAX to submit the form data to a server.
}
