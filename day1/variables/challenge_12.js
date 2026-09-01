const prompt = require('prompt-sync')();

let code = prompt("Entrez un code de quatre chiffres : ");

console.log("premier chiffre : " + code[0] +
    "\ndeuxieme chiffre : " + code[1] +
    "\ntroisieme chiffre : " + code[2] +
    "\nquatrieme chiffre : " + code[3]);