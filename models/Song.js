var
  mongoose = require('mongoose'),
  songSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: String,
    rating: Number,
    lyrics: String
  }, {timestamps: true})

var Song = mongoose.model('Song', songSchema)
module.exports = Song
