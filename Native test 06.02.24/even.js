function filterArrayByNumber(arr, number) {
    // Use the filter method to create a new array with elements that pass the test
    return arr.filter(element => {
      // Return true for elements that are equal to the specified number
      return element === number;
    });
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5, 2, 6, 7, 2, 8];
  const filteredArray = filterArrayByNumber(numbersArray, 2);
  
  console.log(filteredArray);

  module.exports = filterArrayByNumber;