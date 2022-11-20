const fs = require('fs');
const http = require('http');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
// console.log(argv);
const port = argv['port'];

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homeContent);
  } else if (req.url === "/project") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(projectContent);
  } else if (req.url === "/registration") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(registrationContent);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});
console.log(`Server is running on port ${port}`);
server.listen(port);
