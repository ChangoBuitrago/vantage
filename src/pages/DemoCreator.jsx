import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  ArrowLeft, Clock, Percent, Shield, TrendingUp, Check, Calendar, Wallet, Users, 
  Home, Package, BarChart3, Settings, Bell, Upload, X, DollarSign,
  Eye, ChevronDown, MessageSquare, Heart, Share2, MoreVertical, Moon, Sun
} from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function DemoCreator() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(0);
  const [transferLockMonths, setTransferLockMonths] = useState(6);
  const [royaltyRate, setRoyaltyRate] = useState(30);
  const [passportEnabled, setPassportEnabled] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const totalSteps = 6;

  // Reset on mount
  useEffect(() => {
    setCurrentStep(0);
    setPassportEnabled(false);
    setShowSuccessToast(false);
    setShowPaymentModal(false);
  }, []);

  // Auto-advance with toast notifications
  const advanceStep = () => {
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      setCurrentStep(currentStep + 1);
    }, 1500);
  };

  // Platform navigation items
  const navItems = [
    { icon: Home, label: 'Dashboard', active: currentStep >= 3 },
    { icon: Package, label: 'My Products', active: currentStep < 3 },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Users, label: 'Community', active: currentStep === 5 },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top">
          <Check className="w-5 h-5" />
          <span className="font-semibold">Saved successfully!</span>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md w-full border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Payment Received!</h2>
              <p className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">CHF 3,832</p>
              <p className="text-gray-600 dark:text-gray-400">Royalty automatically transferred</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-6 border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-700 dark:text-green-300">
                100% margin revenue. No cost to you. Perpetual earnings from every resale.
              </p>
            </div>
            <button
              onClick={() => {
                setShowPaymentModal(false);
                advanceStep();
              }}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Platform Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Faircut
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
              {currentStep === 3 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Stefan Kudoke</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded font-semibold">Creator</div>
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                SK
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-800 min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4 space-y-1">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  item.active
                    ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-73px)]">

          {/* Step 0: Create Product - Digital Passport */}
          {currentStep === 0 && (
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <span>Products</span>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">Create New Product</span>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Create New Product</h1>
                  <p className="text-gray-600 dark:text-gray-400">Add your timepiece to the Faircut platform</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Product Images */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Product Images</h2>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700">
                        <span className="text-6xl">⌚</span>
                      </div>
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700">
                          <Upload className="w-6 h-6 text-gray-400 mb-1" />
                          <span className="text-xs text-gray-500">Upload</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Product Details</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Product Name</label>
                        <input
                          type="text"
                          value="Kudoke 2 Salmon Dial"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                          readOnly
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Price (CHF)</label>
                          <input
                            type="text"
                            value="11,000"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Edition</label>
                          <input
                            type="text"
                            value="#042 / 100"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                            readOnly
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Description</label>
                        <textarea
                          rows="4"
                          value="Hand-crafted timepiece featuring our signature salmon dial. Each watch is a unique piece of functional art."
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  {/* Digital Passport Section - THE INTERACTIVE PART */}
                  <div className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 transition-all ${
                    passportEnabled 
                      ? 'border-green-500 dark:border-green-400' 
                      : 'border-amber-300 dark:border-amber-700'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Digital Passport</h2>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Enable immutable tracking and perpetual royalties</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setPassportEnabled(true);
                          advanceStep();
                        }}
                        disabled={passportEnabled}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                          passportEnabled ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 cursor-pointer'
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                            passportEnabled ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    
                    {passportEnabled && (
                      <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-2">
                          <Check className="w-5 h-5" />
                          <span className="font-semibold">Digital Passport Enabled</span>
                        </div>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1 ml-7">
                          <li>• Immutable ownership tracking</li>
                          <li>• Automatic royalty collection</li>
                          <li>• Service history logging</li>
                          <li>• Community access included</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Preview Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 sticky top-28">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Preview</h3>
                    <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-8xl">⌚</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Kudoke 2 Salmon Dial</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Edition #042 / 100</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-black text-gray-900 dark:text-white">CHF 11,000</span>
                    </div>
                    {passportEnabled && (
                      <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-semibold border border-green-200 dark:border-green-800">
                        <Shield className="w-4 h-4" />
                        <span>Digital Passport</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Anti-Flipping Rules Configuration */}
          {currentStep === 1 && (
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Kudoke 2 Salmon Dial</span>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">Anti-Flipping Rules</span>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Anti-Flipping Protection</h1>
                  <p className="text-gray-600 dark:text-gray-400">Protect your community from speculators and flippers</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-800">
                <button className="px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Basic Info
                </button>
                <button className="px-4 py-3 text-sm font-semibold text-amber-600 dark:text-amber-400 border-b-2 border-amber-600 dark:border-amber-400">
                  Anti-Flipping
                </button>
                <button className="px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Royalties
                </button>
                <button className="px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Community
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Settings Panel */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Transfer Lock Period</h2>
                        <p className="text-gray-600 dark:text-gray-400">Prevent immediate resales by requiring buyers to hold the watch for a minimum period</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Lock Period
                          </label>
                          <span className="text-3xl font-black text-amber-600 dark:text-amber-400">{transferLockMonths} months</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="12"
                          value={transferLockMonths}
                          onChange={(e) => setTransferLockMonths(parseInt(e.target.value))}
                          className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                        />
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-2">
                          <span>1 month</span>
                          <span>6 months</span>
                          <span>12 months</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">Earliest Transfer Date</p>
                            <p className="text-2xl font-black text-blue-700 dark:text-blue-300">
                              {new Date(Date.now() + transferLockMonths * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </p>
                            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">Buyer must wait until this date before reselling</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                        <button
                          onClick={() => advanceStep()}
                          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <Check className="w-5 h-5" />
                          <span>Save Anti-Flipping Rules</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Why This Matters</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Protect Your Community</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Keep genuine collectors, filter out flippers</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Stable Pricing</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Prevent rapid price inflation from speculation</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Brand Integrity</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Maintain your brand's reputation and values</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
                    <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-3">💡 Recommended</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Most creators set a {transferLockMonths >= 6 ? '6-12' : '3-6'} month lock period to balance collector freedom with anti-flipping protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Configure Dynamic Royalties */}
          {currentStep === 2 && (
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Kudoke 2 Salmon Dial</span>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">Royalty Settings</span>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Royalty Configuration</h1>
                  <p className="text-gray-600 dark:text-gray-400">Set your perpetual revenue stream from every resale</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-800">
                <button className="px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Basic Info
                </button>
                <button className="px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Anti-Flipping
                </button>
                <button className="px-4 py-3 text-sm font-semibold text-amber-600 dark:text-amber-400 border-b-2 border-amber-600 dark:border-amber-400">
                  Royalties
                </button>
                <button className="px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  Community
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Configuration Panel */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Royalty Rate */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Percent className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dynamic Royalty Rates</h2>
                        <p className="text-gray-600 dark:text-gray-400">Set time-based rates that reward patient collectors</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Base Royalty Rate
                        </label>
                        <span className="text-3xl font-black text-amber-600 dark:text-amber-400">{royaltyRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        value={royaltyRate}
                        onChange={(e) => setRoyaltyRate(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-2">
                        <span>5%</span>
                        <span>25%</span>
                        <span>50%</span>
                      </div>
                    </div>

                    {/* Royalty Tiers */}
                    <div className="space-y-3">
                      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-amber-900 dark:text-amber-100">Year 1 Resale</p>
                            <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">Higher rate discourages quick flipping</p>
                          </div>
                          <span className="text-3xl font-black text-amber-600 dark:text-amber-400">{(royaltyRate * 0.9).toFixed(0)}%</span>
                        </div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-orange-900 dark:text-orange-100">Year 2 Resale</p>
                            <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">Moderate rate for medium-term holders</p>
                          </div>
                          <span className="text-3xl font-black text-orange-600 dark:text-orange-400">{(royaltyRate * 0.6).toFixed(0)}%</span>
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-green-900 dark:text-green-100">Year 3+ Resale</p>
                            <p className="text-xs text-green-700 dark:text-green-300 mt-1">Lowest rate rewards true collectors</p>
                          </div>
                          <span className="text-3xl font-black text-green-600 dark:text-green-400">{(royaltyRate * 0.15).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Projection */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Projected Lifetime Value</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Annual production: 100 watches</span>
                        <span className="font-semibold text-gray-900 dark:text-white">100 units</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Avg. resales per watch:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">2x</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Avg. royalty per resale:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">CHF 3,832</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-amber-300 dark:border-amber-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lifetime Revenue Potential</p>
                      <p className="text-4xl font-black text-amber-600 dark:text-amber-400">CHF 766,400</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">100% margin. Perpetual. Automatic.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => advanceStep()}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Save Royalty Configuration</span>
                  </button>
                </div>

                {/* Info Panel */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">How It Works</h3>
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <p>Royalties are automatically calculated and collected on every resale through the Faircut network.</p>
                      <p>Dynamic rates decrease over time, rewarding collectors who hold longer while maintaining your revenue stream.</p>
                      <p>All transactions are transparent and immutable on the blockchain.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Pro Tip</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Setting {royaltyRate}% means you earn CHF {Math.round((23760 - 11000) * (royaltyRate / 100)).toLocaleString()} on a watch that sells from CHF 11,000 to CHF 23,760.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Dashboard - Resale Notification */}
          {currentStep === 3 && (
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <span className="text-gray-900 dark:text-white font-medium">Dashboard</span>
              </div>

              <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Overview of your products and sales</p>
              </div>

              {/* Resale Notification Banner */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Resale Detected!</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Your Kudoke 2 Salmon Dial (#042) has been resold on the secondary market. Royalty payment processing.</p>
                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Cards */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Royalties</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">CHF 3,832</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ New payment pending</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Active Products</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">1</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Kudoke 2 Salmon Dial</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Resales</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">1</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Just now</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⌚</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">Kudoke 2 Salmon Dial #042</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Resold on secondary market</p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-500">2 min ago</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Original: </span>
                          <span className="font-semibold text-gray-900 dark:text-white">CHF 11,000</span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Resale: </span>
                          <span className="font-semibold text-amber-600 dark:text-amber-400">CHF 23,760</span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Your Royalty: </span>
                          <span className="font-semibold text-green-600 dark:text-green-400">CHF 3,832</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment Received View (after modal) */}
          {currentStep === 4 && (
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <span className="text-gray-900 dark:text-white font-medium">Dashboard</span>
              </div>

              <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Overview of your products and sales</p>
              </div>

              {/* Success Banner */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border-2 border-green-500 dark:border-green-400 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Payment Received!</h3>
                    <p className="text-green-700 dark:text-green-300 mb-2">CHF 3,832 has been transferred to your wallet</p>
                    <p className="text-sm text-green-600 dark:text-green-400">100% margin revenue. No costs. Perpetual earnings.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Updated Stats Cards */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Royalties</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">CHF 3,832</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Paid</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Active Products</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">1</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Kudoke 2 Salmon Dial</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Resales</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">1</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">5 min ago</p>
                </div>
              </div>

              {/* Lifetime Value Projection */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-800 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Projected Lifetime Value</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">If each of your 100 annual watches resells 2x:</p>
                    <p className="text-5xl font-black text-amber-600 dark:text-amber-400 mb-2">CHF 766,400</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Lifetime royalty revenue potential</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">100 watches × 2 resales</span>
                      <span className="font-semibold text-gray-900 dark:text-white">200 transactions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Avg royalty per resale</span>
                      <span className="font-semibold text-gray-900 dark:text-white">CHF 3,832</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Your margin</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => advanceStep()}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Continue to Community</span>
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </button>
            </div>
          )}

          {/* Step 5: Community Dashboard */}
          {currentStep === 5 && (
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <span className="text-gray-900 dark:text-white font-medium">Community</span>
              </div>

              <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Owner Community</h1>
                <p className="text-gray-600 dark:text-gray-400">Stay connected with all your product owners</p>
              </div>

              {/* New Member Banner */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">New Member Joined!</h3>
                    <p className="text-purple-700 dark:text-purple-300">The buyer of Kudoke 2 #042 has been automatically added to your owner community.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Community Stats */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Members</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">2</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">+ 1 today</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Engagement</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">High</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Active community</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Verified Owners</span>
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white">100%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">All authentic</p>
                </div>
              </div>

              {/* Community Members */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Community Members</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">John Doe</h4>
                        <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">New</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Owns: Kudoke 2 Salmon Dial #042</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Joined 5 minutes ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      MR
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Maria Reseller</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Original owner: Kudoke 2 Salmon Dial #042</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Member since product launch</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-green-900 dark:text-green-100 mb-2">Demo Complete!</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">You've experienced the full creator journey with Faircut</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">What You've Accomplished:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Attached digital passport</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Set anti-flipping rules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Configured dynamic royalties</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Earned CHF 3,832 royalty</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Auto royalty collection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Community connected</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/demo')}
                  className="w-full mt-6 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
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
