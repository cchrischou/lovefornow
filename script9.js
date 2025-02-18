document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    // Create a new response message
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>I wish I had someone with whom I could share my love with. Someone I could help support and someone who could listen to my overthinking thoughts, because I think it’s better rather than letting myself think about because if it lingers then it’s stressful.</p>";

    // Add the new message to the chat box
    chatBox.appendChild(responseMessage);
});
