var express = require('express');

var app = express();
var contacts = require('./api/contacts');
app.use(express.static('public'));

app.get('/helloworld', function(req,res){
  res.send('Hello World!');
});

app.get('/api/contacts', function(req, res) {
  res.json(contacts.findAll());
});

app.get('/api/contacts/:id', function(req, res) {
  res.json(contacts.find(req.params.id));
});

app.listen(8080);

