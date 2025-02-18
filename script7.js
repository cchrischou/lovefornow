document.getElementById("clickMeButton").addEventListener("click", function() {
    const chatBox = document.getElementById("chatBox");
    
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("response");
    responseMessage.innerHTML = "<p>I feel like the older I get the more I think about in that aspect but like I feel like my younger ones fade but like it affects my relationships now therefore I treasure things in different ways. If you wanta direct answer I think it would be last spring was like favorite semester and after KCM coffeehouse which usually ends late but a random group of us went to watch a friends dance performance and I went and after the night continued and it was so spontaneous and we got ice cream at cold stone and then we were like ok whats next and then we were like ok let’s go to DC. This was like high school movie vibes like fever dream and our phones died and we were in the middle of nowhere and then we got tacos at 4am and then there was hella drunk people around us but it was so fun and by the time we knew it it was 6am.</p>";

    chatBox.appendChild(responseMessage);

    document.getElementById("clickMeButton").disabled = true;
    
    document.getElementById("clickMeButton").removeEventListener("click", arguments.callee);
});
