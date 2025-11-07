import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Shield, Clock, Percent, Wallet, Users, X, Bell, Moon, Sun, Home, Package, BarChart3, Settings, DollarSign, ChevronRight, RefreshCw, TrendingUp, Search, ShoppingBag, Check, ArrowRight } from 'lucide-react';

export default function DemoReseller() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const totalSteps = 7; // Step 0: Louis Erard product, Step 1: Order confirmation, Step 2: Email, Step 3-6: Faircut platform

  // Reset on mount
  useEffect(() => {
    setCurrentStep(0);
    setShowPaymentModal(false);
    setShowSuccessModal(false);
    setShowSuccessToast(false);
  }, []);

  const navItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Package, label: 'My Passports', active: currentStep === 3 },
    { icon: RefreshCw, label: 'Transfers', active: currentStep >= 4 && currentStep <= 5 },
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
      setCurrentStep(6);
      setTimeout(() => setShowSuccessToast(false), 3000);
    }, 2000);
  };

  // Step navigation data for hover sidebar
  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Demo Menu', isHome: true },
    { step: 0, emoji: '🛒', label: 'Browse Product' },
    { step: 1, emoji: '✅', label: 'Order Placed' },
    { step: 2, emoji: '📧', label: 'Email Received' },
    { step: 3, emoji: '💰', label: 'Watch Sold' },
    { step: 4, emoji: '📋', label: 'Review Rules' },
    { step: 5, emoji: '💳', label: 'Pay Royalty' },
    { step: 6, emoji: '🎉', label: 'Complete' },
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
              {currentStep === 3 && (
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
          {currentStep === 0 && (
            <div className="min-h-screen bg-white" style={{fontFamily: 'Assistant, sans-serif', letterSpacing: '0.06rem'}}>
              {/* Louis Erard Header */}
              <header className="border-b border-black/10 bg-white sticky top-0 z-30">
                <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img 
                        src="//www.louiserard.com/cdn/shop/files/logo-louis.svg?v=1706870401&width=120" 
                        alt="Louis Erard" 
                        width="120" 
                        height="14.32" 
                        loading="eager"
                        className="motion-reduce"
                        style={{maxWidth: '120px', height: 'auto', filter: 'brightness(0) saturate(100%) invert(29%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(86%)'}}
                      />
                    </div>
                    <nav className="hidden md:flex items-center gap-8 text-xs uppercase text-black" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 400, letterSpacing: '0.2em'}}>
                      <a href="#" className="hover:opacity-70 transition-opacity">Watches</a>
                      <a href="#" className="hover:opacity-70 transition-opacity">Accessories</a>
                      <a href="#" className="hover:opacity-70 transition-opacity">La maison</a>
                    </nav>
                    <div className="flex items-center gap-6">
                      <button className="text-black hover:opacity-70 transition-opacity">
                        <Search className="w-4 h-4" />
                      </button>
                      <button className="text-black hover:opacity-70 transition-opacity">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>

              {/* Product Page Content */}
              <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
                <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
                  {/* Product Image */}
                  <div className="lg:w-auto flex justify-center lg:justify-end">
                    <div className="w-full max-w-[715px] rounded-3xl overflow-hidden bg-white p-6" style={{backgroundColor: '#fafafa'}}>
                      <img
                        src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                        alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                        className="w-full h-auto object-cover"
                        style={{aspectRatio: '900/1247'}}
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                      <div style={{display: 'none', aspectRatio: '900/1247'}} className="w-full flex items-center justify-center bg-gray-100">
                        <span className="text-6xl">⌚</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="lg:w-auto">
                    <div className="max-w-md">
                      {/* Breadcrumb */}
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Noirmont X</p>
                      </div>

                      {/* Product Title */}
                      <h1 className="text-3xl lg:text-4xl mb-4 tracking-tight" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Le Régulateur Blanc Louis Erard x Alain Silberstein</h1>

                      {/* Price */}
                      <div className="mb-8">
                        <p className="text-3xl mb-1" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300}}>
                          <span className="bg-gradient-to-b from-[#105281] to-[#158ee4] bg-clip-text text-transparent">CHF 3'000</span>
                        </p>
                        <p className="text-xs uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Excl. Tax</p>
                        <p className="text-xs tracking-wide mt-1" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Free shipping</p>
                      </div>

                      {/* Main features */}
                      <div className="mb-8">
                        <h3 className="text-xs uppercase tracking-[0.15em] mb-4" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Main features</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 text-xs uppercase tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', color: 'rgba(0, 0, 0, 0.7)', borderRadius: '0px'}}>Automatic movement</span>
                          <span className="px-3 py-1.5 text-xs uppercase tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', color: 'rgba(0, 0, 0, 0.7)', borderRadius: '0px'}}>Stainless steel</span>
                          <span className="px-3 py-1.5 text-xs uppercase tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', color: 'rgba(0, 0, 0, 0.7)', borderRadius: '0px'}}>40mm case</span>
                          <span className="px-3 py-1.5 text-xs uppercase tracking-wide flex items-center gap-1.5" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', borderRadius: '0px'}}>
                            <Shield className="w-3.5 h-3.5" style={{color: '#158ee4'}} />
                            <span style={{color: '#158ee4'}}>Digital Passport Included</span>
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8 prose prose-sm">
                        <p className="text-sm leading-relaxed mb-4" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.7)'}}>
                          The Alain Silberstein's signature touch is instantly visible: a large blue arrow hand for the minutes, a red triangle for the hours, and a small yellow serpentine hand for the seconds. Telling the time becomes separated into its different parts in a joyful language, sophisticated and childlike at the same time, with the artistic and philosophical depth that characterises all Silberstein's work: it is a game of proportions, with references ranging from Bauhaus to the rich history of watchmaking.
                        </p>
                      </div>

                      {/* Limited Edition */}
                      <div className="mb-8">
                        <p className="text-xs uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>LOUIS ERARD X ALAIN SILBERSTEIN LIMITED EDITION 178 PIECES</p>
                      </div>

                      {/* Buy Button */}
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="w-full bg-gradient-to-b from-[#105281] to-[#158ee4] text-white py-4 px-6 text-sm font-normal uppercase hover:opacity-90 transition-opacity mb-3 border border-transparent tracking-[0.2em]"
                        style={{fontFamily: 'Assistant, sans-serif', fontWeight: 400, borderRadius: '0px'}}
                      >
                        BUY NOW
                      </button>
                      <p className="text-xs text-center tracking-wide mb-4" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.5)'}}>Free shipping worldwide</p>
                      <p className="text-xs text-center tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>3 years warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Louis Erard Website - Order Confirmation */}
          {currentStep === 1 && (
            <div className="min-h-screen bg-white" style={{fontFamily: 'Assistant, sans-serif', letterSpacing: '0.06rem'}}>
              {/* Louis Erard Header */}
              <header className="border-b border-black/10 bg-white sticky top-0 z-30">
                <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img 
                        src="//www.louiserard.com/cdn/shop/files/logo-louis.svg?v=1706870401&width=120" 
                        alt="Louis Erard" 
                        width="120" 
                        height="14.32" 
                        loading="eager"
                        className="motion-reduce"
                        style={{maxWidth: '120px', height: 'auto', filter: 'brightness(0) saturate(100%) invert(29%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(86%)'}}
                      />
                    </div>
                    <nav className="hidden md:flex items-center gap-8 text-xs uppercase text-black" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 400, letterSpacing: '0.2em'}}>
                      <a href="#" className="hover:opacity-70 transition-opacity">Watches</a>
                      <a href="#" className="hover:opacity-70 transition-opacity">Accessories</a>
                      <a href="#" className="hover:opacity-70 transition-opacity">La maison</a>
                    </nav>
                    <div className="flex items-center gap-6">
                      <button className="text-black hover:opacity-70 transition-opacity">
                        <Search className="w-4 h-4" />
                      </button>
                      <button className="text-black hover:opacity-70 transition-opacity">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>

              {/* Order Confirmation Content */}
              <div className="max-w-2xl mx-auto px-6 lg:px-12 py-20">
                <div className="text-center mb-16">
                  <div className="w-16 h-16 border-2 flex items-center justify-center mx-auto mb-6" style={{borderRadius: '0px', borderColor: '#000000'}}>
                    <Check className="w-8 h-8" style={{color: '#000000'}} />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-light mb-4 tracking-tight" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Thank you for your order</h1>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Order #LE-2024-042</p>
                </div>

                {/* Order Summary */}
                <div className="p-8 mb-10" style={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0px'}}>
                  <h2 className="text-xs uppercase tracking-[0.2em] mb-8 font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Order Summary</h2>
                  
                  {/* Product Item */}
                  <div className="flex gap-6 mb-8 pb-8" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
                    <div className="w-20 h-20 bg-white flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden" style={{backgroundColor: '#fafafa'}}>
                      <img
                        src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=246"
                        alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                      <div style={{display: 'none'}} className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl">⌚</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.15em] mb-1 font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Noirmont X</p>
                      <h3 className="font-light mb-2 text-sm" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Le Régulateur Blanc Louis Erard x Alain Silberstein</h3>
                      <p className="text-xs" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.5)'}}>Edition #042 / 178</p>
                    </div>
                    <div className="text-right">
                      <p className="font-light text-sm" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>CHF 3'000</p>
                    </div>
                  </div>

                  {/* Order Totals */}
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>
                      <span>Subtotal</span>
                      <span style={{color: '#000000', fontWeight: 300}}>CHF 3'000</span>
                    </div>
                    <div className="flex justify-between uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>
                      <span>Shipping</span>
                      <span style={{color: '#000000', fontWeight: 300}}>Free</span>
                    </div>
                    <div className="flex justify-between pt-4 text-sm" style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}>
                      <span className="uppercase tracking-[0.15em] font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Total</span>
                      <span className="font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>CHF 3'000</span>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="p-6 mb-10" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0px'}}>
                  <h3 className="text-xs uppercase tracking-[0.2em] mb-4 font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>What Happens Next?</h3>
                  <div className="space-y-3 text-xs leading-relaxed" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.7)'}}>
                    <p>• Your watch will be shipped within 2-3 business days</p>
                    <p>• You'll receive a digital passport via email after delivery</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Email - Digital Passport Received */}
          {currentStep === 2 && (
            <div style={{backgroundColor: '#0f0f0f', fontFamily: "'Open Sans', Arial, 'Helvetica Neue', Helvetica, sans-serif", minHeight: '100vh', width: '100%'}}>
              {/* Email Client Header */}
              <div style={{backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '1rem 1.5rem'}}>
                <div style={{maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <div style={{width: '2rem', height: '2rem', backgroundColor: '#2563eb', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{color: '#ffffff', fontWeight: 'bold', fontSize: '0.875rem'}}>📧</span>
                    </div>
                    <span style={{fontWeight: '600', color: '#111827'}}>Inbox</span>
                  </div>
                  <div style={{fontSize: '0.875rem', color: '#6b7280'}}>maria.smith@email.com</div>
                </div>
              </div>

              {/* Email Content - Louis Erard Style */}
              <div style={{maxWidth: '600px', margin: '0 auto', padding: '2rem 1rem'}}>
                {/* Louis Erard Logo */}
                <div style={{textAlign: 'center', paddingTop: '6rem', paddingBottom: '8rem'}}>
                  <img 
                    src="https://www.louiserard.com/cdn/shop/files/logo-louis.svg?v=1706870401&width=120" 
                    alt="Louis Erard" 
                    width="239" 
                    style={{maxWidth: '239px', height: 'auto', margin: '0 auto', filter: 'invert(1)', display: 'block'}}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Email Body */}
                <div style={{padding: '0 1rem'}}>
                  {/* Greeting */}
                  <div style={{marginBottom: '2rem', fontSize: '0.875rem', color: '#fcfcfc', fontWeight: 300, letterSpacing: '1px', lineHeight: '1.6', textAlign: 'justify'}}>
                    <p style={{marginBottom: '1rem'}}>Dear Maria,</p>
                    <p style={{marginBottom: '1rem'}}>Your <strong>Le Régulateur Blanc Louis Erard x Alain Silberstein</strong> has been delivered and your digital passport is now active.</p>
                    <p>Your watch now benefits from blockchain-secured authenticity and smart rules enforcement through Faircut.</p>
                  </div>

                  {/* Quote Section */}
                  <div style={{textAlign: 'center', margin: '3rem 0', fontSize: '1.5rem', color: '#f6f8fb', fontWeight: 400, lineHeight: '1.4'}}>
                    <p>"Your watch, <span style={{color: '#158ee4'}}>forever authenticated</span> and protected by smart rules."</p>
                  </div>

                  {/* Passport Features */}
                  <div style={{marginBottom: '2rem', fontSize: '0.875rem', color: '#fcfcfc', fontWeight: 300, letterSpacing: '1px', lineHeight: '1.6', textAlign: 'justify'}}>
                    <p style={{marginBottom: '1rem'}}>Your digital passport includes:</p>
                    <ul style={{marginLeft: '1rem', listStyle: 'none'}}>
                      <li style={{marginBottom: '0.5rem'}}>• Immutable proof of authenticity from Louis Erard</li>
                      <li style={{marginBottom: '0.5rem'}}>• Complete ownership history on the blockchain</li>
                      <li style={{marginBottom: '0.5rem'}}>• Smart rules enforcement (30% royalty on resale profit)</li>
                      <li>• Secure transfer protocol for future sales</li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
                    <button
                      onClick={() => setCurrentStep(3)}
                      style={{
                        backgroundColor: '#158ee4',
                        color: '#ffffff',
                        padding: '15px 15px',
                        fontSize: '16px',
                        fontWeight: 300,
                        letterSpacing: '1px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'Open Sans', Arial, 'Helvetica Neue', Helvetica, sans-serif",
                        transition: 'opacity 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.opacity = '0.9'}
                      onMouseOut={(e) => e.target.style.opacity = '1'}
                    >
                      VIEW MY PASSPORT IN FAIRCUT
                    </button>
                  </div>

                  {/* Info Text */}
                  <div style={{marginBottom: '3rem', fontSize: '0.875rem', color: '#fcfcfc', fontWeight: 300, letterSpacing: '1px', lineHeight: '1.6', textAlign: 'justify'}}>
                    <p>Your passport is stored securely on the blockchain. When you're ready to sell your watch, Faircut will automatically enforce all creator rules before the passport can be transferred.</p>
                  </div>

                  {/* Feature Icons */}
                  <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem'}}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{width: '2.5rem', height: '2.5rem', margin: '0 auto 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Shield style={{width: '2.5rem', height: '2.5rem', color: '#b8b8b8'}} />
                      </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{width: '2.5rem', height: '2.5rem', margin: '0 auto 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Clock style={{width: '2.5rem', height: '2.5rem', color: '#b8b8b8'}} />
                      </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <div style={{width: '2.5rem', height: '2.5rem', margin: '0 auto 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Percent style={{width: '2.5rem', height: '2.5rem', color: '#b8b8b8'}} />
                      </div>
                    </div>
                  </div>

                  {/* Feature Labels */}
                  <div style={{display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem'}}>
                    <div style={{textAlign: 'center', fontSize: '0.75rem', color: '#b8b8b8', fontWeight: 300}}>
                      <p>Blockchain secured</p>
                    </div>
                    <div style={{textAlign: 'center', fontSize: '0.75rem', color: '#b8b8b8', fontWeight: 300}}>
                      <p>Ownership history</p>
                    </div>
                    <div style={{textAlign: 'center', fontSize: '0.75rem', color: '#b8b8b8', fontWeight: 300}}>
                      <p>Smart rules</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{borderTop: '1px solid #ccc', margin: '20px 0'}}></div>

                  {/* Footer - Company Info */}
                  <div style={{textAlign: 'center', fontSize: '0.875rem', marginBottom: '1.5rem', color: '#fcfcfc', lineHeight: '1.8'}}>
                    <p style={{fontWeight: 700, fontSize: '13px'}}>LOUIS ERARD SA & FAIRCUT</p>
                    <p style={{fontWeight: 300, fontSize: '14px'}}>Digital Passport System</p>
                    <p style={{fontWeight: 300, fontSize: '13px', marginTop: '10px'}}>
                      <a href="mailto:passport@faircut.com" style={{color: '#158ee4', textDecoration: 'none'}}>passport@faircut.com</a>
                    </p>
                  </div>

                  {/* Privacy Link */}
                  <div style={{textAlign: 'center', fontSize: '0.75rem', marginBottom: '1rem', color: '#fcfcfc'}}>
                    <p style={{fontWeight: 400, fontSize: '9px'}}>
                      <a href="#" style={{color: '#fcfcfc'}}>Privacy Policy</a>
                    </p>
                  </div>

                  {/* Powered by */}
                  <div style={{textAlign: 'center', paddingBottom: '2rem', color: '#fcfcfc', fontWeight: 400, fontSize: '9px'}}>
                    <p>Powered by Faircut Digital Passport System</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Watch Sold - Transfer Notification (INSIDE FAIRCUT) */}
          {currentStep === 3 && (
            <div className="px-6 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Home className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4" />
                    <span>My Passports</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Passports</h1>
                </div>

                {/* Transfer Notification Card */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Watch Sold - Transfer Required</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Congratulations! You've sold your watch for <strong>CHF 6,500</strong>. To complete the sale and transfer the digital passport to the new owner, you must first satisfy all creator rules.
                      </p>
                      <button
                        onClick={() => setCurrentStep(4)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                      >
                        Review Transfer Requirements
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Watch Passport Card */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                      <span className="text-6xl">⌚</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Louis Erard x Alain Silberstein</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Le Régulateur Blanc Edition #042</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                          Active
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Purchase Price</p>
                          <p className="font-semibold text-gray-900 dark:text-white">CHF 3,000</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Purchase Date</p>
                          <p className="font-semibold text-gray-900 dark:text-white">Oct 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">
                          <Shield className="w-3 h-3" />
                          <span>Verified Authentic</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs">
                          <Percent className="w-3 h-3" />
                          <span>30% Royalty</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded text-xs">
                          <Users className="w-3 h-3" />
                          <span>1st Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review Transfer & Creator Rules */}
          {currentStep === 4 && (
            <div className="px-6 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Home className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4" />
                    <span>Transfers</span>
                    <ChevronRight className="w-4 h-4" />
                    <span>Review Transfer</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transfer Digital Passport</h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Review and satisfy all creator rules before completing the transfer</p>
                </div>

                {/* Watch Details */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Watch Details</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">⌚</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Louis Erard x Alain Silberstein</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Le Régulateur Blanc Edition #042</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Your Purchase Price</p>
                      <p className="font-semibold text-gray-900 dark:text-white">CHF 3,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sale Price</p>
                      <p className="font-semibold text-gray-900 dark:text-white">CHF 6,500</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Your Profit</p>
                      <p className="font-semibold text-green-600 dark:text-green-400">CHF 3,500</p>
                    </div>
                  </div>
                </div>

                {/* Creator Rules */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Louis Erard Creator Rules</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Enforced by Faircut before transfer</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Royalty Rule */}
                    <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <Percent className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Resale Royalty</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">30% of profit must be paid to Louis Erard</p>
                        <div className="bg-white dark:bg-slate-900 rounded p-3">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Profit:</span>
                            <span className="font-semibold text-gray-900 dark:text-white">CHF 3,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Royalty (30%):</span>
                            <span className="font-bold text-purple-600 dark:text-purple-400">CHF 1,050</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Authenticity */}
                    <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Authenticity Verification</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Immutable proof maintained on blockchain</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600 dark:text-green-400 font-semibold">Verified ✓</span>
                        </div>
                      </div>
                    </div>

                    {/* Ownership History */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                      <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ownership History</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Complete transfer record on blockchain</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600 dark:text-green-400 font-semibold">Recorded ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Net Proceeds */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Your Net Proceeds</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Sale Price</span>
                      <span className="font-semibold">CHF 6,500</span>
                    </div>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Original Purchase</span>
                      <span className="font-semibold">- CHF 3,000</span>
                    </div>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Creator Royalty (30%)</span>
                      <span className="font-semibold">- CHF 1,050</span>
                    </div>
                    <div className="h-px bg-green-200 dark:bg-green-800"></div>
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-gray-900 dark:text-white">Net Profit</span>
                      <span className="font-bold text-green-600 dark:text-green-400">CHF 2,450</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                      <span className="font-semibold text-green-600 dark:text-green-400">82% return</span> on your investment
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setCurrentStep(5)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Pay Royalty & Complete Transfer */}
          {currentStep === 5 && (
            <div className="px-6 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Home className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4" />
                    <span>Transfers</span>
                    <ChevronRight className="w-4 h-4" />
                    <span>Payment</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pay Royalty & Transfer</h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Complete payment to finalize the transfer</p>
                </div>

                {/* Payment Summary */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Payment Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Royalty to Louis Erard</span>
                      <span className="font-semibold text-gray-900 dark:text-white">CHF 1,050</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Platform Fee</span>
                      <span className="font-semibold text-gray-900 dark:text-white">CHF 0</span>
                    </div>
                    <div className="h-px bg-gray-200 dark:bg-gray-800"></div>
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-gray-900 dark:text-white">Total Due</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">CHF 1,050</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex gap-3">
                      <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold mb-1">Secure Payment</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300">Payment is processed securely. The passport will be transferred immediately after payment confirmation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Payment Method</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-600 dark:border-purple-400 rounded-lg cursor-pointer">
                      <div className="w-5 h-5 border-4 border-purple-600 dark:border-purple-400 rounded-full"></div>
                      <Wallet className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Crypto Wallet</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Pay with ETH, USDC, or USDT</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakdown of Proceeds */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">After Payment</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Sale proceeds you'll receive</span>
                      <span className="font-semibold text-gray-900 dark:text-white">CHF 6,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Less: Royalty payment</span>
                      <span className="font-semibold text-gray-900 dark:text-white">- CHF 1,050</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Less: Your original cost</span>
                      <span className="font-semibold text-gray-900 dark:text-white">- CHF 3,000</span>
                    </div>
                    <div className="h-px bg-green-200 dark:bg-green-800"></div>
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-gray-900 dark:text-white">Your Net Profit</span>
                      <span className="font-bold text-green-600 dark:text-green-400">CHF 2,450</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handlePayRoyalty}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Pay CHF 1,050 & Complete Transfer
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Demo Complete */}
          {currentStep === 6 && (
            <div className="px-6 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Transfer Complete!</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Digital passport successfully transferred</p>
                </div>

                {/* Success Summary */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Your Profit Summary</h2>
                  
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Purchase Price</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">CHF 3,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sale Price</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">CHF 6,500</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Royalty Paid</div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">CHF 1,050</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">Your Net Profit</span>
                      <span className="text-3xl font-bold text-green-600 dark:text-green-400">CHF 2,450</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-lg font-semibold">82% Return on Investment</span>
                    </div>
                  </div>
                </div>

                {/* What Happened */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What Just Happened?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Royalty Payment Processed</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">CHF 1,050 (30% of profit) sent to Louis Erard</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Digital Passport Transferred</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">New owner now has authenticated ownership on blockchain</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Smart Rules Enforced</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">All creator rules satisfied automatically by Faircut</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Complete Message */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🎉 Demo Complete!</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You've experienced how Faircut enables profitable resales while ensuring creators earn perpetual royalties.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg font-semibold text-purple-600 dark:text-purple-400">
                      ✓ Fair for Creators
                    </span>
                    <span className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg font-semibold text-purple-600 dark:text-purple-400">
                      ✓ Profitable for Resellers
                    </span>
                    <span className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg font-semibold text-purple-600 dark:text-purple-400">
                      ✓ Transparent for Collectors
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/demo')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Back to Demo Selection
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

