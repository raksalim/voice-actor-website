import React from 'react';
import './DemoPlaylistContainer.css';

const DemoPlaylistContainer = () => {
  const demos = [
    {
      title: 'Strange House by Uketsu - Demo Only',
      url: 'https://raksa-lim-voice-actor-website.s3.us-east-1.amazonaws.com/voice-demos/Strange+House+by+Uketsu+-+demo+only.mp3',
    },
    {
      title: 'The Hobbit by JRR Tolkien - Demo Only',
      url: 'https://raksa-lim-voice-actor-website.s3.us-east-1.amazonaws.com/voice-demos/The+Hobbit+by+JRR+Tolkien+-+Demo+only.wav',
    },
    {
      title: 'Matilda by Roald Dahl - Demo Only',
      url: 'https://raksa-lim-voice-actor-website.s3.us-east-1.amazonaws.com/voice-demos/Matilda+by+Roald+Dahl+-+Demo+only.mp3',
    },
  ];

  return (
    <div className="demo-container">
      <h2>Listen to My Demos</h2>
      {demos.map((demo, index) => (
        <div className="demo-item" key={index}>
          <p className='demo-title'>{demo.title}</p>
          <audio
            controls
            style={{ width: '100%' }}
            controlsList="nodownload noremoteplayback noplaybackrate nodownload"
          >
            <source
              src={demo.url}
              type={demo.url.endsWith('.mp3') ? 'audio/mpeg' : 'audio/wav'}
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default DemoPlaylistContainer;