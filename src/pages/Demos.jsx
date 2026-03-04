import './Demos.css';

const audioDemos = [
  {
    id: 1,
    title: 'Commercial Demo Reel',
    description: 'A compilation of my best commercial spots — upbeat, conversational, and trustworthy reads.',
    src: '/audio/demo-commercial.mp3',
    duration: '1:45',
  },
  {
    id: 2,
    title: 'Character & Animation Demo',
    description: 'Showcasing a wide range of character voices from heroic leads to quirky sidekicks.',
    src: '/audio/demo-character.mp3',
    duration: '2:10',
  },
  {
    id: 3,
    title: 'Narration & Audiobook Demo',
    description: 'Smooth, expressive narration styles suitable for documentaries, audiobooks, and e-learning.',
    src: '/audio/demo-narration.mp3',
    duration: '1:55',
  },
];

const videoDemos = [
  {
    id: 1,
    title: 'Animation Showreel 2024',
    description: 'Highlights from animated projects featuring various character performances.',
    src: '/video/demo1.mp4',
  },
  {
    id: 2,
    title: 'Behind the Booth',
    description: 'A look at my recording setup and workflow — from script to final delivery.',
    src: '/video/demo2.mp4',
  },
];

function Demos() {
  return (
    <div className="demos-page">
      <div className="page-header">
        <h1>Voice Demos</h1>
        <p>Listen and watch to get a feel for my range and style.</p>
      </div>

      <div className="demos-container">
        <section className="demos-section">
          <h2>Audio Demos</h2>
          <div className="audio-demos-grid">
            {audioDemos.map((demo) => (
              <div key={demo.id} className="audio-demo-card">
                <div className="demo-card-top">
                  <div className="demo-icon">🎙️</div>
                  <div>
                    <h3>{demo.title}</h3>
                    <span className="demo-duration">{demo.duration}</span>
                  </div>
                </div>
                <p className="demo-description">{demo.description}</p>
                <audio controls src={demo.src} className="full-audio-player">
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </section>

        <section className="demos-section">
          <h2>Video Demos</h2>
          <div className="video-demos-grid">
            {videoDemos.map((demo) => (
              <div key={demo.id} className="video-demo-card">
                <video controls className="demo-video" poster="">
                  <source src={demo.src} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
                <div className="video-demo-info">
                  <h3>{demo.title}</h3>
                  <p>{demo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Demos;
