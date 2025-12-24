// Select the dodger element for manipulation
// Hint: Use document.getElementById to select the element with id "dodger"
// Function to move the dodger left
// Hint: Define a function moveDodgerLeft()

// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger

// Function to move the dodger right
// Hint: Define a function moveDodgerRight()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger

// Attach event listener to respond to key presses
// Hint: Use document.addEventListener to listen for "keydown" events
// Hint: Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Hint: Call moveDodgerRight if the right arrow key is pressed

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    // 1. Get the current left value (e.g., "180px")
    const leftNumbers = dodger.style.left.replace("px", "");

    // 2. Convert "180" to the number 180
    const left = parseInt(leftNumbers, 50);

    // 3. Move left if we aren't at the edge
    if (left > 0) {
        dodger.style.left = `${left - 50}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 50);

    // 3. Move right if we aren't at the edge (assuming screen is ~400px wide)
    if (left < 360) {
        dodger.style.left = `${left + 50}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});