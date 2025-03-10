const fs = require("fs");

const calculateSum = (data) => {
  const dataArray = data.split("");

  const repeatedDigits = dataArray.filter(
    (num, index, arr) =>
      num === arr[index + 1] || (index === arr.length - 1 && num === arr[0])
  );

  const repeatedDigitsNums = repeatedDigits.map(Number);

  const sum = repeatedDigitsNums.reduce((acc, num) => acc + num, 0);
  // console.log(sum);
};

///////////////////////////////////// 2nd problem //////////////////////////////////

const matchingNumberSum = (data) => {
  const dataArray = data.split("").map(Number);

  const halfLength = dataArray.length / 2;

  const matchingNum = dataArray.filter((num, index, arr) => {
    const nextIndex = (index + halfLength) % arr.length;
    return num === arr[nextIndex];
  });

  const sumOfMatchingNums = matchingNum.reduce((acc, num) => acc + num, 0);
  console.log(sumOfMatchingNums);
};

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  matchingNumberSum(data);
});
