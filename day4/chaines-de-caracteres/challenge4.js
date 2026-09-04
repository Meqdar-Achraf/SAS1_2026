const prompt = require(`prompt-sync`)();

let word = prompt()

function compterVoyelles(chaine){
    let j= 0;
    const voyelles = ["a","e","i","o","y"]
    for (char of chaine){
        for (i = 0 ; i <5 ; i++){
            if (char == voyelles[i]){
                j++
            }
        }
    }
        return j ;
}
console.log(compterVoyelles(word))