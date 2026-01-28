import React from 'react';
import { Check, CheckCircle } from 'lucide-react';

export default function CollectorStep4({ navigate }) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Collector Experience Complete!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            You now own an authenticated asset with verified provenance and lifetime benefits.
          </p>
        </div>

        {/* What You Experienced */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You Experienced</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-700 dark:text-gray-300">Found watch on secondary marketplace (Chrono24) with Vantage-verified passport</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-700 dark:text-gray-300">Reviewed passport before purchase — verified price, serial number, and authenticity</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-700 dark:text-gray-300">Accepted passport → settlement protocol processed transfer instantly</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-700 dark:text-gray-300">Protocol enforced seller paid royalty to creator automatically (you didn't have to)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-700 dark:text-gray-300">Received full ownership with provenance history, benefits, and asset protection</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/demo')}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Demo Experience
          </button>
        </div>
      </div>
    </div>
  );
}

