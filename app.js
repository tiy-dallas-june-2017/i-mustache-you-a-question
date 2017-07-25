const express = require('express');
const app = express();
const mustache = require('mustache-express');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

const data = require('./data');
console.log('data', data);




app.get('/questions', function(req, res) {
  res.render('questionpage', data);
});

app.get('/data', function(req, res) {
  res.json(data);
});

app.listen(6785, function() {
  console.log('Perhaps I am listening on port 6785.');
});
