import React from 'react';
import { Check, Search, ShoppingBag, Mail } from 'lucide-react';

export default function ResellerStep1({ setCurrentStep }) {
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

      {/* Order Confirmation Content */}
      <div className="max-w-2xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <div className="w-16 h-16 border-2 flex items-center justify-center mx-auto mb-6" style={{borderRadius: '0px', borderColor: '#000000'}}>
            <Check className="w-8 h-8" style={{color: '#000000'}} />
          </div>
          <h1 className="text-3xl lg:text-4xl font-light mb-4 tracking-tight" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Thank you for your order</h1>
          <p className="text-xs uppercase tracking-[0.2em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Order #LE-2024-042</p>
        </div>

        {/* Order Summary */}
        <div className="p-8 mb-10" style={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0px'}}>
          <h2 className="text-xs uppercase tracking-[0.2em] mb-8 font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Order Summary</h2>
          
          {/* Product Item */}
          <div className="flex gap-6 mb-8 pb-8" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <div className="w-20 h-20 bg-white flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden" style={{backgroundColor: '#fafafa'}}>
              <img
                src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=246"
                alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div style={{display: 'none'}} className="w-full h-full flex items-center justify-center">
                <span className="text-3xl">⌚</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.15em] mb-1 font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>Noirmont X</p>
              <h3 className="font-light mb-2 text-sm" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Le Régulateur Blanc Louis Erard x Alain Silberstein</h3>
              <p className="text-xs" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.5)'}}>Edition #042 / 178</p>
            </div>
            <div className="text-right">
              <p className="font-light text-sm" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>CHF 3'000</p>
            </div>
          </div>

          {/* Order Totals */}
          <div className="space-y-4 text-xs">
            <div className="flex justify-between uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>
              <span>Subtotal</span>
              <span style={{color: '#000000', fontWeight: 300}}>CHF 3'000</span>
            </div>
            <div className="flex justify-between uppercase tracking-[0.15em]" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>
              <span>Shipping</span>
              <span style={{color: '#000000', fontWeight: 300}}>Free</span>
            </div>
            <div className="flex justify-between pt-4 text-sm" style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}>
              <span className="uppercase tracking-[0.15em] font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>Total</span>
              <span className="font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: '#000000'}}>CHF 3'000</span>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="p-6 mb-10" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0px'}}>
          <h3 className="text-xs uppercase tracking-[0.2em] mb-4 font-light" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)'}}>What Happens Next?</h3>
          <div className="space-y-3 text-xs leading-relaxed" style={{fontFamily: 'Assistant, sans-serif', fontWeight: 300, color: 'rgba(0, 0, 0, 0.7)'}}>
            <p>• Your watch will be shipped within 2-3 business days</p>
            <p>• You'll receive a digital passport via email after delivery</p>
          </div>
        </div>

        {/* View Inbox Button */}
        <div className="text-center">
          <button
            onClick={() => setCurrentStep && setCurrentStep(2)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-900 transition-colors duration-200"
            style={{
              fontFamily: 'Assistant, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              fontSize: '11px',
              textTransform: 'uppercase',
              borderRadius: '0px'
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

