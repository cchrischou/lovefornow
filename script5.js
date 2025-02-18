document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>Being in touch with myself and not forcing anything really. Just waking up and feeling connected to myself and being alright and content and enjoying nature appreciating the little things and just really observing and being present really. I think thats the perfect day for me that’s when I’m the happiest, appreciating the weather and things that I sometimes ignore when I have a busy schedule.</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
