const showSignupForm = document.getElementById('showSignupForm');
const showForgotPasswordForm = document.getElementById('showForgotPasswordForm');
const signupFormContainer = document.getElementById('signupFormContainer');
const forgotPasswordFormContainer = document.getElementById('forgotPasswordFormContainer');

const signupForm = document.getElementById('signupForm');
const signupPasswordInput = document.getElementById('signupPassword');
const signupConfirmPasswordInput = document.getElementById('signupConfirmPassword');

signupForm.addEventListener('submit', (event) => {
    if (signupPasswordInput.value !== signupConfirmPasswordInput.value) {
        event.preventDefault(); // Prevent form submission
        alert('Passwords do not match!');
    }
});

showSignupForm.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupFormContainer.classList.remove('hidden');
});

showForgotPasswordForm.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    forgotPasswordFormContainer.classList.remove('hidden');

   
});
