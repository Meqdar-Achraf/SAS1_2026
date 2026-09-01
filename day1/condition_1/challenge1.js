const prompt = require("prompt-sync")();

let age = prompt("What is your age?");
if (age >= 18) {
  console.log("Accès autorisé ") ;
} else {
  console.log("Accès refusé");
}