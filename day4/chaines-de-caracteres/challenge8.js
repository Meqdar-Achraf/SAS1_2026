const prompt = require('prompt-sync')();

function extraireChaine(chaine, debut, fin){
    let extract="";
    for(let i=debut;i < fin ; i++){
        extract +=chaine[i]
    }
    return(extract)
}
let word = prompt("entrez un mots : ")
let start = prompt("entrez la debut  : ")
let end = prompt("entrez la fin  ")

console.log(extraireChaine(word, start, end))