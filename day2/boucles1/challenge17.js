const prompt = require('prompt-sync')();

let number = prompt("entrez un nomber :");
let i = 0;
console.log(`nombre : ${number}`)
while (number > 0 ){
    number=parseInt(number / 10)
    i++
}
console.log(`nombre de chiffres : ${i}`)