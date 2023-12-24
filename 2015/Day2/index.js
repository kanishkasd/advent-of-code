const fs = require('fs');


function calculateWrappingPaper(boxes){
    let totalSquareFeet = 0;

    for(let i = 0; i < boxes.length; i++){
        const [l, w,  h] = boxes[i];
        const surfaceArea = 2*l*w + 2*w*h + 2*h*l;
        const smallestSide = Math.min(l*w, w*h, h*l);
        const totalArea = surfaceArea + smallestSide;
        totalSquareFeet += totalArea;
    }
    return totalSquareFeet;
}


function calculateRibbon(boxes){
    let totalRibbon = 0;

    for(let i = 0; i < boxes.length; i++){
        const [l, w,  h] = boxes[i];
        const smallestPerimeter = Math.min(2*l+2*w, 2*w+2*h, 2*h+2*l);
        const volume = l*w*h;
        const totalRibbonNeeded = smallestPerimeter + volume;
        totalRibbon += totalRibbonNeeded;
    }
    return totalRibbon;
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    
    const lines = data.trim().split('\n');
    const presents = lines.map((line => line.split('x').map(Number)));

    const totalSquareFeet = calculateWrappingPaper(presents);
    const totalRibbon = calculateRibbon(presents);
    console.log(totalSquareFeet);
    console.log(totalRibbon);
})


