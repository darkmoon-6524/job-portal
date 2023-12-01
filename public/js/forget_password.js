function submitForm() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message');


    // You can add additional validation here


    // Simulate a successful submission for demonstration purposes
    message.innerHTML = 'Password reset link sent to ' + email;
    message.style.color = '#28a745';
}