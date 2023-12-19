
const fs = require('fs');


function calculateSum(filePath) {
    let sum = 0;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return err;
        }

        const lines = data.trim().split('\n');

        const values = lines.map((line) => {
            const numbers = line.match(/\d/g);

            let first = numbers[0];
            let last = numbers[numbers.length - 1];

            return Number(first + last);
        });
        const total = values.reduce((value, sum) => value + sum);
        console.log(total);
    })
}


calculateSum('./input.txt');
