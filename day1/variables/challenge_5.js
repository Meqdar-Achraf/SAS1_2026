const prompt = require('prompt-sync')();

let duree = prompt("vouillez enter la durée du film en minute : ");
let categorie = ["Court métrage", "Film standard", "Film long"];

if (duree <60 ) {
    console.log("duree : " + duree + " minute" + 
        "\ncategorie : " + categorie[0]);
} else if (duree > 60 && duree < 120) {
    console.log("   duree : " + duree + " minute" + 
        "\ncategorie : " + categorie[1]);
} else {
    console.log("duree : " + duree + " minute" + 
        "\ncategorie : " + categorie[2]);
}
