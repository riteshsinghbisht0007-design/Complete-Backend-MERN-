// RUN & OBSERVE
// EVENT LOOP IN ACTION
const fs = require("fs");
console.log("1. Start of script");
// Microtask queue (Promise)
Promise.resolve().then(() => console.log("2. Promise resolved"));
// Timer queue
setTimeout(() => console.log("3. Timer 1"), 0);
// I/O queue
const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("4. I/O operation"));
// Check queue
setImmediate(() => console.log("5. Immediate 1"));

// Close queue
process.on("exit", (code) => console.log("6. Exit event"));

console.log("7. End of script");

// Explanation of the output:
// When you run this code, you will see the following output in the console:-

// 1. Start of script
// 7. End of script
// 2. Promise resolved
// 3. Timer 1
// 5. Immediate 1
// 4. I/O operation
// 6. Exit event
