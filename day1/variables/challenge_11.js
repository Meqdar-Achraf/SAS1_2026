const prompt = require('prompt-sync')();
 let longueur = prompt("Entrez la longueur du rectangle : ");
 let largeur = prompt("Entrez la largeur du rectangle : ");


let surface = longueur * largeur;
let perimetre = 2 * ((+longueur) + (+largeur));

console.log("longueur : " + longueur + " m" +
    "\nlargeur : " + largeur + " m" +
    "\nsurface : " + surface + " m²" +
    "\npérimètre : " + perimetre + " m");