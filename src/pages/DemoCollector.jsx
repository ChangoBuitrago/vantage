import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  ArrowLeft, Shield, FileText, Users, Check, ChevronRight, ShoppingBag, Wallet, X,
  Search, Bell, Heart, Filter, Star, Clock, Package, ChevronDown, CreditCard, MapPin, Moon, Sun
} from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function DemoCollector() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalSteps = 6;

  // Reset on mount
  useEffect(() => {
    setCurrentStep(0);
    setSelectedWatch(null);
    setActiveTab('overview');
    setShowCheckoutModal(false);
    setShowSuccessModal(false);
  }, []);

  // Auto-advance function
  const advanceStep = () => {
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Complete Purchase</h2>
            
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">⌚</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Kudoke</p>
                    <h3 className="font-bold text-gray-900 dark:text-white">Kudoke 2 Salmon Dial</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Edition #042 / 100</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-900 dark:text-white">CHF 23,760</p>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
                  <input
                    type="text"
                    value="4242 4242 4242 4242"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Expiry</label>
                    <input
                      type="text"
                      value="12/25"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">CVC</label>
                    <input
                      type="text"
                      value="123"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Royalty Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">Automatic Royalties Included</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">Creator royalties are automatically calculated and transferred during resale. No extra action needed.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="flex-1 px-6 py-4 border border-gray-300 dark:border-gray-700 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowCheckoutModal(false);
                    setShowSuccessModal(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Pay CHF 23,760</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md w-full border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Purchase Complete!</h2>
              <p className="text-gray-600 dark:text-gray-400">Your watch and digital passport have been transferred</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-6 border border-green-200 dark:border-green-800 space-y-2">
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300">
                <Check className="w-4 h-4" />
                <span>Digital passport in your wallet</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300">
                <Check className="w-4 h-4" />
                <span>Ownership verified on-chain</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300">
                <Check className="w-4 h-4" />
                <span>Joined creator community</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                advanceStep();
              }}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Marketplace Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Faircut
            </div>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search watches..."
                className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-0 rounded-lg text-sm w-64 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                readOnly
              />
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
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded font-semibold">Collector</div>
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-73px)]">

        {/* Step 0: Marketplace Browse */}
        {currentStep === 0 && (
          <div className="px-6 py-8 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Secondary Marketplace</h1>
              <p className="text-gray-600 dark:text-gray-400">Browse verified watches with digital passports</p>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <button className="px-4 py-2 bg-green-100 dark:bg-green-900/50 border border-green-300 dark:border-green-700 rounded-lg text-sm font-semibold text-green-700 dark:text-green-300">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Digital Passport Only
                </span>
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Watch - Clickable */}
              <button
                onClick={() => {
                  setSelectedWatch(true);
                  advanceStep();
                }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-4 border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all text-left group"
              >
                <div className="relative mb-4">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-7xl">⌚</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-600 dark:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Verified
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Kudoke</p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Kudoke 2 Salmon Dial</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Edition #042 / 100</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Price</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">CHF 23,760</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 text-sm mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">4.9</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Digital Passport</p>
                  </div>
                </div>
              </button>

              {/* Other listings - Read only */}
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 opacity-60">
                  <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-7xl opacity-50">⌚</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Various</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Other Watches</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Various editions</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Price</p>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">CHF {(15000 + i * 2000).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Product Detail - Overview Tab */}
        {currentStep === 1 && (
          <div className="px-6 py-8 max-w-7xl mx-auto">
            <button
              onClick={() => navigate('/demo')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to Marketplace</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div>
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-9xl">⌚</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all">
                      <span className="text-3xl">⌚</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full text-sm font-semibold border border-green-300 dark:border-green-700">
                    <Shield className="w-4 h-4" />
                    Digital Passport Verified
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">Kudoke</p>
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Kudoke 2 Salmon Dial</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Edition #042 / 100</p>

                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-5xl font-black text-gray-900 dark:text-white">CHF 23,760</span>
                  <span className="text-lg text-gray-500 dark:text-gray-500 line-through">CHF 25,000</span>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-800">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-3 text-sm font-semibold transition-colors ${
                      activeTab === 'overview'
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                        : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('passport')}
                    className={`px-4 py-3 text-sm font-semibold transition-colors ${
                      activeTab === 'passport'
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                        : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    Digital Passport
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`px-4 py-3 text-sm font-semibold transition-colors ${
                      activeTab === 'history'
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                        : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    Service History
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      Hand-crafted timepiece featuring our signature salmon dial. Each watch is a unique piece of functional art, meticulously assembled by master watchmaker Stefan Kudoke.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Authenticity Verified</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Complete History</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Transferable Warranty</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Community Access</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'passport' && (
                  <div className="space-y-4 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-3">
                        <Shield className="w-5 h-5" />
                        <span className="font-semibold">Digital Passport Active</span>
                      </div>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                        This watch has an immutable digital passport on the blockchain, ensuring authenticity and complete ownership history.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-green-700 dark:text-green-300">Passport ID:</span>
                          <span className="font-mono text-green-600 dark:text-green-400">0x742d...8f2a</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700 dark:text-green-300">Created:</span>
                          <span className="text-green-600 dark:text-green-400">Jan 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700 dark:text-green-300">Verified by:</span>
                          <span className="text-green-600 dark:text-green-400">Kudoke</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="space-y-3 mb-8">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">Initial Service</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">Jan 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Kudoke Authorized Service - Full service completed</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">Condition Report</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">Jun 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Excellent condition - No issues reported</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-green-900 dark:text-green-100">Warranty Status</span>
                        <span className="text-xs text-green-700 dark:text-green-300">Active</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">Transferable warranty - Valid until Dec 2026</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => advanceStep()}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>View Full Passport & Details</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Authenticity Verification */}
        {currentStep === 2 && (
          <div className="px-6 py-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Authenticity Verified</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Complete ownership chain verified on-chain</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-bold text-green-900 dark:text-green-100 text-lg">100% Authentic</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Verified by Kudoke • Immutable on-chain record</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Ownership Chain</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">Kudoke (Original Maker)</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Created Jan 2024</p>
                    </div>
                  </div>
                  <div className="ml-4 w-0.5 h-8 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">Maria Smith (First Owner)</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Purchased Jan 2024</p>
                    </div>
                  </div>
                  <div className="ml-4 w-0.5 h-8 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">You</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-blue-600 dark:text-blue-400">You (Future Owner)</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">After purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => advanceStep()}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Continue to Service History</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Service History */}
        {currentStep === 3 && (
          <div className="px-6 py-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Complete Service History</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Full maintenance record and condition reports</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white">Initial Service</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-500">January 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Full service performed at Kudoke Authorized Service Center</p>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs text-green-700 dark:text-green-300 font-semibold">Verified by Kudoke</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white">Condition Report</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-500">June 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Professional inspection and condition assessment</p>
                      <div className="bg-white dark:bg-slate-900 rounded-lg p-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2"><strong>Condition:</strong> Excellent</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400"><strong>Notes:</strong> No issues reported. All components functioning perfectly.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">Transferable Warranty</h3>
                      <p className="text-sm text-green-700 dark:text-green-300 mb-3">2-year manufacturer warranty transfers to you upon purchase</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-green-700 dark:text-green-300">Valid until: December 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  ✓ Know exactly what you're buying. All records verified and immutable on-chain.
                </p>
              </div>

              <button
                onClick={() => advanceStep()}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Proceed to Purchase</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Purchase / Checkout */}
        {currentStep === 4 && (
          <div className="px-6 py-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Ready to Purchase</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Review your order and complete the purchase</p>
              </div>

              {/* Order Summary */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Order Summary</h3>
                <div className="flex gap-4 mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">⌚</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Kudoke</p>
                    <h4 className="font-bold text-gray-900 dark:text-white">Kudoke 2 Salmon Dial</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Edition #042 / 100</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-gray-900 dark:text-white">CHF 23,760</p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Digital passport automatically transferred</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Verified authenticity & ownership history</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Complete service history & records</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Transferable warranty (until Dec 2026)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Kudoke owner community access</span>
                  </div>
                </div>
              </div>

              {/* Royalty Notice */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">Automatic Royalties</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      Creator royalties are built-in and automatic. When you resell, royalties are handled seamlessly—no extra work needed.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCheckoutModal(true)}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Complete Purchase</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Post-Purchase & Community */}
        {currentStep === 5 && (
          <div className="px-6 py-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Welcome to the Community!</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">You're now part of the Kudoke owner network</p>
              </div>

              {/* Success Summary */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border-2 border-green-300 dark:border-green-700 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-green-900 dark:text-green-100 mb-1">Purchase Complete!</h3>
                    <p className="text-green-700 dark:text-green-300">Your watch and digital passport are now in your wallet</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">Digital passport transferred</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">Ownership verified on-chain</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">Service history accessible</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">Community access granted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Benefits */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Kudoke Owner Community Benefits
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
                    <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Early Access to New Releases</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Be the first to know about new timepieces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
                    <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Exclusive Events & Workshops</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Meet Stefan and other collectors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
                    <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Direct Connection to Maker</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Ask questions and get expert advice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
                    <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Easy Resale with Built-in Royalties</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Seamless process when you're ready to sell</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Complete */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl font-black text-blue-900 dark:text-blue-100 mb-3">Demo Complete!</h3>
                <p className="text-blue-700 dark:text-blue-300 mb-6">You've experienced the full collector journey with Faircut's digital passport system.</p>
                <button
                  onClick={() => navigate('/demo')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Back to Demo Selection
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
