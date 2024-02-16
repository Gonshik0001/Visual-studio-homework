const calculateExpences = require('./script'); // Подставьте реальный путь к вашему скрипту
const expencesExamples = [
  { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
  { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
];

describe('calculateExpences function', () => {
  test('should return the correct sum of expenses', () => {
    const expectedResult = [40590, 148200, 25709];
    expencesExamples.forEach((expenceEx, index) => {
      expect(calculateExpences(expenceEx.yearlyExpences)).toBe(expectedResult[index]);
    });
  });

  test('should handle months with expenses less than 1000', () => {
    // Mock console.log to capture the output
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    
    const expencesArray = [500, 200, 900, 800, 700];
    calculateExpences(expencesArray);
    
    // Check if console.log was called with the expected values
    expect(consoleLogSpy).toHaveBeenCalledWith('1 (Jan)');
    expect(consoleLogSpy).toHaveBeenCalledWith('2 (Feb)');
    expect(consoleLogSpy).toHaveBeenCalledWith('4 (Apr)');
    expect(consoleLogSpy).toHaveBeenCalledWith('5 (May)');
    
    // Restore console.log
    consoleLogSpy.mockRestore();
  });
});
