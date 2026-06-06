const http = require("http");

const server = http.createServer(function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome TO HOME</h1></body>");
    res.write("</html>");
    res.end();
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Checkout our products</h1></body>");
    res.write("</html>");
    res.end();
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like/Share/Subscribe/Comment</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
