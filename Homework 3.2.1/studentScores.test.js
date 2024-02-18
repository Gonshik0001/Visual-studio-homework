const findTopStudent = require('./studentScores');

// Array of students
const studentGroups = [
  [
    { "name": "Ivan", "score": 35, "date": "2022-10-11" },
    { "name": "Maria", "score": 5, "date": "2022-10-10" },
    { "name": "Olga", "score": 0, "date": "" },
    { "name": "Stepan", "score": 35, "date": "2022-10-12" },
    { "name": "Oleg", "score": 9, "date": "2022-10-01" },
    { "name": "Zanna", "score": 15, "date": "2022-10-11" }
  ],
  [
    { "name": "Margo", "score": 0, "date": "2022-10-11" },
    { "name": "Natalia", "score": 25, "date": "2022-10-10" },
    { "name": "Marina", "score": 25, "date": "2022-10-01" },
    { "name": "Dmitry", "score": 25, "date": "2022-10-12" },
    { "name": "Denis", "score": 0, "date": "2022-10-02" },
    { "name": "Vadimyr", "score": 1, "date": "2022-10-11" }
  ],
  [
    { "name": "Irina", "score": 0, "date": "2022-10-11" },
    { "name": "Vasily", "score": 0, "date": "2022-10-10" },
    { "name": "David", "score": 0, "date": "2022-10-11" },
    { "name": "Kristina", "score": 0, "date": "2022-10-12" },
    { "name": "Varvara", "score": 0, "date": "2022-10-01" },
    { "name": "Tanya", "score": 0, "date": "2022-10-11" }
  ]
];

// Test cases
test('findTopStudent returns the student with the highest score', () => {
  expect(findTopStudent(studentGroups)).toEqual({ name: 'Ivan', score: 35, date: '2022-10-11' });
});

// Test Case 2
const students = [
  { name: 'Ivan', score: 35, date: '2022-10-11' },
  { name: 'Maria', score: 5, date: '2022-10-10' },
  { name: 'Olga', score: 0, date: '' },
  { name: 'Stepan', score: 35, date: '2022-10-12' },
  { name: 'Oleg', score: 9, date: '2022-10-01' },
  { name: 'Zanna', score: 15, date: '2022-10-11' },
];
expect(findTopStudent([students])).toEqual({ name: 'Ivan', score: 35 });

// Test Case 3
const invalidStudents = 'not_an_array';
expect(() => findTopStudent(invalidStudents)).toThrow('Invalid input. Expected an array of student groups.');

// Test Case 4
const studentsWithNoScores = [
  { name: 'Ivan' },
  { name: 'Maria' },
  { name: 'Olga' },
  { name: 'Stepan' },
  { name: 'Oleg' },
  { name: 'Zanna' },
];
expect(() => findTopStudent([studentsWithNoScores])).toThrow('No valid students found.');
