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



module.exports = router;