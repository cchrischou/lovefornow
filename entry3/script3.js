document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    // Create a new response message
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>The people in my life. Even just including my parents like they made me who I am and especially in college like meeting all these wonderful people has like turned me into a better being i’m so grateful for like all the friends that I have made because I wouldn’t have ever believed I would change so much as a person if I haven’t met all these people and even if I met them I wouldn’t have known their influence on me.</p>";

    // Add the new message to the chat box
    chatBox.appendChild(responseMessage);
});
