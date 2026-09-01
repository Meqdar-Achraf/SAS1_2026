const prompt = require("prompt-sync")();

let MAD = prompt("Entrez le montant en MAD : ");
let EUR = MAD / 11;

console.log("le montant en MAD est : " + MAD + "\nle montant en EURO est : " + EUR);