const fs = require('fs');

function findPath(path) {
    let sum = 0;
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let arr = data.trim();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '(') {
                sum++;
            } else if (arr[i] === ')') {
                sum--;
            }
        }
        console.log(sum);
    })
}
// findPath('./input.txt');



function findIndex(path) {
    let sum = 0;
    let index = 0;
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let arr = data.trim();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '(') {
                sum++;
            } else if (arr[i] === ')') {
                sum--;
            }
            if(sum === -1){
                index = i + 1;
                break;
            }
        }
        console.log(index);
    })

}

findIndex('./input.txt');
