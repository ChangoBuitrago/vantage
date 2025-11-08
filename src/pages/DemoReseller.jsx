import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Shield, Percent, Wallet, X, Bell, Moon, Sun, Home, Package, BarChart3, Settings, DollarSign, ChevronRight, RefreshCw, Check } from 'lucide-react';

// Import step components
import ResellerStep0 from '../components/reseller/ResellerStep0';
import ResellerStep1 from '../components/reseller/ResellerStep1';
import ResellerStep2 from '../components/reseller/ResellerStep2';
import ResellerStep3 from '../components/reseller/ResellerStep3';
import ResellerStep4 from '../components/reseller/ResellerStep4';
import ResellerStep5 from '../components/reseller/ResellerStep5';
import ResellerStep6 from '../components/reseller/ResellerStep6';
import ResellerStep7 from '../components/reseller/ResellerStep7';

export default function DemoReseller() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const totalSteps = 8; // Step 0: Louis Erard product, Step 1: Order confirmation, Step 2: Email, Step 3-7: Faircut platform

  // Reset on mount
  useEffect(() => {
    setCurrentStep(0);
    setShowPaymentModal(false);
    setShowSuccessModal(false);
    setShowSuccessToast(false);
  }, []);

  const navItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Package, label: 'My Passports', active: currentStep === 3 || currentStep === 4 },
    { icon: RefreshCw, label: 'Transfers', active: currentStep >= 5 && currentStep <= 6 },
    { icon: DollarSign, label: 'Earnings', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const handlePayRoyalty = () => {
    setShowPaymentModal(true);
  };

  const confirmPayment = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setShowSuccessToast(true);
      setCurrentStep(7);
      setTimeout(() => setShowSuccessToast(false), 3000);
    }, 2000);
  };

  // Step navigation data for hover sidebar
  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Demo Menu', isHome: true },
    { step: 0, emoji: '🛒', label: 'Browse Product' },
    { step: 1, emoji: '✅', label: 'Order Placed' },
    { step: 2, emoji: '📧', label: 'Email Received' },
    { step: 3, emoji: '🎫', label: 'View Passport' },
    { step: 4, emoji: '💰', label: 'Watch Sold' },
    { step: 5, emoji: '📋', label: 'Review Rules' },
    { step: 6, emoji: '💳', label: 'Pay Royalty' },
    { step: 7, emoji: '🎉', label: 'Complete' },
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
                <span className="text-gray-600 dark:text-gray-400">Royalty Amount</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">CHF 1,050</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Sale Price</span>
                  <span className="text-gray-900 dark:text-white">CHF 6,500</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Purchase Price</span>
                  <span className="text-gray-900 dark:text-white">CHF 3,000</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Profit</span>
                  <span className="text-gray-900 dark:text-white">CHF 3,500</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-900 dark:text-white">Royalty Rate</span>
                  <span className="text-purple-600 dark:text-purple-400">30%</span>
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

      {/* Step Navigation Sidebar - Hover activated, RIGHT side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group">
        {/* Hover trigger area */}
        <div className="absolute right-0 top-0 bottom-0 w-12 cursor-pointer"></div>
        
        {/* Sidebar content */}
        <div className="bg-white dark:bg-slate-800 border-l border-gray-200 dark:border-gray-700 shadow-2xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
          <div className="py-4 px-2 space-y-2">
            {stepNavigation.map(({ step, emoji, label, isHome }) => (
              <button
                key={step}
                onClick={() => isHome ? navigate('/demo') : setCurrentStep(step)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentStep === step
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : isHome
                    ? 'hover:bg-slate-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700'
                    : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-2xl">{emoji}</span>
                <div className="text-left whitespace-nowrap">
                  <div className={`text-xs font-medium ${currentStep === step ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                    {isHome ? '' : `Step ${step + 1}`}
                  </div>
                  <div className="text-sm font-semibold">{label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Visual hint - arrow on hover target */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
          <ChevronRight className="w-6 h-6 animate-pulse" />
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
              onClick={() => navigate('/demo')}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium"
            >
              <X size={16} />
              <span className="hidden sm:inline">Exit Demo</span>
            </button>
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
              {currentStep === 4 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Maria Smith</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded font-semibold">Reseller</div>
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                MS
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
      )}

      {/* Main Content with conditional sidebar */}
      <div className={currentStep >= 3 ? "flex" : ""}>
        {/* Sidebar Navigation - Only show for steps 3+ (inside Faircut platform) */}
        {currentStep >= 3 && (
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
          {currentStep === 0 && <ResellerStep0 setCurrentStep={setCurrentStep} />}

          {/* Step 1: Louis Erard Website - Order Confirmation */}
          {currentStep === 1 && <ResellerStep1 />}

          {/* Step 2: Email - Digital Passport Received */}
          {currentStep === 2 && <ResellerStep2 setCurrentStep={setCurrentStep} />}

          {/* Step 3: Digital Passport View (INSIDE FAIRCUT) */}
          {currentStep === 3 && <ResellerStep3 setCurrentStep={setCurrentStep} />}

          {/* Step 4: Watch Sold - Transfer Notification */}
          {currentStep === 4 && <ResellerStep4 setCurrentStep={setCurrentStep} />}

          {/* Step 5: Review Transfer & Creator Rules */}
          {currentStep === 5 && <ResellerStep5 setCurrentStep={setCurrentStep} />}

          {/* Step 6: Pay Royalty & Complete Transfer */}
          {currentStep === 6 && <ResellerStep6 handlePayRoyalty={handlePayRoyalty} />}

          {/* Step 7: Demo Complete */}
          {currentStep === 7 && <ResellerStep7 navigate={navigate} />}

        </main>
      </div>
    </div>
  );
}
