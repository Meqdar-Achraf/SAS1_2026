const prompt = require('prompt-sync')();

let numberN = prompt("Entrez un nombre N: ");
let numberX = prompt("Entrez un nombre X: ");
let multiple = null;

for (let i =1 ; multiple < numberN ; i++) {
    multiple = numberX * i
    console.log(multiple)

}
