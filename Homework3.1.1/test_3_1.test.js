const calculateBonus = require(`./Homework3.1.1.js`)


//>50
//<50
//50
//0
//0.01
//-1
//0.5
//1651651619815566

test(`>50`, ()=>{
    expect(calculateBonus(1,50)).toEqual(50)
}

)


// Тестирование, когда сумма больше 50
test('calculateBonus returns 50 when sum is greater than 50', () => {
  expect(calculateBonus(28, 35)).toBe(50);
});

// Тестирование, когда сумма равна 50
test('calculateBonus returns 50 when sum is equal to 50', () => {
  expect(calculateBonus(25, 25)).toBe(50);
});

// Тестирование, когда сумма меньше 50
test('calculateBonus returns the sum when sum is less than 50', () => {
  expect(calculateBonus(20, 25)).toBe(45);
});

// Тестирование, когда одно из чисел отрицательное
test('calculateBonus returns 0 when one of the numbers is negative', () => {
  expect(calculateBonus(-10, 60)).toBe(0);
});

// Тестирование, когда оба числа отрицательные
test('calculateBonus returns 0 when both numbers are negative', () => {
  expect(calculateBonus(-20, -30)).toBe(0);
});

// Тестирование, когда оба числа равны 0
test('calculateBonus returns 0 when both numbers are 0', () => {
  expect(calculateBonus(0, 0)).toBe(0);
});
