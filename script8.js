document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>I always wanted to be a golf player but I didn’t do it because it’s too late for me now and also because it required too much money. But if I were to do it I think I would be happy doing it because I love to always play sports and doing a hobby as a job sounds like fun so if I had the chance to go back in time and I had the opportunity, I would try to do it.  </p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
