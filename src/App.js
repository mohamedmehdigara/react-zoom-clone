import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import DownloadSection from './components/DownloadSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PricingSection />
      <DownloadSection />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
