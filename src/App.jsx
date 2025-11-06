import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Landing from './pages/Landing';
import Slides from './pages/Slides';
import ManuelEmch from './pages/ManuelEmch';
import StefanKudoke from './pages/StefanKudoke';
import PatrikSjogren from './pages/PatrikSjogren';
import Demo from './pages/Demo';
import DemoCreator from './pages/DemoCreator';
import DemoCollector from './pages/DemoCollector';

function App() {
  console.log('App rendering, current path:', window.location.pathname);
  
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      <Router basename="/faircut/">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/manuel-emch" element={<ManuelEmch />} />
          <Route path="/stefan-kudoke" element={<StefanKudoke />} />
          <Route path="/patrik-sjogren" element={<PatrikSjogren />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/creator" element={<DemoCreator />} />
          <Route path="/demo/collector" element={<DemoCollector />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
