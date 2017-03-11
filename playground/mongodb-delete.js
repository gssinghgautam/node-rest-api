//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Users').deleteMany({name: 'Gautam'})
    // .then((result) => {
    //   console.log(result);
    // }, (err) =>{
    //     console.log('Unable to delete document', err);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({_id: ObjectID('58c3f33b2771cb752ccd60ff')}).then((result) => {
    //     console.log(result.result);
    // }, (err) => {
    //     console.log('Unable to delete document');
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({ _id : ObjectID("58c3f444e7c83b75650198e9")})
    .then((result) => {
      console.log(result);
    });


});
