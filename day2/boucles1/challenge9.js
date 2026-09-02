const prompt = require('prompt-sync')();

let base=prompt("Entrez un nombre (base) : ");
let exposant=prompt("Entrez l'exposant : ");
let puissance = base, i=1 ;

while (i<exposant){
    puissance *=base
    i++
}
console.log("base : " + base +
    "\nexposant : " + exposant +
    "\nresultat : "+ puissance )
