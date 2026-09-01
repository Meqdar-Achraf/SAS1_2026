prompt = require("prompt-sync")();
let stockage = prompt("Entrez le stockage en gigabytes(Gb) : ");
let Mb = `stockage en megabytes(MB) : ${stockage * 1024} MB`, bytes = `stockage en bytes : ${stockage * (1024 ** 2)} B`;    
console.log("stockage en gigabytes(Gb) : " + stockage + " GB" + "\n" + Mb + "\n" + bytes);
