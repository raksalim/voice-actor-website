import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:raksalim97@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nContact: ${contact}\n\n${message}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? I'd love to hear about it.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>
            Whether you're looking for a voice for your animation, commercial, audiobook, 
            or any other creative project — reach out and let's make something great.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="detail-icon">📧</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:raksalim97@gmail.com">raksalim97@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="detail-icon">⏱️</span>
              <div>
                <strong>Response Time</strong>
                <span>Within 24–48 hours</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="detail-icon">🌍</span>
              <div>
                <strong>Available For</strong>
                <span>Remote projects worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted && (
            <div className="success-banner">
              ✅ Your email client has been opened. Thank you for reaching out!
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact (Phone or Email) *</label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="your@email.com or +1 555 000 0000"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's this about?"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project — timeline, style, deliverables..."
                rows={6}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
