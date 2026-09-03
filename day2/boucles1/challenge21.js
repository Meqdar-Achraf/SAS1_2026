const prompt = require('prompt-sync')();

let start = prompt("debut : ");
let end = prompt("Fin : ");
let somme = 0;

for ( let i = start ; i < end ; i++ ){
    // console.log(i)
    let k = 0 ;
    for (j=2 ; j < (i/2) ; j++){
        if (i % j == 0) k++
  
    }
    if (k === 0){ 
        console.log(i); 
        somme+= i
    }
       
}
console.log(`somme : ${somme}`)
