const prompt = require('prompt-sync')();

console.log("vouillez choisi une option" +
    "\n1 --> Aficher le profile " +
    "\n2 --> Aficher les parametres " +
    "\n4 --> Aficher les notifications " +
    "\n4 --> se deconnecter ")

let choix = prompt("entrez votre choix : ")

switch ((+choix)){
    case 1:
        console.log("choix : " + choix +
            "\nOverture de profile...")
        break;
    case 2:
        console.log("choix : " + choix +
            "\nOverture des parametres...")
        break;
    case 3:
         console.log("choix : " + choix +
            "\nOverture des notifications...")
        break;
    case 4:
        console.log("choix : " + choix +
            "\nse deconnecter...")
        break;
    default:
        console.log("Choix invalide.")
}