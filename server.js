const express = require('express');
const cors = require('cors');

const db = require('./database');


const app = express();
const apiPort = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const SoundRoute = require('./routes/sound.routes.js');
app.use(SoundRoute);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
console.log('Server on port', 3001);