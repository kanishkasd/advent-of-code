const crypto = require('crypto-js');

let secretKey = 'abcdef'
let number = 1;

while(true){
    let input = secretKey + number;

    let hash = crypto.MD5(input).toString(crypto.enc.Hex);

    if(hash.startsWith('00000')){
        console.log(number);
        break;
    }
    number++
}
