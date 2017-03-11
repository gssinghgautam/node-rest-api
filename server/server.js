var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {config} = require('./db/mongoose');
var Todo = require('./model/todo');
var User = require('./model/user');

var app = express();

app.use(bodyParser.json({
  limit : config.bodyLimit
}));

app.post('/todos', (req, res) => {
  var newTodo = new Todo({
    text : req.body.text
  });

  newTodo.save()
  .then((doc) => {
    res.send({
      error : false,
      message : 'Todo saved successfully',
      data : doc
    })
  }, (e) => {
    res.send(e)
  })
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
