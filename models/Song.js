var
  mongoose = require('mongoose'),
  songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    rating: Number,
    lyrics: String
  })

var Song = mongoose.model('Song', songSchema)
module.exports = Song
