var express = require('express');
var app = express();

app.get('/api/test', function (req, res) {
	res.set('Content-Type', 'text/plain');
	var p = req.query;
	console.log(p);
	res.json(p);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

