const prompt = require("prompt-sync")();

let MAD = prompt("Entrez le montant en MAD : ");
let EUR = MAD / 11;

const str = `${EUR}`;


const Pidex = str.indexOf(".");
console.log("le montant en MAD est : " + MAD +
     "\nle montant en EURO est : " + str.slice(0, Pidex + 3));