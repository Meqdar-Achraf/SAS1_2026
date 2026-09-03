const prompt = require('prompt-sync')();

let nombre = Number(prompt("entrez un nombre  :"));
let i = 0, plusgrand = 0, somme = 0, positive = 0, nigative = 0;
let pluspetit = nombre ;

while ( nombre != 0){
    i++
    somme += nombre
    // nombremoyenne = somme / i
    plusgrand < nombre ? plusgrand = nombre : false;
    pluspetit > nombre ? pluspetit = nombre : false ;    
    nombre < 0 ? nigative++ : positive++ ;
    nombre = Number(prompt("entrez un nombre  :"));
    
}
let nombremoyenne = somme / i;

console.log(`nombre des valeurs : ${i} \nsomme : ${somme} \nmoyenne : ${nombremoyenne}
    \nPlus grand : ${plusgrand} \nplus petit : ${pluspetit} 
    \nnombre des valeurs positives : ${positive} \nnombre des valeurs nigatives ${nigative}`)