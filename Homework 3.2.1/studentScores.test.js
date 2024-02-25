// Импорт функции findTopStudentWithDates
const findTopStudentWithDates = require('./findTopStudentWithDates');

// Тестирование функции findTopStudentWithDates
describe('findTopStudentWithDates', () => {
  let studentGroups;

  beforeEach(() => {
    studentGroups = [
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
  });

  test('returns the student with the highest score and the latest date', () => {
    expect(findTopStudentWithDates(studentGroups)).toEqual({ name: 'Ivan', score: 35, date: '2022-10-12' });
  });

  // Дополнительные тесты для обработки дат
  // ...

  // Тестирование сценария, когда нет валидных студентов
  test('throws an error when no valid students are found', () => {
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
});

// Функция для преобразования строки с датой в объект Date
function parseDate(dateString) {
  if (dateString) {
    return new Date(dateString);
  }
  return null;
}

// Функция для сравнения двух дат
function compareDates(date1, date2) {
  return date1 - date2;
}

// Обновленная функция findTopStudent с обработкой дат
function findTopStudentWithDates(studentGroups) {
  const flattenedStudents = studentGroups.flat();

  // Фильтруем студентов без дат
  const validStudents = flattenedStudents.filter(student => student.date !== '');

  // Если нет валидных студентов, выбрасываем ошибку
  if (validStudents.length === 0) {
    throw new Error('No valid students found.');
  }

  // Сортируем студентов по убыванию баллов и дате
  const sortedStudents = validStudents.sort((a, b) => {
    // Сначала сравниваем баллы
    if (a.score !== b.score) {
      return b.score - a.score;
    }

    // Затем сравниваем даты
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    return compareDates(dateA, dateB);
  });

  // Возвращаем самого успешного студента
  return sortedStudents[0];
}

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

