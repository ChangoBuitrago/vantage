import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Landing from './pages/landing/Landing';
import Slides from './pages/presentations/Slides';
import ManuelEmch from './pages/presentations/ManuelEmch';
import Demo from './pages/demo/Demo';
import DemoCreator from './pages/demo/DemoCreator';
import DemoCollector from './pages/demo/DemoCollector';
import DemoReseller from './pages/demo/DemoReseller';

function ConditionalDarkModeToggle() {
  const location = useLocation();
  
  // Hide on demo pages (they have their own integrated toggle)
  if (location.pathname.includes('/demo/creator') || location.pathname.includes('/demo/collector') || location.pathname.includes('/demo/reseller')) {
    return null;
  }
  
  return <DarkModeToggle />;
}

function PageTitle() {
  useEffect(() => {
    document.title = 'Faircut';
  }, []);
  
  return null;
}

function App() {
  return (
    <DarkModeProvider>
      <Router basename="/faircut/">
        <PageTitle />
        <ConditionalDarkModeToggle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/manuel-emch" element={<ManuelEmch />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/creator" element={<DemoCreator />} />
          <Route path="/demo/reseller" element={<DemoReseller />} />
          <Route path="/demo/collector" element={<DemoCollector />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
