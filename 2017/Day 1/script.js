const fs = require("fs");

const calculateSum = (data) => {
  const dataArray = data.split("");

  const repeatedDigits = dataArray.filter(
    (num, index, arr) =>
      num === arr[index + 1] || (index === arr.length - 1 && num === arr[0])
  );

  const repeatedDigitsNums = repeatedDigits.map(Number);

  const sum = repeatedDigitsNums.reduce((acc, num) => acc + num, 0);
  console.log(sum);
};

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  calculateSum(data);
});
