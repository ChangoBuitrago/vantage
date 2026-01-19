import React from 'react';
import { Home, ChevronRight, Package, Shield, Calendar, Percent, Clock } from 'lucide-react';

export default function MyCollections({ setCurrentStep }) {
  const collectionName = "Le Régulateur x Alain Silberstein";
  const editionSize = 178;
  const issued = 0; // Just created, none issued yet
  const retailPrice = 3000;
  const reference = "LE78229AA04";

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Collections</span>
            <ChevronRight className="w-4 h-4" />
            <span>{collectionName}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{collectionName}</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Reference: {reference} • Limited Edition Collection</p>
            </div>
            <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
              Active
            </span>
          </div>
        </div>

        {/* Collection Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Edition Size</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{editionSize}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total pieces</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Passports Issued</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{issued} <span className="text-lg text-gray-400">/ {editionSize}</span></p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{issued === 0 ? 'Ready to issue' : `${((issued / editionSize) * 100).toFixed(1)}% complete`}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Retail Price</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">CHF {retailPrice.toLocaleString()}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Per piece</p>
          </div>
        </div>

        {/* Issuance Progress */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Issuance Progress</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(issued / editionSize) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {issued === 0 ? 'No passports issued yet. Start by issuing the first passport.' : `${issued} of ${editionSize} passports issued`}
          </p>
        </div>

        {/* Smart Rules Summary */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Asset Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Dynamic Royalties</p>
              </div>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">90% → 60% → 15%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tiered over 3 years</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
              </div>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">180 days</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum holding period</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Launch Date</p>
              </div>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">October 2025</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Collection release</p>
            </div>
          </div>
        </div>

        {/* Owner Benefits Configuration */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Owner Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Service & Warranty</p>
              </div>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">Active</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Free service + 5yr warranty</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Events Access</p>
              </div>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">Enabled</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">VIP collector events</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Early Access</p>
              </div>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">Included</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">New release priority</p>
            </div>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ready to Issue Passport</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Your collection is configured and ready. Issue passports as watches are sold to first owners.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentStep(2);
            }}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Shield className="w-5 h-5" />
            <span>Issue First Passport</span>
          </button>
        </div>
      </div>
    </div>
  );
}

