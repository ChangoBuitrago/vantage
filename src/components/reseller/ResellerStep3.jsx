import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Calendar, Hash, Award, Package, FileText, Edit3, Tag, Baseline, Clock, Percent, Wrench, Users, ChevronDown, ChevronUp, ArrowRight, Building2, User, MapPin, CreditCard, Settings } from 'lucide-react';

export default function ResellerStep3({ setCurrentStep }) {
  // State for expandable sections
  const [expandedHistory, setExpandedHistory] = useState({});
  const [expandedRoyalties, setExpandedRoyalties] = useState(false);
  const [expandedServiceLog, setExpandedServiceLog] = useState(false);
  const [expandedCommunity, setExpandedCommunity] = useState(false);

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
  const today = new Date();
  const watchMintTimestamp = today.getTime();
  const sixMonthsLater = new Date(today);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  const transferLockEndDateTimestamp = sixMonthsLater.getTime(); // 6 months after purchase
  const threeYearsLater = new Date(today);
  threeYearsLater.setFullYear(threeYearsLater.getFullYear() + 3);
  const nextServiceDueTimestamp = threeYearsLater.getTime(); // 3 years after issue
  const isTransferLockActive = Date.now() < transferLockEndDateTimestamp;
  const activeRoyaltyTier = 'Year 1';
  const serviceLogStatus = "Verified";
  const communityAccessStatus = "Enabled";

  // Ownership History Data
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
      entity: 'Maria Smith',
      entityType: 'Owner',
      date: watchMintTimestamp,
      location: 'New York, USA',
      price: '3,500 CHF',
      details: {
        action: 'First Purchase',
        seller: 'Louis Erard Authorized Dealer',
        dealerLocation: 'Bucherer New York',
        paymentMethod: 'Credit Card',
        certificateIssued: 'Digital Passport'
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
            <span>Details</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Smart rules, immutable records, perpetual revenues—connected communities</p>
        </div>

        {/* Digital Passport Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Hero Section with Watch Image */}
          <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-12">
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
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Verified Authentic</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Dynamic Royalty</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">1st Owner</span>
                  </div>
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
                  <p className="text-base font-bold text-gray-900 dark:text-white">Maria Smith</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Location</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">New York, USA</p>
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
            </div>

            {/* Smart Rules */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Smart Rules
              </h4>
              
              {/* Base Resale Price */}
              <div className="mb-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <Baseline className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Base Resale Price</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Minimum price for royalty calculation</p>
                    </div>
                  </div>
                  <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">CHF {formatNumber(3000)}</span>
                </div>
              </div>

              {/* Transfer Lock */}
              <div className="mb-3">
                <div className={`flex items-center justify-between p-4 rounded-lg border ${isTransferLockActive ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' : 'bg-slate-50 dark:bg-slate-800/50 border-gray-200 dark:border-gray-700'}`}>
                  <div className="flex items-center gap-3">
                    <Clock className={`w-5 h-5 ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-purple-600 dark:text-purple-400'}`} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {isTransferLockActive ? `Active until ${formatDate(transferLockEndDateTimestamp)}` : 'No longer active'}
                      </p>
                    </div>
                  </div>
                  <span className={`text-lg font-bold ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                    {isTransferLockActive ? 'Active' : 'Inactive'}
                  </span>
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
                        Time-based royalty percentages automatically enforced on resale profits
                      </p>
                    </div>
                  </button>

                  {expandedRoyalties && (
                    <div className="px-4 pb-4 border-t border-purple-200 dark:border-purple-700">
                      <div className="pt-4 space-y-2">
                        <div className={`flex items-center justify-between p-3 rounded-lg ${activeRoyaltyTier === 'Year 1' ? 'bg-purple-200 dark:bg-purple-900/50 border-2 border-purple-400' : 'bg-white dark:bg-slate-800/50 border-2 border-transparent'}`}>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Year 1 (First 12 months)</span>
                          <span className={`font-mono font-bold text-lg ${activeRoyaltyTier === 'Year 1' ? 'text-purple-700 dark:text-purple-300' : 'text-gray-900 dark:text-white'}`}>90%</span>
                        </div>
                        <div className={`flex items-center justify-between p-3 rounded-lg ${activeRoyaltyTier === 'Year 2' ? 'bg-purple-200 dark:bg-purple-900/50 border-2 border-purple-400' : 'bg-white dark:bg-slate-800/50 border-2 border-transparent'}`}>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Year 2 (12-24 months)</span>
                          <span className={`font-mono font-bold text-lg ${activeRoyaltyTier === 'Year 2' ? 'text-purple-700 dark:text-purple-300' : 'text-gray-900 dark:text-white'}`}>60%</span>
                        </div>
                        <div className={`flex items-center justify-between p-3 rounded-lg ${activeRoyaltyTier === 'Year 3+' ? 'bg-purple-200 dark:bg-purple-900/50 border-2 border-purple-400' : 'bg-white dark:bg-slate-800/50 border-2 border-transparent'}`}>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Year 3+ (After 24 months)</span>
                          <span className={`font-mono font-bold text-lg ${activeRoyaltyTier === 'Year 3+' ? 'text-purple-700 dark:text-purple-300' : 'text-gray-900 dark:text-white'}`}>15%</span>
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
                        Complete maintenance and service history verified by authorized service centers
                      </p>
                    </div>
                  </button>

                  {expandedServiceLog && (
                    <div className="px-4 pb-4 border-t border-green-200 dark:border-green-700">
                      <div className="pt-4 space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Service</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(watchMintTimestamp)}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Service Center</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">Louis Erard SA</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Next Service Due</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(nextServiceDueTimestamp)}</span>
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
                        Exclusive access to the Louis Erard owners community, events, and special offers
                      </p>
                    </div>
                  </button>

                  {expandedCommunity && (
                    <div className="px-4 pb-4 border-t border-green-200 dark:border-green-700">
                      <div className="pt-4 space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Owner Forums</span>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Active</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Exclusive Events</span>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Invited</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Early Access Sales</span>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Enabled</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Ownership History */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Ownership History</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Complete provenance chain from creation to current ownership, digitally verified and tracked.
              </p>

              {/* Unified Provenance Chain Container */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
                <div className="relative">
                  {ownershipHistory.map((entry, index) => {
                    const isExpanded = expandedHistory[index];
                    const isLast = index === ownershipHistory.length - 1;
                    
                    return (
                      <div key={index} className="relative">
                        {/* Timeline connector - more prominent */}
                        {!isLast && (
                          <div className="absolute left-6 top-20 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full shadow-lg"></div>
                        )}
                        
                        <div className={`relative ${!isLast ? 'mb-4' : ''}`}>
                          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                            {/* Header - Always Visible */}
                            <button
                              onClick={() => toggleHistory(index)}
                              className="w-full p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                              {/* Icon with ring */}
                              <div className="relative flex-shrink-0">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                  entry.type === 'creation' 
                                    ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                                    : 'bg-purple-500 shadow-lg shadow-purple-500/50'
                                }`}>
                                  {entry.type === 'creation' ? (
                                    <Building2 className="w-6 h-6 text-white" />
                                  ) : (
                                    <User className="w-6 h-6 text-white" />
                                  )}
                                </div>
                                {/* Outer ring effect */}
                                <div className={`absolute inset-0 rounded-full ${
                                  entry.type === 'creation' 
                                    ? 'ring-2 ring-blue-300 dark:ring-blue-600' 
                                    : 'ring-2 ring-purple-300 dark:ring-purple-600'
                                } ring-offset-2`}></div>
                              </div>

                              {/* Main Info */}
                              <div className="flex-1 text-left">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white text-lg">{entry.entity}</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{entry.entityType}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {entry.type === 'purchase' && (
                                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold shadow-lg">
                                        Current Owner
                                      </span>
                                    )}
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mt-2">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(entry.date)}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{entry.location}</span>
                                  </div>
                                  {entry.price && (
                                    <div className="flex items-center gap-1">
                                      <CreditCard className="w-4 h-4" />
                                      <span className="font-semibold text-green-600 dark:text-green-400">{entry.price}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </button>

                            {/* Expandable Details */}
                            {isExpanded && (
                              <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                                <div className="pt-4 space-y-3">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {Object.entries(entry.details).map(([key, value]) => (
                                      <div key={key} className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
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

              {/* Traceability Info */}
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white mb-1">Full Transparency & Provenance</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Every ownership transfer, service record, and modification is permanently recorded and verified, 
                      ensuring complete transparency and authenticity verification for future owners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

