import React from 'react';
import './DemoPlaylistContainer.css';

const DemoPlaylistContainer = () => {
  return (
    <div className="demo-container">
      <h2>Listen to My Demos</h2>
      <div className="demo-item">
        <h3>Matilda Demo 1</h3>
        <audio controls>
          <source
            src="https://raksa-lim-voice-actor-website.s3.us-east-1.amazonaws.com/Matilda+Demo+1.wav"
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
      {/* Add more demo items here */}
    </div>
  );
};

export default DemoPlaylistContainer;