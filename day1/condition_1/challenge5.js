const prompt = require('prompt-sync')();

let note = prompt("Note : ")

if (note < 10 ) {
    console.log("Note : " + note +
        "\nMention : echec")
} else if (note >= 10 && note <= 11.99) {
    console.log("Note : " + note +
        "\nMention : Passable")
}else if(note >= 12 && note <= 13.99){
    console.log("Note : " + note +
        "\nMention : Assez bien")
} else if (note >= 14 && note <= 15.99) {
    console.log("Note : " + note +
        "\nMention : Bien")
} else if (note >= 16 && note <= 17.99) {
    console.log("Note : " + note +
        "\nMention : Tres bien")
} else {
    console.log("Note : " + note +
        "\nMention : Excellent")
}