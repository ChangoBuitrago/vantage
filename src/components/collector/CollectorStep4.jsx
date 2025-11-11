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
            You've experienced how Faircut protects collectors with verified authenticity and lasting benefits
          </p>
        </div>

        {/* What You Experienced */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You Experienced</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700 dark:text-gray-300">Purchase from secondary marketplace with digital passport verification</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700 dark:text-gray-300">Receive authenticated provenance and complete ownership history</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700 dark:text-gray-300">Access exclusive brand benefits and community features as a verified owner</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700 dark:text-gray-300">View transparent smart rules including transfer locks and service history</span>
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

