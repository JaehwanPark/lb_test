var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

app.get('/', function (req, res) {
  res.send('Hello /');
});

app.get('/world.html', function (req, res) {
  res.send('Hello World');
});

server.listen(8000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
