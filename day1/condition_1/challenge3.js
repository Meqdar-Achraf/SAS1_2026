const prompt = require('prompt-sync')();
let note = prompt("Note : ");
if (note >= 10) {
    console.log("Note : " + note +
        "\nresultat : Admis");
} else {
    console.log("Note : " + note +
        "\nresultat : Non admis");
} 