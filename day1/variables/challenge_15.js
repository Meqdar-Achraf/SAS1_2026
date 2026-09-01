const prompt = require('prompt-sync')();

let prxbiller = prompt("prix du billet : ");
let nbrbillet = prompt("nombre de billet : ");

let prxboisson = prompt("prix du boisson : ");
let nbrboisson = prompt("nombre de boisson : ");

ttlbillet = prxbiller * nbrbillet;
ttlboisson = prxboisson * nbrboisson;
total = ttlbillet + ttlboisson;

console.log("prix billet : " + prxbiller + " MAD" +
    "\nnombre de billet : " + nbrbillet +
    "\n " +
    "\nprix boisson : " + prxboisson + " MAD" +
    "\nnombre de boisson : " + nbrboisson +
    "\n " +
    "\ntotal des billets : " + ttlbillet + " MAD" +
    "\ntotal des boissons : " + ttlboisson + " MAD" +
    "\n " +
    "\ntotal : " + total + " MAD"
    );