// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("58b7666f5de08f000c0a3ef1")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('User').findOneAndUpdate({
    _id: ObjectID("58b6f4b87b5cf5ce777e7781")
  },{
    $set: {
      name: "Roberto"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close()
});
