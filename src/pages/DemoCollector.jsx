import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Home, Shield, Check, Mail, FileText
} from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import CollectorStep0 from '../components/collector/CollectorStep0';
import CollectorStep1 from '../components/collector/CollectorStep1';
import CollectorStep2 from '../components/collector/CollectorStep2';
import CollectorStep3 from '../components/collector/CollectorStep3';

export default function DemoCollector() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 4;

  // Step URL fragments mapping
  const stepFragments = {
    0: 'browse-chrono24',
    1: 'order-confirmed',
    2: 'inbox',
    3: 'view-passport'
  };

  // Reverse mapping for fragment to step
  const fragmentToStep = Object.entries(stepFragments).reduce((acc, [step, fragment]) => {
    acc[fragment] = parseInt(step);
    return acc;
  }, {});

  // Update URL fragment when step changes
  const updateStep = (step) => {
    setCurrentStep(step);
    const fragment = stepFragments[step];
    if (fragment) {
      window.location.hash = fragment;
    }
  };

  // Initialize from URL fragment or default to step 0
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const stepFromHash = fragmentToStep[hash];
    
    if (stepFromHash !== undefined) {
      setCurrentStep(stepFromHash);
    } else {
      setCurrentStep(0);
      window.location.hash = stepFragments[0];
    }
  }, []);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const stepFromHash = fragmentToStep[hash];
      if (stepFromHash !== undefined) {
        setCurrentStep(stepFromHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Demo Home', isHome: true },
    { step: 0, emoji: '🛒', label: 'Browse Chrono24' },
    { step: 1, emoji: '✅', label: 'Order Confirmed' },
    { step: 2, emoji: '📧', label: 'Inbox' },
    { step: 3, emoji: '📜', label: 'View Passport' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Step Navigation Sidebar - Elegant & Minimal */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group">
        {/* Hover trigger area */}
        <div className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer"></div>
        
        {/* Sidebar content */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-gray-200 dark:border-gray-800 shadow-xl transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out rounded-l-2xl overflow-hidden">
          <div className="py-6 px-3 space-y-1 min-w-[240px]">
            {stepNavigation.map(({ step, emoji, label, isHome }) => (
              <button
                key={step}
                onClick={() => isHome ? navigate('/demo') : updateStep(step)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group/item relative overflow-hidden ${
                  currentStep === step
                    ? 'bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white'
                    : isHome
                    ? 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-gray-600 dark:text-gray-400 mb-2'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-gray-600 dark:text-gray-400'
                }`}
              >
                {/* Active indicator line */}
                {currentStep === step && !isHome && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full"></div>
                )}
                
                {/* Step number badge */}
                {!isHome && (
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    currentStep === step
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-600'
                  }`}>
                    {step + 1}
                  </div>
                )}
                
                {/* Home icon */}
                {isHome && (
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <Home className="w-4 h-4" />
                  </div>
                )}
                
                {/* Label */}
                <div className="text-left flex-1">
                  <div className={`text-sm font-medium transition-colors duration-300 ${
                    currentStep === step
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white'
                  }`}>
                    {label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Visual hint - elegant dots indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-300">
          <div className="flex flex-col gap-1.5">
            <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
          </div>
        </div>
      </div>

      {/* Step 0: Chrono24 Product Page */}
      {currentStep === 0 && (
        <CollectorStep0 setCurrentStep={updateStep} />
      )}

      {/* Step 1: Chrono24 Order Confirmation */}
      {currentStep === 1 && (
        <CollectorStep1 setCurrentStep={updateStep} />
      )}

      {/* Step 2: Inbox */}
      {currentStep === 2 && (
        <CollectorStep2 setCurrentStep={updateStep} />
      )}

      {/* Step 3: View Passport */}
      {currentStep === 3 && (
        <CollectorStep3 setCurrentStep={updateStep} />
      )}
    </div>
  );
}
