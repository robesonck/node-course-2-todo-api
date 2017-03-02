// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // db.collection('User').insertOne({
  //   name: 'Roberto',
  //   age: 23,
  //   location: "CDMX"
  // }, (err, result) => {
  //   if (err) return console.log('Unable to insert todo', err);
  //   console.log(result.ops[0]._id.getTimestamp());
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  // db.close();
});
