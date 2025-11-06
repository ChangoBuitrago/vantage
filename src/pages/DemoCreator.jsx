import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Percent, Shield, TrendingUp, Check, ChevronRight, ChevronLeft, Calendar, Wallet, Users, ArrowRight } from 'lucide-react';

export default function DemoCreator() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [transferLockMonths, setTransferLockMonths] = useState(6);
  const [royaltyRate, setRoyaltyRate] = useState(30);
  const [passportAttached, setPassportAttached] = useState(false);
  const [rulesSet, setRulesSet] = useState(false);
  const [royaltyConfigured, setRoyaltyConfigured] = useState(false);
  const [resaleHappened, setResaleHappened] = useState(false);
  const [royaltyReceived, setRoyaltyReceived] = useState(false);
  const [communityConnected, setCommunityConnected] = useState(false);

  const totalSteps = 6;

  // Reset on mount
  useEffect(() => {
    setCurrentStep(0);
    setPassportAttached(false);
    setRulesSet(false);
    setRoyaltyConfigured(false);
    setResaleHappened(false);
    setRoyaltyReceived(false);
    setCommunityConnected(false);
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
        setPassportAttached(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 1:
        setRulesSet(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 2:
        setRoyaltyConfigured(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 3:
        setResaleHappened(true);
        setTimeout(() => handleNext(), 1000);
        break;
      case 4:
        setRoyaltyReceived(true);
        setTimeout(() => handleNext(), 800);
        break;
      case 5:
        setCommunityConnected(true);
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
                    ? 'bg-amber-600 dark:bg-amber-400'
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
              Creator <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Interactive simulation: See how you earn perpetual royalties from every resale
            </p>
          </div>

          {/* Step 0: Attach Digital Passport */}
          {currentStep === 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 1: Attach Digital Passport</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Create your watch and attach an immutable digital passport</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⌚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Watch</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Limited Edition #042 / 100</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">CHF 11,000</p>
                  </div>
                </div>

                {!passportAttached ? (
                  <button
                    onClick={() => handleStepAction(0)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Attach Digital Passport</span>
                  </button>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 flex items-center gap-3 animate-pulse">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-900 dark:text-green-100">Digital Passport Attached!</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Immutable record created. Royalty system enabled forever.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 1: Set Anti-Flipping Rules */}
          {currentStep === 1 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 2: Set Anti-Flipping Rules</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Prevent immediate speculation by setting a transfer lock period</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Transfer Lock Period: {transferLockMonths} months
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={transferLockMonths}
                    onChange={(e) => setTransferLockMonths(parseInt(e.target.value))}
                    className="w-full h-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${(transferLockMonths / 12) * 100}%, #e5e7eb ${(transferLockMonths / 12) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <span>1 month</span>
                    <span>12 months</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Transfer locked until:</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {new Date(Date.now() + transferLockMonths * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Prevents immediate flipping by resellers</p>
                </div>

                {!rulesSet ? (
                  <button
                    onClick={() => handleStepAction(1)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Clock className="w-5 h-5" />
                    <span>Set Anti-Flipping Rules</span>
                  </button>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-900 dark:text-green-100">Rules Applied!</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Transfer locked for {transferLockMonths} months. Real collectors only.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Configure Dynamic Royalties */}
          {currentStep === 2 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 3: Configure Dynamic Royalties</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Set time-based royalty rates that reward patient collectors</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Base Royalty Rate: {royaltyRate}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={royaltyRate}
                    onChange={(e) => setRoyaltyRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${(royaltyRate / 50) * 100}%, #e5e7eb ${(royaltyRate / 50) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Year 1 resale:</span>
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{(royaltyRate * 0.9).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Year 2 resale:</span>
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{(royaltyRate * 0.6).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Year 3+ resale:</span>
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{(royaltyRate * 0.15).toFixed(0)}%</span>
                  </div>
                </div>

                {!royaltyConfigured ? (
                  <button
                    onClick={() => handleStepAction(2)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Percent className="w-5 h-5" />
                    <span>Configure Dynamic Royalties</span>
                  </button>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-900 dark:text-green-100">Royalties Configured!</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Dynamic rates set. Discourages flipping, rewards patient collectors.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Watch Resale Event */}
          {currentStep === 3 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 4: Watch Resold</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Your watch has been resold on the secondary market</p>
              </div>

              {!resaleHappened ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🔔</span>
                      </div>
                      <div>
                        <p className="font-bold text-blue-900 dark:text-blue-100">Resale Notification</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">Your watch has been resold</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Original Sale</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">CHF 11,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Resale Price</p>
                        <p className="text-xl font-bold text-amber-600 dark:text-amber-400">CHF 23,760</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Reseller Profit</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">CHF 12,760</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(3)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>View Resale Details</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Reseller Profit</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">CHF 8,928</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Your Royalty ({royaltyRate}%)</p>
                        <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">CHF 3,832</p>
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Royalty automatically calculated and ready to transfer</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Royalty Payment */}
          {currentStep === 4 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 5: Royalty Received</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Your royalty has been automatically transferred</p>
              </div>

              {!royaltyReceived ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6 mb-4 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-4xl font-black text-amber-600 dark:text-amber-400 mb-2">CHF 3,832</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Royalty from this resale</p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">100% margin revenue. No cost to you.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(4)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Wallet className="w-5 h-5" />
                    <span>Receive Royalty Payment</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100 text-xl">Payment Received!</p>
                        <p className="text-green-700 dark:text-green-300">CHF 3,832 transferred to your wallet</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Lifetime Value Calculation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">If each of your 100 annual watches resells 2x:</p>
                    <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">CHF 766,400 lifetime value</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Per resale. Perpetual. 100% margin revenue.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Community Connection */}
          {currentStep === 5 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Step 6: Community Connected</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">The new owner has joined your community</p>
              </div>

              {!communityConnected ? (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">New Owner Added</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Joined your owner community</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Community Benefits:</p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Early access to new releases</li>
                        <li>• Exclusive events & perks</li>
                        <li>• Direct connection to you</li>
                        <li>• Owner network access</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStepAction(5)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>Connect Community</span>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100 text-xl">Community Connected!</p>
                        <p className="text-green-700 dark:text-green-300">All owners across the watch's lifetime are now connected</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Your Complete Setup:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Immutable digital passport attached</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Anti-flipping rules configured</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Dynamic royalties enabled</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Automatic royalty collection active</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Owner community connected</span>
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
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <span>Next Step</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/demo')}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
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
