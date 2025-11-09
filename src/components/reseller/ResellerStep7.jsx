import React from 'react';
import { Check, Shield, Package, Send, Users, Clock, ArrowRight } from 'lucide-react';

export default function ResellerStep7({ setCurrentStep }) {
  const salePrice = 6500;
  const royaltyRate = 0.90;
  const royaltyAmount = Math.round(salePrice * royaltyRate);

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Transfer Complete!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Digital passport successfully transferred with all smart rules intact</p>
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
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Transfer Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-0.5">
                <Package className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Sale Price</p>
                <p className="text-base font-bold text-gray-900 dark:text-white">CHF {salePrice.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mt-0.5">
                <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Royalty Paid</p>
                <p className="text-base font-bold text-purple-600 dark:text-purple-400">CHF {royaltyAmount.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Royalty Rate</p>
                <p className="text-base font-bold text-gray-900 dark:text-white">{Math.round(royaltyRate * 100)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Royalty payment of CHF {royaltyAmount.toLocaleString()} ({Math.round(royaltyRate * 100)}% of sale price) has been sent to Louis Erard
              </p>
            </div>
          </div>
        </div>

        {/* What Happened */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Transfer Details</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Royalty Payment Confirmed</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">CHF {royaltyAmount.toLocaleString()} successfully sent to Louis Erard based on Year 1 royalty rate</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mt-0.5">
                <Send className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Digital Passport Transferred</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">New owner now has authenticated ownership with full access to benefits</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mt-0.5">
                <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Smart Rules Updated</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">6-month transfer lock reset for new owner, royalty rate adjusted to Year 2</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mt-0.5">
                <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Ownership History Updated</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Transfer recorded in passport history with full traceability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(6)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}






