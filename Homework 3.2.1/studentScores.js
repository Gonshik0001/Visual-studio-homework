function findTopStudent(students) {
    if (!Array.isArray(students) || students.length === 0) {
      throw new Error('Invalid input. Expected an array of student groups.');
    }
  
    let topStudent = null;
    let maxScore = Number.MIN_SAFE_INTEGER; // Initialize to the lowest possible value
  
    students.forEach((studentGroup) => {
      if (!Array.isArray(studentGroup) || studentGroup.length === 0) {
        throw new Error('Invalid input. Expected an array of students in each group.');
      }
  
      studentGroup.forEach((student) => {
        if (student && typeof student === 'object' && 'score' in student) {
          if (student.score >= maxScore) { // Consider equal scores as well
            topStudent = student;
            maxScore = student.score;
          }
        }
      });
    });
  
    if (!topStudent) {
      throw new Error('No valid students found.');
    }
  
    return topStudent;
  }
  
  module.exports = findTopStudent;
  