const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end("Hello Web!");
}).listen(8080);

console.log("Listening on port 8080...");
