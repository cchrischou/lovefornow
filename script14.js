document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    // Create a new response message
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>My greatest accomplishment in my life is the relationships I surround myself with. I think over the years I’ve let myself be wavered by my own insecurities and other people’s opinions. Through good and bad relationships, I was able to learn which ones I should put my value in while also valuing myself.</p>";

    // Add the new message to the chat box
    chatBox.appendChild(responseMessage);
});
