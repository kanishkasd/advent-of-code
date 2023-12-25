const fs = require('fs');

function countHouesesWithPresents(directions) {
    const visitedHouses = new Map();

    let santaX = 0;
    let santaY = 0;
    let roboX = 0;
    let roboY = 0;
    let isSantaTurn = true;

    function visitHouse(x, y) {
        const key = x + ',' + y;
        visitedHouses.set(key, (visitedHouses.get(key) || 0) + 1);
    }
    visitHouse(santaX, santaY);
    visitHouse(roboX, roboY);

    for (let direction of directions) {
        if (isSantaTurn) {
            switch (direction) {
                case '^':
                    santaY++;
                    break;
                case 'v':
                    santaY--;
                    break;
                case '>':
                    santaX++;
                    break;
                case '<':
                    santaX--;
                    break;
            }
            visitHouse(santaX, santaY);
        }
        else {
            switch (direction) {
                case '^':
                    roboY++;
                    break;
                case 'v':
                    roboY--;
                    break;
                case '>':
                    roboX++;
                    break;
                case '<':
                    roboX--;
                    break;
            }
            visitHouse(roboX, roboY);
        }
        isSantaTurn = !isSantaTurn;
    }
    return visitedHouses.size;
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const directions = data.trim();
    const housesWithPresents = countHouesesWithPresents(directions);
    console.log(housesWithPresents);
})
