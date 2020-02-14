var express = require('express');
var app = express();

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] == "http")
      res.redirect(`https://${req.headers.host}${req.url}`);
  else 
      next(); 
});

app.get('/', function (req, res) {
  var date = new Date();
  res.send('<h1>Hello World! - ' + date.getHours() + ':' + date.getMinutes() + '</h1>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});