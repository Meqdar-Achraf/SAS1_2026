const prompt = require("prompt-sync")();


let pseudo = prompt("Entrez votre pseudo :"), niveau = prompt("Entrez votre niveau :"),
 score = prompt("Entrez votre score :"), age = prompt("Entrez votre âge :"),
  pays = prompt("Entrez votre pays :")

console.log("Pseudo : " + pseudo + "\nNiveau : " + niveau +
     "\nScore : " + score + "\nAge : " + age + "\nPays : " + pays);