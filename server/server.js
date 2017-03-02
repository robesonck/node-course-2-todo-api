const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/Todo');
let {User} = require('./models/User');

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
    res.status(400).send(e)
    console.log('Unable to save todo', e);
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
