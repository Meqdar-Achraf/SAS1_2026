const prompt = require('prompt-sync')();

let number = prompt("Entrez un nombre : ");
for (let i = 1; i <= number; i++) {
    multiplication = number * i;
    console.log(number + " x " + i + " = " + multiplication);
}
