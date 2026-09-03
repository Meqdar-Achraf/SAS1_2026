const prompt = require('prompt-sync')();

const start = 1 , end = 10;

for (let i = 1; i <= end ; i++ ){
    for (let j = 1 ; j <= end ; j++){
        let multiple = i * j;
        console.log(`${i} x ${j} = ${multiple}` );
    }
}

