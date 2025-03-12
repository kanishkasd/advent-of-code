const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const changes = data.trim().split(/\s+/).map(Number);

  let frequency = 0;
  const seenFrequencies = new Set([0]); // Track visited frequencies
  let index = 0;

  while (true) {
    frequency += changes[index % changes.length]; // Apply frequency change
    if (seenFrequencies.has(frequency)) {
      console.log("First frequency reached twice:", frequency);
      break;
    }
    seenFrequencies.add(frequency);
    index++;
  }
});
