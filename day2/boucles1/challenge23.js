const prompt = require('prompt-sync')();

let numb = prompt("entrez un nomber :");
let somme = 0, fst = 0 ,scd = 1 ;

console.log(`${fst} \n${scd}`)
for (i = 3 ; i <= numb ; i++){
    somme = fst + scd
    fst = scd
    scd = somme  
    console.log(somme)
}
