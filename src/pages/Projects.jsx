import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Starfall Chronicles',
    category: 'Animation',
    description: 'Lead character voice for a sci-fi animated series. Portrayed the protagonist through 12 episodes of emotional storytelling.',
    audio: '/audio/sample1.mp3',
    tags: ['Animation', 'Lead Role', 'Sci-Fi'],
  },
  {
    id: 2,
    title: 'Ember & Ash',
    category: 'Video Game',
    description: 'Multiple NPC voices for an indie RPG game. Brought depth and personality to over 20 unique characters.',
    audio: '/audio/sample2.mp3',
    tags: ['Video Game', 'RPG', 'Multi-Character'],
  },
  {
    id: 3,
    title: 'Horizon Bank Commercial',
    category: 'Commercial',
    description: "Warm, trustworthy voice-over for a regional bank's TV and radio commercial campaign.",
    audio: '/audio/sample3.mp3',
    tags: ['Commercial', 'Corporate', 'Radio'],
  },
  {
    id: 4,
    title: 'The Lost Garden — Audiobook',
    category: 'Audiobook',
    description: 'Full narration for a 6-hour fantasy novel, performing multiple character voices with distinct personalities.',
    audio: '/audio/sample4.mp3',
    tags: ['Audiobook', 'Narration', 'Fantasy'],
  },
  {
    id: 5,
    title: 'LittleLearn App',
    category: 'E-Learning',
    description: "Friendly, engaging narration for a children's educational app covering phonics and early reading skills.",
    audio: '/audio/sample5.mp3',
    tags: ['E-Learning', 'Children', 'Educational'],
  },
  {
    id: 6,
    title: 'Noir City Podcast Drama',
    category: 'Podcast',
    description: 'Recurring cast member in an episodic audio drama series set in 1940s Los Angeles.',
    audio: '/audio/sample6.mp3',
    tags: ['Podcast', 'Drama', 'Audio Drama'],
  },
];

function Projects() {
  const [playing, setPlaying] = useState(null);

  const handlePlay = (id) => {
    setPlaying(playing === id ? null : id);
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>A selection of voice acting work across genres and mediums.</p>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-audio">
                <button
                  className="play-btn"
                  onClick={() => handlePlay(project.id)}
                  aria-label={playing === project.id ? 'Pause' : 'Play sample'}
                >
                  {playing === project.id ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                <span className="audio-label">Listen to Sample</span>
                {playing === project.id && (
                  <audio
                    src={project.audio}
                    autoPlay
                    controls
                    onEnded={() => setPlaying(null)}
                    className="audio-player"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
