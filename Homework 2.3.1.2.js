let players = [
  { name: "Player1", scorePoints: 15 },
  { name: "Player2", scorePoints: 20 },
  { name: "Player3", scorePoints: 18 },
  { name: "Player4", scorePoints: 25 }
];

let arrScores = [];
for (index in players) {
  arrScores.push(players[index].scorePoints);
}

let maxIndex = arrScores.indexOf(Math.max(...arrScores));
console.log(`${players[maxIndex].name} has max score`);


let players = [
  { "id": 1, "name": "Ivan", "scorePoints": 4500 },
  { "id": 2, "name": "Petr", "scorePoints": 3600 },
  { "id": 3, "name": "Vadim", "scorePoints": 3433 },
  { "id": 4, "name": "Olga", "scorePoints": 2356 },
  { "id": 5, "name": "Elena", "scorePoints": 4000 },
  { "id": 6, "name": "Alex", "scorePoints": 4500 },
  { "id": 7, "name": "Maria", "scorePoints": 2800 },
  { "id": 8, "name": "Dmitri", "scorePoints": 3200 },
  { "id": 9, "name": "Dmitriy", "scorePoints": -300 },
];

let arrScore = [];
for (let index in players) {
  arrScore.push(players[index].scorePoints);
}

let maxIndex = arrScore.indexOf(Math.max(...arrScore));
console.log(`${players[maxIndex].name} has max score`);
