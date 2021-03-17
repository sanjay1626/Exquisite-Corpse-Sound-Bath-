const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SoundTrack = new Schema (
    {
        username: { type: String, required: true },
        URL: { type: String, required: true },
        category:{ type: String },
    },
    { timestamps: true},

)


module.exports = mongoose.model('track', SoundTrack)