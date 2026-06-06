const http = require("http");

const server = http.createServer(function requestListener(req, res) {
  console.log(req);
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
