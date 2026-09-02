const prompt = require('prompt-sync')();

let pnumber = prompt("Entrez un nombre : ");

for (let i = 1; i <= pnumber; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}