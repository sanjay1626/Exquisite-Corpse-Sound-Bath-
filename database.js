const { MongoClient } = require('mongodb');

let db;

MongoClient.connect('mongodb://localhost/soundDB', {
    useUnifiedTopology: true
}, (err, client) => {
    if(err) {
        console.log(err);
        process.exit(0);
    }
    db = client.db('soundDB');
    console.log('Database is connected');
});

const getConnection = () => db;


module.exports =  {
    getConnection
};