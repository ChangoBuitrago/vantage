import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Percent, Lock, Gift, Calendar, Package, Tag, ArrowRight, Info, CheckCircle, AlertCircle, Settings, ChevronDown } from 'lucide-react';

export default function CreatorStep1({ setCurrentStep }) {
  const [royaltyRate, setRoyaltyRate] = useState(5);
  const [transferLockDays, setTransferLockDays] = useState(180);
  const [selectedBenefits, setSelectedBenefits] = useState(['service', 'warranty', 'events', 'early-access']);
  const [expandedRoyalty, setExpandedRoyalty] = useState(false);
  const [expandedTransferLock, setExpandedTransferLock] = useState(false);

  const toggleBenefit = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const benefits = [
    { id: 'service', label: 'Free Annual Service', description: 'Complimentary servicing at authorized centers', icon: Package },
    { id: 'warranty', label: 'Extended Warranty', description: '5 years international warranty coverage', icon: Shield },
    { id: 'events', label: 'Collector Events Access', description: 'VIP invitations to brand events and launches', icon: Calendar },
    { id: 'early-access', label: 'Early Access to New Releases', description: 'Priority purchasing for limited editions', icon: Gift }
  ];

  const transferLockMonths = Math.floor(transferLockDays / 30);

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Passports</span>
            <ChevronRight className="w-4 h-4" />
            <span>Create New</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Digital Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Configure smart rules and benefits for your new collection</p>
        </div>

        {/* Collection Summary Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Watch Image */}
              <div className="w-40 h-40 bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-slate-700 overflow-hidden p-3">
                <img
                  src="/faircut/watch-thumb-0.jpg"
                  alt="Le Regulateur Louis Erard x Alain Silberstein"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Collection Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Le Regulateur Louis Erard x Alain Silberstein
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Limited Edition Collaboration - 178 Pieces
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Tag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Ref: LE78229AA04</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Retail: €3,850</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Rules Configuration */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Smart Rules
            </h4>
            
            <div className="space-y-3">
              {/* Resale Royalty */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300">
                <button
                  onClick={() => setExpandedRoyalty(!expandedRoyalty)}
                  className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <Percent className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Resale Royalty</p>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{royaltyRate}%</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedRoyalty ? 'rotate-180' : ''}`} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Percentage earned on each secondary market resale
                    </p>
                  </div>
                </button>

                {expandedRoyalty && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                    <div className="pt-3 space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 px-1">
                        Set the royalty percentage you'll receive automatically on each resale. This applies to all future transfers of watches in this collection.
                      </p>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          min="0"
                          max="15"
                          value={royaltyRate}
                          onChange={(e) => setRoyaltyRate(Number(e.target.value))}
                          className="w-24 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                        />
                        <span className="text-gray-600 dark:text-gray-400">%</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">of resale price</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Transfer Lock */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300">
                <button
                  onClick={() => setExpandedTransferLock(!expandedTransferLock)}
                  className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {Math.floor(transferLockDays / 30)} months
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedTransferLock ? 'rotate-180' : ''}`} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Minimum ownership period before transfer is allowed
                    </p>
                  </div>
                </button>

                {expandedTransferLock && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                    <div className="pt-3 space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 px-1">
                        Set minimum holding period to prevent immediate flipping and encourage genuine collecting.
                      </p>
                      <select
                        value={transferLockDays}
                        onChange={(e) => setTransferLockDays(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="0">No lock</option>
                        <option value="90">3 months</option>
                        <option value="180">6 months</option>
                        <option value="365">12 months</option>
                        <option value="730">24 months</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Owner Benefits */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Owner Benefits
            </h4>
            
            <div className="space-y-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                const isSelected = selectedBenefits.includes(benefit.id);
                return (
                  <div
                    key={benefit.id}
                    className={`bg-slate-50 dark:bg-slate-800/50 border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      isSelected 
                        ? 'border-emerald-400 dark:border-emerald-500' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <button
                      onClick={() => toggleBenefit(benefit.id)}
                      className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400'
                      }`} />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-semibold ${
                            isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {benefit.label}
                          </p>
                          <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                            isSelected ? 'bg-emerald-600' : 'bg-gray-200 dark:bg-gray-700'
                          }`}>
                            {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {selectedBenefits.length === 0 && (
              <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    Consider selecting benefits to increase owner engagement
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Summary Card */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Configuration Summary</h4>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Collection</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Le Regulateur x Silberstein</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Edition Size</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">178 pieces</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Resale Royalty</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{royaltyRate}%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Transfer Lock</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{Math.floor(transferLockDays / 30)} months</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Owner Benefits</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{selectedBenefits.length} selected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setCurrentStep(1)}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <span>Continue to Issue Passport</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
