const fs = require('fs');

function isNiceString(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = string.split('').filter(letter => vowels.includes(letter)).length;
    const badStrings = ['ab', 'cd', 'pq', 'xy'];

    const hasForbidden = badStrings.some(badString => string.includes(badString));

    function hasConsecutiveChars() {
        for (let i = 0; i < string.length - 1; i++) {
                if (string[i] === string[i + 1]) {
                    return true;
                }
            }
        }
    return vowelCount >= 3 && !hasForbidden && hasConsecutiveChars();
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const lines = data.split('\n');
    let niceStrings = 0;

    lines.forEach(line => {
        if (isNiceString(line)) {
            niceStrings++;
        }
    })
    console.log(niceStrings);


})
