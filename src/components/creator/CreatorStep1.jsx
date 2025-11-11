import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Percent, Lock, Gift, Calendar, Package, Tag, ArrowRight, Info, CheckCircle, AlertCircle } from 'lucide-react';

export default function CreatorStep1({ setCurrentStep }) {
  const [royaltyRate, setRoyaltyRate] = useState(5);
  const [transferLockDays, setTransferLockDays] = useState(180);
  const [selectedBenefits, setSelectedBenefits] = useState(['service', 'warranty', 'events', 'early-access']);

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
          {/* Resale Royalty */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Resale Royalty</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Percentage you earn from each secondary market resale
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Royalty Rate</label>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">{royaltyRate}%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={royaltyRate}
                  onChange={(e) => setRoyaltyRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0% (No royalty)</span>
                  <span>15% (Maximum)</span>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-purple-900 dark:text-purple-200">
                    <p className="font-semibold mb-1">Example Calculation</p>
                    <p>If this watch resells for <span className="font-bold">€5,000</span>, you receive <span className="font-bold">€{(5000 * royaltyRate / 100).toFixed(0)}</span> in royalties automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Lock Period */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Transfer Lock Period</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Minimum ownership period to prevent immediate flipping
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lock Duration</label>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                      {transferLockMonths} {transferLockMonths === 1 ? 'month' : 'months'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{transferLockDays} days</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="730"
                  step="30"
                  value={transferLockDays}
                  onChange={(e) => setTransferLockDays(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>No lock</span>
                  <span>24 months</span>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-orange-900 dark:text-orange-200">
                    <p className="font-semibold mb-1">Transfer Restriction</p>
                    <p>Owners must hold the watch for at least <span className="font-bold">{transferLockMonths} months</span> before they can transfer or resell it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Benefits */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Exclusive Owner Benefits</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Benefits that verified owners will receive
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                const isSelected = selectedBenefits.includes(benefit.id);
                return (
                  <button
                    key={benefit.id}
                    onClick={() => toggleBenefit(benefit.id)}
                    className={`w-full flex items-start gap-3 p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}>
                      {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
                    }`} />
                    <div className="flex-1 text-left">
                      <p className={`font-semibold ${
                        isSelected ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-white'
                      }`}>
                        {benefit.label}
                      </p>
                      <p className={`text-sm ${
                        isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {benefit.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedBenefits.length === 0 && (
              <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    Consider adding at least one benefit to increase owner engagement and retention
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Configuration Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Collection</span>
                <span className="font-semibold text-gray-900 dark:text-white">Le Regulateur x Silberstein (178 pieces)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Resale Royalty</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">{royaltyRate}% per resale</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Transfer Lock</span>
                <span className="font-semibold text-orange-600 dark:text-orange-400">{transferLockMonths} months</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Owner Benefits</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedBenefits.length} selected</span>
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
