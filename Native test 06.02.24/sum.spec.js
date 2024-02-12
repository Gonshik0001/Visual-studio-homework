const sum = require("./sum");

describe("Suite for sum tests", () => {

  it("Sum of two positive numbers", () => {
    expect(sum(2, 8)).toBe(10);
  });
  
  it("Sum of two negative numbers", () => {
    expect(sum(-100, -8)).toBe(-108);
  });

  it("Sum of two positive numbers", () => {
    expect(sum(0, 8)).toBe(8);
  });

  it("Sum of one negative numbers", () => {
    expect(sum(-100, 8)).toBe(-92);
  });
}); 

describe("Suite for 0 values", () => {

  it("Sum of two 0 numbers", () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  it("Sum of one 0 number", () => {
    expect(sum(10, 0)).toBe(10);
  });
});
