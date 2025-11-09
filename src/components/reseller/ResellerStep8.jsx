import React from 'react';
import { Check, Shield, ArrowRight, Users } from 'lucide-react';

export default function ResellerStep8({ navigate }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-2">
            <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            Demo Complete!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You've experienced how Faircut enables seamless transfers while ensuring creators earn fair royalties.
          </p>
        </div>

        {/* Faircut Benefits */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">How Faircut Benefits Everyone</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">For Brands</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Perpetual royalties on every resale, automatic enforcement
              </p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">For Sellers</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simple transfers with clear rules and automated compliance
              </p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">For Buyers</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verified authenticity, full benefits, transparent history
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/demo')}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Back to Demo Selection
        </button>
      </div>
    </div>
  );
}

