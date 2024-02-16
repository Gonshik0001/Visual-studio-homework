// script.js

function calculateExpences(expencesArray) {
    // ваша реализация
    let sum = 0;
    for (let monthNumber in expencesArray) {
      let monthExp = expencesArray[monthNumber];
      if (monthExp > 1000) {
        sum += monthExp;
      } else if (monthExp < 1000) {
        let date = new Date(0, parseInt(monthNumber));
        console.log(`${parseInt(monthNumber) + 1} (${date.toLocaleString("en-GB", { month: "short" })})`);
      }
    }
    return sum;
  }
  
  module.exports = calculateExpences;
  