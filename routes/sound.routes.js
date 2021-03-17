const { Router } = require('express');
const router = Router();

const { getTrack, uploadTrack} = require('../controllers/tracks.controller');

router.get('/sounds/:soundID', getTrack);

router.post('/sounds', uploadTrack);

module.exports = router;