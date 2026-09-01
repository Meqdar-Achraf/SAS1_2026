const prompt = require("prompt-sync")();

let nbrenemie = prompt("nombre d'ennemis elimines : ");
let nbrmission = prompt("nombre de missions terminees : ");
let nbrboss = prompt("nombre de boss vaincus : ");
 
let score = nbrenemie * 100 + nbrmission * 50 + nbrboss * 200;

console.log("enemis : " + nbrenemie +
    "\nmissions : " + nbrmission +
    "\nboss : " + nbrboss +
    "\n " +
    "\nscore total : " + score)

