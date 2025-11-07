import React from 'react';
import { Home, ChevronRight, Shield, Percent, Clock } from 'lucide-react';

export default function ResellerStep4({ setCurrentStep }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Transfers</span>
            <ChevronRight className="w-4 h-4" />
            <span>Review Transfer</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transfer Digital Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Review and satisfy all creator rules before completing the transfer</p>
        </div>

        {/* Watch Details */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Watch Details</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-3xl">⌚</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Louis Erard x Alain Silberstein</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Le Régulateur Blanc Edition #042</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Your Purchase Price</p>
              <p className="font-semibold text-gray-900 dark:text-white">CHF 3,000</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sale Price</p>
              <p className="font-semibold text-gray-900 dark:text-white">CHF 6,500</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Your Profit</p>
              <p className="font-semibold text-green-600 dark:text-green-400">CHF 3,500</p>
            </div>
          </div>
        </div>

        {/* Creator Rules */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Louis Erard Creator Rules</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enforced by Faircut before transfer</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Royalty Rule */}
            <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Percent className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Resale Royalty</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">30% of profit must be paid to Louis Erard</p>
                <div className="bg-white dark:bg-slate-900 rounded p-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Profit:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">CHF 3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Royalty (30%):</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">CHF 1,050</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Authenticity */}
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Authenticity Verification</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Immutable proof maintained on blockchain</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-semibold">Verified ✓</span>
                </div>
              </div>
            </div>

            {/* Ownership History */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ownership History</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete transfer record on blockchain</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-semibold">Recorded ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Net Proceeds */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Your Net Proceeds</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Sale Price</span>
              <span className="font-semibold">CHF 6,500</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Original Purchase</span>
              <span className="font-semibold">- CHF 3,000</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Creator Royalty (30%)</span>
              <span className="font-semibold">- CHF 1,050</span>
            </div>
            <div className="h-px bg-green-200 dark:bg-green-800"></div>
            <div className="flex justify-between text-xl">
              <span className="font-bold text-gray-900 dark:text-white">Net Profit</span>
              <span className="font-bold text-green-600 dark:text-green-400">CHF 2,450</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
              <span className="font-semibold text-green-600 dark:text-green-400">82% return</span> on your investment
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setCurrentStep(5)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

