import React, { useState } from 'react';
import { Home, ChevronRight, TrendingUp, Users, Package, DollarSign, Shield, BarChart3, ArrowUp, ArrowDown, Calendar, Clock, Eye, CheckCircle } from 'lucide-react';

export default function CreatorStep3({ setCurrentStep }) {
  const [timeRange, setTimeRange] = useState('30d');

  // Dashboard data
  const stats = {
    totalCollections: 12,
    totalPassportsIssued: 2847,
    activePassports: 2689,
    totalRevenue: 428500,
    monthlyGrowth: 24.5,
    averageResalePrice: 4200,
    royaltiesEarned: 127400
  };

  const recentCollections = [
    { name: 'Le Régulateur x Alain Silberstein', issued: 178, active: 164, revenue: 127400, trend: '+12%' },
    { name: 'Excellence Guilloché Main', issued: 420, active: 398, revenue: 89300, trend: '+8%' },
    { name: '1931 Collection', issued: 850, active: 812, revenue: 156200, trend: '+18%' },
  ];

  const recentActivity = [
    { action: 'Passport Issued', collection: 'Le Régulateur x Alain Silberstein', watch: '#042', owner: 'Maria Reseller', time: 'Just now', status: 'success' },
    { action: 'Transfer Completed', collection: 'Excellence Guilloché Main', watch: '#127', owner: 'John Collector', time: '2 hours ago', status: 'success' },
    { action: 'Royalty Payment', collection: '1931 Collection', watch: '#584', amount: 'CHF 485', time: '5 hours ago', status: 'success' },
    { action: 'Passport Viewed', collection: 'Le Régulateur x Alain Silberstein', watch: '#018', owner: 'Sarah Williams', time: '8 hours ago', status: 'info' },
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Creator Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Monitor your collections, passports, and royalty revenue</p>
            </div>
            
            {/* Time Range Filter */}
            <div className="flex gap-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  timeRange === '7d'
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  timeRange === '30d'
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                30 Days
              </button>
              <button
                onClick={() => setTimeRange('12m')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  timeRange === '12m'
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                12 Months
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Collections */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400">
                <ArrowUp className="w-4 h-4" />
                {stats.monthlyGrowth}%
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Collections</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalCollections}</p>
          </div>

          {/* Passports Issued */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400">
                <ArrowUp className="w-4 h-4" />
                12%
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Passports Issued</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalPassportsIssued.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stats.activePassports.toLocaleString()} active</p>
          </div>

          {/* Active Owners */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400">
                <ArrowUp className="w-4 h-4" />
                8%
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Owners</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.activePassports.toLocaleString()}</p>
          </div>

          {/* Royalties Earned */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold text-white">
                <ArrowUp className="w-4 h-4" />
                {stats.monthlyGrowth}%
              </span>
            </div>
            <p className="text-sm text-emerald-100 mb-1">Royalties Earned</p>
            <p className="text-3xl font-bold">CHF {stats.royaltiesEarned.toLocaleString()}</p>
            <p className="text-xs text-emerald-100 mt-1">Last 30 days</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Collections Performance */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Collection Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Passports issued and royalties by collection</p>
              </div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {recentCollections.map((collection, index) => (
                <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{collection.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Shield className="w-4 h-4" />
                          {collection.issued} issued
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {collection.active} active
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">CHF {collection.revenue.toLocaleString()}</p>
                      <span className={`text-sm font-semibold ${
                        collection.trend.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {collection.trend}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(collection.active / collection.issued) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {((collection.active / collection.issued) * 100).toFixed(1)}% active ownership
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Insights */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Insights</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Key metrics</p>
              </div>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Avg. Resale Price</p>
                </div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">CHF {stats.averageResalePrice.toLocaleString()}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+15% from last month</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Ownership Retention</p>
                </div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">94.4%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Excellent engagement</p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Passport Views</p>
                </div>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">12,847</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Last 30 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Latest passport events across all collections</p>
            </div>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  activity.status === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30'
                    : 'bg-blue-100 dark:bg-blue-900/30'
                }`}>
                  {activity.status === 'success' ? (
                    <CheckCircle className={`w-5 h-5 ${
                      activity.status === 'success'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  ) : (
                    <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {activity.collection} {activity.watch && `• ${activity.watch}`}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  {activity.owner && (
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.owner}</p>
                  )}
                  {activity.amount && (
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{activity.amount}</p>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button
            onClick={() => setCurrentStep(3)}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Complete Experience</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

