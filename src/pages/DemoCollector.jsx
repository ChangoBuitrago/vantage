import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Shield, FileText, Users, Check, TrendingDown, ChevronRight, ChevronLeft, ShoppingBag, Wallet, ArrowRight, Eye } from 'lucide-react';

export default function DemoCollector() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [watchSelected, setWatchSelected] = useState(false);
  const [passportViewed, setPassportViewed] = useState(false);
  const [authenticityVerified, setAuthenticityVerified] = useState(false);
  const [serviceHistoryViewed, setServiceHistoryViewed] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [communityJoined, setCommunityJoined] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const totalSteps = 6;

  // Reset on mount
  useEffect(() => {
    setCurrentStep(0);
    setWatchSelected(false);
    setPassportViewed(false);
    setAuthenticityVerified(false);
    setServiceHistoryViewed(false);
    setPurchaseCompleted(false);
    setCommunityJoined(false);
    setActiveTab('overview');
  }, []);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepAction = (step) => {
    switch(step) {
      case 0:
        setWatchSelected(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 1:
        setPassportViewed(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 2:
        setAuthenticityVerified(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 3:
        setServiceHistoryViewed(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 4:
        setPurchaseCompleted(true);
        setTimeout(() => handleNext(), 1000);
        break;
      case 5:
        setCommunityJoined(true);
        break;
    }
  };

  return (
    <>
      {/* Faircut Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
          Faircut
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i <= currentStep
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/demo')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Demo Selection</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              Collector <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Interactive simulation: Buy, own, and sell watches with complete confidence
            </p>
          </div>

          {/* Step 0: Browse Watches */}
          {currentStep === 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 1: Browse Verified Watches</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Find watches with digital passports in the open secondary market</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">Digital Passport Verified</span>
                  </div>
                </div>

                {!watchSelected ? (
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer"
                    onClick={() => handleStepAction(0)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">⌚</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Kudoke</p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Kudoke 2 Salmon Dial</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Edition #042 / 100</p>
                          </div>
                          <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-300 dark:border-green-700">
                            <Check className="w-3.5 h-3.5" />
                            Verified
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-500">Price</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">CHF 23,760</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-500">Digital Passport</p>
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Included</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Click to view digital passport details</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-900 dark:text-green-100">Watch Selected!</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Now viewing digital passport details</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 1: View Digital Passport */}
          {currentStep === 1 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 2: View Digital Passport</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Review the immutable digital passport attached to this watch</p>
              </div>

              {!passportViewed ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700 mb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">⌚</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Kudoke</p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Kudoke 2 Salmon Dial</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Edition #042 / 100</p>
                          </div>
                          <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-300 dark:border-green-700">
                            <Check className="w-3.5 h-3.5" />
                            Verified
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                          activeTab === 'overview'
                            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                            : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => setActiveTab('history')}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                          activeTab === 'history'
                            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                            : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        Service History
                      </button>
                      <button
                        onClick={() => setActiveTab('warranty')}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                          activeTab === 'warranty'
                            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                            : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        Warranty
                      </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'overview' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                          <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Authenticity:</strong> Verified by Kudoke
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                          <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Service Log:</strong> Complete history
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                          <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Warranty:</strong> Transferable
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                          <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Community:</strong> Owner perks included
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleStepAction(1)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Complete Passport</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100">Digital Passport Verified</p>
                        <p className="text-sm text-green-700 dark:text-green-300">All information verified on-chain. Immutable. Forever.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Complete ownership history:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Authenticated by Kudoke</li>
                      <li>• Complete service history</li>
                      <li>• Transferable warranty</li>
                      <li>• Owner community access</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Verify Authenticity */}
          {currentStep === 2 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 3: Verify Authenticity</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Confirm the watch is genuine with verified authenticity</p>
              </div>

              {!authenticityVerified ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                        <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Authenticity Verification</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Verified by Kudoke</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Ownership Chain:</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Kudoke (Original Maker)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">First Owner (Verified)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-blue-600 dark:border-blue-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">You (Current Owner)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">No counterfeit concerns. Buy with complete confidence.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(2)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Verify Authenticity</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100">Authenticity Verified!</p>
                        <p className="text-sm text-green-700 dark:text-green-300">Verified by Kudoke. Immutable record on-chain.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Review Service History */}
          {currentStep === 3 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 4: Review Service History</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">View complete service history and condition reports</p>
              </div>

              {!serviceHistoryViewed ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                        <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Service History</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Complete immutable record</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Initial Service</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">Jan 2024</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Kudoke Authorized Service Center - Full service completed</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Condition Report</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">Jun 2024</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Excellent condition - No issues reported</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Warranty Status</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">Active</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Transferable warranty - Valid until Dec 2026</p>
                      </div>
                    </div>
                    <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Know exactly what you're buying. No surprises.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(3)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Review Service History</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100">Service History Verified!</p>
                        <p className="text-sm text-green-700 dark:text-green-300">Complete history reviewed. All records verified.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Complete Purchase */}
          {currentStep === 4 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 5: Complete Purchase</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Purchase with confidence - digital passport transfers automatically</p>
              </div>

              {!purchaseCompleted ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Purchase Summary</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Kudoke 2 Salmon Dial</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">CHF 23,760</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Includes digital passport</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Authenticity verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Service history reviewed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Transferable warranty included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Digital passport transfers automatically</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Royalties handled behind the scenes. You just enjoy your watch.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(4)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Wallet className="w-5 h-5" />
                    <span>Complete Purchase</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100 text-xl">Purchase Complete!</p>
                        <p className="text-green-700 dark:text-green-300">Digital passport transferred to you automatically</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">What happens next:</p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>Digital passport now in your wallet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>Access to creator's owner community</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>Service history updates automatically</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>Easy resale with built-in royalties</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Join Community */}
          {currentStep === 5 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 6: Join Community</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Access the creator's owner community and exclusive perks</p>
              </div>

              {!communityJoined ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Kudoke Owner Community</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Join fellow owners</p>
                      </div>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Community Benefits:</p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Early access to new releases</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Exclusive events & workshops</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Direct connection to maker</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Owner network access</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Be part of something bigger than just owning a watch.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(5)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>Join Community</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100 text-xl">Welcome to the Community!</p>
                        <p className="text-green-700 dark:text-green-300">You're now part of the Kudoke owner network</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Your Complete Experience:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Verified authenticity & ownership history</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Complete service history & warranties</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Digital passport in your wallet</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Connected to creator's community</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Seamless resale with built-in royalties</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                currentStep === 0
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <span>Next Step</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/demo')}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <span>Back to Demo Selection</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
