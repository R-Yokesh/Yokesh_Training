const form = document.querySelector(".wrapper form"),
      fullURL = form.querySelector("input"),
      shortenBtn = form.querySelector("form button"),
      blurEffect = document.querySelector(".blur-effect"),
      popupBox = document.querySelector(".popup-box"),
      infoBox = popupBox.querySelector(".info-box"),
      form2 = popupBox.querySelector("form"),
      shortenURL = popupBox.querySelector("form .shorten-url"),
      copyIcon = popupBox.querySelector("form .copy-icon"),
      saveBtn = popupBox.querySelector("button");


form.onsubmit = (e) => {
    e.preventDefault();
}

// let's start with ajax request
shortenBtn.onclick = () => {
    let xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    xhr.open("POST", "php/url-controll.php", true); // Initialize a POST request to the server
    xhr.onload = () => {
        // Check if the request has completed and the response status is OK
        if(xhr.readyState == 4 && xhr.status == 200){
            let data = xhr.response; // Get the server's response
            if(data.length <= 5){ 
                blurEffect.style.display = "block"; 
                popupBox.classList.add("show"); 

                // Define the domain for the shortened URL
                let domain = "localhost/url/"; 
                shortenURL.value = domain + data; 

                
                copyIcon.onclick = () => {
                    shortenURL.select(); 
                    document.execCommand("copy"); 
                }

                // Handle the click event for the "Save" button in the popup
                saveBtn.onclick = () => {
                    form2.onsubmit = (e) => {
                        e.preventDefault(); // Prevent the default form submission in the popup
                    }

                    let xhr2 = new XMLHttpRequest(); // Create a new XMLHttpRequest object for saving the URL
                    xhr2.open("POST", "php/save-url.php", true); // Initialize a POST request to save the shortened URL
                    xhr2.onload = () => {
                        // Check if the request to save the URL has completed and the response status is OK
                        if(xhr2.readyState == 4 && xhr2.status == 200){
                            let data = xhr2.response; // Get the server's response
                            if(data == "success"){
                                location.reload(); 
                            }else{
                                infoBox.classList.add("error"); 
                                infoBox.innerText = data; 
                            }
                        }
                    }
                    let shorten_url1 = shortenURL.value; 
                    let hidden_url = data; 
                    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
                    xhr2.send("shorten_url=" + shorten_url1 + "&hidden_url=" + hidden_url); 
                }
            }else{
                alert(data); 
            }
        }
    }
    let formData = new FormData(form); // Create a FormData object 
    xhr.send(formData); // Send the form data to the server for processing
}
