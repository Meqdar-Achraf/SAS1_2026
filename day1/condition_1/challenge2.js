const prompt = require('prompt-sync')();

let nbr = prompt("Nombre : ");
if (nbr < 0) {
    console.log("Le nombre est negatif");
} else if (nbr > 0) {
    console.log("Le nombre est positif");
} else {
    console.log("Le nombre est egal a zero");
}
