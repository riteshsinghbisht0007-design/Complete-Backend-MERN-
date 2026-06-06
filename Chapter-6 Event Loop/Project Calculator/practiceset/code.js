// RUN & OBSERVE
// BLOCKING VS ASYNC

const http = require("http");

const server = http.createServer((req, res) => {
  const fs = require("fs");
  console.log("1. Start of script");
  // Synchronous (blocking) operation
  console.log("2. Reading file synchronously");
  const dataSync = fs.readFileSync("user-details.txt", "utf8");
  console.log("3. Synchronous read complete");
  // Asynchronous (non-blocking) operation
  console.log("4. Reading file asynchronously");
  fs.readFile("user-details.txt", "utf8", (err, dataAsync) => {
    if (err) throw err;
    console.log("6. Asynchronous read complete");
  });
  console.log("5. End of script");
});

const PORT = 3009;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// Explanation of the output:
// When you run this code, you will see the following output in the console:

// 1. Start of script
// 2. Reading file synchronously
// 3. Synchronous read complete
// 4. Reading file asynchronously
// 5. End of script
// 6. Asynchronous read complete
