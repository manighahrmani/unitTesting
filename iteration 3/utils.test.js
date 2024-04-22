const { generateTargetNumber, checkGuess } = require("./utils.js");

describe("generateTargetNumber", () => {
  test("generates a number between 1 and 100", () => {
    const targetNumber = generateTargetNumber();
    expect(targetNumber).toBeGreaterThanOrEqual(1);
    expect(targetNumber).toBeLessThanOrEqual(100);
  });
});

describe("checkGuess", () => {
  test("returns correct message for correct guess", () => {
    const result = checkGuess(50, 50);
    expect(result).toBe("Congratulations!");
  });

  test("returns correct message for low guess", () => {
    const result = checkGuess(30, 50);
    expect(result).toBe("Too low. Guess again.");
  });

  test("returns correct message for high guess", () => {
    const result = checkGuess(70, 50);
    expect(result).toBe("Too high. Guess again.");
  });
});
