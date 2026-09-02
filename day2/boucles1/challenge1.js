const prompt = require('prompt-sync')();

let nbr = prompt("Entrez le nombre de participants : ");

for (let i = 1; i <= nbr; i++) {
    console.log("Participant " + i);
}
