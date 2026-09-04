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
    chaine == inverse ? console.log(`${chaine} --> palindrome`) : console.log(`${chaine} --> pas palindrome`);
}

let word = prompt("entrez un mots : ");
estPalindrome(word)
