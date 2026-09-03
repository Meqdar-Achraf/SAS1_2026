const prompt = require('prompt-sync')();

let number = prompt("entrez un nomber :");
let inverse=0;
console.log(`nombre : ${number}`);
while (number > 0) {
    let chiffre = number % 10
    inverse = inverse * 10 + chiffre
    number = parseInt(number / 10)
}
console.log(`inverse : ${inverse}`);