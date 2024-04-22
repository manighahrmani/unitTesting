export function generateTargetNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export function checkGuess(guess, targetNumber) {
  if (guess === targetNumber) {
    return `Congratulations!`;
  } else if (guess < targetNumber) {
    return "Too low. Guess again.";
  } else {
    return "Too high. Guess again.";
  }
}
