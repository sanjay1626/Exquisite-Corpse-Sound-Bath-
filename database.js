const mongoose = require('mongoose');

let db;

mongoose.connect('mongodb://127.0.0.1:27017/sound', {
    useNewUrlParser: true
}). catch(e => {
    console.error('Connection error', e.message)
})
    db = mongoose.connection
    console.log('Database is connected');


module.exports = db;