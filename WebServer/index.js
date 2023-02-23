const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileAsync(`${__dirname}/UserAPI/UserAPI.json`, "utf-8");
  const objdata = JSON.parse(data);
  // console.log(objdata);

  if (req.url == "/") {
    res.end("Hello from home page");
  } else if (req.url == "/about") {
    res.end("Hello from about page");
  } else if (req.url == "/contact") {
    res.end("Hello from contact page");
  } else if (req.url == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objdata);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<center><h1>404! Page not found.</h1></center>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no # 8000");
});
