# Homework 3.2.1

This project aims to find the top-scoring student among different groups based on their scores.

## Installation

To set up the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd homework-3.2.1
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

You can use the `findTopStudent` function to find the student with the highest score. The function takes an array of student groups as its input.

```javascript
const findTopStudent = require('./studentScores');

const studentGroups = [
  // ... your array of student groups
];

const topStudent = findTopStudent(studentGroups);
console.log('Top Student:', topStudent);
Running Tests
Make sure to run tests to ensure the correctness of the implementation.


npm test
Test Coverage
To measure test coverage, you can use the following command:


npm run coverage
This project uses Jest for testing and coverage. The coverage report is generated in the coverage folder. Open the index.html file in a browser to view a detailed coverage report.

Additional Information
What is measured:

Statement coverage (% Stmts)
Branch coverage (% Branch)
Function coverage (% Funcs)
Line coverage (% Lines)
How to interpret coverage:

Statement Coverage: Percentage of statements covered by tests.
Branch Coverage: Percentage of decision branches covered by tests.
Function Coverage: Percentage of functions covered by tests.
Line Coverage: Percentage of lines covered by tests.
How to contribute:

Fork the repository.
Create a feature branch.
Make changes and submit a pull request.