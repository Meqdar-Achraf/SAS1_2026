const prompt = require('prompt-sync')();

let number = prompt("entrez un nomber :");
let triangle = 0;

for (i=1 ; i<= number ; i++ ){
    triangle = triangle * 10 + i
    console.log(triangle)
}
