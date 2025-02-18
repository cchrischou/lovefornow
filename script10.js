document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    // Create a new response message
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>If I knew that, I only had one year left to live. There are so many things that I would do differently. I think first of all I would quit school right away, and I would spend so much time with my friends and my family. I would probably travel. Honestly, just spend time doing the things that I love with the people that I love because why would I wanna waste any more time feeling tired or stressed anxious scared any of those negative emotions so yeah</p>";

    // Add the new message to the chat box
    chatBox.appendChild(responseMessage);
});
