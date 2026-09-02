const prompt = require('prompt-sync')();

let somme = 0;
let number = prompt("Entrez un nombre : ");
number = parseInt(number);
for (let i = 1; i <= number; i++) {
    somme += i;
    console.log(somme);    
}
