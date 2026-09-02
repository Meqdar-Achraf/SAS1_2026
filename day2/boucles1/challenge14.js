const prompt = require('prompt-sync')();

let numb=prompt("vouilez entrer un nomber :");
let isomme=0 , psomme = 0;
for (i=1 ; i<=numb ; i++){
    if (i % 2 == 0){
        psomme+=i
    }else{
        isomme+=i
    }
}
console.log("la somme des nombres paires : " +psomme +
"\nla somme des nombres impaires : " + isomme
);
