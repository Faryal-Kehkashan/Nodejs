const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  // First way/method to read & write data

  //   fs.readFile("input.txt", function (err, data) {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });

  // Second way/method to read & write data

  // rstream.on("data", (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("Sorry! File not found.");
  // });

  // Third way/method to read & write data

  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
