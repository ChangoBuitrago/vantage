import React from 'react';
import { Check, TrendingUp } from 'lucide-react';

export default function ResellerStep7({ navigate }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Transfer Complete!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Digital passport successfully transferred</p>
        </div>

        {/* Success Summary */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Your Profit Summary</h2>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Purchase Price</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">CHF 3,000</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sale Price</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">CHF 6,500</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Royalty Paid</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">CHF 1,050</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Your Net Profit</span>
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">CHF 2,450</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
              <TrendingUp className="w-5 h-5" />
              <span className="text-lg font-semibold">82% Return on Investment</span>
            </div>
          </div>
        </div>

        {/* What Happened */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What Just Happened?</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Royalty Payment Processed</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">CHF 1,050 (30% of profit) sent to Louis Erard</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Digital Passport Transferred</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">New owner now has authenticated ownership on blockchain</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Smart Rules Enforced</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">All creator rules satisfied automatically by Faircut</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Complete Message */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🎉 Demo Complete!</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You've experienced how Faircut enables profitable resales while ensuring creators earn perpetual royalties.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg font-semibold text-purple-600 dark:text-purple-400">
              ✓ Fair for Creators
            </span>
            <span className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg font-semibold text-purple-600 dark:text-purple-400">
              ✓ Profitable for Resellers
            </span>
            <span className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg font-semibold text-purple-600 dark:text-purple-400">
              ✓ Transparent for Collectors
            </span>
          </div>
        </div>

        <button
          onClick={() => navigate('/demo')}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Back to Demo Selection
        </button>
      </div>
    </div>
  );
}

