const  router  = require('express').Router();
const Sound = require('../models/sound-model');


// Create POST /api/sound  route
router.post('/api/sound', ({ body }, res) => {
    console.log(body);
    // Pass model
    Sound.create(body)
    .then(function (data) {
        res.json(data);
    })
});

// Create GET /api/sound route
router.get('/api/sound', (req, res) => {
    console.log(req);
    Sound.find({})
    .then(dbSound => {
        res.json(dbSound);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});



module.exports = router;