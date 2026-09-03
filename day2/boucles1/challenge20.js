const prompt = require('prompt-sync')();

let number = prompt("entrez un nomber :");
let inverse=0;
let nbr = number;

while (number > 0) {
    let chiffre = number % 10
    inverse = inverse * 10 + chiffre
    number = parseInt(number / 10)
}
nbr == inverse ? console.log(`${nbr} --> palindrome`) : console.log(`${nbr} --> pas palindrome`)

