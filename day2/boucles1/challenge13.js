const prompt = require('prompt-sync')();

let number= prompt("entrez un nombre : ")
let j = 0 ;
for (i=1 ; i <= number ; i++){
    if (number % i == 0){ 
        j++
    }
}
if (j <= 2){
            console.log(number +" est un nombre premier.")
}else {
            console.log(number +" n'est pas un nombre premier")
}
