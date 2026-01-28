import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lock, Shield, Users, CheckCircle, Percent, DollarSign, Zap, Code, AlertCircle, AlertTriangle, Heart, XCircle, Layers } from 'lucide-react';

export default function LouisErard() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 4; // Opening, Control Gap, Settlement Protocol, Value Proposition
  
  // Effect to ensure page starts at the top on load
  useEffect(() => {
    setCurrentSection(0);
    
    const forceScrollToTop = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
        containerRef.current.scrollTo(0, 0);
      }
      window.scrollTo(0, 0);
    };

    forceScrollToTop();
    const timeoutId = setTimeout(forceScrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Effect for handling mouse wheel scroll navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < totalSections) {
        isScrollingRef.current = true;
        setCurrentSection(nextSection);
        
        const targetSection = container.children[nextSection];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  // Effect for updating the current section based on viewport visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTop = 0;
    setCurrentSection(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            const index = Array.from(container.children).indexOf(entry.target);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const timeoutId = setTimeout(() => {
      Array.from(container.children).forEach((child) => {
        observer.observe(child);
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Effect for handling keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return;

      let nextSection = currentSection;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextSection = Math.min(currentSection + 1, totalSections - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        nextSection = Math.max(currentSection - 1, 0);
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextSection = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextSection = totalSections - 1;
      }

      if (nextSection !== currentSection) {
        isScrollingRef.current = true;
        setCurrentSection(nextSection);
        const targetSection = containerRef.current?.children[nextSection];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, totalSections]);

  return (
    <>
      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSection(index);
              const targetSection = containerRef.current?.children[index];
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSection 
                ? 'w-2 h-6 bg-slate-800 dark:bg-slate-200' 
                : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-400'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Vantage Logo - Hidden on opening slide */}
      {currentSection > 0 && (
        <div className="fixed top-6 left-6 z-50">
          <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
            Vantage
          </div>
        </div>
      )}

      <div ref={containerRef} className="smooth-scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{scrollBehavior: 'smooth'}}>
        
        {/* --- SLIDE 0: OPENING SLIDE --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto z-10 text-center">
            <h1 className="text-7xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white mb-8">
              Vantage
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light">
              The Secondary Market Endgame
            </p>
          </div>
        </section>
        
        {/* --- SLIDE 1: THE CONTROL GAP --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Title Section */}
            <div className="text-center mb-6">
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">The State of Play</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">The Control Gap</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">Your DPP solved Identity. But you have no control over the secondary market.</p>
            </div>

            {/* Three Scorecard Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
              
              {/* Card 1: Authenticity (SOLVED) */}
              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border-2 border-green-200 dark:border-green-800/50 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">Authenticity</h3>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-base mb-4">Counterfeiting is solved.</p>
                  <span className="px-4 py-1.5 bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-bold rounded-full uppercase tracking-wide">Solved</span>
                </div>
              </div>

              {/* Card 2: Connection (SOLVED) */}
              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border-2 border-green-200 dark:border-green-800/50 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                    <Users className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">Connection</h3>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-base mb-4">Direct channel to every owner. Active CRM and loyalty programs.</p>
                  <span className="px-4 py-1.5 bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-bold rounded-full uppercase tracking-wide">Solved</span>
                </div>
              </div>

              {/* Card 3: Market Control (FAILED) */}
              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border-2 border-red-400 dark:border-red-600 shadow-xl scale-105 transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3 animate-pulse">
                    <XCircle className="w-7 h-7 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-3">Market Control</h3>
                  <ul className="text-left text-gray-700 dark:text-gray-300 text-base space-y-2 mb-4">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Grey market captures 100% upside</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Brand earns $0 revenue</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Passports cannot enforce business rules</li>
                  </ul>
                  <span className="px-4 py-1.5 bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-300 text-sm font-bold rounded-full uppercase tracking-wide animate-pulse">Critical Gap</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SLIDE 2: SETTLEMENT PROTOCOL SOLUTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Title Section */}
            <div className="text-center mb-6">
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Settlement Protocol</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Asset Governance</span>
                <span className="text-gray-900 dark:text-white"> On Your DPP</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">Enforce any rule at the moment of exchange.</p>
            </div>

            {/* Three Core Capabilities */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                
                {/* Programmed Transfer Rules */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Code className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">Asset Rules</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Define any business logic: royalties, transfer locks, KYC, geographic restrictions. Enforced automatically.
                    </p>
                  </div>
                </div>
                
                {/* Compliance-Gated Transfer */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Lock className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">Compliance-Gated</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Transfer only completes when all rules are satisfied.
                    </p>
                  </div>
                </div>
                
                {/* Perpetual Governance */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Shield className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">Lifetime Control</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Rules enforced across all platforms—Chrono24, eBay, private sales—for every resale.
                    </p>
                  </div>
                </div>

            </div>

          </div>
        </section>

        {/* --- SLIDE 3: VALUE PROPOSITION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Title Section */}
            <div className="text-center mb-6">
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Value Proposition</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">1 + 1 = 3</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">You built the ID card. We are building the turnstile.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Zero Setup Cost */}
              <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900 dark:to-green-950/20 rounded-xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-3">Zero Setup Cost</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                    We build and maintain the infrastructure. Zero upfront investment.
                  </p>
                </div>
              </div>

              {/* Revenue Share */}
              <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <Percent className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">Aligned Success</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                    Revenue share on royalties. We only win when you win.
                  </p>
                </div>
              </div>

              {/* Complementary Layer */}
              <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900 dark:to-green-950/20 rounded-xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <Layers className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-3">Invisible Layer</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                    Protocol layer behind the scenes. Your brand, your rules, your revenue.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}
