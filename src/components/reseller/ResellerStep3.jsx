import React from 'react';
import { Home, ChevronRight, Shield, Calendar, Hash, ExternalLink, Check, Award, Package, FileText, Edit3, Tag, Baseline, Clock, Percent, Wrench, Users } from 'lucide-react';

export default function ResellerStep3({ setCurrentStep }) {
  // Helper functions
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  // Passport data
  const watchMintTimestamp = new Date('2024-10-15').getTime();
  const transferLockEndDateTimestamp = new Date('2025-04-15').getTime(); // 6 months after purchase
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
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-800 overflow-hidden mb-6">
          {/* Header with Brand and Badge */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 px-6 py-4 border-b border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold">Louis Erard</span>
                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-0.5">Le Régulateur x Alain Silberstein</h3>
              </div>
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-300 dark:border-green-700">
                <Check className="w-4 h-4" />
                Verified
              </div>
            </div>
          </div>
          
          {/* Main Content Flex Container */}
          <div className="flex flex-col lg:flex-row gap-6 p-6 items-start">
            {/* Left Column: Core Info + Rules */}
            <div className="flex-1 space-y-4">
              
              {/* Watch Details & Image */}
              <div className="flex gap-6 items-start">
                {/* Details Block */}
                <div className="space-y-3 text-sm flex-1">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600 dark:text-purple-500 flex-shrink-0"/>
                    <span className="text-gray-500 dark:text-gray-400">Owner:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Maria Smith</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-purple-600 dark:text-purple-500 flex-shrink-0"/>
                    <span className="text-gray-500 dark:text-gray-400">Ref:</span>
                    <span className="font-mono font-semibold text-gray-900 dark:text-white">85358TT01.BTT83</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-purple-600 dark:text-purple-500 flex-shrink-0"/>
                    <span className="text-gray-500 dark:text-gray-400">Edition:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">#042 / 178</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-purple-600 dark:text-purple-500 flex-shrink-0"/>
                    <span className="text-gray-500 dark:text-gray-400">Serial:</span>
                    <span className="font-mono font-semibold text-gray-900 dark:text-white">LE-AS-2024-042</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-500 flex-shrink-0"/>
                    <span className="text-gray-500 dark:text-gray-400">Issued:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{formatDate(watchMintTimestamp)}</span>
                  </div>
                </div>
                {/* Watch Image */}
                <div className="w-32 h-auto flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 p-3 border-2 border-purple-200 dark:border-purple-800 shadow-md">
                  <img
                    src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                    alt="Watch"
                    className="max-w-full h-auto object-contain"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x120/e2e8f0/cbd5e1?text=Watch'; }}
                  />
                </div>
              </div>

              {/* Smart Rules Display */}
              <div className="pt-3 mt-3 border-t-2 border-gray-200 dark:border-gray-700 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-0.5 h-4 bg-purple-500 dark:bg-purple-600 rounded-full"></div>
                  <p className="text-xs text-gray-900 dark:text-white uppercase tracking-wider font-bold">Smart Rules</p>
                </div>
                
                {/* Base Resale Price */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Baseline className="w-4 h-4 text-purple-600 dark:text-purple-500 flex-shrink-0"/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Base Resale Price</span>
                  </div>
                  <span className="font-mono text-sm tabular-nums font-bold text-gray-900 dark:text-white">CHF {formatNumber(3000)}</span>
                </div>
                
                {/* Transfer Lock Rule Display */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 flex-shrink-0 ${isTransferLockActive ? 'text-red-600 dark:text-red-500' : 'text-purple-600 dark:text-purple-500'}`}/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Transfer Lock</span>
                  </div>
                  <span className={`text-sm font-bold ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                    {isTransferLockActive ? 'Active' : formatDate(transferLockEndDateTimestamp)}
                  </span>
                </div>
                
                {/* Royalty Rules Display */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Percent className={`w-4 h-4 flex-shrink-0 ${activeRoyaltyTier === 'Year 1' ? 'text-purple-600 dark:text-purple-500' : 'text-gray-500 dark:text-gray-400'}`}/>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Year 1 Royalty</span>
                    </div>
                    <span className={`font-mono text-sm font-bold ${activeRoyaltyTier === 'Year 1' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>90%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Percent className={`w-4 h-4 flex-shrink-0 ${activeRoyaltyTier === 'Year 2' ? 'text-purple-600 dark:text-purple-500' : 'text-gray-500 dark:text-gray-400'}`}/>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Year 2 Royalty</span>
                    </div>
                    <span className={`font-mono text-sm font-bold ${activeRoyaltyTier === 'Year 2' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>60%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Percent className={`w-4 h-4 flex-shrink-0 ${activeRoyaltyTier === 'Year 3+' ? 'text-purple-600 dark:text-purple-500' : 'text-gray-500 dark:text-gray-400'}`}/>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Year 3+ Royalty</span>
                    </div>
                    <span className={`font-mono text-sm font-bold ${activeRoyaltyTier === 'Year 3+' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>15%</span>
                  </div>
                </div>
                
                {/* Service Log Status */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Wrench className={`w-4 h-4 flex-shrink-0 ${serviceLogStatus === "Verified" ? 'text-green-600 dark:text-green-500' : 'text-purple-600 dark:text-purple-500'}`}/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Service Log</span>
                  </div>
                  <span className={`text-sm font-bold ${serviceLogStatus === "Verified" ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>{serviceLogStatus}</span>
                </div>
                
                {/* Community Access Status */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Users className={`w-4 h-4 flex-shrink-0 ${communityAccessStatus === "Enabled" ? 'text-green-600 dark:text-green-500' : 'text-purple-600 dark:text-purple-500'}`}/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Community Access</span>
                  </div>
                  <span className={`text-sm font-bold ${communityAccessStatus === "Enabled" ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>{communityAccessStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Rules & Benefits Tiles */}
        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest font-medium text-center">Smart Rules & Benefits</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* Anti-Flipping Rules */}
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-500"/>
              <p className="text-sm font-medium mb-2">Anti-Flipping Rules</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex-grow">Implement transfer locks (e.g., first 6 months) to discourage immediate speculation.</p>
            </div>
            {/* Dynamic Royalties */}
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center">
              <Percent className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-500"/>
              <p className="text-sm font-medium mb-2">Dynamic Royalties</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex-grow">Automated time-based royalties on every resale, ensuring perpetual revenue stream for the brand.</p>
            </div>
            {/* Service History */}
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center">
              <Wrench className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-500"/>
              <p className="text-sm font-medium mb-2">Verified Service Log</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex-grow">Build trust & value: only official centers can update the immutable service history.</p>
            </div>
            {/* Owner Perks & Community */}
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-500"/>
              <p className="text-sm font-medium mb-2">Connected Community</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex-grow">Connect owners, offer perks, discounts & early access throughout ownership.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

