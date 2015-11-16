var express = require('express');
var app = express();

app.get('/createuser', function (req, res) {
  res.send('Hello World!-CREANDO USUARIO');
});

app.get('/deleteuser', function (req, res) {
  res.send('Hello World!-BORRANDO USUARIO');
});
app.get('/modifyinguser', function (req, res) {
  res.send('Hello World!-MODIFICANDO USUARIO');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});