import React from 'react';
import { Shield, Heart, Search, Bell, ChevronDown } from 'lucide-react';

export default function CollectorStep0({ setCurrentStep }) {
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

      {/* Product Page Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Home / Watches / Louis Erard / Le Régulateur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 mb-4 aspect-square flex items-center justify-center">
              <img
                src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                className="w-full h-full object-contain"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex'; 
                }}
              />
              <div style={{display: 'none'}} className="text-9xl">⌚</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-transparent hover:border-green-500 cursor-pointer transition-all">
                  <span className="text-3xl">⌚</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Verified Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-sm font-semibold border border-green-200 dark:border-green-800">
                <Shield className="w-4 h-4" />
                Digital Passport Verified
              </div>
            </div>

            {/* Brand and Model */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Louis Erard</h2>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Le Régulateur Blanc</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Louis Erard x Alain Silberstein Edition</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">CHF 5,850</span>
                <span className="text-lg text-gray-500 dark:text-gray-400">+ CHF 85 for shipping</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Original retail: CHF 3,000</p>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4 mb-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Professional Dealer</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Maria Smith Watch Boutique</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">4.9</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">(127)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span>Switzerland</span>
                <span>•</span>
                <span>Ships worldwide</span>
              </div>
            </div>

            {/* Key Details */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Key Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Reference Number</p>
                  <p className="text-gray-900 dark:text-white font-medium">85358TT01.BTT83</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Edition</p>
                  <p className="text-gray-900 dark:text-white font-medium">#042 / 178</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Case Material</p>
                  <p className="text-gray-900 dark:text-white font-medium">Stainless Steel</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Case Diameter</p>
                  <p className="text-gray-900 dark:text-white font-medium">40mm</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Movement</p>
                  <p className="text-gray-900 dark:text-white font-medium">Automatic</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Condition</p>
                  <p className="text-gray-900 dark:text-white font-medium">Excellent</p>
                </div>
              </div>
            </div>

            {/* Digital Passport Highlight */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-6 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-1">
                    Digital Passport Included
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    Complete ownership history, authenticity verification, and transferable warranty. Automatically transferred to you upon purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Stunning Louis Erard x Alain Silberstein collaboration featuring the signature playful design elements—blue arrow hand for minutes, red triangle for hours, and yellow serpentine seconds hand. This limited edition piece is in excellent condition with complete digital passport and transferable warranty. A perfect blend of Swiss watchmaking and artistic expression.
              </p>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => setCurrentStep(1)}
              className="w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Buy Now
            </button>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
              Buyer Protection Included • Secure Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

