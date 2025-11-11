import React, { useState } from 'react';
import { ArrowRight, Info, Shield, Percent, Lock, Gift, Calendar } from 'lucide-react';

export default function CreatorStep1({ setCurrentStep }) {
  const [royaltyRate, setRoyaltyRate] = useState(5);
  const [transferLockDays, setTransferLockDays] = useState(365);

  return (
    <div className="px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Configure Digital Passport
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Set smart rules and benefits for Le Regulateur Louis Erard x Alain Silberstein
          </p>
        </div>

        {/* Watch Preview */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-6 flex items-center gap-4">
          <img
            src="/faircut/watch-thumb-0.jpg"
            alt="Watch"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Le Regulateur Louis Erard x Alain Silberstein
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Serial: 42/178 • Ref: LE78229AA04</p>
          </div>
        </div>

        {/* Configuration Sections */}
        <div className="space-y-6">
          {/* Resale Royalty */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Resale Royalty</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Percentage of future resale prices that returns to your brand
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Royalty Rate</label>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{royaltyRate}%</span>
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
                    <span>0%</span>
                    <span>15%</span>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                  <p className="text-sm text-purple-900 dark:text-purple-200">
                    Example: If watch resells for €5,000, you earn €{(5000 * royaltyRate / 100).toFixed(0)} in royalties
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Lock */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Transfer Lock Period</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Minimum days owner must wait before transferring to prevent immediate flipping
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lock Period</label>
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{transferLockDays} days</span>
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
                    <span>2 years</span>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                  <p className="text-sm text-orange-900 dark:text-orange-200">
                    Owner can transfer after {Math.floor(transferLockDays / 30)} months ({transferLockDays} days)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Benefits */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Exclusive Owner Benefits</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Select benefits that verified owners will receive
                </p>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Free Annual Service</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Complimentary servicing at authorized centers</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Extended Warranty</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">5 years international warranty coverage</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Collector Events Access</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">VIP invitations to brand events and launches</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Early Access to New Releases</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Priority purchasing for limited editions</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Verification & Authentication */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Authentication Details</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Verification data that will be permanently recorded
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Serial Number</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">42/178</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reference</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">LE78229AA04</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Production Date</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">October 2025</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Movement</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">ETA 2824-2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button
            onClick={() => setCurrentStep(2)}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Continue to Issue Passport</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
