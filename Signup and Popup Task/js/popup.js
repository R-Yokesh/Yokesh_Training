document.addEventListener('DOMContentLoaded', function() {

    const userData = JSON.parse(localStorage.getItem('currentUser'));

    if (userData) {
        const userDetails = document.getElementById('user-details');
        userDetails.textContent = `Name: ${userData.firstName} ${userData.lastName}, Email: ${userData.email}`;
        showPopup(); 
    }
});

function showPopup() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex'; 
}

document.getElementById('close-popup').addEventListener('click', function() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none'; 
});
