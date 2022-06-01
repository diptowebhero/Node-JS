const http = require("http");
const fs = require("fs");
const PORT = 5000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleRouting = (statusCode, filePath) => {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRouting(200,'./views/index.html')
  } else if (req.url === "/about") {
    handleRouting(200,'./views/about.html')
  } else if (req.url === "/contact") {
    handleRouting(200,'./views/contact.html')
  } else {
    handleRouting(401,'./views/error.html')
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server Running at http://${hostName}:${PORT}`);
});
