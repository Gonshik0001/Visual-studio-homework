function calculateBestStudents(studentGroups){
  let maxScore = -Infinity;
  let earliestDate = new Date().getTime();
  let studentsNames = [];

  studentGroups.forEach((studentData) => {
    let currentDate = new Date(studentData.date).getTime();
    
    if(studentData.score > maxScore) {
      maxScore = studentData.score;
      earliestDate = currentDate;
      studentsNames = [];
      studentsNames.push(studentData.name);
    } else if (studentData.score == maxScore && currentDate == earliestDate)
    studentsNames.push(studentData.name);
    else if (studentData.score == maxScore && currentDate < earliestDate){
        earliestDate = currentDate;
        studentsNames = [];
        studentsNames.push(studentData.name);
    }
} )
    if (maxScore == 0) {
        studentsNames = [];
        console.log(`no winners`)
    }
    console.log(`Congratulations to ${studentsNames}`)
  return studentsNames;  
}

module.exports = calculateBestStudents;

