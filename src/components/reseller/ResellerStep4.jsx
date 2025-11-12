import React from 'react';
import { Home, RefreshCw, ArrowRight, Shield, Percent, Users } from 'lucide-react';

export default function ResellerStep4({ setCurrentStep }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <span>My Passports</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Passports</h1>
        </div>

        {/* Transfer Notification Card */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Watch Sold - Transfer Required</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Congratulations! You've sold your watch for <strong>CHF 6,500</strong>. To complete the sale and transfer the digital passport to the new owner, you must first satisfy all creator rules.
              </p>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setCurrentStep(5);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Review Transfer Requirements
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Watch Passport Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              <span className="text-6xl">⌚</span>
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Louis Erard x Alain Silberstein</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Le Régulateur Blanc Edition #042</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Purchase Price</p>
                  <p className="font-semibold text-gray-900 dark:text-white">CHF 3,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Purchase Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Oct 15, 2024</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">
                  <Shield className="w-3 h-3" />
                  <span>Verified Authentic</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs">
                  <Percent className="w-3 h-3" />
                  <span>30% Royalty</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded text-xs">
                  <Users className="w-3 h-3" />
                  <span>1st Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

