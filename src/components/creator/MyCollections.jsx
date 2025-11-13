import React from 'react';
import { Home, ChevronRight, Package, Shield, Calendar, ArrowRight, Plus, Eye, Edit, Trash2 } from 'lucide-react';

export default function MyCollections({ setCurrentStep }) {
  const collectionName = "Le Régulateur x Alain Silberstein";
  const editionSize = 178;
  const issued = 0; // Just created, none issued yet
  const retailPrice = 3000;

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Collections</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Collections</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your watch collections and issue passports</p>
        </div>

        {/* Success Message */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Collection Created Successfully!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">"{collectionName}" is ready for passport issuance</p>
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* Active Collection Card */}
          <div className="bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{collectionName}</h3>
                    <span className="px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Limited edition collaboration timepiece</p>
                </div>
              </div>

              {/* Collection Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Edition Size</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{editionSize}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">pieces</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Passports Issued</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{issued}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">of {editionSize}</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Retail Price</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">CHF {retailPrice.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">per piece</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Issuance Progress</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{issued}/{editionSize}</p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(issued / editionSize) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                  {issued === 0 ? 'Ready to issue first passport' : `${((issued / editionSize) * 100).toFixed(1)}% complete`}
                </p>
              </div>

              {/* Collection Info */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Collection Details</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Reference</p>
                    <p className="font-mono font-semibold text-gray-900 dark:text-white">LE78229AA04</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Launch Date</p>
                    <p className="font-semibold text-gray-900 dark:text-white">October 2025</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Royalty Rate</p>
                    <p className="font-semibold text-gray-900 dark:text-white">90% → 60% → 15%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Transfer Lock</p>
                    <p className="font-semibold text-gray-900 dark:text-white">180 days</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setCurrentStep(2);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Shield className="w-4 h-4" />
                  <span>Issue Passport</span>
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setCurrentStep(3);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Collection Button */}
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            setCurrentStep(0);
          }}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 rounded-2xl transition-all duration-200 group"
        >
          <Plus className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
          <span className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-semibold transition-colors">
            Create New Collection
          </span>
        </button>
      </div>
    </div>
  );
}

