// even.test.js
const filterArrayByNumber = require('./even');

describe('filterArrayByNumber', () => {
  it('filters even numbers from an array', () => {
    const numbersArray = [1, 2, 3, 4, 5, 2, 6, 7, 2, 8];
    const filteredArray = filterArrayByNumber(numbersArray);

    // Expect the filtered array to contain only even numbers
    expect(filteredArray).toEqual([2, 4, 2, 6, 2, 8]);
  });

  it('returns an empty array for an empty input array', () => {
    const emptyArray = [];
    const filteredArray = filterArrayByNumber(emptyArray);

    // Expect the filtered array to be empty
    expect(filteredArray).toEqual([]);
  });

  it('returns an empty array for an array with no even numbers', () => {
    const oddNumbersArray = [1, 3, 5, 7, 9];
    const filteredArray = filterArrayByNumber(oddNumbersArray);

    // Expect the filtered array to be empty
    expect(filteredArray).toEqual([]);
  });

  // Add more test cases based on your requirements
});
