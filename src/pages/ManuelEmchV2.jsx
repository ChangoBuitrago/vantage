import { useEffect, useRef, useState } from 'react';
import { FileText, Tag, Clock, Percent, Wrench, Users, ArrowRight, Shield, Sparkles, TrendingUp, Heart } from 'lucide-react';

export default function ManuelEmchV2() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 4;
  
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
  }, [currentSection, totalSections]);

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
      {/* Section Indicators - Streamlined */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
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
                ? 'w-2 h-8 bg-amber-600 dark:bg-amber-400 shadow-lg' 
                : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-amber-400 dark:hover:bg-amber-500'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Faircut Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
          Faircut
        </div>
      </div>

      <div ref={containerRef} className="smooth-scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* --- SLIDE 1: THE PROBLEM --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-12">
              <p className="text-sm text-amber-600 dark:text-amber-400 mb-3 uppercase tracking-wider font-semibold">Current Reality</p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
                The Secondary Market Problem
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Flippers profit. Brands lose. Collectors suffer.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Primary Market */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Primary Market</p>
                <div className="flex items-center gap-3 text-lg text-gray-900 dark:text-white mb-4">
                  <span className="font-semibold">Brand</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold">Collector</span>
                  <span className="ml-auto font-mono text-2xl font-bold">CHF 3,000</span>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Direct sale at retail price</p>
                </div>
              </div>

              {/* Secondary Market */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border-2 border-red-200 dark:border-red-800 shadow-sm">
                <p className="text-xs text-red-600 dark:text-red-400 uppercase tracking-widest mb-4">Secondary Market</p>
                <div className="flex items-center gap-2 text-lg text-gray-900 dark:text-white mb-4 flex-wrap">
                  <span className="font-semibold">Brand</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold text-red-600 dark:text-red-400">Flipper</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold">Collector</span>
                  <span className="ml-auto font-mono text-2xl font-bold text-red-600 dark:text-red-400">CHF 6,500</span>
                </div>
                <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-3 border border-red-200 dark:border-red-700">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Flipper profit</span>
                    <span className="font-mono font-bold text-gray-900 dark:text-white">CHF 3,500</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-red-200 dark:border-red-700">
                    <span className="text-gray-700 dark:text-gray-300">Brand share</span>
                    <span className="font-mono font-bold text-gray-500 dark:text-gray-400">CHF 0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Points */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Lost Revenue</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Brand profits go to flippers, not collectors or the brand</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Trust Issues</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Authenticity, warranty, and condition concerns in secondary market</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Disconnected</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">No relationship between brand and secondary market collectors</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 2: THE SOLUTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-amber-950/30 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-12">
              <p className="text-sm text-amber-700 dark:text-amber-400 mb-3 uppercase tracking-wider font-semibold">The Solution</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
                Digital Passport
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Perpetual revenue. Complete control. Connected community.
              </p>
            </div>

            {/* Solution Comparison */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-700 shadow-xl mb-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">With Digital Passport</span>
              </div>

              {/* Secondary Market with Royalty */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Secondary Market</p>
                <div className="flex items-center gap-2 text-lg text-gray-900 dark:text-white mb-4 flex-wrap">
                  <span className="font-semibold">Brand</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold">Reseller</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold">Collector</span>
                  <span className="ml-auto font-mono text-2xl font-bold">CHF 6,500</span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Reseller profit</span>
                    <span className="font-mono font-bold text-gray-900 dark:text-white">CHF 2,450</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-amber-200 dark:border-amber-700">
                    <span className="text-gray-700 dark:text-gray-300">Brand royalty (30%)</span>
                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400">CHF 1,050</span>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-400 italic mt-2">Per resale. Perpetual.</p>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-5 border border-amber-200 dark:border-amber-800">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Fair Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Transfer locks prioritize real collectors over flippers</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-5 border border-amber-200 dark:border-amber-800">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Trust & Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Verified authenticity, warranty tracking, condition history</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-5 border border-amber-200 dark:border-amber-800">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Connected Community</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Build lasting relationships across the watch's lifetime</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 3: THE PASSPORT --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto z-10 space-y-8">
            
            {/* Title */}
            <div className="text-center">
              <p className="text-sm text-amber-600 dark:text-amber-400 mb-2 uppercase tracking-wider font-semibold">Proof of Concept</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">The Digital Passport</h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Smart rules, immutable records, perpetual revenues</p>
            </div>

            {/* Passport Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border-2 border-amber-200 dark:border-amber-800 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 px-6 py-4 border-b border-amber-200 dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">Louis Erard</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Le Régulateur x Alain Silberstein</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-300 dark:border-green-700">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex gap-6 items-start mb-6">
                  {/* Watch Image */}
                  <div className="w-32 h-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl flex items-center justify-center overflow-hidden border-2 border-amber-200 dark:border-amber-800 flex-shrink-0">
                    <img
                      src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                      alt="Watch"
                      className="w-full h-full object-contain p-2"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-gray-500 dark:text-gray-400">Owner:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Manuel Emch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-gray-500 dark:text-gray-400">Edition:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">#042 / 178</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-gray-500 dark:text-gray-400">Serial:</span>
                      <span className="font-mono font-semibold text-gray-900 dark:text-white">LE-AS-2021-042</span>
                    </div>
                  </div>
                </div>

                {/* Smart Rules */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-900 dark:text-white mb-3">Smart Rules</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Transfer Lock</span>
                      </div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">6 months</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Percent className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Year 1 Royalty</span>
                      </div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">90%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Service Log</span>
                      </div>
                      <span className="text-xs font-bold text-green-600 dark:text-green-400">Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Community</span>
                      </div>
                      <span className="text-xs font-bold text-green-600 dark:text-green-400">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <Clock className="w-6 h-6 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">Anti-Flipping</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Transfer locks</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <Percent className="w-6 h-6 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">Dynamic Royalties</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Time-based rates</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <Wrench className="w-6 h-6 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">Service History</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Immutable records</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <Users className="w-6 h-6 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">Community</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Connected owners</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 4: WHY YOU --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-amber-950/30 relative overflow-hidden">
          <div className="w-full max-w-3xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-4">Why Manuel Emch?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">You embody the values this system enables</p>
            </div>

            {/* Values Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-amber-300 dark:border-amber-700 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Born in the industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deep understanding of watchmaking heritage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Strategy over hype</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Prioritize design, art, and authentic value</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">People over profit</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Community and relationships come first</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center mt-8">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                You breathe the values this system enables
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

