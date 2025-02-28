document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>I don’t think my family is super close nor warm, but not in a bad way; we just grew up very independent and kept our feelings to ourselves. I’d say we sit in the middle of the closeness/warmth spectrum. I don’t feel that my childhood was necessarily “happier” than most others’, but I’m definitely fortunate enough to have had a happy childhood. But, I would say that that happiness lasted up until I became a preteen, which I guess would be the cutoff of being a child.</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
