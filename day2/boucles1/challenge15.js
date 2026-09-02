const prompt = require('prompt-sync')();

let number= prompt("entrez un nombre : ")
let j = 0 ;

console.log("Nombre : " + number +
    "\ndiviseurs : ")
for (i=1 ; i < number ; i++){
    if (number % i == 0){
        j+=i
    }
}
if (j == number){
    console.log(number + " est nombre parfait.")
} else {
    console.log(number +" n'est pas un nombre parfait.")
}