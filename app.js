// Function 1 - Even Number Checker -Checks if a given number is Even
function isEven(number) {
  return number % 2 === 0;
}

// Function 2 - Finds the Highes Number in an array
function findMaxValue(arr) {
  return Math.max(...arr);
}

// Function 3 - Reverse a Given Strings
function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = {
  isEven,
  findMaxValue,
  reverseString,
};
