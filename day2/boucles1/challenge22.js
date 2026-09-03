const prompt = require('prompt-sync')();

let number = prompt("entrez un nomber :");

for (i=1 ; i <= number ; i++){
    let k = 0
    for (j = 1 ; j <= (i/2) ; j++){
        if (i % j === 0) k+=j
    }
    if (k === i) console.log(i)
}
