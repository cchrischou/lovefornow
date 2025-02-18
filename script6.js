document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>In the world of friendships I have, no matter how much fun I have with them or how funny or cool they are it almost always feels like something is lacking which it is. All the relationships I have that are Christ centered v.s. not show a massive difference in the way I feel with them/enjoyment/ personal growth. So I value a christ-centered relationship.</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
