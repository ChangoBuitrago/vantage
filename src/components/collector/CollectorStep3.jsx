import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Calendar, Hash, Award, Package, FileText, Edit3, Tag, Baseline, Clock, Percent, Wrench, Users, ChevronDown, ChevronUp, ArrowRight, ArrowDown, Building2, User, MapPin, CreditCard, Settings, CheckCircle, Building, MessageSquare, Ticket, ShoppingBag, Send, AlertTriangle, X } from 'lucide-react';

export default function ResellerStep3({ setCurrentStep }) {
  // State for expandable sections
  const [expandedHistory, setExpandedHistory] = useState({});
  const [expandedBasePrice, setExpandedBasePrice] = useState(false);
  const [expandedTransferLock, setExpandedTransferLock] = useState(false);
  const [expandedRoyalties, setExpandedRoyalties] = useState(false);
  const [expandedServiceLog, setExpandedServiceLog] = useState(false);
  const [expandedCommunity, setExpandedCommunity] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showFinalConfirmModal, setShowFinalConfirmModal] = useState(false);
  const [isStolen, setIsStolen] = useState(false);
  const [confirmationText, setConfirmationText] = useState('');

  const toggleHistory = (index) => {
    setExpandedHistory(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  // Helper functions
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  // Passport data
  // John's demo: "today" is 10 Aug 2025 (showing locked state)
  const today = new Date('2025-08-10');
  
  // Watch was issued on 28 January 2025 (same as Maria's demo)
  const watchIssueDate = new Date('2025-01-28');
  const watchMintTimestamp = watchIssueDate.getTime();
  
  // Maria's lock expired on 28 July 2025 (6 months after issue)
  // John received transfer shortly after: 1 Aug 2025
  const transferDate = new Date('2025-08-01');
  const transferTimestamp = transferDate.getTime();
  
  // John's transfer lock ends on 1 Feb 2026 (6 months after his purchase, still ~6 months remaining)
  const transferLockEndDate = new Date('2026-02-01');
  const transferLockEndDateTimestamp = transferLockEndDate.getTime();
  
  const threeYearsLater = new Date(watchMintTimestamp);
  threeYearsLater.setFullYear(threeYearsLater.getFullYear() + 3);
  const nextServiceDueTimestamp = threeYearsLater.getTime(); // 3 years after creation
  const isTransferLockActive = today.getTime() < transferLockEndDateTimestamp; // TRUE - lock is active
  const activeRoyaltyTier = 'Year 1';
  const serviceLogStatus = "Verified";
  const communityAccessStatus = "Enabled";

  const ownershipHistory = [
    {
      type: 'creation',
      entity: 'Louis Erard SA',
      entityType: 'Manufacturer',
      date: watchMintTimestamp,
      location: 'Le Noirmont, Switzerland',
      details: {
        action: 'Watch Created & Certified',
        collection: 'Le Régulateur x Alain Silberstein',
        certification: 'Swiss Made Certificate',
        warranty: '3 Years International Warranty'
      }
    },
    {
      type: 'purchase',
      entity: 'Maria Reseller',
      entityType: 'Previous Owner',
      date: watchMintTimestamp,
      location: 'New York, USA',
      details: {
        action: 'First Purchase',
        seller: 'Louis Erard Authorized Dealer',
        dealerLocation: 'Bucherer New York',
        paymentMethod: 'Credit Card',
        certificateIssued: 'Digital Passport',
        purchasePrice: '3,500 CHF'
      }
    },
    {
      type: 'transfer',
      entity: 'John Collector',
      entityType: 'Current Owner',
      date: transferTimestamp,
      location: 'Los Angeles, USA',
      details: {
        action: 'Secondary Market Purchase',
        seller: 'Maria Reseller',
        platform: 'Chrono24',
        paymentMethod: 'Bank Transfer',
        passportTransferred: 'Via Faircut',
        purchasePrice: '6,500 CHF'
      }
    }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Passports</span>
            <ChevronRight className="w-4 h-4" />
            <span>Le Régulateur Blanc</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Verified ownership, automated royalties, lifetime benefits</p>
        </div>

        {/* Digital Passport Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Stolen Warning Banner */}
          {isStolen && (
            <div className="bg-red-600 dark:bg-red-700 border-b-4 border-red-700 dark:border-red-800">
              <div className="px-6 py-4 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">⚠️ REPORTED STOLEN</h3>
                  <p className="text-sm text-red-100">
                    This watch has been reported as stolen. All transfers are permanently locked. Authorities have been notified.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Hero Section with Watch Image */}
          <div className={`relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-12 ${isStolen ? 'opacity-75' : ''}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Watch Image */}
              <div className="w-64 h-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center flex-shrink-0 border-4 border-white dark:border-slate-700 overflow-hidden p-4">
                <img
                  src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                  alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
                <span className="text-8xl" style={{display: 'none'}}>⌚</span>
              </div>
              
              {/* Watch Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Louis Erard x Alain Silberstein
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Le Régulateur Blanc Edition
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Shield className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Verified Authentic</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">2nd Owner</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => !isStolen && !isTransferLockActive && setCurrentStep(4)}
                    disabled={isStolen || isTransferLockActive}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isStolen || isTransferLockActive
                        ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    {isStolen ? 'Reported Stolen' : isTransferLockActive ? 'Transfer Locked' : 'Transfer Ownership'}
                  </button>
                  <button
                    onClick={() => !isStolen && setShowReportModal(true)}
                    disabled={isStolen}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-200 ${
                      isStolen
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-400 dark:border-red-600 cursor-not-allowed'
                        : 'bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 border-red-600 dark:border-red-400'
                    }`}
                  >
                    <AlertTriangle className="w-5 h-5" />
                    {isStolen ? 'Reported Stolen' : 'Report Stolen'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Passport Details */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Passport Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {/* Owner */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Users className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Current Owner</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">John Collector</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Location</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">Los Angeles, USA</p>
                </div>
              </div>

              {/* Status */}
              <div className={`flex items-start gap-2.5 p-3 rounded-lg ${
                isStolen 
                  ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-600' 
                  : 'bg-slate-50 dark:bg-slate-800/50'
              }`}>
                <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                  isStolen 
                    ? 'text-red-600 dark:text-red-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Status</p>
                  <p className={`text-base font-bold ${
                    isStolen 
                      ? 'text-red-700 dark:text-red-400' 
                      : 'text-green-600 dark:text-green-400'
                  }`}>
                    {isStolen ? '⚠️ REPORTED STOLEN' : 'Active'}
                  </p>
                </div>
              </div>

              {/* Reference */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Reference</p>
                  <p className="text-base font-mono font-bold text-gray-900 dark:text-white">85358TT01.BTT83</p>
                </div>
              </div>

              {/* Edition Number */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Edit3 className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Edition Number</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">#042 / 178</p>
                </div>
              </div>

              {/* Serial Number */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Serial Number</p>
                  <p className="text-base font-mono font-bold text-gray-900 dark:text-white">LE-AS-2024-042</p>
                </div>
              </div>

              {/* Issue Date */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Issue Date</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">{formatDate(watchMintTimestamp)}</p>
                </div>
              </div>

              {/* Transfer Date */}
              <div className="flex items-start gap-2.5 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Transfer Date</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">{formatDate(transferTimestamp)}</p>
                </div>
              </div>
            </div>

            {/* Smart Rules */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Smart Rules
              </h4>
              
              {/* Base Resale Price */}
              <div className="mb-3">
                <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
                  <button
                    onClick={() => setExpandedBasePrice(!expandedBasePrice)}
                    className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <Baseline className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 dark:text-white">Base Resale Price</p>
                          <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">CHF {formatNumber(3000)}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedBasePrice ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Original retail price - base for calculating creator royalties
                      </p>
                    </div>
                  </button>

                  {expandedBasePrice && (
                    <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                      <div className="pt-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 px-1">
                          If you resell, royalties are calculated on profits above this base price. The creator receives a percentage based on how long you've owned the watch.
                        </p>
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Original Retail Price</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">CHF 3,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Transfer Lock */}
              <div className="mb-3">
                <div className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  isTransferLockActive 
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:border-red-400' 
                    : 'bg-slate-50 dark:bg-slate-800/50 border-gray-200 dark:border-gray-700 hover:border-purple-400'
                }`}>
                  <button
                    onClick={() => setExpandedTransferLock(!expandedTransferLock)}
                    className={`w-full p-4 flex items-start gap-3 transition-colors ${
                      isTransferLockActive 
                        ? 'hover:bg-red-100 dark:hover:bg-red-900/30' 
                        : 'hover:bg-slate-100 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <Clock className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-purple-600 dark:text-purple-400'}`} />
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
                          <span className={`text-sm font-bold ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                            {isTransferLockActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedTransferLock ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {isTransferLockActive ? `Transfer available from ${formatDate(transferLockEndDateTimestamp)}` : 'Ready for transfer anytime'}
                      </p>
                    </div>
                  </button>

                  {expandedTransferLock && (
                    <div className={`px-4 pb-4 border-t ${isTransferLockActive ? 'border-red-200 dark:border-red-700' : 'border-gray-200 dark:border-gray-700'} bg-slate-50 dark:bg-slate-900/50`}>
                      <div className="pt-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 px-1">
                          {isTransferLockActive 
                            ? 'A 6-month waiting period helps protect the brand and ensures authentic collector ownership.' 
                            : 'The 6-month waiting period has completed. You can now transfer this watch anytime.'}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                              <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0 flex items-center justify-between">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Lock Period</p>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">6 months</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0 flex items-center justify-between">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Start Date</p>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(transferTimestamp)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0 flex items-center justify-between">
                              <p className="text-xs text-gray-500 dark:text-gray-400">End Date</p>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(transferLockEndDateTimestamp)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Royalties */}
              <div className="mb-3">
                <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg overflow-hidden hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
                  <button
                    onClick={() => setExpandedRoyalties(!expandedRoyalties)}
                    className="w-full p-4 flex items-start gap-3 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 dark:text-white">Dynamic Resale Royalties</p>
                          <span className="text-sm font-bold text-purple-600 dark:text-purple-400">90%</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedRoyalties ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Creator royalty percentage decreases over time
                      </p>
                    </div>
                  </button>

                  {expandedRoyalties && (
                    <div className="px-4 pb-4 border-t border-purple-200 dark:border-purple-700 bg-slate-50 dark:bg-slate-900/50">
                      <div className="pt-3 space-y-2">
                        <div className={`flex items-center gap-3 p-2.5 rounded-lg border ${activeRoyaltyTier === 'Year 1' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-400 dark:border-purple-600' : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700'}`}>
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Percent className={`w-4 h-4 ${activeRoyaltyTier === 'Year 1' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'}`} />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Year 1 (0-12 months)</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">90%</p>
                          </div>
                        </div>
                        <div className={`flex items-center gap-3 p-2.5 rounded-lg border ${activeRoyaltyTier === 'Year 2' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-400 dark:border-purple-600' : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700'}`}>
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Percent className={`w-4 h-4 ${activeRoyaltyTier === 'Year 2' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'}`} />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Year 2 (13-24 months)</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">60%</p>
                          </div>
                        </div>
                        <div className={`flex items-center gap-3 p-2.5 rounded-lg border ${activeRoyaltyTier === 'Year 3+' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-400 dark:border-purple-600' : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700'}`}>
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Percent className={`w-4 h-4 ${activeRoyaltyTier === 'Year 3+' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'}`} />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Year 3+ (25+ months)</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">15%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Service Log */}
              <div className="mb-3">
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden hover:border-green-400 dark:hover:border-green-500 transition-all duration-300">
                  <button
                    onClick={() => setExpandedServiceLog(!expandedServiceLog)}
                    className="w-full p-4 flex items-start gap-3 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <Wrench className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 dark:text-white">Service Log</p>
                          <span className="text-sm font-bold text-green-600 dark:text-green-400">{serviceLogStatus}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedServiceLog ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Verified maintenance history and service records
                      </p>
                    </div>
                  </button>

                  {expandedServiceLog && (
                    <div className="px-4 pb-4 border-t border-green-200 dark:border-green-700 bg-slate-50 dark:bg-slate-900/50">
                      <div className="pt-3 space-y-2">
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Last Service</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(watchMintTimestamp)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Building className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Service Center</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Louis Erard SA</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Next Service Due</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(nextServiceDueTimestamp)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Community Access */}
              <div className="mb-3">
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden hover:border-green-400 dark:hover:border-green-500 transition-all duration-300">
                  <button
                    onClick={() => setExpandedCommunity(!expandedCommunity)}
                    className="w-full p-4 flex items-start gap-3 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <Users className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 dark:text-white">Community Access</p>
                          <span className="text-sm font-bold text-green-600 dark:text-green-400">{communityAccessStatus}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedCommunity ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Owner community, exclusive events, and special offers
                      </p>
                    </div>
                  </button>

                  {expandedCommunity && (
                    <div className="px-4 pb-4 border-t border-green-200 dark:border-green-700 bg-slate-50 dark:bg-slate-900/50">
                      <div className="pt-3 space-y-2">
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Owner Forums</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Active</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Ticket className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Exclusive Events</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Invited</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Early Access Sales</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Enabled</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Ownership History */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Ownership History</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Full verified history from manufacturer to you
              </p>

              {/* Unified Provenance Chain Container */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 rounded-xl p-4 border-2 border-blue-200 dark:border-blue-800">
                <div className="relative">
                  {ownershipHistory.map((entry, index) => {
                    const isExpanded = expandedHistory[index];
                    const isLast = index === ownershipHistory.length - 1;
                    
                    return (
                      <div key={index} className={`relative flex gap-4 ${!isLast ? 'mb-5' : ''}`}>
                        {/* Avatar on the left */}
                        <div className="relative flex-shrink-0">
                          {/* Vertical line connecting avatars */}
                          {!isLast && (
                            <div className={`absolute left-1/2 top-10 bottom-[-20px] w-px -translate-x-1/2 ${
                              index === 0
                                ? 'bg-gradient-to-b from-blue-400/60 to-purple-400/60 dark:from-blue-500/60 dark:to-purple-500/60'
                                : 'bg-gradient-to-b from-purple-400/60 to-green-400/60 dark:from-purple-500/60 dark:to-green-500/60'
                            }`}></div>
                          )}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            entry.type === 'creation' 
                              ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                              : entry.type === 'transfer'
                              ? 'bg-green-500 shadow-lg shadow-green-500/50'
                              : 'bg-purple-500 shadow-lg shadow-purple-500/50'
                          }`}>
                            {entry.type === 'creation' ? (
                              <Building2 className="w-5 h-5 text-white" />
                            ) : entry.type === 'transfer' ? (
                              <ArrowRight className="w-5 h-5 text-white" />
                            ) : (
                              <User className="w-5 h-5 text-white" />
                            )}
                          </div>
                          {/* Outer ring effect */}
                          <div className={`absolute top-0 left-0 w-10 h-10 rounded-full ${
                            entry.type === 'creation' 
                              ? 'ring-2 ring-blue-300 dark:ring-blue-600' 
                              : entry.type === 'transfer'
                              ? 'ring-2 ring-green-300 dark:ring-green-600'
                              : 'ring-2 ring-purple-300 dark:ring-purple-600'
                          }`}></div>
                        </div>

                        {/* Card content on the right */}
                        <div className="flex-1">
                          <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            {/* Header - Always Visible */}
                            <button
                              onClick={() => toggleHistory(index)}
                              className="w-full p-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                              {/* Main Info */}
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white text-base">{entry.entity}</h5>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{entry.entityType}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {entry.type === 'transfer' && (
                                      <span className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold">
                                        Current Owner
                                      </span>
                                    )}
                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-400 mt-1.5">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{formatDate(entry.date)}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{entry.location}</span>
                                  </div>
                                </div>
                              </div>
                            </button>

                            {/* Expandable Details */}
                            {isExpanded && (
                              <div className="px-3 pb-3 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                                <div className="pt-3 space-y-2">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {Object.entries(entry.details).map(([key, value]) => (
                                      <div key={key} className="bg-white dark:bg-slate-800 rounded-lg p-2.5 border border-gray-200 dark:border-gray-700">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5 uppercase tracking-wide">
                                          {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white break-all">
                                          {value}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Stolen Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full border border-red-200 dark:border-red-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Report Stolen</h3>
              </div>
              <button
                onClick={() => {
                  setShowReportModal(false);
                  setConfirmationText('');
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This feature will allow you to report your watch as stolen, which will:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Flag the watch in the system as stolen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Prevent any future transfers or transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Alert authorities and the watch community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Create a permanent record in the passport history</span>
                </li>
              </ul>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                  <strong>Warning:</strong> This action cannot be undone. Only report if your watch has been genuinely stolen.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowReportModal(false);
                    setConfirmationText('');
                  }}
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowReportModal(false);
                    setShowFinalConfirmModal(true);
                  }}
                  className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Confirm Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final Confirmation Modal */}
      {showFinalConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full border-2 border-red-500 dark:border-red-600">
            {/* Modal Header */}
            <div className="bg-red-600 dark:bg-red-700 p-6 rounded-t-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">Final Confirmation</h3>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Are you absolutely sure you want to report this watch as stolen?
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-900 dark:text-red-200 font-medium mb-3">
                  <strong>⚠️ This action is IRREVERSIBLE and will:</strong>
                </p>
                <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                  <li>• Permanently flag this watch as stolen</li>
                  <li>• Lock all transfer capabilities</li>
                  <li>• Alert law enforcement and authorities</li>
                  <li>• Notify the global watch community</li>
                  <li>• Create an immutable record in the blockchain</li>
                </ul>
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                Only proceed if you are certain this watch has been stolen.
              </p>

              {/* Confirmation Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Type <span className="font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-red-600 dark:text-red-400">STOLEN</span> to confirm:
                </label>
                <input
                  type="text"
                  value={confirmationText}
                  onChange={(e) => setConfirmationText(e.target.value)}
                  placeholder="Type STOLEN here..."
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-red-500 dark:focus:border-red-500 focus:outline-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-mono text-center text-lg"
                  autoFocus
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowFinalConfirmModal(false);
                    setConfirmationText('');
                  }}
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200"
                >
                  Go Back
                </button>
                <button
                  onClick={() => {
                    setShowFinalConfirmModal(false);
                    setIsStolen(true);
                    setConfirmationText('');
                  }}
                  disabled={confirmationText !== 'STOLEN'}
                  className={`flex-1 px-4 py-3 rounded-lg font-bold transition-all duration-200 ${
                    confirmationText === 'STOLEN'
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl cursor-pointer'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-60'
                  }`}
                >
                  Yes, Report Stolen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

