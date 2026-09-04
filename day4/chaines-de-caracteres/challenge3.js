const prompt = require('prompt-sync')();

function inverserChaine(chaine){
    let i = 0, j = 0;
    const inverse = []
    for (let str of chaine){
        i++
        while (j < i){
            inverse.unshift(str)
            j++
        }
    }
    return inverse.join("")
}
let word = prompt("vouillez entrer une chaine de caracters : ");
console.log(inverserChaine(word))