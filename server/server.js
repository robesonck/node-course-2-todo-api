var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  }).save().then((todo) => {
    console.log('Saved');
    console.log(todo);
    res.send(todo)
  }, (e) => {
    res.status(400).send(e);
    console.log('Unable to save todo', e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});


// let newUser = new User({
//   email: 'rsonckjr@gmail.com'
// }).save().then((user) =>{
//   console.log(user);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// var newTodo = new Todo({
//   text:'Read a book    '
// });
//
// newTodo.save().then((todo) => {
//   console.log('Saved');
//   console.log(todo);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

app.listen(3000, () => {
  console.log("Node running");
});

module.exports = {app}
