

import { GiLoveSong } from "react-icons/gi";

import React, { useState } from 'react';
import axios from 'axios';

const AddSong = () => {
  // Define the state to store input data
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    image: '',
    audio: '',
  });

  // Define a state to handle errors or success messages
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!songData.title || !songData.artist || !songData.image || !songData.audio) {
      setMessage('All fields are required.');
      return;
    }

    try {
      // Send POST request to the backend API to add the song
      const response = await axios.post('http://localhost:9091/api/songs/add', songData);

      // Handle success
      if (response.status === 201) {
        setMessage('Song added successfully!');
        setSongData({
          title: '',
          artist: '',
          image: '',
          audio: '',
        }); // Clear the form after successful submission
      }
    } catch (error) {
      // Handle error
      setMessage('Failed to add the song. Please try again.');
    }
  };

  return (
    <div className="add-song-container">
      <div className="card "style={{width:"658"}}>
        <h2 className="card-title" style={{color:"white"}}>Create New Song <GiLoveSong /></h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label">Title:</label>
            <input
              type="text"
              name="title"
              value={songData.title}
              onChange={handleChange}
              placeholder="Enter song title"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Artist:</label>
            <input
              type="text"
              name="artist"
              value={songData.artist}
              onChange={handleChange}
              placeholder="Enter artist name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image URL:</label>
            <input
              type="text"
              name="image"
              value={songData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Audio URL:</label>
            <input
              type="text"
              name="audio"
              value={songData.audio}
              onChange={handleChange}
              placeholder="Enter audio URL"
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button" >
            Add Song
          </button>
        {message && <p style={{color:"#aaa"}} className="message">{message}</p>}
         
        </form>
       
      </div>

      {/* Styles */}
   
    </div>
  );
};

export default AddSong;
