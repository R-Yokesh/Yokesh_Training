document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signup-form');
    const messageElement = document.getElementById('message');

    function showMessage(type, text) {
        messageElement.className = `message ${type}`;
        messageElement.textContent = text;
        messageElement.style.display = 'block';
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const firstName = document.getElementById('fname').value.trim();
            const lastName = document.getElementById('lname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Check if any field is empty
            if (firstName === '' || lastName === '' || email === '' || password === '') {
                showMessage('error', 'Please fill in all fields');
                return;
            }

            // Check if passwords match
            if (password !== confirmPassword) {
                showMessage('error', 'Passwords do not match');
                return;
            }

            // Check if password is at least 8 characters
            if (password.length < 8) {
                showMessage('error', 'Password must be at least 8 characters long');
                return;
            }

            // Validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showMessage('error', 'Please enter a valid email address');
                return;
            }

            // If all validations pass, store user data and redirect
            const user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };

            localStorage.setItem('currentUser', JSON.stringify(user));

            // Redirect to the popup page
            window.location.href = 'popup.html'; // Replace with your pop up design

            signUpForm.reset();
        });
    }

    if (window.location.pathname.endsWith('popup.html')) {
        // This part is for the popup.html to delete the user details from local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            // Display user details (you can customize this part as needed)
            document.getElementById('userDetails').textContent = `Thank you, ${currentUser.firstName} ${currentUser.lastName}!`;

            // Remove user details from local storage
            localStorage.removeItem('currentUser');
        } else {
            // If no user data, redirect back to the form or show an error
            window.location.href = 'form.html'; // Replace with your form page URL
        }
    }
});
