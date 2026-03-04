import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <div className="profile-placeholder">
              <span>RL</span>
            </div>
          </div>
          <div className="hero-content">
            <p className="hero-tagline">Voice Actor &amp; Performer</p>
            <h1>Raksa Lim</h1>
            <p className="hero-description">
              Bringing characters to life with warmth, versatility, and passion. 
              From animated series to commercial spots, audiobooks to video games — 
              my voice tells your story.
            </p>
            <div className="hero-buttons">
              <Link to="/demos" className="btn-primary">Listen to Demos</Link>
              <Link to="/contact" className="btn-secondary">Work With Me</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-container">
          <h2>What I Bring to the Booth</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎙️</div>
              <h3>Versatile Range</h3>
              <p>From youthful and energetic to warm and authoritative — a wide tonal palette for any project.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🎬</div>
              <h3>Studio Ready</h3>
              <p>Professional home studio setup with broadcast-quality recordings delivered on time.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⭐</div>
              <h3>Character Work</h3>
              <p>Specializing in animation, games, and narrative content that demands authentic, emotive performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Create Something Amazing?</h2>
          <p>Let's collaborate on your next project.</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
