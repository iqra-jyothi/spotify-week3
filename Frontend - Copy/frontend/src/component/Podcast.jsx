

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Podcast = () => {
  const podcastData = useSelector((state) => state.items.podcast || {});
  const episodes = podcastData.episodes?.items || [];

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
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Flexible columns
        gap: "1rem",
        padding: "1rem",
        height: "auto",
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

          const coverImage =
            cover[0]?.url || "https://via.placeholder.com/150";

          return (
            <div
              key={id || index}
              style={{
                textAlign: "center",
                backgroundColor: "#2c2c2c",
                padding: "1rem",
                borderRadius: "8px",
                color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden", // Prevent text overflow
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
              }}
            >
              {/* <img
                src={coverImage}
                alt={name}
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              /> */}
              <img
  src={coverImage}
  alt={name}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/300x300"; // Fallback high-quality placeholder
  }}
  style={{
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  }}
/>
              <h3
                style={{
                  fontSize: "1rem",
                  margin: "0.5rem 0",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {description}
              </p>
              <p style={{ fontSize: "0.8rem", margin: "0.5rem 0" }}>
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
                    borderRadius: "25px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
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

export default Podcast;
