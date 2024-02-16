import React, { useState } from 'react';

function VideoPlayer({icon, cover}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container video-section">
      {!isPlaying && (
        <div className="video-img">
            <img  loading="lazy"  width="" height=""   className="cover-poster" src={cover} alt="Cover Poster" />
        </div>
      )}
      {isPlaying ? (
        <div className="video-img">
            <video className="video-player" controls>
            <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      ) : (
        <button className="play-button play-icon" onClick={playVideo}>
            <img  loading="lazy"  width="" height=""   src={icon} alt="icon" />
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
