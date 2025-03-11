const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (data, err) => {
  if (err) {
    console.log(err);
  }
});
