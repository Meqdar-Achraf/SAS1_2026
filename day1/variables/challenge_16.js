const prompt = require('prompt-sync')();

let duree = prompt("duree en secondes : ");

heures = duree / 3600;

minutes = (duree % 3600) / 60;

secondes = duree % 60;

console.log("duree : " + duree + " secondes" +
    "\n " +
    "\nheures : " + ~~heures +
    "\nminutes : " + ~~minutes +
    "\nsecondes : " + ~~secondes
    );