const prompt = require('prompt-sync')();
let x1, y1, z1, x2, y2, z2;
let A = [x1, y1, z1]
let B = [x2, y2, z2]
console.log("!! les valeur de la premiere position du drone !!");
x1 = prompt("Entrez la valeur de x1 : ");
y1 = prompt("Entrez la valeur de y1 : ");
z1 = prompt("Entrez la valeur de z1 : ");
console.log("!! les valeur de la deuxieme position du drone !!");
x2 = prompt("Entrez la valeur de x2 : ");
y2 = prompt("Entrez la valeur de y2 : ");
z2 = prompt("Entrez la valeur de z2 : ");


let distance = 0.5 ** (((+x2)-(+x1))**2 + ((+y2)-(+y1))**2 + ((+z2)-(+z1))**2)

console.log("distance : " + distance);

