const prompt = require('prompt-sync')();

console.log("1 --> Lundi" +
 "\n2 --> Mardi" +
 "\n3 --> Mercredi" +
 "\n4 --> Jeudi" + 
 "\n5 --> Vendredi" +
 "\n6 --> Samedi" +
 "\n7 --> Dimanche")

let numero = prompt("Numero de jour : ");

switch((+numero)){
    case 1:
        console.log("numero : " + numero +
            "\nJour : Lundi")
        break;
    case 2:
        console.log("numero : " + numero +
            "\nJour : Mardi")
        break;
    case 3:
        console.log("numero : " + numero +
            "\nJour : Mercredi")
        break;
    case 4:
        console.log("numero : " + numero +
            "\nJour : Jeudi")
        break;
    case 5:
        console.log("numero : " + numero +
            "\nJour : Vendredi")
        break;
    case 6:
        console.log("numero : " + numero +
            "\nJour : Samedi")
        break;
    case 7:
        console.log("numero : " + numero +
            "\nJour : Dimanche")
        break;
    default:
        console.log("numero invalide")

}