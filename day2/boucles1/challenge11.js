const prompt = require('prompt-sync')();

let num = prompt ("entrez un nombre N : ")
let fct = 1

for (i=0 ; i <num ; i++){
    fct*=(num - i)
}
console.log("N = " + num + 
    "\n " + num + "! = " + fct)