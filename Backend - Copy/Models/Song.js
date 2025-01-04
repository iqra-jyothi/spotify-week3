// models/Song.js
const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  image: { type: String, required: true }, // URL to the image
  audio: { type: String, required: true }, // URL to the audio
});

module.exports = mongoose.model('Song', SongSchema);
