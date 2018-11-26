const http = require('http');
const port = 3000;

const meaninglessIteration = (el) => {
    let el = 1;
    for (let i = 0; i < 10000; i++) {
        for (let n = 0; n < 10000; n++) {
            el+= i;
        }
    }
    return el;
}

const requestHandler = (request, response) => {
    meaninglessIteration(i); // blocking operation
    response.end('ok');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) return console.log(err);
});