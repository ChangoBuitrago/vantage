import { useEffect, useRef, useState } from 'react';
import { FileText, Edit3, Tag, Calendar, Baseline, Clock, Percent, Wrench, Users, ArrowRight, CornerDownRight, Building2, Store, Sparkles, Shield, AlertCircle, AlertTriangle, Heart, CheckCircle, Lock } from 'lucide-react';

export default function ManuelEmch() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 4; // Current Strategy, New Strategy, Why You, Value Proposition
  
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
        
        {/* --- SLIDE 1: CURRENT STRATEGY --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Section 1: Selling, Not Distributing */}
            <div className="space-y-6">
              {/* Title Section */}
              <div className="text-center mb-10">
                <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Louis Erard Napkin Strategy</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">Selling, Not Distributing</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">50% direct, 50% selected retailers — self-sustainable and independent</p>
              </div>

              {/* Markets Comparison - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Primary Market */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                    <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-3">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Direct relationship. Fair price.</p>
                  </div>
                </div>

                {/* Secondary Market */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Le Régulateur x Alain Silberstein - Chrono24)</p>
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-5 border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-xl hover:border-red-400 dark:hover:border-red-600 transition-all">
                    <div className="flex items-center gap-2 text-base text-gray-900 dark:text-white mb-3 flex-wrap">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Flipper</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 6,500</span>
                    </div>
                    <div className="bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 rounded-lg px-3 py-2 border border-red-300 dark:border-red-700 shadow-sm">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Flipper profit</span>
                        <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 3,500</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 border-t border-red-300 dark:border-red-700">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Louis Erard Share</span>
                        <span className="font-mono text-base font-bold text-red-600 dark:text-red-400">CHF 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: The Secondary Market Problem */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-900 dark:text-white uppercase tracking-wider font-semibold mb-2">The Secondary Market Problem</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Three critical issues that undermine your independence</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Frustration */}
                <div className="bg-gradient-to-br from-white to-red-50/30 dark:from-slate-900 dark:to-red-950/20 rounded-xl p-5 border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-xl hover:border-red-400 dark:hover:border-red-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent mb-3">"Frustration"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>Real collectors can't buy at retail because flippers buy instantly and list immediately at markup.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>Brand loses huge profits to resellers.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Headaches */}
                <div className="bg-gradient-to-br from-white to-red-50/30 dark:from-slate-900 dark:to-red-950/20 rounded-xl p-5 border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-xl hover:border-red-400 dark:hover:border-red-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent mb-3">"Headaches"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>Collectors buying secondhand face authenticity concerns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>warranty issues</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>and condition uncertainties</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Lost Community */}
                <div className="bg-gradient-to-br from-white to-red-50/30 dark:from-slate-900 dark:to-red-950/20 rounded-xl p-5 border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-xl hover:border-red-400 dark:hover:border-red-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Heart className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent mb-3">"Lost Community"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>No connection between brand and secondary market collectors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-2"></span>
                        <span>missing opportunities to build lasting relationships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 2: NEW STRATEGY --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
            
            {/* Section 1: Selling And Distributing, With A Smart Contract */}
            <div className="space-y-6">
              {/* Title Section */}
              <div className="text-center mb-10">
                <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Faircut Napkin Strategy</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">Selling And Distributing</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">50% direct, 50% selected retailers + distributed secondary market — self-sustainable and independent</p>
              </div>

              {/* Markets Comparison - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Primary Market */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                    <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-3">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Direct relationship. Fair price.</p>
                  </div>
                </div>

                {/* Secondary Market with Royalty */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Le Régulateur x Alain Silberstein - Chrono24)</p>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all">
                    <div className="flex items-center gap-2 text-base text-gray-900 dark:text-white mb-3 flex-wrap">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Reseller</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 6,500</span>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg px-3 py-2 border border-green-300 dark:border-green-700 shadow-sm">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Reseller profit</span>
                        <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 1,550</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 border-t border-green-300 dark:border-green-700">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Louis Erard Share (30% royalty)</span>
                        <span className="font-mono text-base font-bold text-green-600 dark:text-green-400">CHF 1,950</span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-400 italic text-left mt-2 font-medium">Per resale. Perpetual.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: The Solution */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-900 dark:text-white uppercase tracking-wider font-semibold mb-2">The Secondary Market Solution</p>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Transform every resale into perpetual revenue, trust, and community</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Fair Access */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Lock className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Fair Access"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2"></span>
                        <span>Transfer locks rules ensure real collectors get priority access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2"></span>
                        <span>Dynamic royalties rules (90% Yr 1, 60% Yr 2, 15% Yr 3+) reduce flippers' margin and return profits to the brand</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Trust & Security */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Shield className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Trust & Security"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2"></span>
                        <span>Smart contract ensures authenticity and tracks warranty</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2"></span>
                        <span>Maintains condition history throughout ownership</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Collector Network */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <Users className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">"Collector Network"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2"></span>
                        <span>Like a "dating app", you connect collectors with each other across the watch's lifetime</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: WHY YOU --- */}
         <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
           <div className="w-full max-w-6xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
             
             {/* Title */}
             <div className="text-center">
               <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">Why Manuel Emch?</h2>
             </div>

             {/* Simple Facts */}
             <div className="bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-900 dark:to-amber-950/20 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-700 shadow-md hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-600 transition-all max-w-4xl mx-auto">
               <div className="space-y-5 text-base text-gray-800 dark:text-gray-200">
                 <div className="flex items-start gap-3">
                   <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                   <p>You were born and raised in the industry</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                   <p>You prioritize strategy, design and art over marketing hype</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                   <p>You choose perceived value over profit</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                   <p>You choose people over business</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                   <p>You choose community over everything else</p>
                 </div>
               </div>
             </div>

             {/* Bottom line */}
             <div className="text-center">
               <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
                 You breathe the values this system enables
               </p>
             </div>

           </div>
         </section> {/* End Section 3 */}

        {/* --- SECTION 4: VALUE PROPOSITION --- */}
         <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
           {/* Content container */}
           <div className="w-full max-w-6xl mx-auto z-10 flex flex-col h-full justify-center gap-10 py-6">
             
             {/* Title */}
             <div className="text-center">
               <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Value Proposition</p>
               <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">A Different Type of Collaboration</h2>
               <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium max-w-3xl">We bring the technology. You bring the market know-how. Together we ensure your values outlive every watch.</p>
             </div>

             {/* Collaboration Details */}
             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
               {/* Zero Setup Cost */}
               <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900 dark:to-green-950/20 rounded-xl p-6 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all flex flex-col">
                 <div className="flex flex-col items-center text-center flex-1">
                   <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center mb-4 shadow-sm">
                     <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                   </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Zero Setup Cost</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">No upfront investment. No infrastructure. No vendor lock-in.</p>
                 </div>
                 <p className="text-center mt-auto pt-3"><span className="font-semibold text-green-700 dark:text-green-400">We build and maintain everything—you stay independent.</span></p>
               </div>

               {/* Revenue Share */}
               <div className="bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-900 dark:to-orange-950/20 rounded-xl p-6 border-2 border-orange-300 dark:border-orange-700 shadow-md hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all flex flex-col">
                 <div className="flex flex-col items-center text-center flex-1">
                   <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-full flex items-center justify-center mb-4 shadow-sm">
                     <Percent className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Aligned Success</h3>
                   <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">We only succeed when you do. Simple revenue share model—we earn only when your watches resell.</p>
                 </div>
                 <p className="text-center mt-auto pt-3"><span className="font-semibold text-amber-700 dark:text-amber-400">Shared success, not shared risk.</span></p>
               </div>

               {/* Full Control */}
               <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900 dark:to-green-950/20 rounded-xl p-6 border-2 border-green-300 dark:border-green-700 shadow-md hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all flex flex-col">
                 <div className="flex flex-col items-center text-center flex-1">
                   <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center mb-4 shadow-sm">
                     <Shield className="w-7 h-7 text-green-600 dark:text-green-400" />
                   </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">You Stay in Control</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">Your watches. Your collectors. Your community. Your values. Your rules.</p>
                 </div>
                 <p className="text-center mt-auto pt-3"><span className="font-semibold text-green-700 dark:text-green-400">We're the invisible infrastructure—you're the brand.</span></p>
               </div>
             </div>

           </div>
         </section> {/* End Section 4 */}

      </div>
    </>
  );
}

