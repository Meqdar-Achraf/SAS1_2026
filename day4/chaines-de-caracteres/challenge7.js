const prompt = require('prompt-sync')();

function remplacerCaractere(chaine, ancien, nouveau){
    let newchaine = "";
    for(let i=0 ; i < chaine.length ; i++ ){
        switch(chaine[i]){
            case ancien:
                newchaine+=nouveau
                break;
            default :
                newchaine+=chaine[i]

        }
    }
    return newchaine
}

let word = prompt("entrez un mots : ")
let anclettre = prompt("ancienne lettre : ")
let newlettre = prompt("nouveau lettre :")

console.log(remplacerCaractere(word, anclettre,newlettre))