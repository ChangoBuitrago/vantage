import React from 'react';
import { Package, Clock, TrendingUp, Award } from 'lucide-react';

export default function CreatorStep0({ setCurrentStep }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
            Louis Erard - Brand Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Manage your digital passport program and watch collection
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Issued</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">1,247</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Issue</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Resales</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">342</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Royalties Earned</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">€24.5K</p>
          </div>
        </div>

        {/* Watch Ready for Digital Passport */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            New Watch Ready for Digital Passport
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Watch Image */}
            <div className="flex-shrink-0">
              <img
                src="/faircut/watch-thumb-0.jpg"
                alt="Louis Erard Watch"
                className="w-full md:w-80 h-80 object-cover rounded-xl border border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Watch Details */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Le Regulateur Louis Erard x Alain Silberstein
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Limited Edition Collaboration - 178 Pieces
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Reference</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">LE78229AA04</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Serial Number</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">42/178</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Movement</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">ETA 2824-2</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Case Size</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">40mm</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Retail Price</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">€3,850</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Production Date</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">October 2025</p>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Status:</strong> Ready to be sold to first owner. Digital passport must be configured and issued.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Create Digital Passport</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
