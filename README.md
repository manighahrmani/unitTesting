# Number Guessing Game

This repository contains three iterations of a number-guessing game implemented using HTML and JavaScript. Each iteration demonstrates progressive improvements in code organization, modularity, and testing.

## Iteration 1: Single HTML File

In this iteration, the number guessing game is implemented in a single HTML file. The HTML and JavaScript code are all contained within the same file.

To run the game:
1. Open the `index.html` file in a web browser (use the "Open in Default Browser" extension in Visual Studio Code for convenience).
2. Enter a number between 1 and 100 in the input field.
3. Click the "Guess" button to check your guess.
4. The game will provide feedback on whether your guess is too high, too low, or correct.

## Iteration 2: Separate Files and Modules

In this iteration, the code is refactored into separate files for better organization and modularity. The HTML, JavaScript, and module files are separated.

To run the game:
1. Open the `index.html` file in a web browser.
2. Enter a number between 1 and 100 in the input field.
3. Click the "Guess" button to check your guess.
4. The game will provide feedback on whether your guess is too high, too low, or correct.

Improvements:
- The code is split into separate files, making it easier to manage and maintain.
- The game logic is moved into a separate JavaScript file (`game.js`).
- The utility functions are moved into a separate module file (`utils.js`) for reusability.

## Iteration 3: Unit Testing

In this iteration, unit testing is added to ensure the correctness of the game logic and utility functions. The code is further organized, and the [Jest testing framework](https://jestjs.io/) is used for writing and running tests.

To run the unit tests:
1. Make sure you have Node.js installed on your machine.
2. Open a terminal and navigate to the "iteration 3" directory.
3. Run the command `npm install` to install the necessary dependencies.
4. Run the command `npm test` to execute the unit tests.

Improvements:
- Unit tests are added to verify the correctness of the `generateTargetNumber` and `checkGuess` functions.
- The code is organized into separate files for better maintainability.
- The Jest testing framework is used to write and run the unit tests.
