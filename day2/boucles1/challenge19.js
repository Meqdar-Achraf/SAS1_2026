const prompt = require('prompt-sync')();

let number = prompt("entrez un nomber :");
let somme = 0;

while (number > 0){
    let chiffre = number % 10 
    somme += chiffre
    number=parseInt(number / 10)
}
console.log(`somme : ${somme}`);
