// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("58b6f40d056a4ece6acfa8c9")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Error', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Error', err);
  // });

  db.collection('User').find({
    name: 'Roberto'
  }).toArray().then((users) => {
    console.log('User');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Error', err);
  });

  // db.close()
});
