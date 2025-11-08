import React from 'react';
import { Home, ChevronRight, Shield, Calendar, Hash, Award, Package, FileText, Edit3, Tag, Baseline, Clock, Percent, Wrench, Users } from 'lucide-react';

export default function ResellerStep3({ setCurrentStep }) {
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
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Passport Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Owner */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Users className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Owner</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Maria Smith</p>
                </div>
              </div>

              {/* Reference */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Reference</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">85358TT01.BTT83</p>
                </div>
              </div>

              {/* Edition Number */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Edit3 className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Edition Number</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">#042 / 178</p>
                </div>
              </div>

              {/* Serial Number */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Tag className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Serial Number</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">LE-AS-2024-042</p>
                </div>
              </div>

              {/* Issue Date */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issue Date</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{formatDate(watchMintTimestamp)}</p>
                </div>
              </div>

              {/* Purchase Price */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-xl mt-0.5">💰</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Purchase Price</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">CHF 3,000</p>
                </div>
              </div>
            </div>

            {/* Smart Rules */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Smart Rules</h4>
              
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
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Dynamic Resale Royalties</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Time-based royalty percentages automatically enforced on resale profits
                      </p>
                      <div className="space-y-2">
                        <div className={`flex items-center justify-between p-2 rounded ${activeRoyaltyTier === 'Year 1' ? 'bg-purple-100 dark:bg-purple-900/40' : 'bg-white dark:bg-slate-800/50'}`}>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Year 1 (First 12 months)</span>
                          <span className={`font-mono font-bold ${activeRoyaltyTier === 'Year 1' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>90%</span>
                        </div>
                        <div className={`flex items-center justify-between p-2 rounded ${activeRoyaltyTier === 'Year 2' ? 'bg-purple-100 dark:bg-purple-900/40' : 'bg-white dark:bg-slate-800/50'}`}>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Year 2 (12-24 months)</span>
                          <span className={`font-mono font-bold ${activeRoyaltyTier === 'Year 2' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>60%</span>
                        </div>
                        <div className={`flex items-center justify-between p-2 rounded ${activeRoyaltyTier === 'Year 3+' ? 'bg-purple-100 dark:bg-purple-900/40' : 'bg-white dark:bg-slate-800/50'}`}>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Year 3+ (After 24 months)</span>
                          <span className={`font-mono font-bold ${activeRoyaltyTier === 'Year 3+' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Log */}
              <div className="mb-3">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Wrench className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Service Log</p>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">{serviceLogStatus}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Complete maintenance and service history verified by authorized service centers. All records are immutably stored on the blockchain.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Last Service</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(watchMintTimestamp)}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Service Center</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">Louis Erard SA</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Next Service Due</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(nextServiceDueTimestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Access */}
              <div className="mb-3">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Community Access</p>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">{communityAccessStatus}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Exclusive access to the Louis Erard owners community, events, and special offers. Connect with fellow collectors and enjoy brand perks.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Owner Forums</span>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Active</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Exclusive Events</span>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Invited</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Early Access Sales</span>
                          </div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Enabled</span>
                        </div>
                      </div>
                    </div>
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

