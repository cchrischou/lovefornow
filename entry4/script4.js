document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    // Create a new response message
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>There's only one man that I would choose to eat dinner with as a guest That is Jesus He is living and breathing. You cannot tell me he's dead because he's alive so I would choose Jesus.</p>";

    // Add the new message to the chat box
    chatBox.appendChild(responseMessage);
});
