import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Percent, Send, Tag, Check, DollarSign } from 'lucide-react';

export default function ResellerStep5({ setCurrentStep }) {
  const [salePrice, setSalePrice] = useState('6500');
  
  const basePurchasePrice = 3000;
  const royaltyRate = 0.90; // 90% for Year 1
  const salePriceNum = parseFloat(salePrice) || 0;
  const royaltyAmount = Math.max(0, (salePriceNum - basePurchasePrice) * royaltyRate);
  
  // Validation states
  const isPriceValid = salePriceNum > 0;
  const isBelowBase = salePriceNum < basePurchasePrice && salePriceNum > 0;
  const isAtBase = salePriceNum === basePurchasePrice;
  const isAboveBase = salePriceNum > basePurchasePrice;

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
            <span>Le Régulateur Blanc</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review Transfer</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Validate smart rules and confirm royalty payment</p>
        </div>

        {/* Watch Summary Card */}
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
        </div>

        {/* Smart Rules Validation */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            Smart Rules Validation
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2.5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Transfer Lock Expired</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">6-month holding period completed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Authenticity Verified</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Digital passport validated</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2.5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Service History Complete</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">All records verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Royalty Calculation */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Creator Royalty Calculation
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Dynamic royalty enforced: {Math.round(royaltyRate * 100)}% of profit above base price for transfers within the first year
          </p>
          
          {/* Sale Price Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Resale Price (CHF)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <DollarSign className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                className={`w-full pl-12 pr-20 py-3 bg-slate-50 dark:bg-slate-800 border-2 rounded-lg text-lg font-bold text-gray-900 dark:text-white focus:ring-2 outline-none transition-all ${
                  isBelowBase 
                    ? 'border-amber-400 dark:border-amber-600 focus:border-amber-500 focus:ring-amber-500/20'
                    : isAboveBase
                    ? 'border-green-400 dark:border-green-600 focus:border-green-500 focus:ring-green-500/20'
                    : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500/20'
                }`}
                placeholder="6500"
                min="0"
                step="100"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">CHF</span>
              </div>
            </div>
            
            {/* Validation Messages */}
            {isPriceValid && (
              <div className="mt-2">
                {isBelowBase && (
                  <div className="flex items-start gap-2 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                      <span className="font-semibold">Below base price.</span> No royalty applies when selling below CHF {basePurchasePrice.toLocaleString()}.
                    </p>
                  </div>
                )}
                {isAtBase && (
                  <div className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      <span className="font-semibold">At base price.</span> No profit, no royalty applies.
                    </p>
                  </div>
                )}
                {isAboveBase && (
                  <div className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-green-700 dark:text-green-300">
                      <span className="font-semibold">Valid resale price.</span> {royaltyRate * 100}% royalty applies to profit above base price.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className={`border rounded-lg p-4 mb-4 ${
            isAboveBase 
              ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
              : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
          }`}>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Base Resale Price</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">CHF {basePurchasePrice.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Your Sale Price</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">CHF {salePriceNum.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Percent className={`w-4 h-4 ${isAboveBase ? 'text-purple-600 dark:text-purple-400' : 'text-gray-400'}`} />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Royalty Rate (Year 1)</p>
                  <p className={`text-sm font-semibold ${isAboveBase ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    {Math.round(royaltyRate * 100)}%
                  </p>
                </div>
              </div>
              <div className={`flex items-center gap-3 p-2.5 rounded-lg border-2 ${
                isAboveBase && royaltyAmount > 0
                  ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-400 dark:border-purple-600'
                  : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                  isAboveBase && royaltyAmount > 0
                    ? 'bg-purple-500'
                    : 'bg-gray-400'
                }`}>
                  <Tag className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between">
                  <p className={`text-xs font-semibold ${
                    isAboveBase && royaltyAmount > 0
                      ? 'text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    Royalty Due to Brand
                  </p>
                  <p className={`text-base font-bold ${
                    isAboveBase && royaltyAmount > 0
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    CHF {Math.round(royaltyAmount).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Royalty is automatically calculated based on smart rules. Payment is required to complete the transfer.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => isPriceValid && setCurrentStep(5)}
          disabled={!isPriceValid}
          className={`w-full flex items-center justify-center gap-2 text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 ${
            isPriceValid
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl cursor-pointer'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-60'
          }`}
        >
          <Send className="w-5 h-5" />
          {isAboveBase ? 'Pay Royalty & Complete Transfer' : 'Complete Transfer'}
        </button>
      </div>
    </div>
  );
}

