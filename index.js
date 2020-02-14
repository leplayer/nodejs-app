var express = require('express');
var app = express();

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] == "http")
      res.redirect(`https://${req.headers.host}${req.url}`);
  else 
      next(); 
});

app.get('/', function (req, res) {
  var timeInMs = Date.now();
  res.send('Hello World!' + timeInMs);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});