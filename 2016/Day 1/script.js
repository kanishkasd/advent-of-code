const fs = require("fs");

findDirection = (input) => {
  const directions = [
    [0, 1], // north
    [1, 0], // east
    [0, -1], // south
    [-1, 0], // west
  ];

  let x = 0,
    y = 0; // current position
  let direction = 0; // facing to the north

  const steps = input.trim().split(/\s*,\s*/);

  for (let step of steps) {
    let turn = step[0]; // which side to turn

    let blocks = parseInt(step.slice(1), 10);

    if (turn === "R") {
      direction = (direction + 1) % 4; // equivalent to turning east (right) in the directions array
    } else {
      direction = (direction + 3) % 4; // equivalent to turning west (left ) in the directions array
    }

    x += directions[direction][0] * blocks;
    y += directions[direction][1] * blocks;
  }
  const distance = Math.abs(x) + Math.abs(y);
  console.log("Distance : ", distance);
};

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  findDirection(data);
});
