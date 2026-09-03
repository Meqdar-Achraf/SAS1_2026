const prompt = require('prompt-sync')();

let start = prompt("debut : ");
let end = prompt("Fin : ");
 
for ( let i = start ; i < end ; i++ ){
    // console.log(i)
    let k = 0 ;
    for (j=2 ; j < (i/2) ; j++){
        if (i % j == 0) k++
  
    }
    k  != 0 ? true :  console.log(i);    
}

