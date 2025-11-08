import React from 'react';
import { Home, ChevronRight, Shield, Calendar, Hash, ExternalLink, Check, Award, Package } from 'lucide-react';

export default function ResellerStep3({ setCurrentStep }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Passports</span>
            <ChevronRight className="w-4 h-4" />
            <span>Details</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Your authenticated ownership certificate</p>
        </div>

        {/* Digital Passport Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Hero Section with Watch Image */}
          <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Watch Image */}
              <div className="w-64 h-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center flex-shrink-0 border-4 border-white dark:border-slate-700">
                <span className="text-8xl">⌚</span>
              </div>
              
              {/* Watch Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                  <Check className="w-4 h-4" />
                  Authenticated
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Louis Erard x Alain Silberstein
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Le Régulateur Blanc Edition
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Verified Authentic</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">30% Royalty</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">1st Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passport Details */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Passport Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Edition Number */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Hash className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Edition Number</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">#042</p>
                </div>
              </div>

              {/* Purchase Date */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Purchase Date</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">October 15, 2024</p>
                </div>
              </div>

              {/* Original Price */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-xl mt-0.5">💰</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Purchase Price</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">CHF 3,000</p>
                </div>
              </div>

              {/* Current Owner */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-xl mt-0.5">👤</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Owner</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Maria Smith</p>
                </div>
              </div>
            </div>

            {/* Authenticity Verification */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Authenticity Verification</h4>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Blockchain Certificate</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      This digital passport is immutably recorded on the blockchain, ensuring permanent proof of authenticity and ownership history.
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded font-mono text-gray-700 dark:text-gray-300">
                        0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                      </code>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creator Rules */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Creator Rules</h4>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Perpetual Resale Royalty</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Louis Erard receives <strong>30% of profit</strong> from each resale. This rule is automatically enforced by Faircut when you transfer ownership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            🎉 <strong>Congratulations!</strong> Your watch is now part of your authenticated collection. 
            <br />
            <span className="text-sm">This passport will remain yours until you decide to transfer it.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

