const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const navbar = `<nav style="background-color: black; color: white; padding: 15px;">
      <a href="/Home" style="color: white; text-decoration: none; margin-right: 20px;">Home</a>
      <a href="/Men" style="color: white; text-decoration: none; margin-right: 20px;">Men</a>
      <a href="/Women" style="color: white; text-decoration: none; margin-right: 20px;">Women</a>
      <a href="/Kids" style="color: white; text-decoration: none; margin-right: 20px;">Kids</a>
      <a href="/Cart" style="color: white; text-decoration: none; margin-right: 20px;">Cart</a>
    </nav>`;

  if (req.url === "/") {
    res.write(navbar);
    res.end("<h1>Welcome TO HOME PAGE  </h1>");
  } else if (req.url === "/Men") {
    res.write(navbar);
    res.end("<h1>Welcome TO MEN SECTION</h1>");
  } else if (req.url === "/Women") {
    res.write(navbar);
    res.end("<h1>Welcome TO WOMEN SECTION  </h1>");
  } else if (req.url === "/Kids") {
    res.write(navbar);
    res.end("<h1>Welcome TO KIDS SECTION</h1>");
  } else if (req.url === "/Cart") {
    res.write(navbar);
    res.end("<h1>Welcome TO MY CART</h1>");
  } else {
    res.write(navbar);
    res.end("<h1>404 Page Not Found</h1>");
  }
});
const PORT = 3008;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
