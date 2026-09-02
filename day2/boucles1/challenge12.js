const prompt = require('prompt-sync')();

let number= prompt("entrez un nombre : ")
let j = 0 ;
console.log("Nombre : " + number +
    "\ndiviseurs : ")
for (i=1 ; i <= number ; i++){
    if (number % i == 0){
        console.log(i)
        j++
    }
}
console.log("nombre de diviseurs : " + j)