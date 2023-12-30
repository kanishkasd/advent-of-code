const fs = require('fs');

function isNiceString(string) {
    let hasPairTwice = false;
    let hasRepeatingLetter = false;

    // Check for pairs that appear at least twice without overlapping
    const pairs = {};
    for (let i = 0; i < string.length - 1; i++) {
        const pair = string.substr(i, 2);
        if (pairs[pair] !== undefined) {
            if (i - pairs[pair] > 1) {
                hasPairTwice = true;
            }
        } else {
            pairs[pair] = i;
        }
    }

    // Check for a letter that repeats with exactly one letter between them
    for (let i = 0; i < string.length - 2; i++) {
        if (string[i] === string[i + 2]) {
            hasRepeatingLetter = true;
        }
    }

    return hasPairTwice && hasRepeatingLetter;
}

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split('\n');
    let niceCount = 0;

    lines.forEach(line => {
        if (isNiceString(line.trim())) {
            niceCount++;
        }
    });

    console.log('Number of nice strings:', niceCount);
});
