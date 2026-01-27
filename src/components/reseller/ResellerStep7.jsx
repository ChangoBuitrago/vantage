import React from 'react';
import { Check, Shield, Package, Send, Users, Clock, ArrowRight, Mail } from 'lucide-react';

export default function ResellerStep7({ collectorEmail, salePrice: salePriceProp }) {
  const salePrice = salePriceProp || 6500;
  const royaltyRate = 0.90;
  const royaltyAmount = Math.round(salePrice * royaltyRate);
  const recipientEmail = collectorEmail || 'collector@gmail.com';

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Transfer Complete!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Digital passport successfully transferred with all asset rules enforced</p>
        </div>

        {/* Watch Summary Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Watch Image */}
              <div className="w-40 h-40 bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-slate-700 overflow-hidden p-3">
                <img
                  src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                  alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
                <span className="text-6xl" style={{display: 'none'}}>⌚</span>
              </div>
              
              {/* Watch Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Louis Erard x Alain Silberstein
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Le Régulateur Blanc Edition
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">Transferred</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold text-purple-700 dark:text-purple-400">Royalty Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transfer Summary */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sale Price</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">CHF {salePrice.toLocaleString()}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Transferred to {recipientEmail}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Royalty Paid</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400">CHF {royaltyAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{Math.round(royaltyRate * 100)}% sent to Louis Erard</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Was Enforced */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            Compliance-Gated Transfer Complete
          </h3>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Transfer lock cleared</span> — 6-month minimum holding period satisfied
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Buyer reviewed and accepted</span> — passport data verified before transfer
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Royalty automatically paid</span> — CHF {royaltyAmount.toLocaleString()} sent to creator in parallel
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Asset rules reset for new owner</span> — 6-month lock and updated royalty rate applied
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






