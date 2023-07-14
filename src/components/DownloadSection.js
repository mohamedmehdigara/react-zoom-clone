import React from 'react';

const DownloadSection = () => {
  return (
    <section className="download-section">
      <div className="download-content">
        <h2>Download Zoom App</h2>
        <p>Get Zoom for the most reliable and easy-to-use video conferencing experience.</p>
        <div className="app-buttons">
          <button className="app-button">
            <img src="apple-app-store.png" alt="Download on the App Store" />
          </button>
          <button className="app-button">
            <img src="google-play-store.png" alt="Get it on Google Play" />
          </button>
        </div>
      </div>
      <div className="download-image">
        <img src="download-image.png" alt="Download Zoom App" />
      </div>
    </section>
  );
};

export default DownloadSection;
