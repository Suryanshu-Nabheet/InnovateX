import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/ui/navbar'; // Shared Navbar (if needed in Home)
import { Hero } from './components/Hero';
import { FeaturesSectionDemo } from './components/FeaturesSection'; // Assuming this exists
import { Footer } from './components/Footer';
import { ConnectivitySection } from './components/ConnectivitySection';
import AboutTimeline from './components/About/main';
import ContactPage from './components/Contact/main';
import Leadership from './components/Leadership/main';
import Lab from './components/Lab/main'; // Grid page only

// Error Boundary (Global)
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { console.error('Error:', error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 rounded">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Home Component
function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Hero />
        <ConnectivitySection />
        <FeaturesSectionDemo />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutTimeline />} /> {/* Navbar in component */}
            <Route path="/contact" element={<ContactPage />} /> {/* Navbar in component */}
            <Route path="/leadership" element={<Leadership />} /> {/* Navbar in component */}
            <Route path="/lab" element={<Lab />} /> {/* Grid only - no details */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
