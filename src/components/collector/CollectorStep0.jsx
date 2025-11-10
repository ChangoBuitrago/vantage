import React, { useState } from 'react';
import { Shield, Heart, Search, Bell, ChevronDown } from 'lucide-react';

export default function CollectorStep0({ setCurrentStep }) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const watchImages = [
    '/faircut/watch-thumb-0.jpg',
    '/faircut/watch-thumb-1.jpg',
    '/faircut/watch-thumb-2.webp',
    '/faircut/watch-thumb-3.jpg'
  ];

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

      {/* Product Page Content */}
      <div className="max-w-7xl mx-auto px-6 py-6" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-8">
          {/* Image Section */}
          <div>
            <div className="relative mb-4 flex items-center justify-center" style={{minHeight: '600px'}}>
              <img
                src={watchImages[selectedImage]}
                alt="Le Régulateur Louis Erard x Alain Silberstein"
                className="w-full h-full object-contain"
              />
              {/* Like and Share Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {watchImages.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 cursor-pointer transition-all overflow-hidden ${
                    selectedImage === i ? 'border-green-500' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Watch view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-gray-400">›</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 underline">
                Louis Erard watches
              </a>
            </div>

            {/* Brand and Model */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Louis Erard</h2>
              <h1 className="text-xl text-gray-900 mb-3 font-normal">Le Regulateur Louis Erard x Alain Silberstein</h1>
              <p className="text-base text-gray-900 leading-relaxed mb-2">
                Condition: <span className="underline">Like new & unworn</span> | Year of production 2022 | Original box | Original papers
              </p>
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-md text-sm font-semibold border border-green-200">
                <Shield className="w-4 h-4" />
                Digital Passport
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl font-normal text-gray-900 mb-1">CHF 6,500</div>
              <p className="text-sm text-gray-600">
                Free shipping
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mb-4 flex items-center gap-2">
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xs">VISA</span>
              </div>
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-red-600"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-500 -ml-1.5"></div>
                </div>
              </div>
              <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-[10px]">AMEX</span>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => setCurrentStep(1)}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white text-lg font-medium py-3 px-6 rounded-lg transition-colors mb-4"
            >
              Buy
            </button>

            {/* Buyer Protection */}
            <div className="border border-gray-300 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-semibold text-gray-900">Buyer Protection</span>
                <Shield className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-xs text-gray-700">
                Thanks to our Buyer Protection, your purchase is fully covered. If something goes wrong, we're there to help. <span className="underline cursor-pointer">Learn more</span>.
              </p>
            </div>

            {/* Shipping and Seller Information */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Shipping and Seller Information</h3>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-900">Item is in stock</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-900">Anticipated delivery: 11/13 - 11/29</p>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <span className="text-[10px] text-gray-600">i</span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-base font-bold text-gray-900 mb-3 underline cursor-pointer">MARIA RESELLER</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-700">Professional dealer</span>
                  <span className="text-base">🇨🇭</span>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="text-blue-700 text-base">★</span>
                    <span className="text-sm font-bold text-gray-900">4.9</span>
                    <span className="text-xs text-gray-600">( 127 )</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-base">💡</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-base">🚚</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-base">↩️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Details */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Details</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Reference Number</p>
                  <p className="text-gray-900 font-medium">85358TT01.BTT83</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Edition</p>
                  <p className="text-gray-900 font-medium">#042 / 178</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Case Material</p>
                  <p className="text-gray-900 font-medium">Stainless Steel</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Case Diameter</p>
                  <p className="text-gray-900 font-medium">40mm</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Movement</p>
                  <p className="text-gray-900 font-medium">Automatic</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Condition</p>
                  <p className="text-gray-900 font-medium">Excellent</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

