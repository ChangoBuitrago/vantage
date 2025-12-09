import { useEffect, useRef, useState } from 'react';
import { FileText, Edit3, Tag, Calendar, Baseline, Clock, Percent, Wrench, Users, ArrowRight, CornerDownRight, Building2, Store, Sparkles, Shield, AlertCircle, AlertTriangle, Heart, CheckCircle, Lock } from 'lucide-react';

export default function ManuelEmch() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 5; // Current Strategy, New Strategy, Smart Contract, Transfer Flow, Why You
  
  // Smart Contract data
  const watchMintTimestamp = new Date('2025-06-15').getTime();
  const transferLockEndDateTimestamp = new Date('2025-12-15').getTime();
  const isTransferLockActive = Date.now() < transferLockEndDateTimestamp;
  const activeRoyaltyTier = 'Year 1'; // Can be 'Year 1', 'Year 2', or 'Year 3+'
  const serviceLogStatus = "Verified";
  const communityAccessStatus = "Enabled";
  
  // Helper functions
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };
  
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
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10">
            
            {/* Section 1: Selling, Not Distributing */}
            <div>
              {/* Title Section - More Compact */}
              <div className="text-center mb-6">
                <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">Louis Erard Strategy</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Selling, Not Distributing</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium whitespace-nowrap">50% direct, 50% selected retailers — self-sustainable and independent</p>
              </div>

              {/* Markets Comparison - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Primary Market */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border-2 border-green-200 dark:border-green-800 shadow-md">
                    <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-3">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Known Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Direct relationship. Fair price.</p>
                  </div>
                </div>

                {/* Secondary Market */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Le Régulateur x Alain Silberstein - Chrono24)</p>
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-4 border-2 border-red-200 dark:border-red-800 shadow-md">
                    <div className="flex items-center gap-2 text-base text-gray-900 dark:text-white mb-3 flex-wrap">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Flipper</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Unknown Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 6,500</span>
                    </div>
                    <div className="bg-red-100 dark:bg-red-900/40 rounded-lg px-3 py-2 border border-red-300 dark:border-red-700">
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

            {/* Section 2: The Resale Market Problem */}
            <div>
              <div className="mb-5 text-center">
                <p className="text-lg text-gray-900 dark:text-white uppercase tracking-wider font-semibold mb-2">The Resale Market Problem</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Three critical issues that undermine your independence</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {/* Frustration */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-red-200 dark:border-red-800 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3">
                      <AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">"Frustration"</h3>
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
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-red-200 dark:border-red-800 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3">
                      <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">"Headaches"</h3>
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
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-red-200 dark:border-red-800 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3">
                      <Heart className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">"Lost Community"</h3>
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
          <div className="w-full max-w-7xl mx-auto z-10 flex flex-col h-full justify-center gap-10">
            
            {/* Section 1: Selling And Distributing, With A Smart Contract */}
            <div>
              {/* Title Section - More Compact */}
              <div className="text-center mb-6">
                <p className="text-base text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider font-semibold">The Napkin Strategy</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Selling And Distributing,<br /><span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">With A Smart Contract</span></h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-medium">100% control, zero cost, perpetual revenue — maintaining independence and self-sustainability</p>
              </div>

              {/* Markets Comparison - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Primary Market */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border-2 border-green-200 dark:border-green-800 shadow-md">
                    <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-3">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Known Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Direct relationship. Fair price.</p>
                  </div>
                </div>

                {/* Secondary Market with Royalty */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Le Régulateur x Alain Silberstein - Chrono24)</p>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-4 border-2 border-amber-200 dark:border-amber-800 shadow-md">
                    <div className="flex items-center gap-2 text-base text-gray-900 dark:text-white mb-3 flex-wrap">
                      <span className="font-semibold">Brand</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Reseller</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">Unknown Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 6,500</span>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-900/40 rounded-lg px-3 py-2 border border-amber-300 dark:border-amber-700">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Reseller profit</span>
                        <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 2,450</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 border-t border-amber-300 dark:border-amber-700">
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Louis Erard Share (30% royalty)</span>
                        <span className="font-mono text-base font-bold text-amber-600 dark:text-amber-400">CHF 1,050</span>
                      </div>
                      <p className="text-xs text-amber-700 dark:text-amber-400 italic text-left mt-2 font-medium">Per resale. Perpetual.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: The Solution */}
            <div>
              <div className="mb-5 text-center">
                <p className="text-lg text-gray-900 dark:text-white uppercase tracking-wider font-semibold mb-2">The Solution</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Three key benefits enabled by the Smart Contract</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {/* Fair Access */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-800 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3">
                      <Lock className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-3">"Fair Access"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                        <span>Transfer locks rules ensure real collectors get priority access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                        <span>Dynamic royalties rules (90% Yr 1, 60% Yr 2, 15% Yr 3+) reduce flippers' margin and return profits to the brand</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Trust & Security */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-800 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3">
                      <Shield className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-3">"Trust & Security"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                        <span>Smart contract ensures authenticity and tracks warranty</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                        <span>Maintains condition history throughout ownership</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Connected Community */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-800 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-3">"Connected Community"</h3>
                    <ul className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-2.5 text-left w-full">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2"></span>
                        <span>Like a "dating app", you connect collectors with each other across the watch's lifetime, building lasting relationships and community</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: THE SMART CONTRACT (Visual & Simplified) --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden text-neutral-900 dark:text-neutral-100 font-[Inter]">
          {/* Content container */}
          <div className="w-full max-w-6xl mx-auto space-y-6">

            {/* Title */}
            <div className="text-center">
              <p className="text-base text-neutral-500 dark:text-neutral-500 mb-2 uppercase tracking-wider">Proof of Concept</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-2">The Smart Contract</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">Smart rules, immutable records, perpetual revenues—connected communities</p>
            </div>

            {/* Smart Contract Visual Mockup Area */}
            <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-xl shadow-lg border-2 border-amber-200 dark:border-amber-800 overflow-hidden max-w-3xl mx-auto">
              {/* Header with Brand and Badge */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 px-4 py-3 border-b border-amber-200 dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">Louis Erard</span>
                    <h3 className="text-base font-bold tracking-tight text-neutral-900 dark:text-white mt-0.5">Le Régulateur x Alain Silberstein</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-300 dark:border-green-700">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              
              {/* Main Content Flex Container */}
              <div className="flex flex-col md:flex-row gap-4 p-4 items-start">
                  {/* Left Column: Core Info + Rules */}
                  <div className="flex-1 space-y-3">
                      
                      {/* Watch Details & Image */}
                      <div className="flex gap-4 items-start">
                          {/* Details Block */}
                          <div className="space-y-2 text-base flex-1">
                              <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Owner:</span>
                                <span className="font-semibold text-neutral-900 dark:text-white">Manuel Emch</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Ref:</span>
                                <span className="font-mono font-semibold text-neutral-900 dark:text-white">85358TT02.BTT88</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Edit3 className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Edition:</span>
                                <span className="font-semibold text-neutral-900 dark:text-white">#042 / 178</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Serial:</span>
                                <span className="font-mono font-semibold text-neutral-900 dark:text-white">LE-AS-2021-042</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Issued:</span>
                                <span className="font-semibold text-neutral-900 dark:text-white">{formatDate(watchMintTimestamp)}</span>
                              </div>
                          </div>
                          {/* Watch Image */}
                          <div className="w-28 h-auto flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-2 border-2 border-amber-200 dark:border-amber-800 shadow-md">
                              <img
                                src="https://img.chrono24.com/images/uhren/26746621-zpbgyrk9dwrlxwziwnej4dcs-Zoom.jpg"
                                alt="Watch"
                                className="max-w-full h-auto object-contain"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x120/e2e8f0/cbd5e1?text=Img'; }}
                              />
                          </div>
                      </div>

                      {/* Smart Rules Display */}
                      <div className="pt-2 mt-2 border-t-2 border-neutral-200 dark:border-neutral-700 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-0.5 h-3 bg-amber-500 dark:bg-amber-600 rounded-full"></div>
                            <p className="text-sm text-neutral-900 dark:text-white uppercase tracking-wider font-bold">Smart Rules</p>
                          </div>
                          
                          {/* Base Resale Price */}
                          <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Minimum price for royalty calculation">
                              <div className="flex items-center gap-1.5">
                                <Baseline className="w-4 h-4 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">Base Resale Price</span>
                              </div>
                              <span className="font-mono text-sm tabular-nums font-bold text-neutral-900 dark:text-white">CHF {formatNumber(3000)}</span>
                          </div>
                           {/* Transfer Lock Rule Display */}
                          <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title={`Transfer lock active for first 6 months. Ends ${formatDate(transferLockEndDateTimestamp)}`}>
                              <div className="flex items-center gap-1.5">
                                <Clock className={`w-4 h-4 flex-shrink-0 ${isTransferLockActive ? 'text-red-600 dark:text-red-500' : 'text-amber-600 dark:text-amber-500'}`}/>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">Transfer Lock</span>
                              </div>
                              <span className={`text-sm font-bold ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-neutral-900 dark:text-white'}`}>
                                  {isTransferLockActive ? 'Active' : formatDate(transferLockEndDateTimestamp)}
                              </span>
                          </div>
                          
                          {/* Royalty Rules Display */}
                          <div className="space-y-1.5">
                              <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Royalty within first year">
                                  <div className="flex items-center gap-1.5">
                                    <Percent className={`w-4 h-4 flex-shrink-0 ${activeRoyaltyTier === 'Year 1' ? 'text-amber-600 dark:text-amber-500' : 'text-neutral-500 dark:text-neutral-400'}`}/>
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Year 1 Royalty</span>
                                  </div>
                                  <span className={`font-mono text-sm font-bold ${activeRoyaltyTier === 'Year 1' ? 'text-neutral-900 dark:text-white' : 'text-neutral-400 dark:text-neutral-600'}`}>90%</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Royalty during second year">
                                  <div className="flex items-center gap-1.5">
                                    <Percent className={`w-4 h-4 flex-shrink-0 ${activeRoyaltyTier === 'Year 2' ? 'text-amber-600 dark:text-amber-500' : 'text-neutral-500 dark:text-neutral-400'}`}/>
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Year 2 Royalty</span>
                                  </div>
                                  <span className={`font-mono text-sm font-bold ${activeRoyaltyTier === 'Year 2' ? 'text-neutral-900 dark:text-white' : 'text-neutral-400 dark:text-neutral-600'}`}>60%</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Royalty after two years">
                                  <div className="flex items-center gap-1.5">
                                    <Percent className={`w-4 h-4 flex-shrink-0 ${activeRoyaltyTier === 'Year 3+' ? 'text-amber-600 dark:text-amber-500' : 'text-neutral-500 dark:text-neutral-400'}`}/>
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Year 3+ Royalty</span>
                                  </div>
                                  <span className={`font-mono text-sm font-bold ${activeRoyaltyTier === 'Year 3+' ? 'text-neutral-900 dark:text-white' : 'text-neutral-400 dark:text-neutral-600'}`}>15%</span>
                              </div>
                          </div>
                          
                          {/* Service Log Status */}
                          <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Service history verifiable">
                              <div className="flex items-center gap-1.5">
                                <Wrench className={`w-4 h-4 flex-shrink-0 ${serviceLogStatus === "Verified" ? 'text-green-600 dark:text-green-500' : 'text-amber-600 dark:text-amber-500'}`}/>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">Service Log</span>
                              </div>
                              <span className={`text-sm font-bold ${serviceLogStatus === "Verified" ? 'text-green-600 dark:text-green-400' : 'text-neutral-900 dark:text-white'}`}>{serviceLogStatus}</span>
                          </div>
                          
                          {/* Community Access Status */}
                          <div className="flex items-center justify-between p-2.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Access to owner community & perks">
                              <div className="flex items-center gap-1.5">
                                <Users className={`w-4 h-4 flex-shrink-0 ${communityAccessStatus === "Enabled" ? 'text-green-600 dark:text-green-500' : 'text-amber-600 dark:text-amber-500'}`}/>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">Community Access</span>
                              </div>
                              <span className={`text-sm font-bold ${communityAccessStatus === "Enabled" ? 'text-green-600 dark:text-green-400' : 'text-neutral-900 dark:text-white'}`}>{communityAccessStatus}</span>
                          </div>
                      </div>
                  </div>
              </div> {/* End Main Flex Container */}
            </div> {/* End Smart Contract Card */}

            {/* SECTION: Brand-Defined Rules & Benefits Tiles */}
            <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-base text-neutral-500 dark:text-neutral-500 uppercase tracking-widest font-medium text-center">Smart Rules & Benefits</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {/* Anti-Flipping Rules */}
                 <div className="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Clock className="w-7 h-7 mx-auto mb-2 text-amber-600 dark:text-amber-500"/>
                  <p className="text-base font-medium mb-2">Anti-Flipping Rules</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 flex-grow">Implement transfer locks (e.g., first 6 months) to discourage immediate speculation.</p>
                </div>
                {/* Dynamic Royalties */}
                <div className="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Percent className="w-7 h-7 mx-auto mb-2 text-amber-600 dark:text-amber-500"/>
                  <p className="text-base font-medium mb-2">Dynamic Royalties</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 flex-grow">Automated time-based royalties on every resale, ensuring perpetual revenue stream for the brand.</p>
                </div>
                 {/* Service History */}
                 <div className="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Wrench className="w-7 h-7 mx-auto mb-2 text-amber-600 dark:text-amber-500"/>
                  <p className="text-base font-medium mb-2">Verified Service Log</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 flex-grow">Build trust & value: only official centers can update the immutable service history.</p>
                </div>
                 {/* Owner Perks & Community */}
                 <div className="p-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Users className="w-7 h-7 mx-auto mb-2 text-amber-600 dark:text-amber-500"/>
                  <p className="text-base font-medium mb-2">Connected Community</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 flex-grow">Fulfill the 'dating site' vision: connect owners, offer perks, discounts & early access.</p>
                </div>
              </div>
            </div>

          </div>
        </section> {/* End Section 3 */}

         {/* --- SECTION 4: THE TRANSFER FLOW --- */}
         <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
           {/* Content container */}
           <div className="w-full max-w-6xl mx-auto space-y-12 z-10">

             {/* Title */}
             <div className="text-center">
               <p className="text-base text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">How It Works</p>
               <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">The Royalty-Enforced Transfer</h2>
               <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Every resale automatically enforces smart rules and captures revenue for the brand</p>
             </div>

             {/* Transfer Flow Steps */}
             <div className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                   {/* Step 1 */}
                   <div className="relative">
                     <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800 h-full">
                       <div className="flex flex-col items-center text-center space-y-3">
                         <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                           <Tag className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                         </div>
                         <div>
                           <p className="text-base font-bold text-gray-900 dark:text-white mb-1">Step 1</p>
                           <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Seller Lists Price</p>
                           <p className="text-base text-gray-600 dark:text-gray-400">Owner decides to sell and sets their asking price</p>
                         </div>
                       </div>
                     </div>
                     <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-500 dark:text-amber-600 z-10" />
                   </div>

                   {/* Step 2 */}
                   <div className="relative">
                     <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800 h-full">
                       <div className="flex flex-col items-center text-center space-y-3">
                         <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                           <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                         </div>
                         <div>
                           <p className="text-base font-bold text-gray-900 dark:text-white mb-1">Step 2</p>
                           <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rules Enforced</p>
                           <p className="text-base text-gray-600 dark:text-gray-400">Hub calculates royalty based on smart rules</p>
                         </div>
                       </div>
                     </div>
                     <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-500 dark:text-amber-600 z-10" />
                   </div>

                   {/* Step 3 */}
                   <div className="relative">
                     <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800 h-full">
                       <div className="flex flex-col items-center text-center space-y-3">
                         <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                           <Percent className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                         </div>
                         <div>
                           <p className="text-base font-bold text-gray-900 dark:text-white mb-1">Step 3</p>
                           <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Royalty Paid</p>
                           <p className="text-base text-gray-600 dark:text-gray-400">Seller pays required percentage to brand</p>
                         </div>
                       </div>
                     </div>
                     <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500 dark:text-green-600 z-10" />
                   </div>

                   {/* Step 4 */}
                   <div>
                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-300 dark:border-green-700 h-full">
                       <div className="flex flex-col items-center text-center space-y-3">
                         <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                           <FileText className="w-6 h-6 text-green-600 dark:text-green-500" />
                         </div>
                         <div>
                           <p className="text-base font-bold text-green-900 dark:text-green-300 mb-1">Step 4</p>
                           <p className="text-xl font-semibold text-green-900 dark:text-green-200 mb-2">Smart Contract Transfers</p>
                           <p className="text-base text-green-700 dark:text-green-400">Ownership updates, history preserved</p>
                         </div>
                       </div>
                     </div>
                   </div>
               </div>
             </div>

           </div>
         </section> {/* End Section 4 */}

         {/* --- SECTION 5: WHY YOU --- */}
         <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
           {/* Content container */}
           <div className="w-full max-w-4xl mx-auto space-y-12 z-10">

             {/* Title */}
             <div className="text-center">
               <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">Why Manuel Emch?</h2>
             </div>

             {/* Simple Facts */}
             <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-10 border-2 border-amber-400 dark:border-amber-600 shadow-xl">
               <div className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
                 <div className="flex items-start gap-4">
                   <span className="text-3xl text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">•</span>
                   <p>You were born and raised in the industry</p>
                 </div>
                 <div className="flex items-start gap-4">
                   <span className="text-3xl text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">•</span>
                   <p>You prioritize strategy, design and art over marketing hype</p>
                 </div>
                 <div className="flex items-start gap-4">
                   <span className="text-3xl text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">•</span>
                   <p>You choose perceived value over profit</p>
                 </div>
                 <div className="flex items-start gap-4">
                   <span className="text-3xl text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">•</span>
                   <p>You choose people over business</p>
                 </div>
                 <div className="flex items-start gap-4">
                   <span className="text-3xl text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">•</span>
                   <p>You choose community over everything else</p>
                 </div>
               </div>
             </div>

             {/* Bottom line */}
             <div className="text-center">
               <p className="text-2xl font-bold text-gray-900 dark:text-white">
                 You breathe the values this system enables
               </p>
             </div>

           </div>
         </section> {/* End Section 5 */}

      </div>
    </>
  );
}

