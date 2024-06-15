document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signup-form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;


        if (firstName === '' || lastName === '' || email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        localStorage.setItem('currentUser', JSON.stringify(user));

        window.location.href = 'popup.html'; 

        signUpForm.reset();
    });
});
