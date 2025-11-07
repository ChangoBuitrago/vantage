import React from 'react';
import { Shield, Search, ShoppingBag } from 'lucide-react';

export default function ResellerStep0({ setCurrentStep }) {
  return (
    <div className="min-h-screen bg-white" style={{fontFamily: 'Assistant, sans-serif', letterSpacing: '0.06rem'}}>
      {/* Louis Erard Header */}
      <header className="border-b border-black/10 bg-white sticky top-0 z-30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <div>
              <img 
                src="//www.louiserard.com/cdn/shop/files/logo-louis.svg?v=1706870401&width=120" 
                alt="Louis Erard" 
                width="120" 
                height="14.32" 
                loading="eager"
                className="motion-reduce"
                style={{maxWidth: '120px', height: 'auto', filter: 'brightness(0) saturate(100%) invert(29%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(86%)'}}
              />
            </div>
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase text-black" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 400, letterSpacing: '0.2em'}}>
              <a href="#" className="hover:opacity-70 transition-opacity">Watches</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Accessories</a>
              <a href="#" className="hover:opacity-70 transition-opacity">La maison</a>
            </nav>
            <div className="flex items-center gap-6">
              <button className="text-black hover:opacity-70 transition-opacity">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-black hover:opacity-70 transition-opacity">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Page Content */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
          {/* Product Image */}
          <div className="lg:w-auto flex justify-center lg:justify-end">
            <div className="w-full max-w-[715px] rounded-3xl overflow-hidden bg-white p-6" style={{backgroundColor: '#fafafa'}}>
              <img
                src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                className="w-full h-auto object-cover"
                style={{aspectRatio: '900/1247'}}
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div style={{display: 'none', aspectRatio: '900/1247'}} className="w-full flex items-center justify-center bg-gray-100">
                <span className="text-6xl">⌚</span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-auto">
            <div className="max-w-md">
              {/* Breadcrumb */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Noirmont X</p>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl lg:text-4xl mb-4 tracking-tight" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Le Régulateur Blanc Louis Erard x Alain Silberstein</h1>

              {/* Price */}
              <div className="mb-8">
                <p className="text-3xl mb-1" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300}}>
                  <span className="bg-gradient-to-b from-[#105281] to-[#158ee4] bg-clip-text text-transparent">CHF 3'000</span>
                </p>
                <p className="text-xs uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Excl. Tax</p>
                <p className="text-xs tracking-wide mt-1" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Free shipping</p>
              </div>

              {/* Main features */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.15em] mb-4" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Main features</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', color: 'rgba(0, 0, 0, 0.7)', borderRadius: '0px'}}>Automatic movement</span>
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', color: 'rgba(0, 0, 0, 0.7)', borderRadius: '0px'}}>Stainless steel</span>
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', color: 'rgba(0, 0, 0, 0.7)', borderRadius: '0px'}}>40mm case</span>
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wide flex items-center gap-1.5" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, backgroundColor: '#f4f4f5', borderRadius: '0px'}}>
                    <Shield className="w-3.5 h-3.5" style={{color: '#158ee4'}} />
                    <span style={{color: '#158ee4'}}>Digital Passport Included</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 prose prose-sm">
                <p className="text-sm leading-relaxed mb-4" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.7)'}}>
                  The Alain Silberstein's signature touch is instantly visible: a large blue arrow hand for the minutes, a red triangle for the hours, and a small yellow serpentine hand for the seconds. Telling the time becomes separated into its different parts in a joyful language, sophisticated and childlike at the same time, with the artistic and philosophical depth that characterises all Silberstein's work: it is a game of proportions, with references ranging from Bauhaus to the rich history of watchmaking.
                </p>
              </div>

              {/* Limited Edition */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>LOUIS ERARD X ALAIN SILBERSTEIN LIMITED EDITION 178 PIECES</p>
              </div>

              {/* Buy Button */}
              <button
                onClick={() => setCurrentStep(1)}
                className="w-full bg-gradient-to-b from-[#105281] to-[#158ee4] text-white py-4 px-6 text-sm font-normal uppercase hover:opacity-90 transition-opacity mb-3 border border-transparent tracking-[0.2em]"
                style={{fontFamily: 'Assistant, sans-serif', fontWeight: 400, borderRadius: '0px'}}
              >
                BUY NOW
              </button>
              <p className="text-xs text-center tracking-wide mb-4" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.5)'}}>Free shipping worldwide</p>
              <p className="text-xs text-center tracking-wide" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>3 years warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

