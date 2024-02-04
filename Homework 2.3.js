let scoresStudents = [
    65, 70,
    88, 79,
    95, 97,
    72, 84,
    60, 68,
    83, 91,
    76, 89,
    70, 75,
    93, 86,
    79, 82,
    0, 100,
    75, 75
  ];
  
function sortBubble(scores){
    let temp;
  for (let i=0; i<scores.length-1; i++){
    for (let j=0; j<scores.length-i-1; j++) {
        console.log(`текущий массив: ${scores}`)
        console.log(`Сравниваем значение ${scores[j]}`)    
        console.log(`Сравниваем индексы${scores[j]} и ${scores[j+1]}`)
            if (scores[j] < scores[j+1]) {
                temp= scores[j];
                scores[j] = scores[j+1]
                scores[j+1] = temp
            }
            console.log(`Новый массив: ${scores}`)
            console.log("----------")
    }
  }
console.log(scores)
}
//let arr = [12,45,22,11]
//sortBubble(arr)
sortBubble(scoresStudents) 
console.log(scoresStudents)