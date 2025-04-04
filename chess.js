
let turn = 1; // 1 for White, 2 for Black
let selectedPiece = null; // Track the selected piece

// Function to update the turn display
function updateTurnDisplay() {
    if (turn % 2 !== 0) {
        document.getElementById('turn').innerText = "White's turn";
        whosTurn('W');
    } else {
        document.getElementById('turn').innerText = "Black's turn";
        whosTurn('B');
    }
}

// Function to log the current player's turn
function whosTurn(player) {
    console.log(player + "'s turn");
}

// Function to handle a click on a box
function handleBoxClick(event) {
    const clickedBox = event.target;

    // If a piece is already selected and clicked box is empty, move the piece
    if (selectedPiece && clickedBox.innerHTML.trim() === '') {
        clickedBox.innerHTML = selectedPiece.innerHTML; // Move the piece
        selectedPiece.innerHTML = ''; // Clear the original box
        selectedPiece.classList.remove('selected'); // Deselect the piece
        selectedPiece = null; // Reset selected piece

        turn++; // Increment the turn
        updateTurnDisplay(); // Update turn display
    }
    // If a piece is clicked (to be selected)
    else if (clickedBox.innerHTML.trim() !== '') {
        // Check if it's the correct player's turn
        const isWhitePiece = clickedBox.innerHTML.charCodeAt(0) >= 9812 && clickedBox.innerHTML.charCodeAt(0) <= 9817;
        if ((turn % 2 !== 0 && isWhitePiece) || (turn % 2 === 0 && !isWhitePiece)) {
            deselectAll(); // Deselect any previously selected piece
            clickedBox.classList.add('selected'); // Mark the piece as selected
            selectedPiece = clickedBox; // Track the selected piece
            console.log(`Selected piece: ${clickedBox.innerHTML} at ${clickedBox.id}`);
        } else {
            console.log("It's not your turn!");
        }
    }
}

// Function to deselect any selected piece
function deselectAll() {
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    selectedPiece = null;
}

// Add event listeners to all boxes on the board
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
});

// Initial call to set the turn display
updateTurnDisplay();


