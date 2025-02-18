document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>I think if I were to die tonight and I couldn’t speak to anybody I would regret not having told this person that I wish I sort of spoke to them sooner you know. Cuz the thing is I already kind of had a moment where I told somebody how I felt recently and uhm for al ong time I didn’t tell them I didn’t tell them how I felt because I thought it was a waste of time and I guess that’s still kind of heavy on my mind because now I regret dragging it on for as long as it did because I guess maybe part of me thinks that you know, you know the what-ifs, what I had said this sooner what if things were different uhm and so year I haven’t told htem that yet, that I wish I said things sooner because I felt like at this point there’s not really much I can do and at this point there’s not much that can chane and it’s just kind of happened and it’s something we’re both gonna have to deal with now. I guess I haven’t told him yet beacuse I don’t think that situation has changed </p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});



