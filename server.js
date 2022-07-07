var http = require('http');

var server = http.createServer((req, res) => {
  //console.log(req);
  res.setHeader('Content-Type', 'text/html');

  res.write('<head>The Place where stuff is!</head>');
  res.write('<p>hello people!</p>');
  res.write('<p>hello again people!</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on poert 3000');
});
