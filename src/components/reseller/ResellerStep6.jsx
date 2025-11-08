import React from 'react';
import { Home, ChevronRight, Shield, Wallet } from 'lucide-react';

export default function ResellerStep6({ handlePayRoyalty }) {
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
            <span>Payment</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pay Royalty & Transfer</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Complete payment to finalize the transfer</p>
        </div>

        {/* Payment Summary */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Payment Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Royalty to Louis Erard</span>
              <span className="font-semibold text-gray-900 dark:text-white">CHF 1,050</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Platform Fee</span>
              <span className="font-semibold text-gray-900 dark:text-white">CHF 0</span>
            </div>
            <div className="h-px bg-gray-200 dark:bg-gray-800"></div>
            <div className="flex justify-between text-xl">
              <span className="font-bold text-gray-900 dark:text-white">Total Due</span>
              <span className="font-bold text-purple-600 dark:text-purple-400">CHF 1,050</span>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold mb-1">Secure Payment</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">Payment is processed securely. The passport will be transferred immediately after payment confirmation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Payment Method</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-600 dark:border-purple-400 rounded-lg cursor-pointer">
              <div className="w-5 h-5 border-4 border-purple-600 dark:border-purple-400 rounded-full"></div>
              <Wallet className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">Crypto Wallet</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pay with ETH, USDC, or USDT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown of Proceeds */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">After Payment</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Sale proceeds you'll receive</span>
              <span className="font-semibold text-gray-900 dark:text-white">CHF 6,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Less: Royalty payment</span>
              <span className="font-semibold text-gray-900 dark:text-white">- CHF 1,050</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Less: Your original cost</span>
              <span className="font-semibold text-gray-900 dark:text-white">- CHF 3,000</span>
            </div>
            <div className="h-px bg-green-200 dark:bg-green-800"></div>
            <div className="flex justify-between text-xl">
              <span className="font-bold text-gray-900 dark:text-white">Your Net Profit</span>
              <span className="font-bold text-green-600 dark:text-green-400">CHF 2,450</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handlePayRoyalty}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Pay CHF 1,050 & Complete Transfer
        </button>
      </div>
    </div>
  );
}

