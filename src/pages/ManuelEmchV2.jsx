import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Heart, Sparkles, Target, Percent, Clock, CheckCircle } from 'lucide-react';

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
        
        {/* --- SECTION 1: PERSONAL OPENING --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/30 dark:via-slate-900 dark:to-orange-950/30 relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto z-10 text-center">
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                Manuel,
              </h1>
              <p className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                What if every watch you create could build relationships that last generations?
              </p>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-3xl p-10 border border-amber-200 dark:border-amber-800 shadow-xl max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                You've built Louis Erard on values that matter: <span className="font-semibold text-amber-700 dark:text-amber-400">strategy over hype</span>, <span className="font-semibold text-amber-700 dark:text-amber-400">people over profit</span>, <span className="font-semibold text-amber-700 dark:text-amber-400">community over everything</span>.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                But when your watches move to the secondary market, those values disappear. Flippers profit. You lose. Collectors suffer.
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white leading-relaxed pt-6 border-t border-amber-200 dark:border-amber-800">
                What if there was a way to maintain your values—and your revenue—throughout a watch's entire lifetime?
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE PROBLEM --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider font-semibold">The Reality</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
                What Happens After You Sell
              </h2>
            </div>

            {/* Visual Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Primary Market */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider">Primary Market</p>
                </div>
                <div className="flex items-center gap-4 text-2xl text-gray-900 dark:text-white mb-4">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-bold text-gray-900 dark:text-white border-2 border-green-300 dark:border-green-700">
                    LE
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-semibold text-gray-900 dark:text-white border-2 border-green-300 dark:border-green-700">
                    👤
                  </div>
                  <span className="ml-auto font-mono text-3xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-green-200 dark:border-green-700">
                  Direct relationship. Fair price. Your values intact.
                </p>
              </div>

              {/* Secondary Market */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider">Secondary Market</p>
                </div>
                <div className="flex items-center gap-3 text-xl text-gray-900 dark:text-white mb-4 flex-wrap">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-bold text-gray-900 dark:text-white border-2 border-red-300 dark:border-red-700">
                    LE
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 border-2 border-red-300 dark:border-red-700">
                    💰
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-semibold text-gray-900 dark:text-white border-2 border-red-300 dark:border-red-700">
                    👤
                  </div>
                  <span className="ml-auto font-mono text-3xl font-bold text-red-600 dark:text-red-400">CHF 6,500</span>
                </div>
                <div className="bg-red-100 dark:bg-red-900/40 rounded-xl p-5 border border-red-300 dark:border-red-700 mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Flipper profit</span>
                    <span className="font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,500</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-red-300 dark:border-red-700">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Your share</span>
                    <span className="font-mono text-xl font-bold text-gray-500 dark:text-gray-400">CHF 0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Pain Points */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Lost Relationships</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Real collectors can't buy at retail. Flippers take their place.</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Lost Revenue</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Every resale profit goes to flippers, not back to your brand.</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Lost Trust</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Secondary buyers face authenticity and warranty concerns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: THE SOLUTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-amber-950/30 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            <div className="text-center mb-12">
              <p className="text-sm text-amber-700 dark:text-amber-400 mb-4 uppercase tracking-wider font-semibold">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
                Digital Passport: Your Values, Perpetually Protected
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Every watch becomes a perpetual connection to your brand and community
              </p>
            </div>

            {/* With Digital Passport Flow */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border-2 border-amber-300 dark:border-amber-700 shadow-2xl mb-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Shield className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                <span className="text-xl font-bold text-amber-700 dark:text-amber-400">With Digital Passport</span>
              </div>

              <div className="flex items-center gap-4 text-2xl text-gray-900 dark:text-white mb-6">
                <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center font-bold text-gray-900 dark:text-white border-2 border-amber-300 dark:border-amber-700">
                  LE
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-semibold text-gray-900 dark:text-white border-2 border-amber-300 dark:border-amber-700">
                  👤
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-semibold text-gray-900 dark:text-white border-2 border-amber-300 dark:border-amber-700">
                  👤
                </div>
                <span className="ml-auto font-mono text-3xl font-bold">CHF 6,500</span>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6 border-2 border-amber-300 dark:border-amber-700">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex justify-between items-center p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Reseller profit</span>
                    <span className="font-mono font-bold text-gray-900 dark:text-white text-xl">CHF 2,450</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-amber-100 dark:bg-amber-900/50 rounded-lg border-2 border-amber-400 dark:border-amber-600">
                    <span className="text-amber-900 dark:text-amber-100 font-semibold">Your royalty (30%)</span>
                    <span className="font-mono font-bold text-amber-700 dark:text-amber-300 text-xl">CHF 1,050</span>
                  </div>
                </div>
                <p className="text-sm text-amber-700 dark:text-amber-400 italic text-center font-medium">
                  Per resale. Perpetual. Every time the watch changes hands, you benefit.
                </p>
              </div>
            </div>

            {/* Value Alignment Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-center">Fair Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Transfer locks ensure real collectors get priority. Flippers can't profit.</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-center">Trust & Authenticity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Every watch verified. Warranty tracked. Service history immutable.</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-center">Connected Community</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Build relationships across generations. Your community, your way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: WHY YOU --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto z-10">
            
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
                Why This Matters To You
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Because your values deserve to last as long as your watches
              </p>
            </div>

            {/* Values Alignment */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-700 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Born in the Industry</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      You understand watchmaking heritage better than anyone. This system respects that heritage by ensuring every watch maintains its connection to your brand, regardless of how many times it changes hands.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Strategy Over Hype</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      You prioritize design, art, and authentic value over marketing noise. Digital passports enable this by rewarding genuine collectors and eliminating flipper margins—your strategy, enforced automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">People Over Profit</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      You choose relationships over transactions. This system builds those relationships by connecting you with every owner—primary and secondary—creating a community that spans generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community Over Everything</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      Your vision of a "dating site" for collectors becomes reality. Owners connect, share stories, access exclusive perks, and build lasting bonds—all while you maintain perpetual revenue and control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center mt-8">
              <p className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
                You breathe the values this system enables
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Digital passports aren't just technology—they're a way to ensure your values outlive every watch you create.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
