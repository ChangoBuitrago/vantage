import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Users, TrendingUp, Activity, Eye } from 'lucide-react';

export default function CreatorStep3({ setCurrentStep }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="px-6 py-8 bg-gray-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Digital Passport Issued & Active
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Track ownership, engagement, and resale activity in real-time
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</span>
            </div>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">Active</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Owner</span>
            </div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">James Mitchell</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Issued</span>
            </div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">Just now</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Transfers</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-800">
            <div className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'overview'
                    ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('ownership')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'ownership'
                    ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Ownership History
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'benefits'
                    ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Active Benefits
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Watch Image */}
                  <div className="flex-shrink-0">
                    <img
                      src="/faircut/watch-thumb-0.jpg"
                      alt="Watch"
                      className="w-full md:w-80 h-80 object-cover rounded-xl border border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          Le Regulateur Louis Erard x Alain Silberstein
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">Serial: 42/178 • Ref: LE78229AA04</p>
                      </div>
                      <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Active</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Movement</p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">ETA 2824-2</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Case Size</p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">40mm</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Production Date</p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">October 2025</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Original Price</p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">€3,850</p>
                      </div>
                    </div>

                    {/* Smart Rules */}
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Active Smart Rules</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">Resale Royalty</p>
                          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">5%</p>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                          <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">Transfer Lock</p>
                          <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">365 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Ownership History Tab */}
            {activeTab === 'ownership' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Ownership Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">Current Owner: James Mitchell</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Geneva, Switzerland</p>
                          </div>
                          <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-semibold">
                            Active
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Purchase Price: €3,850</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Date: November 11, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                        <p className="font-bold text-gray-900 dark:text-white mb-2">Passport Issued by Louis Erard</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Initial authentication and registration</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Date: November 11, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Active Owner Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Free Annual Service</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complimentary servicing at authorized centers worldwide
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Extended Warranty</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      5 years international warranty coverage for verified owners
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Collector Events Access</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      VIP invitations to brand events and exclusive launches
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Early Access to New Releases</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Priority purchasing opportunity for limited editions
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button
            onClick={() => setCurrentStep(4)}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Complete Experience</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
