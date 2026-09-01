const prompt = require('prompt-sync')();

let scoreP1 = prompt("Entrez le score du joueur A : ");
let scoreP2 = prompt("Entrez le score du joueur B : ");
let score3 = scoreP2
scoreP2 =scoreP1
scoreP1 = score3

console.log("joueur A : " + scoreP1 +
    "\njoueur B : " + scoreP2);
