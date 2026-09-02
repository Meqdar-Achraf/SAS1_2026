const prompt = require('prompt-sync')();

let depart = prompt("Entrez le nembre du depart : ")
while (depart >= 0) {
    console.log(depart)
    depart -= 1
}