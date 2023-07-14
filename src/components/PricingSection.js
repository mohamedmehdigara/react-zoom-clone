import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Free</h3>
          <p>For personal use</p>
          <ul>
            <li>40-minute group meetings</li>
            <li>Unlimited one-on-one meetings</li>
            <li>HD video and audio</li>
          </ul>
          <button className="cta-button">Sign Up for Free</button>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>For small teams</p>
          <ul>
            <li>Unlimited meeting duration</li>
            <li>Recording feature</li>
            <li>Admin controls</li>
          </ul>
          <button className="cta-button">Upgrade to Pro</button>
        </div>
        <div className="pricing-card">
          <h3>Business</h3>
          <p>For larger organizations</p>
          <ul>
            <li>Enterprise-grade security</li>
            <li>Managed domains</li>
            <li>24/7 dedicated support</li>
          </ul>
          <button className="cta-button">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
