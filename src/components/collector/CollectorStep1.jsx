import React from 'react';
import { Check, Search, Heart, Bell, ChevronDown, Mail } from 'lucide-react';

export default function CollectorStep1({ setCurrentStep }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Chrono24 Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-gray-900 dark:text-white">CHRONO</span>
                <span className="text-green-600 dark:text-green-500">24</span>
              </div>
              {/* Search Bar */}
              <div className="hidden lg:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for watches, brands..."
                  className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm w-96 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 text-gray-900 dark:text-white"
                  readOnly
                />
              </div>
            </div>
            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="w-9 h-9 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JD
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 pb-3 text-sm text-gray-700 dark:text-gray-300">
            <button className="hover:text-gray-900 dark:hover:text-white">Watches</button>
            <button className="hover:text-gray-900 dark:hover:text-white">Dealers</button>
            <button className="hover:text-gray-900 dark:hover:text-white">Magazine</button>
            <button className="hover:text-gray-900 dark:hover:text-white">My Watch Collection</button>
          </nav>
        </div>
      </header>

      {/* Order Confirmation Content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Thank you for your purchase, John</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Order #C24-2024-8942</p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
          
          {/* Product Item */}
          <div className="flex gap-6 pb-6 mb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="w-24 h-24 bg-gray-50 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
              <img
                src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=246"
                alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                className="w-full h-full object-contain"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex'; 
                }}
              />
              <div style={{display: 'none'}} className="text-4xl">⌚</div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Louis Erard</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Le Régulateur Blanc</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Louis Erard x Alain Silberstein Edition #042</p>
              <div className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-semibold">
                <Check className="w-3 h-3" />
                Digital Passport Included
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">CHF 5,850</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="text-gray-900 dark:text-white font-medium">CHF 5,850</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Shipping</span>
              <span className="text-gray-900 dark:text-white font-medium">CHF 85</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Buyer Protection</span>
              <span className="text-green-600 dark:text-green-400 font-medium">Included</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-800">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">CHF 5,935</span>
            </div>
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Sold by</p>
            <p className="text-base font-semibold text-gray-900 dark:text-white">Maria Smith Watch Boutique</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Switzerland</p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">What Happens Next?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Order Confirmation Email</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">You'll receive a confirmation email with all order details</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Seller Ships Watch</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">The seller will ship your watch within 2-3 business days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Digital Passport Transfer</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">The digital passport will be automatically transferred to your email</p>
              </div>
            </div>
          </div>
        </div>

        {/* View Inbox Button */}
        <div className="text-center">
          <button
            onClick={() => setCurrentStep && setCurrentStep(2)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg"
          >
            <Mail className="w-5 h-5" />
            View Inbox
          </button>
        </div>
      </div>
    </div>
  );
}

