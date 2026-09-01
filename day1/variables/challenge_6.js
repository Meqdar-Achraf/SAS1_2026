const prompt = require('prompt-sync')();


let score_1 = prompt("Entrez le score de la partie 1 : ");
let score_2 = prompt("Entrez le score de la partie 2 : "); 
let score_3 = prompt("Entrez le score de la partie 3 : ");
let score_4 = prompt("Entrez le score de la partie 4 : ");

console.log("le score de la partie 1 est : " + score_1 + 
    "\nle score de la partie 2 est : " + score_2 +
    "\nle score de la partie 3 est : " + score_3 +
    "\nle score de la partie 4 est : " + score_4) ;

let total = (score_1 * 1) + (score_2 * 1) + (score_3 * 1) + (score_4 * 1);
let moyenne = (total / 4) * 1;

console.log("le score total est : " + total + "\nla moyenne est : " + moyenne);

