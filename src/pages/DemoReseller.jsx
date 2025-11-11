import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Shield, Percent, Wallet, X, Bell, Moon, Sun, Home, Package, BarChart3, Settings, DollarSign, ChevronRight, RefreshCw, Check, Mail } from 'lucide-react';

// Import step components
import ResellerStep0 from '../components/reseller/ResellerStep0';
import ResellerStep1 from '../components/reseller/ResellerStep1';
import ResellerStep2 from '../components/reseller/ResellerStep2';
import ResellerStep3 from '../components/reseller/ResellerStep3';
import ResellerStep4 from '../components/reseller/ResellerStep5';
import ResellerStep5 from '../components/reseller/ResellerStep7';
import ResellerStep6 from '../components/reseller/ResellerStep8';

export default function DemoReseller() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [salePrice, setSalePrice] = useState(0);
  const [royaltyAmount, setRoyaltyAmount] = useState(0);
  const [collectorEmail, setCollectorEmail] = useState('');

  const totalSteps = 7; // Step 0: Louis Erard product, Step 1: Order confirmation, Step 2: Email, Step 3-6: Faircut platform

  // Step URL fragments mapping
  const stepFragments = {
    0: 'browse-product',
    1: 'order-placed',
    2: 'email-received',
    3: 'view-passport',
    4: 'review-transfer',
    5: 'transfer-complete',
    6: 'benefits'
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
    
    setShowPaymentModal(false);
    setShowSuccessModal(false);
    setShowSuccessToast(false);
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

  const navItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Package, label: 'My Passports', active: currentStep === 3 },
    { icon: RefreshCw, label: 'Transfers', active: currentStep === 4 || currentStep === 5 },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const handlePayRoyalty = (price, royalty, email) => {
    setSalePrice(price);
    setRoyaltyAmount(royalty);
    setCollectorEmail(email);
    setShowPaymentModal(true);
  };

  const confirmPayment = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setShowSuccessToast(true);
      updateStep(5);
      setTimeout(() => setShowSuccessToast(false), 3000);
    }, 2000);
  };

  // Step navigation data for hover sidebar
  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Experience Home', isHome: true },
    { step: 0, emoji: '🛒', label: 'Product Page' },
    { step: 1, emoji: '✅', label: 'Order Confirmed' },
    { step: 2, emoji: '📧', label: 'Inbox' },
    { step: 3, emoji: '🎫', label: 'Digital Passport' },
    { step: 4, emoji: '📋', label: 'Transfer Review' },
    { step: 5, emoji: '🎉', label: 'Transfer Complete' },
    { step: 6, emoji: '✨', label: 'Experience Complete' },
  ];

  return (
    <div className={`min-h-screen ${currentStep >= 3 ? 'bg-slate-50 dark:bg-slate-950' : 'bg-white'}`}>
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-24 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-slide-in-right flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold">Transfer Complete!</div>
            <div className="text-sm text-white/90">Passport transferred successfully</div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Confirm Payment</h3>
              <p className="text-gray-600 dark:text-gray-400">Pay royalty to complete transfer</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-gray-400">Total Royalty Due</span>
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">CHF {royaltyAmount.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Your Sale Price</span>
                  <span className="text-gray-900 dark:text-white">CHF {salePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-900 dark:text-white">Royalty Rate (Year 1)</span>
                  <span className="text-purple-600 dark:text-purple-400">90%</span>
                </div>
              </div>
            </div>

            {/* Transfer To */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mt-0.5">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Transfer To</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{collectorEmail}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmPayment}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white rounded-xl hover:opacity-90 transition-opacity font-semibold"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Processing transfer...</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

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
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full"></div>
                )}
                
                {/* Step number badge */}
                {!isHome && (
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    currentStep === step
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg'
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

      {/* Header - Only show for steps 3+ (inside Faircut platform) */}
      {currentStep >= 3 && (
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
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
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Maria Reseller</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
      )}

      {/* Main Content with conditional sidebar */}
      <div className={currentStep >= 3 && currentStep < 6 ? "flex" : ""}>
        {/* Sidebar Navigation - Only show for steps 3-5 (inside Faircut platform) */}
        {currentStep >= 3 && currentStep < 6 && (
          <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-800 min-h-[calc(100vh-73px)] sticky top-[73px] hidden md:block">
            <nav className="p-4 space-y-1">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active
                      ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-purple-600 dark:text-purple-400' : ''}`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        )}

      {/* Main Content Area */}
      <main className={currentStep >= 3 ? "flex-1 min-h-[calc(100vh-73px)]" : "min-h-screen"}>
          
          {/* Step 0: Louis Erard Website - Product Page */}
          {currentStep === 0 && <ResellerStep0 setCurrentStep={updateStep} />}

          {/* Step 1: Louis Erard Website - Order Confirmation */}
          {currentStep === 1 && <ResellerStep1 setCurrentStep={updateStep} />}

          {/* Step 2: Email - Digital Passport Received */}
          {currentStep === 2 && <ResellerStep2 setCurrentStep={updateStep} />}

          {/* Step 3: Digital Passport View (INSIDE FAIRCUT) */}
          {currentStep === 3 && <ResellerStep3 setCurrentStep={updateStep} />}

          {/* Step 4: Review Transfer & Pay Royalty */}
          {currentStep === 4 && <ResellerStep4 setCurrentStep={updateStep} handlePayRoyalty={handlePayRoyalty} />}

          {/* Step 5: Transfer Complete */}
          {currentStep === 5 && <ResellerStep5 setCurrentStep={updateStep} collectorEmail={collectorEmail} salePrice={salePrice} />}

          {/* Step 6: Benefits & Demo Complete */}
          {currentStep === 6 && <ResellerStep6 navigate={navigate} />}

        </main>
      </div>
    </div>
  );
}
