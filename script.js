function echoText() {
    // Get user input
    const userInput = document.getElementById("userInput").value;

    // Display the input on the screen
    document.getElementById("output").textContent = "You entered: " + userInput;
}
