const prompt = require('prompt-sync')();

let nbr1 = prompt("premier nombre : ");
let nbr2 = prompt("deuxiem nombre : ");
let operateur = prompt("choisi un operateur(+ ; - ; * ; /) : ")

switch(operateur){
    case "+":
        resultat = (+nbr1) + (+nbr2)
        console.log("premier nombre : " + nbr1 +
            "\nOperateur : " + operateur + 
            "\ndeuxieme nombre : " + nbr2 +
            "Resultat : " + resultat)
        break;
    case "-":
        resultat = (+nbr1) - (+nbr2)
        console.log("premier nombre : " + nbr1 +
            "\nOperateur : " + operateur + 
            "\ndeuxieme nombre : " + nbr2 +
            "Resultat : " + resultat)
        break;
    case "*":
        resultat = nbr1 * nbr2
        console.log("premier nombre : " + nbr1 +
            "\nOperateur : " + operateur + 
            "\ndeuxieme nombre : " + nbr2 +
            "Resultat : " + resultat)
        break;
    case "/":
        resultat = nbr1 / nbr2
        console.log("premier nombre : " + nbr1 +
            "\nOperateur : " + operateur + 
            "\ndeuxieme nombre : " + nbr2 +
            "Resultat : " + resultat)
        break;
    default:
        console.log("Operateur invalide")

}