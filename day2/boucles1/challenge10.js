const prompt = require('prompt-sync')();


let number = prompt("saisi : ")
let somme = 0, i=0 ;

while (number != 0 ){
//    console,log("saisi : " + number)
    somme += (+number)
    i++
    number=prompt("saisi : ")
}
console.log("Nombres des valeurs : " + i +
    "\nsomme : " + somme
)
