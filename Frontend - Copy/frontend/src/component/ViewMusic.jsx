
// import { BsFillPostcardHeartFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../router/View.css'; // Import CSS for styling

const ViewMusic = () => {
  const [songs, setSongs] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(null);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:9091/api/songs/view');
        setSongs(response.data.songs);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    };

    fetchSongs();

    // Cleanup audio on component unmount
    return () => {
      if (audioElement) {
        audioElement.pause();
        setAudioElement(null);
      }
    };
  }, [audioElement]);

  const handlePlayPause = (audioUrl) => {
    if (audioElement) {
      // Check if the current audio element is playing the same audio
      if (audioElement.src === audioUrl) {
        if (audioElement.paused) {
          audioElement.play();
          setAudioPlaying(audioUrl);
        } else {
          audioElement.pause();
          setAudioPlaying(null); // Reset the playing state
        }
        return;
      }
      // Pause the current audio element if switching to a new one
      audioElement.pause();
    }

    // Create a new audio element for the new audio
    const newAudio = new Audio(audioUrl);
    newAudio.addEventListener('ended', () => setAudioPlaying(null));
    setAudioElement(newAudio);
    newAudio.play();
    setAudioPlaying(audioUrl);
  };

  const handleDelete = async (songId) => {
    try {
      await axios.delete(`http://localhost:9091/api/songs/delete/${songId}`);
      setSongs(songs.filter(song => song._id !== songId));
      alert("Song deleted successfully!");
    } catch (error) {
      console.error("Failed to delete song:", error);
    }
  };

  return (
    <div className="music-container">
      <h2 style={{ color: "white" }} className="header">All Posts</h2>
      <div className="song-cards">
        {songs.map((song) => (
          <div key={song._id} className="song-card">
            <img src={song.image} alt={song.title} className="song-image" />
            <div className="song-details">
              <h3 style={{ color: "white" }}>{song.title}</h3>
              <p style={{ color: "#aaa" }}>{song.artist}</p>
              <p>
                <button
                  className={`play-button ${audioPlaying === song.audio ? 'active' : ''}`}
                  onClick={() => handlePlayPause(song.audio)}
                >
                  {audioPlaying === song.audio ? 'Pause' : 'Play'}
                </button>
              </p>
              <button
                className="delete-button"
                onClick={() => handleDelete(song._id)}
              >
                Delete Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMusic;
