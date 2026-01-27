import React, { useState, useMemo } from 'react';
import { Home, ChevronRight, TrendingUp, Users, Package, DollarSign, Shield, BarChart3, ArrowUp, ArrowDown, Calendar, Clock, Eye, CheckCircle, RefreshCw, Lock, Zap, Target, CreditCard, Building2, Wallet, MapPin, Globe } from 'lucide-react';

export default function CreatorStep3() {
  const [timeRange, setTimeRange] = useState('30d');

  // Mock data with time-based filtering
  const allData = {
    '7d': {
      stats: {
        totalCollections: 5,
        totalPassportsIssued: 12,
        activePassports: 12,
        totalRevenue: 428500,
        monthlyGrowth: 8.2,
        averageResalePrice: 5800,
        royaltiesEarned: 12400
      },
      collections: [
        { name: 'Alain Silberstein', issued: 3, active: 3, revenue: 12400, trend: '+8%' },
        { name: 'Konstantin Chaykin', issued: 2, active: 2, revenue: 15600, trend: '+5%' },
        { name: 'Vianney Halter', issued: 2, active: 2, revenue: 8900, trend: '+3%' },
        { name: 'Stefan Kudoke', issued: 1, active: 1, revenue: 6700, trend: '+2%' },
        { name: 'Astro Boy', issued: 4, active: 4, revenue: 24800, trend: '+12%' },
      ],
      activity: [
        { action: 'Royalty Received', collection: 'Alain Silberstein', watch: '#042', amount: 'CHF 2,700', time: 'Just now', status: 'royalty', type: 'settlement' },
        { action: 'Transfer Lock Enforced', collection: 'Konstantin Chaykin', watch: '#027', owner: 'Blocked: 45 days left', time: '2 hours ago', status: 'lock', type: 'governance' },
        { action: 'Royalty Received', collection: 'Astro Boy', watch: '#184', amount: 'CHF 485', time: '5 hours ago', status: 'royalty', type: 'settlement' },
      ],
      geography: [
        { country: 'Switzerland', flag: '🇨🇭', transfers: 8, revenue: 51200, percentage: 40 },
        { country: 'Germany', flag: '🇩🇪', transfers: 6, revenue: 35700, percentage: 28 },
        { country: 'United States', flag: '🇺🇸', transfers: 5, revenue: 22880, percentage: 18 },
        { country: 'United Kingdom', flag: '🇬🇧', transfers: 3, revenue: 11460, percentage: 9 },
        { country: 'Japan', flag: '🇯🇵', transfers: 2, revenue: 6400, percentage: 5 },
      ]
    },
    '30d': {
      stats: {
        totalCollections: 5,
        totalPassportsIssued: 387,
        activePassports: 368,
        totalRevenue: 428500,
        monthlyGrowth: 24.5,
        averageResalePrice: 5800,
        royaltiesEarned: 127400
      },
      collections: [
        { name: 'Alain Silberstein', issued: 88, active: 84, revenue: 127400, trend: '+12%' },
        { name: 'Konstantin Chaykin', issued: 45, active: 43, revenue: 156200, trend: '+18%' },
        { name: 'Vianney Halter', issued: 28, active: 27, revenue: 89300, trend: '+8%' },
        { name: 'Stefan Kudoke', issued: 18, active: 17, revenue: 67200, trend: '+15%' },
        { name: 'Astro Boy', issued: 208, active: 197, revenue: 248600, trend: '+22%' },
      ],
      activity: [
        { action: 'Royalty Received', collection: 'Alain Silberstein', watch: '#042', amount: 'CHF 2,700', time: 'Just now', status: 'royalty', type: 'settlement' },
        { action: 'Transfer Lock Enforced', collection: 'Konstantin Chaykin', watch: '#027', owner: 'Blocked: 45 days left', time: '2 hours ago', status: 'lock', type: 'governance' },
        { action: 'Royalty Received', collection: 'Astro Boy', watch: '#184', amount: 'CHF 485', time: '5 hours ago', status: 'royalty', type: 'settlement' },
        { action: 'Compliance Check Passed', collection: 'Vianney Halter', watch: '#018', owner: 'KYC verified', time: '8 hours ago', status: 'compliance', type: 'governance' },
      ],
      geography: [
        { country: 'Switzerland', flag: '🇨🇭', transfers: 19, revenue: 54150, percentage: 42 },
        { country: 'Germany', flag: '🇩🇪', transfers: 12, revenue: 34380, percentage: 27 },
        { country: 'United States', flag: '🇺🇸', transfers: 8, revenue: 22920, percentage: 18 },
        { country: 'United Kingdom', flag: '🇬🇧', transfers: 4, revenue: 11460, percentage: 9 },
        { country: 'Japan', flag: '🇯🇵', transfers: 2, revenue: 5730, percentage: 4 },
      ]
    },
    '12m': {
      stats: {
        totalCollections: 5,
        totalPassportsIssued: 387,
        activePassports: 368,
        totalRevenue: 428500,
        monthlyGrowth: 45.2,
        averageResalePrice: 5800,
        royaltiesEarned: 428500
      },
      collections: [
        { name: 'Alain Silberstein', issued: 88, active: 84, revenue: 127400, trend: '+45%' },
        { name: 'Konstantin Chaykin', issued: 45, active: 43, revenue: 156200, trend: '+52%' },
        { name: 'Vianney Halter', issued: 28, active: 27, revenue: 89300, trend: '+38%' },
        { name: 'Stefan Kudoke', issued: 18, active: 17, revenue: 67200, trend: '+42%' },
        { name: 'Astro Boy', issued: 208, active: 197, revenue: 248600, trend: '+58%' },
      ],
      activity: [
        { action: 'Royalty Received', collection: 'Alain Silberstein', watch: '#042', amount: 'CHF 2,700', time: 'Just now', status: 'royalty', type: 'settlement' },
        { action: 'Transfer Lock Enforced', collection: 'Konstantin Chaykin', watch: '#027', owner: 'Blocked: 45 days left', time: '2 hours ago', status: 'lock', type: 'governance' },
        { action: 'Royalty Received', collection: 'Astro Boy', watch: '#184', amount: 'CHF 485', time: '5 hours ago', status: 'royalty', type: 'settlement' },
        { action: 'Compliance Check Passed', collection: 'Vianney Halter', watch: '#018', owner: 'KYC verified', time: '8 hours ago', status: 'compliance', type: 'governance' },
        { action: 'Asset Rules Activated', collection: 'Astro Boy', watch: null, owner: '178 passports', time: '2 days ago', status: 'activation', type: 'governance' },
      ],
      geography: [
        { country: 'Switzerland', flag: '🇨🇭', transfers: 19, revenue: 180780, percentage: 42 },
        { country: 'Germany', flag: '🇩🇪', transfers: 12, revenue: 115695, percentage: 27 },
        { country: 'United States', flag: '🇺🇸', transfers: 8, revenue: 77130, percentage: 18 },
        { country: 'United Kingdom', flag: '🇬🇧', transfers: 4, revenue: 38565, percentage: 9 },
        { country: 'Japan', flag: '🇯🇵', transfers: 2, revenue: 17140, percentage: 4 },
      ]
    }
  };

  // Get filtered data based on time range
  const currentData = useMemo(() => allData[timeRange] || allData['30d'], [timeRange]);
  const { stats, collections, activity, geography } = currentData;

  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Secondary market performance and governance metrics</p>
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

        {/* Hero Metric - Secondary Market Revenue */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Secondary Market Revenue</p>
                  <p className="text-white/70 text-xs">Royalties from resales</p>
                </div>
              </div>
              <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                <ArrowUp className="w-3 h-3" />
                {stats.monthlyGrowth}%
              </span>
            </div>
            <p className="text-5xl font-black text-white mb-2">CHF {stats.royaltiesEarned.toLocaleString()}</p>
            <p className="text-white/80 text-sm font-medium mb-4">
              {timeRange === '7d' ? 'Last 7 days' : timeRange === '30d' ? 'Last 30 days' : 'Last 12 months'}
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="text-white/70 text-xs mb-1">Avg. per Transfer</p>
                <p className="text-white text-lg font-bold">CHF {Math.round(stats.royaltiesEarned / 45).toLocaleString()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="text-white/70 text-xs mb-1">Total Transfers</p>
                <p className="text-white text-lg font-bold">45</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="text-white/70 text-xs mb-1">Compliance Rate</p>
                <p className="text-white text-lg font-bold">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Secondary Market Transactions */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                <ArrowUp className="w-3 h-3" />
                12%
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Secondary Transfers</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">45</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across all platforms</p>
          </div>

          {/* Ownership Retention */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                <ArrowUp className="w-3 h-3" />
                68%
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Ownership Retention</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">487 days</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Average hold period</p>
          </div>

          {/* Compliance Rate */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                <CheckCircle className="w-3 h-3" />
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Compliance Rate</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">All transfers compliant</p>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Platform Distribution */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Platform Distribution
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">Where your products are being resold</p>

            <div className="space-y-3">
              {/* Chrono24 */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">C24</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Chrono24</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">19 transfers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">CHF 54,150</p>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">42%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: '42%' }}></div>
                </div>
              </div>

              {/* eBay */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">eB</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">eBay</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">12 transfers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">CHF 34,380</p>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">27%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: '27%' }}></div>
                </div>
              </div>

              {/* Private Sales */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Private Sales</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">8 transfers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">CHF 22,920</p>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">18%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full transition-all" style={{ width: '18%' }}></div>
                </div>
              </div>

              {/* WatchBox */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                      <Package className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">WatchBox</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">4 transfers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">CHF 11,460</p>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">9%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-amber-600 h-2 rounded-full transition-all" style={{ width: '9%' }}></div>
                </div>
              </div>

              {/* Others */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">•••</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Others</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 transfers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">CHF 5,730</p>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">4%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-slate-600 h-2 rounded-full transition-all" style={{ width: '4%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Geographic Distribution
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">Market performance by country</p>

            <div className="space-y-3">
              {geography.map((geo, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-lg">
                        {geo.flag}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{geo.country}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{geo.transfers} transfers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">CHF {geo.revenue.toLocaleString()}</p>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{geo.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all" 
                      style={{ width: `${geo.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Top 5 markets by secondary sales volume</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Collections */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 mb-4">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Top Collections by Royalties
          </h3>
          <div className="space-y-2.5">
            {collections.slice(0, 3).map((collection, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{collection.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{collection.issued} issued • {collection.active} active</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold text-gray-900 dark:text-white">CHF {collection.revenue.toLocaleString()}</p>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">{collection.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Recent Activity
          </h3>

          <div className="space-y-2">
            {activity.map((activityItem, index) => {
              const getActivityStyle = (status) => {
                switch(status) {
                  case 'royalty':
                    return {
                      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
                      icon: <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
                      textColor: 'text-emerald-600 dark:text-emerald-400'
                    };
                  case 'lock':
                    return {
                      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
                      icon: <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
                      textColor: 'text-amber-600 dark:text-amber-400'
                    };
                  case 'compliance':
                    return {
                      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
                      icon: <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
                      textColor: 'text-blue-600 dark:text-blue-400'
                    };
                  case 'activation':
                    return {
                      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
                      icon: <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
                      textColor: 'text-purple-600 dark:text-purple-400'
                    };
                  default:
                    return {
                      bgColor: 'bg-green-100 dark:bg-green-900/30',
                      icon: <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />,
                      textColor: 'text-green-600 dark:text-green-400'
                    };
                }
              };

              const style = getActivityStyle(activityItem.status);

              return (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${style.bgColor}`}>
                    {style.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{activityItem.action}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {activityItem.collection} {activityItem.watch && `• ${activityItem.watch}`}
                    </p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    {activityItem.amount && (
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{activityItem.amount}</p>
                    )}
                    {activityItem.owner && !activityItem.amount && (
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{activityItem.owner}</p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activityItem.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
