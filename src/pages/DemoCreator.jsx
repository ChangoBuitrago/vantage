import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import DarkModeToggle from '../components/DarkModeToggle';
import { Home, Menu, X } from 'lucide-react';

// Import step components
import CreatorStep0 from '../components/creator/CreatorStep0';
import CreatorStep1 from '../components/creator/CreatorStep1';
import CreatorStep2 from '../components/creator/CreatorStep2';
import CreatorStep3 from '../components/creator/CreatorStep3';
import CreatorStep4 from '../components/creator/CreatorStep4';

export default function DemoCreator() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showStepNav, setShowStepNav] = useState(false);
  
  const totalSteps = 5; // 0-4 steps

  // Map URL hash to step
  const stepFragments = {
    '': 'home',
    '#home': 'home',
    '#dashboard': 0,
    '#configure': 1,
    '#issue': 2,
    '#passport': 3,
    '#complete': 4,
  };

  // Update step based on URL hash
  useEffect(() => {
    const hash = location.hash;
    const step = stepFragments[hash];
    if (step !== undefined) {
      setCurrentStep(step);
    }
  }, [location.hash]);

  // Update URL hash when step changes
  const handleStepChange = (step) => {
    setCurrentStep(step);
    const fragment = Object.keys(stepFragments).find(key => stepFragments[key] === step);
    if (fragment) {
      navigate(`/demo/creator${fragment}`, { replace: true });
    }
  };

  // Step navigation data for hover sidebar
  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Experience Home', isHome: true },
    { step: 0, emoji: '🏭', label: 'Brand Dashboard' },
    { step: 1, emoji: '⚙️', label: 'Configure Passport' },
    { step: 2, emoji: '🎫', label: 'Issue Passport' },
    { step: 3, emoji: '📊', label: 'View Analytics' },
    { step: 4, emoji: '🎯', label: 'Experience Complete' },
  ];

  const renderStepIndicator = () => {
    if (currentStep === 'home') return null;
    
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowStepNav(!showStepNav)}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Menu className="w-6 h-6" />
        </button>

        {showStepNav && (
          <div className="absolute bottom-20 right-0 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-4 w-80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Navigation</h3>
              <button
                onClick={() => setShowStepNav(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {stepNavigation.map((item) => (
                <button
                  key={item.step}
                  onClick={() => {
                    handleStepChange(item.step);
                    setShowStepNav(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentStep === item.step
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Home view
  if (currentStep === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute top-6 right-6 z-10">
          <DarkModeToggle />
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <button
              onClick={() => navigate('/demo')}
              className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Home size={20} />
              <span>Back to Demo Selection</span>
            </button>

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-5xl">🏭</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                Creator Experience
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Issue digital passports for your luxury watches with smart rules and ongoing benefits
              </p>
            </div>

            {/* Journey Steps */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Journey</h2>
              <div className="space-y-4">
                {stepNavigation.slice(1, -1).map((step, index) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {step.emoji} {step.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {index === 0 && "View your watch collection ready for digital passport issuance"}
                        {index === 1 && "Set smart rules, royalties, and exclusive owner benefits"}
                        {index === 2 && "Issue the digital passport when selling to first owner"}
                        {index === 3 && "Track ownership, transfers, and ongoing brand engagement"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center">
              <button
                onClick={() => handleStepChange(0)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xl font-bold py-5 px-12 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Start Creator Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render current step
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Step Navigation Indicator */}
      {renderStepIndicator()}

      {/* Header - Only show for steps inside Faircut platform */}
      {currentStep >= 1 && currentStep <= 3 && (
        <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Faircut
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Brand Portal</span>
              </div>
              <div className="flex items-center gap-4">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={currentStep >= 1 && currentStep <= 3 ? "min-h-[calc(100vh-73px)]" : "min-h-screen"}>
        {currentStep === 0 && <CreatorStep0 setCurrentStep={handleStepChange} />}
        {currentStep === 1 && <CreatorStep1 setCurrentStep={handleStepChange} />}
        {currentStep === 2 && <CreatorStep2 setCurrentStep={handleStepChange} />}
        {currentStep === 3 && <CreatorStep3 setCurrentStep={handleStepChange} />}
        {currentStep === 4 && <CreatorStep4 navigate={navigate} />}
      </main>
    </div>
  );
}
