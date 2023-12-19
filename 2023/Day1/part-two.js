const fs = require('fs');

function calculateSum(filePath){

    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            return err;
        }
        const lines = data.trim().split('\n');
        console.log(lines);
    })
}


calculateSum('./file.txt');
