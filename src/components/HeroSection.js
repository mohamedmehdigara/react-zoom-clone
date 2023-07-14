import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Connect and Collaborate Anywhere</h1>
        <p>Experience seamless video meetings, webinars, and messaging on any device.</p>
        <div className="cta-buttons">
          <button className="cta-button">Get Started</button>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="hero-image.png" alt="Video Conferencing" />
      </div>
    </section>
  );
};

export default HeroSection;
