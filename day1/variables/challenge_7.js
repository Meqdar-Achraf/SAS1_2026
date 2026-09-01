
const prompt = require("prompt-sync")();

let noteCC = prompt("entrez la note du controle continu : ");
let noteprojet = prompt("entrez la note du projet : ");
let noteexamen = prompt("entrez la note de l'examen : ");

notefinale = (((noteCC * 2) * 1) + ((noteprojet * 3) * 1) + ((noteexamen * 5) * 1)) / 10;
console.log("la note du controle continu est : " + noteCC + 
    "\nla note du projet est : " + noteprojet +
    "\nla note de l'examen est : " + noteexamen +
    "\nla note finale est : " + notefinale);
