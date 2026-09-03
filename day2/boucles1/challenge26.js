const prompt = require('prompt-sync')();

let prix = Number(prompt("entrez le prix du produit  :"));
let i = 0, pluscher = 0, total = 0;
let moincher = prix ;

while ( prix != 0){
    i++
    total += prix
    // prixmoyenne = total / i
    pluscher < prix ? pluscher = prix : false;
   
    moincher > prix ? moincher = prix : false ;    
    prix = Number(prompt("entrez le prix du produit  :"));
    
}
let prixmoyenne = total / i;

console.log(`nombre de produits : ${i} \nTotal : ${total} \nprix moyenne : ${prixmoyenne}
    \nPlus cher : ${pluscher} \nmoins cher : ${moincher}`)