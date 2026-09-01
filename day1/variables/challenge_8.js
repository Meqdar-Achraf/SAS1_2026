const prompt = require('prompt-sync')();

let tension = prompt("Entrez la tension en volts (V) : ");
let intensite = prompt("Entrez l'intensite en amperes (A) : ");
let temps = prompt("Entrez le temps en heures (h) : ");

energie = (tension * 1) * (intensite * 1) * (temps * 1);

console.log("la tension est : " + tension + " V" +
    "\nl'intensite est : " + intensite + " A" +
    "\nle temps est : " + temps + " h" +
    "\nl'energie consommee est : " + energie + " Wh");