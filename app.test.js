const chai = require("chai");
const expect = chai.expect;
const { isEven, findMaxValue, reverseString } = require("./app");

// Test Cases for Function 1
describe("isEven", () => {
  it("should return true for an even number", () => {
    const result = isEven(10);
    expect(result).to.be.true;
  });

  it("should return false for an odd number", () => {
    const result = isEven(7);
    expect(result).to.be.false;
  });

  it("should return true for zero", () => {
    const result = isEven(0);
    expect(result).to.be.true;
  });
});

// Test Cases for Function 2
describe("findMaxValue", () => {
  it("should return the maximum value in an array of positive numbers", () => {
    const result = findMaxValue([5, 2, 8, 1, 9]);
    expect(result).to.equal(9);
  });

  it("should return the maximum value in an array of negative numbers", () => {
    const result = findMaxValue([-2, -7, -1, -9, -4]);
    expect(result).to.equal(-1);
  });

  it("should return the maximum value in an array with a single element", () => {
    const result = findMaxValue([42]);
    expect(result).to.equal(42);
  });
});

// Test Cases for Function 3
describe("reverseString", () => {
  it("should correctly reverse a string with all lowercase letters", () => {
    const result = reverseString("hello");
    expect(result).to.equal("olleh");
  });

  it("should correctly reverse a string with a mix of uppercase and lowercase letters", () => {
    const result = reverseString("Hello World");
    expect(result).to.equal("dlroW olleH");
  });

  it("should correctly reverse a string with special characters and numbers", () => {
    const result = reverseString("123@#$");
    expect(result).to.equal("$#@321");
  });
});
