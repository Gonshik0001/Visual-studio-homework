function sum(a, b) {
  return a + b;
}

console.log(sum(4, 8));

// a = 8, b = 10, expected = 18

function assert(expectedResult, actualResult) {
  if (expectedResult === actualResult) {
    console.log("passed");
  } else {
    console.log(
      `Result is different - ${actualResult} is not the same as ${expectedResult}`
    );
  }
}

assert(18, sum(4, 8));
