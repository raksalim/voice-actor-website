import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Raksa</h1>
        <p>The voice behind the character.</p>
      </div>

      <div className="about-container">
        <section className="about-bio-section">
          <div className="about-image-col">
            <div className="about-profile-placeholder">
              <span>RL</span>
            </div>
            <div className="about-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="https://www.tiktok.com/@raksalim" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.26 8.26 0 004.84 1.55V7.14a4.85 4.85 0 01-1.07-.45z"/>
                  </svg>
                  @raksalim on TikTok
                </a>
                <a href="https://www.youtube.com/@raksalim" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
                  </svg>
                  @raksalim on YouTube
                </a>
                <a href="https://www.instagram.com/raksalim" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @raksalim on Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="about-text-col">
            <h2>Hello, I'm Raksa!</h2>
            <p>
              I'm a passionate voice actor with a love for storytelling that started the moment I realized 
              my voice could make someone feel something real. Whether it's a hero's rallying cry or a 
              grandmother's gentle bedtime story, I pour authenticity into every line.
            </p>
            <p>
              With training in classical theatre and a background in commercial broadcasting, I blend 
              technical precision with genuine emotional performance. I work from my professionally treated 
              home studio, delivering broadcast-quality audio on tight deadlines.
            </p>
            <p>
              My specialties include animation and character work, audiobook narration, commercial read, 
              corporate narration, and video game characters. I'm always eager to tackle new genres and 
              push my creative range.
            </p>
            <p>
              When I'm not in the booth, you'll find me experimenting with character voices on TikTok, 
              sharing behind-the-scenes content on YouTube, or connecting with the voice acting community 
              on Instagram.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Genres Covered</span>
              </div>
            </div>

            <a href="/resume/resume.pdf" download className="download-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Resume (PDF)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
