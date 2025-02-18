document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");

    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>I cried to my mom because she kept making me do holiday things over winter break with her boyfriend and i didn’t want to 🤩</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
