import React from 'react';
import { Check, Search, Heart, Bell, ChevronDown, Mail } from 'lucide-react';

export default function CollectorStep1({ setCurrentStep }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Pre-Header App Promo */}
      <section className="bg-[#1e2a3a]">
        <div className="max-w-7xl mx-auto px-6 py-1.5 text-center text-xs">
          <div className="flex items-center justify-center gap-2">
            <img 
              src="https://static.chrono24.com/images/default/logos/apps/chrono24-app-logo.svg" 
              alt="Chrono24 App" 
              width="20" 
              height="20" 
              className="rounded-md"
            />
            <div className="text-white">
              Have you tried the Chrono24 app? <a href="#" className="text-white underline hover:no-underline font-medium">Discover now</a>!
            </div>
          </div>
        </div>
      </section>
      
      {/* Chrono24 Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Top bar with logo, search, and user */}
          <div className="flex items-center justify-between py-4 gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://static.chrono24.com/images/default/logos/chrono24-logo.svg" 
                alt="Chrono24" 
                className="h-7 w-auto"
              />
            </div>
            
            {/* Search Bar - Center */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search through 600,166 watches from 131 countries"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  readOnly
                />
              </div>
            </div>

            {/* Right Side - User */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-base text-gray-700 hover:text-gray-900 cursor-pointer">
                Log in or register
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-1 pb-3 border-t border-gray-100 pt-2">
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded flex items-center gap-1">
              <span>Buy a watch</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded flex items-center gap-1">
              <span>Sell a watch</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">
              Magazine
            </button>
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">
              Watch Collection
            </button>
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">
              ChronoPulse
            </button>
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">
              FAQ
            </button>
            <button className="px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded flex items-center gap-1">
              <span>Security</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </header>

      {/* Order Confirmation Content */}
      <div className="max-w-2xl mx-auto px-6 py-8" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-2">Thank you for your purchase, John</p>
          <p className="text-sm text-gray-500">Order #C24-2024-8942</p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
          
          {/* Product Item */}
          <div className="flex gap-6 pb-6 mb-6 border-b border-gray-200">
            <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
              <img
                src="/faircut/watch-thumb-0.jpg"
                alt="Le Regulateur Louis Erard x Alain Silberstein"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Louis Erard</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Le Regulateur Louis Erard x Alain Silberstein</h3>
              <p className="text-sm text-gray-600 mb-2">Condition: Like new & unworn | Year: 2022</p>
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                <Check className="w-3 h-3" />
                Digital Passport Included
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">CHF 6,500</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900 font-medium">CHF 6,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Buyer Protection</span>
              <span className="text-green-600 font-medium">Included</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">CHF 6,500</span>
            </div>
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Sold by</p>
            <p className="text-base font-semibold text-gray-900">Maria Smith Watch Boutique</p>
            <p className="text-sm text-gray-600">Switzerland</p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">What Happens Next?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Order Confirmation Email</p>
                <p className="text-xs text-blue-700">You'll receive a confirmation email with all order details</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Seller Ships Watch</p>
                <p className="text-xs text-blue-700">The seller will ship your watch within 2-3 business days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Digital Passport Transfer</p>
                <p className="text-xs text-blue-700">The digital passport will be automatically transferred to your email</p>
              </div>
            </div>
          </div>
        </div>

        {/* View Inbox Button */}
        <div className="text-center">
          <button
            onClick={() => setCurrentStep && setCurrentStep(2)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.02em',
              fontSize: '14px',
              borderRadius: '4px'
            }}
          >
            <Mail className="w-4 h-4" />
            View Inbox
          </button>
        </div>
      </div>
    </div>
  );
}

