import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/ui/navbar';
import { Hero } from './components/Hero';
import { FeaturesSectionDemo } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { ConnectivitySection } from './components/ConnectivitySection';
import About from './components/About/main';
import ContactPage from './components/Contact/main';
import Leadership from './components/Leadership/main';
import Lab from './components/Lab/main';
import { TextHoverEffectWrapper } from './components/ui/text-hover-effect';
import { ErrorBoundary } from './components/layouts/ErrorBoundary';
import { LoadingFallback } from './components/layouts/LoadingFallback';
import { ROUTES } from './constants/routes';

// Home Component
function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Hero />
        <ConnectivitySection />
        <FeaturesSectionDemo />
        <TextHoverEffectWrapper /> {/* Added text hover effect before footer */}
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.LEADERSHIP} element={<Leadership />} />
            <Route path={ROUTES.LAB} element={<Lab />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
