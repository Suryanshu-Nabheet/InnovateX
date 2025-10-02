import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/ui/navbar';
import { Hero } from './components/Hero';
import { FeaturesSectionDemo } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { TextHoverEffectDemo } from './components/text-hover-effect';
import { ConnectivitySection } from './components/ConnectivitySection';
import AboutTimeline from './components/About/main';
import ContactPage from './components/Contact/main';
import Leadership from './components/Leadership/main'; // New: Real Leadership page

// Home Page Component
function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Hero />
        <ConnectivitySection />
        <FeaturesSectionDemo />
        <TextHoverEffectDemo />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTimeline />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/leadership" element={<Leadership />} /> {/* Now a real page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
