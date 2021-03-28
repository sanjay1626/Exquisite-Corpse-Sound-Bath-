var express = require('express');
var router = express.Router();
const Sound = require('../models/sound-models')

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

// Create POST /api/sound  route
router.post('/soundAPI/sound', ({ body }, res) => {
    console.log(body);
    
    // Pass model
    Sound.create(body)
    .then(function (data) {
        res.json(data);
        
    })
});

// Create GET /api/sound route
router.get('/soundAPI/sound', (req, res) => {
    console.log(res);
    Sound.find({})
    .then(dbSound => {
        res.json(dbSound);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});



module.exports = router;