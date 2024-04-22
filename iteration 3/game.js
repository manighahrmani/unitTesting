import { generateTargetNumber, checkGuess } from "./utils.js";

const el = {};
let targetNumber;
let attempts;

function startGame() {
  targetNumber = generateTargetNumber();
  attempts = 0;
  el.resultElement.textContent = "";
}

function handleGuess() {
  const guess = parseInt(el.guessInput.value);
  attempts++;
  const result = checkGuess(guess, targetNumber);
  el.resultElement.textContent = result;
}

function addEventListeners() {
  el.guessButton.addEventListener("click", handleGuess);
}

function getElementHandlers() {
  el.guessInput = document.getElementById("guessInput");
  el.guessButton = document.getElementById("guessButton");
  el.resultElement = document.getElementById("result");
}

function init() {
  getElementHandlers();
  addEventListeners();
  startGame();
}

init();
