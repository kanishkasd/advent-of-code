const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  const sum = data
    .split(/\s+/)
    .map(Number)
    .reduce((acc, num) => acc + num, 0);

  console.log("Sum : ", sum);
});
