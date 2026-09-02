const prompt = require('prompt-sync')();
const code = 43
let secret= prompt("vouillez entrer le code secret : ")
while (secret != code ){
    if (secret > code ){
        console.log("tentative : " + secret +
            "\n TROP GRAND!!"
        )
    }else {
        console.log("tentative : " + secret +
            "\nTROP PETIT!!"
        )
    }
    secret=prompt("vouillez entrer le code secret : ")
}
console.log("tentative " + secret +
"\nBRAVO !!")