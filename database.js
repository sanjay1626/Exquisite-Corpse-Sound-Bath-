const mongoose = require('mongoose');

let db;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/funkySound', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
    
}). catch(e => {
    console.error('Connection error', e.message)
})

db = mongoose.connection
console.log('Database is connected...');


module.exports = db;