const router = require('express').Router();
const Sound = require('../controllers/tracks.controller');


// Create POST /api/sound  route
// router.post('/api/sound', ({ body }, res) => {
//     console.log(body);
//     // Pass model
//     Sound.create(body)
//     .then(function (data) {
//         res.json(data);
//     })
// });

router.route("/api/sound")
    .get(Sound.findAll)
    .post(Sound.create);

router.get('/api/sound', (req, res) => {
    Sound.find({})
        .then(dbSound => {
            res.json(dbSound);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})


module.exports = router;