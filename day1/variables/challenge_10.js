const prompt = require('prompt-sync')();
let rayon = prompt("Entrez le rayon du reservoir : ");
let hauteur = prompt("Entrez la hauteur du reservoir : ");
let pi = 3.14159;


let volume = pi * ((+rayon) ** 2) * (+hauteur);
console.log("rayon : " + rayon + " m" +
    "\nhauteur : " + hauteur + " m" +
    "\nvolume : " + volume + " m³");
