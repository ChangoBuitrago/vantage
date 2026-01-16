import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lock, Shield, Users, CheckCircle, Percent, DollarSign, Zap, Code } from 'lucide-react';

export default function FrankPagano() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 4; // From Passport to Protocol, Current Problem, Settlement Protocol, Value Proposition
  
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
      
      {/* Faircut Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
          Faircut
        </div>
      </div>

      <div ref={containerRef} className="smooth-scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{scrollBehavior: 'smooth'}}>
        
        {/* --- SLIDE 0: FROM PASSPORT TO PROTOCOL --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-12 py-6">
            
            {/* Title Section */}
            <div className="text-center mb-8">
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Building on What You've Built</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
                From Passport to Protocol
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
                You built the passport. We activate asset governance—enforce any rule you want.
              </p>
            </div>

            {/* Two Phases Comparison */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              {/* Phase 1: Digital Product Passport */}
              <div className="flex flex-col">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-700 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Phase 1</h3>
                      <p className="text-sm text-green-600 dark:text-green-400 font-semibold">COMPLETE</p>
                    </div>
                  </div>
                  
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-6">
                    Digital Product Passport
                  </h4>
                  
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Authenticity verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Warranty tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Condition history</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Loyalty programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Primary market focus</span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-green-300 dark:border-green-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Louis Erard, qiibee, Aura Consortium</p>
                  </div>
                </div>
              </div>

              {/* Phase 2: Settlement Protocol */}
              <div className="flex flex-col">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-8 border-2 border-orange-300 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Phase 2</h3>
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold">MISSING</p>
                    </div>
                  </div>
                  
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-6">
                    Settlement Protocol
                  </h4>
                  
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Binds ownership to payment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Enforces transfer rules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Perpetual royalty collection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Market-driven compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2.5"></span>
                      <span className="text-base text-gray-700 dark:text-gray-300">Secondary market governance</span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-orange-300 dark:border-orange-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Faircut</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Statement */}
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Your DPP proves <span className="font-bold text-gray-900 dark:text-white">authenticity</span>. 
                Our protocol <span className="font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">activates asset governance</span>—enforce any rule you want.
              </p>
            </div>

          </div>
        </section>

        {/* --- SLIDE 1: THE SECONDARY MARKET PROBLEM --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Title Section */}
            <div className="text-center mb-6">
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Current Strategy - Louis Erard</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">The Secondary Market Problem</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">Your Alain Silberstein drop doubled in value within 24 hours. Louis Erard captured CHF 0 from those resales.</p>
            </div>

            {/* Markets Comparison */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Primary Market */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                  <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-3">
                    <span className="font-semibold">Brand</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold">Collector</span>
                    <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 11,000</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">Direct relationship. Fair price. You have the DPP.</p>
                </div>
              </div>

              {/* Secondary Market */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Chrono24 - Within 24 Hours)</p>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-5 border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-xl hover:border-red-400 dark:hover:border-red-600 transition-all">
                  <div className="flex items-center gap-2 text-base text-gray-900 dark:text-white mb-3 flex-wrap">
                    <span className="font-semibold">Brand</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold">Flipper</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold">Collector</span>
                    <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 22,000</span>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 rounded-lg px-3 py-2 border border-red-300 dark:border-red-700 shadow-sm">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Flipper profit</span>
                      <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 11,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-1.5 border-t border-red-300 dark:border-red-700">
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Louis Erard Share</span>
                      <span className="font-mono text-base font-bold text-red-600 dark:text-red-400">CHF 0</span>
                    </div>
                  </div>
                  <p className="text-xs text-red-700 dark:text-red-400 mt-2 font-medium">DPP exists, but it's not governable—can't enforce any business rules at exchange.</p>
                </div>
              </div>
            </div>

            {/* Three Critical Issues */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-base text-gray-600 dark:text-gray-400">Your DPP tracks ownership, but it's not governable—it can't enforce business rules</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-red-200 dark:border-red-800 shadow-sm">
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">❌ Not Governable</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DPP tracks ownership but can't enforce transfer rules, royalties, or compliance checks</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-red-200 dark:border-red-800 shadow-sm">
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">❌ Not Transaction-Gated</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Can't bind ownership transfer to payment, KYC, or any compliance requirement</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-red-200 dark:border-red-800 shadow-sm">
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">❌ Not Enforceable</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Can't enforce your business logic across marketplaces at moment of exchange</p>
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
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Faircut Settlement Protocol</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                <span className="text-gray-900 dark:text-white">Activating </span>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Asset Governance</span>
                <span className="text-gray-900 dark:text-white"> On Your DPP</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">We activate asset governance on your DPP—enforce any rule at the moment of exchange</p>
            </div>

            {/* Markets Comparison with Settlement Protocol */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Primary Market */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                  <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-3">
                    <span className="font-semibold">Brand</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold">Collector</span>
                    <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 11,000</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">Direct relationship. Fair price. DPP issued.</p>
                </div>
              </div>

              {/* Secondary Market with Protocol */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (With Settlement Protocol)</p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                  <div className="flex items-center gap-2 text-base text-gray-900 dark:text-white mb-3 flex-wrap">
                    <span className="font-semibold">Brand</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold">Reseller</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold">Collector</span>
                    <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 22,000</span>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg px-3 py-2 border border-green-300 dark:border-green-700 shadow-sm">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Reseller profit (after royalty)</span>
                      <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 7,700</span>
                    </div>
                    <div className="flex justify-between items-center pt-1.5 border-t border-green-300 dark:border-green-700">
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Louis Erard Share (30% royalty)</span>
                      <span className="font-mono text-base font-bold text-green-600 dark:text-green-400">CHF 3,300</span>
                    </div>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-400 italic text-left mt-2 font-medium">Perpetual. Rules enforced at every exchange.</p>
                </div>
              </div>
            </div>

            {/* How Settlement Protocol Works */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg text-gray-900 dark:text-white uppercase tracking-wider font-semibold mb-2">How the Settlement Protocol Works</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Three core capabilities</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                
                {/* Programmed Transfer Rules */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Code className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Asset Rules"</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Royalties, transfer locks, KYC, geographic restrictions—any business logic, enforced automatically.
                    </p>
                  </div>
                </div>
                
                {/* Compliance-Gated Transfer */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Lock className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Compliance-Gated"</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Ownership transfers only when all your rules are satisfied at moment of exchange.
                    </p>
                  </div>
                </div>
                
                {/* Perpetual Governance */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Shield className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Lifetime Control"</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Rules enforced across all platforms—Chrono24, eBay, private sales—through every transfer, perpetually.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: VALUE PROPOSITION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Title Section */}
            <div className="text-center mb-8">
              <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Value Proposition</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">1 + 1 = 3</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">We add the governance layer. You keep full control.</p>
            </div>

            {/* What We Each Bring */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              
              {/* You Keep */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">You Keep</p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all h-full">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Your DPP infrastructure</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">qiibee, Aura, or any solution you have</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Your independence</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Full control over brand and values</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Your community</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Collectors stay with you</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* We Add */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">We Activate It With</p>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all h-full">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Asset governance</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Enforce any rule: royalties, KYC, restrictions, time locks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Market-driven compliance</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Rules execute automatically across all platforms at moment of exchange</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Perpetual revenue</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Your royalty logic earns on every resale, forever</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* How We Work Together */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-900 dark:text-white uppercase tracking-wider font-semibold mb-2">How We Work Together</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                
                {/* Zero Setup Cost */}
                <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900 dark:to-green-950/20 rounded-xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-3">"Zero Setup Cost"</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      We build and maintain everything. You stay independent.
                    </p>
                  </div>
                </div>

                {/* Revenue Share */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Percent className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Aligned Success"</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      We share in royalties. No upfront cost or risk.
                    </p>
                  </div>
                </div>

                {/* Complementary Layer */}
                <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900 dark:to-green-950/20 rounded-xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Shield className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-3">"Invisible Layer"</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      Infrastructure behind the scenes. Your brand, your rules, your revenue.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
