import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Navbar } from './components/ui/navbar'; // Shared Navbar
import { Hero } from './components/Hero';
import { FeaturesSectionDemo } from './components/FeaturesSection'; // Assuming this exists
import { Footer } from './components/Footer';
import { ConnectivitySection } from './components/ConnectivitySection';
import AboutTimeline from './components/About/main';
import ContactPage from './components/Contact/main';
import Leadership from './components/Leadership/main';
import Lab from './components/Lab/main';
import AiStudyBuddy from './components/Lab/Projects/AiStudyBuddy';
import SchoolPortal from './components/Lab/Projects/SchoolPortal';

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

// Project Details Wrapper
const ProjectDetailsWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  switch (slug) {
    case 'ai-study-buddy':
      return <AiStudyBuddy />;
    case 'school-portal':
      return <SchoolPortal />;
    default:
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <Navbar />
          <div className="text-center text-gray-400 p-20">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Navigate to="/lab" replace />
          </div>
        </div>
      );
  }
};

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutTimeline />} /> {/* Ensure Navbar in component */}
            <Route path="/contact" element={<ContactPage />} /> {/* Ensure Navbar in component */}
            <Route path="/leadership" element={<Leadership />} /> {/* Ensure Navbar in component */}
            <Route path="/lab" element={<Lab />} />
            <Route path="/lab/projects/:slug" element={<ProjectDetailsWrapper />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
