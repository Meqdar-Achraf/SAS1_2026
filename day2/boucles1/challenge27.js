const prompt = require('prompt-sync')();

let i = 1
let user = "Kirito", pass = 12345

while (i <= 3 ){
let username  = prompt("entrez username  : ");
let passwd = prompt("entrez votre password : ")

    if (username != user && passwd != pass  ){

        console.log(`identification incorrect. \n tentatives restes : ${3 - i}`)
        i++     
        i > 3 ? console.log("Compte temporairement bloqué.") : false;
    }else {
        console.log("connexion ruessie . \nbinvenue !!")
        i=4
    }
}


