import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Landing from './pages/Landing';
import FaircutLandingPage from './pages/FaircutLandingPage';
import ManuelEmch from './pages/ManuelEmch';
import StefanKudoke from './pages/StefanKudoke';
import PatrikSjogren from './pages/PatrikSjogren';

function App() {
  console.log('App rendering, current path:', window.location.pathname);
  
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      <Router basename="/faircut-demo/">
        <Routes>
          <Route path="/" element={<FaircutLandingPage />} />
          <Route path="/slides" element={<Landing />} />
          <Route path="/manuel-emch" element={<ManuelEmch />} />
          <Route path="/stefan-kudoke" element={<StefanKudoke />} />
          <Route path="/patrik-sjogren" element={<PatrikSjogren />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
