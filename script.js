// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 10) {
        messageElement.textContent = 'Please enter a valid number between 1 and 10.';
    } else if (guess === secretNumber) {
        messageElement.textContent = 'Congratulations! You guessed the secret number!';
    } else {
        messageElement.textContent = 'Sorry, that\'s not correct. Try again!';
    }
}

