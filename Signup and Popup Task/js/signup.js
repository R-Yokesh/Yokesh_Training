document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signup-form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

       
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        localStorage.setItem('currentUser', JSON.stringify(user));

        
        window.location.href = 'popup.html'; // Replace with your pop up design

        signUpForm.reset();
    });
});
