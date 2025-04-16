document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let messageElement = document.getElementById("message");
    messageElement.textContent = "Your form is successfully saved!";
    messageElement.classList.remove("hidden"); 

    this.reset(); 
});
