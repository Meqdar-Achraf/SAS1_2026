const prompt = require('prompt-sync')();

let code = prompt("Entrez un code de quatre chiffres : ");

console.log("premier chiffre : " + code[4%4] +
    "\ndeuxieme chiffre : " + code[4/4] +
    "\ntroisieme chiffre : " + code[4/2] +
    "\nquatrieme chiffre : " + code[12/4]);
    