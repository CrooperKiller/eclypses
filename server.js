var http = require('http');
import http from 'http';
var fs = require('fs');

var server = http.createServer((req, res) => {
  //console.log(req);
  res.setHeader('Content-Type', 'text/html');

  fs.readFlie('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      req.readableEnded();
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on poert 3000');
});
