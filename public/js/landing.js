// Open the sign-up modal
function showSignUpModal() {
    var modal = document.getElementById('signupModal');
    modal.style.display = 'block';
}


// Close the sign-up modal
function closeSignUpModal() {
    var modal = document.getElementById('signupModal');
    modal.style.display = 'none';
}


// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('signupModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};