

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Music = () => {
  const podcastData = useSelector((state) => state.items.podcast || {});
  const episodes = podcastData.episodes?.items || []; // Correctly access episodes

  // State for audio playback
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = (audioUrl) => {
    if (currentAudio && currentAudio.src === audioUrl) {
      if (isPlaying) {
        currentAudio.pause();
        setIsPlaying(false);
      } else {
        currentAudio.play();
        setIsPlaying(true);
      }
    } else {
      if (currentAudio) currentAudio.pause();

      const audio = new Audio(audioUrl);
      setCurrentAudio(audio);
      setIsPlaying(true);
      audio.play();

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      };
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Auto-fill and responsive grid
        gap: "1.5rem",
        padding: "1.5rem",
        backgroundColor: "#1c1c1c",
        width: "100%",
      }}
      className="grid-container"
    >
      {episodes.length > 0 ? (
        episodes.map((episode, index) => {
          const {
            id,
            name = "Unnamed Episode",
            description = "No description available",
            durationText = "--:--",
            audioPreviewUrl = "",
            cover = [],
          } = episode;

          const coverImage = cover[0]?.url || "https://via.placeholder.com/300";

          return (
            <div
              key={id || index}
              style={{
                textAlign: "center",
                backgroundColor: "#2c2c2c",
                padding: "1rem",
                borderRadius: "15px",
                color: "white",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                position: "relative",
                overflow: "hidden", // Prevent overflow from the images or text
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="episode-card"
            >
              <img
                src={coverImage}
                alt={name}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onError={(e) => (e.target.src = "https://via.placeholder.com/300")} // Fallback image
              />
              <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>
                {name}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                  marginBottom: "0.5rem",
                }}
              >
                {description}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "1rem" }}>
                Duration: {durationText}
              </p>
              {audioPreviewUrl ? (
                <button
                  onClick={() => toggleAudio(audioPreviewUrl)}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    color: "#fff",
                    backgroundColor:
                      isPlaying && currentAudio?.src === audioPreviewUrl
                        ? "#d32f2f"
                        : "#1db954",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "1rem",
                  }}
                >
                  {isPlaying && currentAudio?.src === audioPreviewUrl
                    ? "Stop"
                    : "Play"}
                </button>
              ) : (
                <p style={{ fontSize: "0.8rem", color: "#aaa" }}>
                  No audio available
                </p>
              )}
            </div>
          );
        })
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "white",
            padding: "2rem",
            backgroundColor: "#2c2c2c",
            borderRadius: "8px",
          }}
        >
          <h2>No Episodes Available</h2>
          <p>
            Check back later for the latest episodes or explore other categories
            for interesting content.
          </p>
        </div>
      )}
    </div>
  );
};

export default Music;
