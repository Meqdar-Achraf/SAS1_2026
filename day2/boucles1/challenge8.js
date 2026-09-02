const prompt = require('prompt-sync')();

let score= 100;
let mission = prompt("entrez le nomber des missions terminees : ")
i = 1
console.log("nombre de mission : " + mission)
while (i <= mission){
    console.log("mission " + i +" --> score " + score)
    score +=100
    i++
}