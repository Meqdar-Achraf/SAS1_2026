const prompt = require('prompt-sync')();
let montant = prompt ("montant de la commande : ");
let lvr = 40;

if (montant >= 500) {
    console.log("Montant de la commande : " + montant + " DH" +
        "\nlivraison : Gratuit. " +
        "\ntottal a payer : " + montant + " DH")    
} else {
    total = (+montant) + (+lvr)
        console.log("Montant de la commande : " + montant + " DH" +
        "\nlivraison : " + lvr + " DH" +
        "\ntottal a payer : " + total + " DH")    
}