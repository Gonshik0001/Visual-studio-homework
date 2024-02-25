// Импорт функции findTopStudentWithDates
const findTopStudentWithDates = require('./findTopStudentWithDates');

// Тестирование функции findTopStudentWithDates
test('findTopStudentWithDates returns the student with the highest score and the latest date', () => {
  const studentGroups = [
    [
      { "name": "Ivan", "score": 35, "date": "2022-10-11" },
      { "name": "Maria", "score": 5, "date": "2022-10-10" },
      { "name": "Olga", "score": 0, "date": "" },
      { "name": "Stepan", "score": 35, "date": "2022-10-12" },
      { "name": "Oleg", "score": 9, "date": "2022-10-01" },
      { "name": "Zanna", "score": 15, "date": "2022-10-11" }
    ],
    // ... другие группы студентов
  ];

  expect(findTopStudentWithDates(studentGroups)).toEqual({ name: 'Ivan', score: 35, date: '2022-10-12' });
});

// Дополнительные тесты для обработки дат
// ...

// Тестирование сценария, когда нет валидных студентов
test('findTopStudentWithDates throws an error when no valid students are found', () => {
  const studentsWithNoScores = [
    { name: 'Ivan' },
    { name: 'Maria' },
    { name: 'Olga' },
    { name: 'Stepan' },
    { name: 'Oleg' },
    { name: 'Zanna' }, 
  ];
  expect(() => findTopStudentWithDates([studentsWithNoScores])).toThrow('No valid students found.');
});
module.exports = findTopStudentWithDates
