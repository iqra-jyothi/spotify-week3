// routes/songRoutes.js
// const express = require('express');
// const router = express.Router();
// const Song = require('../Models/Song');  

// // Add a new song
// router.post('/add', async (req, res) => { 
//   const { title, artist, image, audio } = req.body;

//   if (!title || !artist || !image || !audio) {
//     return res.status(400).json({ error: 'All fields are required.' });
//   }

//   try {
//     const newSong = new Song({ title, artist, image, audio });
//     await newSong.save();
//     res.status(201).json({ message: 'Song added successfully!', song: newSong });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add the song.' });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Song = require("../Models/Song");

// Add a new song
router.post("/add", async (req, res) => {
  const { title, artist, image, audio } = req.body;

  if (!title || !artist || !image || !audio) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newSong = new Song({ title, artist, image, audio });
    await newSong.save();
    res.status(201).json({ message: "Song added successfully!", song: newSong });
  } catch (error) {
    res.status(500).json({ error: "Failed to add the song." });
  }
});

// View all songs
router.get("/view", async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json({ message: "Songs fetched successfully", songs });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch songs." });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const songId = req.params.id;

  try {
    const song = await Song.findByIdAndDelete(songId);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete song" });
  }
}); 

module.exports = router;
