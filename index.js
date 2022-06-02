const http = require("http");
const fs = require("fs");
const PORT = 5000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method.toLowerCase();
  if (method === "get" && url === "/") {
    const indexFile = fs.readFileSync("./views/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexFile);
    res.end();
  } else if (method === "get" && url === "/about") {
    const indexFile = fs.readFileSync("./views/about.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexFile);
    res.end();
  } else if (method === "get" && url === "/contact") {
    const indexFile = fs.readFileSync("./views/contact.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexFile);
    res.end();
  } else {
    const indexFile = fs.readFileSync("./views/error.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexFile);
    res.end();
  }
});
server.listen(PORT, hostName, () => {
  console.log(`Server running successfully at http://${hostName}:${PORT}`);
});
