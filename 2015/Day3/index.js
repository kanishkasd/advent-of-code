const fs = require('fs');

function countHousesWithPresents(directions) {
    const visitedHouses = new Map();
    let x = 0;
    let y = 0;

    function visitHouse(x, y) {
        const key = x + ',' + y;
        visitedHouses.set(key, (visitedHouses.get(key) || 0) + 1);
    }
    visitHouse(x, y);

    for (let direction of directions) {
        const data = direction.trim();
        switch (data) {
            case '^':
                y++;
                break;
            case 'v':
                y--;
                break;
            case '>':
                x++;
                break;
            case '<':
                x--;
                break;
        }
        visitHouse(x, y);
    }

    return visitedHouses.size;
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const directions = data.trim();
    const housesWithPresents = countHousesWithPresents(directions);
    console.log(housesWithPresents);
})

