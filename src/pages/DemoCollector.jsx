import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Home, Shield, Check, Mail, FileText, Package, Settings, Bell, Sun, Moon
} from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import CollectorStep0 from '../components/collector/CollectorStep0';
import CollectorStep1 from '../components/collector/CollectorStep1';
import CollectorStep2 from '../components/collector/CollectorStep2';
import CollectorStep3 from '../components/collector/CollectorStep3';
import CollectorStep4 from '../components/collector/CollectorStep4';

export default function DemoCollector() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 5;

  // Step URL fragments mapping
  const stepFragments = {
    0: 'browse-chrono24',
    1: 'order-confirmed',
    2: 'inbox',
    3: 'view-passport',
    4: 'summary'
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

  // Faircut sidebar navigation items
  const navItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Package, label: 'My Passports', active: currentStep === 3 },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Experience Home', isHome: true },
    { step: 0, emoji: '🛒', label: 'Product Page' },
    { step: 1, emoji: '✅', label: 'Order Confirmed' },
    { step: 2, emoji: '📧', label: 'Inbox' },
    { step: 3, emoji: '🎫', label: 'Digital Passport' },
    { step: 4, emoji: '🎯', label: 'Experience Complete' },
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

      {/* Header - Only show for steps 3-4 (inside Faircut platform) */}
      {(currentStep === 3 || currentStep === 4) && (
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                  Faircut
                </span>
              </div>
            </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
            <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">John Collector</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                JC
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
      )}

      {/* Main Content with conditional sidebar */}
      <div className={currentStep === 3 ? "flex" : ""}>
        {/* Sidebar Navigation - Only show for step 3 (inside Faircut platform) */}
        {currentStep === 3 && (
          <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-800 min-h-[calc(100vh-73px)] sticky top-[73px] hidden md:block">
            <nav className="p-4 space-y-1">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        )}

      {/* Main Content Area */}
      <main className={(currentStep === 3 || currentStep === 4) ? "flex-1 min-h-[calc(100vh-73px)]" : "min-h-screen"}>
          
          {/* Step 0: Chrono24 Product Page */}
          {currentStep === 0 && <CollectorStep0 setCurrentStep={updateStep} />}

          {/* Step 1: Chrono24 Order Confirmation */}
          {currentStep === 1 && <CollectorStep1 setCurrentStep={updateStep} />}

          {/* Step 2: Inbox */}
          {currentStep === 2 && <CollectorStep2 setCurrentStep={updateStep} />}

          {/* Step 3: View Passport (INSIDE FAIRCUT) */}
          {currentStep === 3 && <CollectorStep3 setCurrentStep={updateStep} />}

          {/* Step 4: Demo Summary */}
          {currentStep === 4 && <CollectorStep4 navigate={navigate} />}

        </main>
      </div>
    </div>
  );
}
