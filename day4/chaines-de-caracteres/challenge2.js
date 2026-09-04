const prompt = require('prompt-sync')();

function compterLettre(chaine, lettre){
    let occurence = 0;
    
    for (str of chaine){
        if (str === lettre) occurence ++;
    }
    return occurence ;
}
let word = prompt("entrez un mots : ");
let lett = prompt("entrez un lettre : ")

console.log(`le nombre d'occurence de "${lett}" dans ${word} : ${compterLettre(word, lett)}`)