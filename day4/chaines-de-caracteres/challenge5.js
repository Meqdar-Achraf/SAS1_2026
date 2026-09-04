const prompt = require('prompt-sync')();

function estPalindrome(chaine){
        let i = 0, j = 0;
    const reverse = []
    for (let str of chaine){
        i++
        while (j < i){
            reverse.unshift(str)
            j++
        }
    }
    let inverse=reverse.join("")
    console.log(chaine == inverse)
}

let word = prompt("entrez un mots : ");
estPalindrome(word)
