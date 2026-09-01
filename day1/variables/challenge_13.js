const prompt = require("prompt-sync")();
let nbr =  prompt("Entrez un nombre entre 0 et 255 : ");
let binaire = []
r1 = nbr - 128
if (r1 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r1
}
r2 = nbr - 64
if (r2 < 0) {
    binaire.push(0); 
    
} else {
    binaire.push(1);
    nbr = r2
}
r3 = nbr - 32
if (r3 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r3
}
r4 = nbr - 16
if (r4 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r4
} 
r5 = nbr - 8
if (r5 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r5
}
r6 = nbr - 4
if (r6 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r6
}
r7 = nbr - 2
if (r7 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r7
}
r8 = nbr - 1
if (r8 < 0) {
    binaire.push(0);
} else {
    binaire.push(1);
    nbr = r8
}
console.log(binaire.join(""));