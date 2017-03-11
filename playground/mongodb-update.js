//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     text : 'breakfast'
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {returnOriginal: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users')
    .findOneAndUpdate(
      {
        _id : ObjectID("58c40364d859caf26876e5e0")
      },{
        $set : {
          name : 'Gautam Kumar'
        },
        $inc : {
          age : -1
        }
      },{
          returnOriginal : false
        }
    ).then((result) => {
      console.log(result);
    }, (error) =>{
      console.log('document does not exists');
    });

});
