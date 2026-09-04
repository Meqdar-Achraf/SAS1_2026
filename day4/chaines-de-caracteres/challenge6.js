const prompt = require('prompt-sync')();

function repeterChaine(chaine, fois){
    let repeat="";
    let i = 1;
    while (i <= fois) {
        repeat+=chaine; 
        i++ 
    }
    return repeat
}
let word = prompt("entrez un mots : ")
let nbr = prompt("nombre de fois : ")

console.log(repeterChaine(word , nbr))
