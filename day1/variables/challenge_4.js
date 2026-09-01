prompt = require("prompt-sync")();

let distant = prompt("Entrez la distance parcourue en Km : ");
let littre = prompt("Entrez le carburant consommé en L : ");
let consommation = `consommation : ${(littre / distant) * 100} L/100Km` ;

const strconsmation = `${consommation}`;
const Pidex = strconsmation.indexOf(".");
console.log ("distance parcourue : " + distant + " Km " + 
    "\ncarburant consommé : " + littre + " L " + 
    "\n" + strconsmation.slice(0, Pidex + 3)  ) ;
