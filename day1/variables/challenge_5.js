const prompt = require('prompt-sync')();

let fname = prompt("vouillez entrer le nom du film : ");
let duree = prompt("vouillez enter la durée du film en minute : ");
let categorie = ["Court métrage", "Film standard", "Film long"];

if (duree <60 ) {
    console.log(`le film ${fname} est : ${categorie[0]}`);
} else if (duree > 60 && duree < 120) {
    console.log(`le film ${fname} est : ${categorie[1]}`);
} else {
    console.log(`le film ${fname} est : ${categorie[2]}`);
}
