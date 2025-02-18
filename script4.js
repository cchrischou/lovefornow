document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>There's only one man that I would choose to eat dinner with as a guest That is Jesus He is living and breathing. You cannot tell me he's dead because he's alive so I would choose Jesus.</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
