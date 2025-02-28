// When the form is submitted
document.getElementById("responseForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    const userResponse = document.getElementById("userResponse").value;

    if (userResponse.trim() !== "") {
        // Get the stored responses (if any), or create an empty array if none exist
        const responses = JSON.parse(localStorage.getItem("responses")) || [];
        
        // Add the new response to the array
        responses.push(userResponse);
        
        // Save the updated responses back to localStorage
        localStorage.setItem("responses", JSON.stringify(responses));

        // Display the updated responses
        displayResponses();

        // Clear the input field
        document.getElementById("userResponse").value = "";
    } else {
        alert("Please enter a response!");
    }
});

// Function to display responses
function displayResponses() {
    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    const responsesDiv = document.getElementById("userResponses");

    // Clear any previously displayed responses
    responsesDiv.innerHTML = "";

    // Display each response stored in localStorage
    responses.forEach(function(response) {
        const responseDiv = document.createElement("div");
        responseDiv.textContent = response;
        responseDiv.style.marginBottom = "10px";
        responseDiv.style.padding = "10px";
        responseDiv.style.backgroundColor = "#e8f7e8";
        responseDiv.style.borderRadius = "5px";
        responsesDiv.appendChild(responseDiv);
    });
}

// Function to clear responses if a week has passed
function clearResponsesIfWeekPassed() {
    const lastClearedDate = localStorage.getItem("lastClearedDate");

    if (lastClearedDate) {
        const currentDate = new Date();
        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;  // 7 days in milliseconds
        const lastDate = new Date(lastClearedDate);

        // If a week has passed
        if (currentDate - lastDate >= oneWeekInMilliseconds) {
            // Clear the stored responses
            localStorage.removeItem("responses");
            // Update the last cleared date
            localStorage.setItem("lastClearedDate", currentDate.toISOString());
        }
    } else {
        // If there's no stored date, set it for the first time
        localStorage.setItem("lastClearedDate", new Date().toISOString());
    }
}

// Display responses on page load (even after refresh)
window.onload = function() {
    // Check if a week has passed and clear responses if necessary
    clearResponsesIfWeekPassed();
    displayResponses();
};



// Function to clear the stored responses
function clearResponses() {
    // Remove the responses from localStorage
    localStorage.removeItem("responses");

    // Optionally, also clear the displayed responses on the page
    const responsesDiv = document.getElementById("userResponses");
    responsesDiv.innerHTML = "";
}

// Call this function whenever you want to clear the responses
clearResponses();
