const crypto = require('crypto-js');

let secretKey = 'bgvyzdsv'
let number = 1;

while(true){
    let input = secretKey + number;

    let hash = crypto.MD5(input).toString(crypto.enc.Hex);

    if(hash.startsWith('000000')){
        console.log(number);
        break;
    }
    number++
}
