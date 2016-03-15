var express = require('express');

var app = express();
var contacts = require('./api/contacts');
// add parser
var bodyParser = require('body-parser');

//app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/helloworld', function(req,res){
  res.send('Hello World!');
});

app.get('/api/contacts', function(req, res) {
  contacts.findAll(function(err,docs){
    // osetreni chyb stavu
    if (err){
      res.sendStatus(500);

    }else if(!docs){
      res.sendStatus(404);
    }
    else {
      res.json(docs);
    }

  });
});

app.get('/api/contacts/:id', function(req, res) {
  contacts.find(req.params.id, function(err, doc) {
    if (err) {
      res.sendStatus(500);
    }
    else if (!doc) {
      res.sendStatus(404);
    }
    else {
      res.json(doc);
    }
  });
});

app.post('/api/contacts/:id',function(req, res){
  var contact = req.body;
  contacts.update(req.params.id, contact, function(err, cnt){
  if (err){
    res.sendStatus(500);
  }else if(cnt == 0){
    res.sendStatus(404);
  } else{
    res.sendStatus(204);
  }
  });

});
/// pro mazani

app.delete('api/contacts/:id', function(req, res){
  contacts.delete(req.params.id, function(err, cnt){
  if (err){
    res.sendStatus(500);
  }else if(cnt == 0){
    res.sendStatus(404);
  } else{
    res.sendStatus(204);
  }
});

});



app.use(express.static('public'));


app.listen(8080, function () {
 console.log('Example app listening on port 8080!');
});

