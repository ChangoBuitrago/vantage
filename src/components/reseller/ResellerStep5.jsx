import React from 'react';
import { Home, ChevronRight, Shield, Percent, Clock, Send, Package, TrendingUp, DollarSign } from 'lucide-react';

export default function ResellerStep5({ setCurrentStep }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Transfers</span>
            <ChevronRight className="w-4 h-4" />
            <span>Review Transfer</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review Transfer</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Confirm transaction details and creator royalty</p>
        </div>

        {/* Transfer Summary Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Watch Header */}
          <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-slate-700 overflow-hidden p-2">
                <img
                  src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                  alt="Le Régulateur Blanc"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
                <span className="text-2xl" style={{display: 'none'}}>⌚</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Louis Erard x Alain Silberstein</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Le Régulateur Blanc Edition #042</p>
              </div>
            </div>
          </div>
          
          {/* Transaction Details */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Transaction Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Package className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Purchase Price</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">CHF 3,000</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Send className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Sale Price</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">CHF 6,500</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="text-xs text-green-600 dark:text-green-400 mb-0.5">Profit</p>
                  <p className="text-base font-bold text-green-600 dark:text-green-400">CHF 3,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Royalty */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Creator Royalty
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Louis Erard receives 90% of profit for transfers within the first year of ownership
          </p>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Your Profit</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">CHF 3,500</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Percent className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Royalty Rate (Year 1)</p>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">90%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-400 dark:border-purple-600">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className="text-xs text-purple-700 dark:text-purple-300 font-semibold">Royalty Amount</p>
                  <p className="text-base font-bold text-purple-600 dark:text-purple-400">CHF 3,150</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 dark:text-gray-400">
                This royalty is automatically calculated and will be deducted from the sale price upon transfer completion
              </p>
            </div>
          </div>
        </div>

        {/* Your Net Proceeds */}
        <div className="bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            Your Net Proceeds
          </h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-3 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-1 min-w-0 flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">Sale Price</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">CHF 6,500</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-1 min-w-0 flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">Original Purchase</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">- CHF 3,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-1 min-w-0 flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">Creator Royalty (90%)</p>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">- CHF 3,150</p>
              </div>
            </div>
          </div>
          <div className="h-px bg-gray-200 dark:bg-gray-700 mb-4"></div>
          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex-1 min-w-0 flex items-center justify-between">
              <p className="text-base font-bold text-gray-900 dark:text-white">Your Net Profit</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">CHF 350</p>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
            <span className="font-semibold text-green-600 dark:text-green-400">12% return</span> on your investment after royalty
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setCurrentStep(5)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Send className="w-5 h-5" />
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

