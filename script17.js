document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>If a crystal ball could tell me anything, i think i would want to know what my life looks like in 10-15 years. maybe things like who i marry, if he’s a mog or i just settled, or if i become the wog i aspire to be. there are so many questions i have within myself and my life and i think it would be super awesome if i had a real crystal ball in my life. i also think that i would like to know what people thought about me- not that i care but because im curious on what traits i have that people like or dislike. i think younger me would ask the crystal ball if i truly found happiness and love within myself, but i think i already know the answer to that.</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
