import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Palette, ShoppingBag, RefreshCw } from 'lucide-react';

export default function Demo() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Effect to ensure page starts at the top on load
  useEffect(() => {
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

  // Effect for handling keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        // Allow escape to work naturally for navigation
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Faircut Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
          Faircut
        </div>
      </div>

      <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6 py-20">
        <div className="w-full max-w-[100rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Experience <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Faircut</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose your journey to see how Faircut transforms high-end watchmaking—forever
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 max-w-7xl mx-auto">
          
          {/* Creator Experience */}
          <button
            onClick={() => navigate('/demo/creator')}
            className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl p-11 border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-left"
          >
            <div className="absolute top-6 right-6 w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <Palette size={28} />
            </div>
            
            <div className="mb-8 pr-16">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
                Creator Experience
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Set smart rules for your watches and earn ongoing royalties from resales.
              </p>
            </div>

            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold group-hover:gap-3 transition-all">
              <span>Start Creator Experience</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          {/* Reseller Experience */}
          <button
            onClick={() => navigate('/demo/reseller')}
            className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-3xl p-11 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-left"
          >
            <div className="absolute top-6 right-6 w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <RefreshCw size={28} />
            </div>
            
            <div className="mb-8 pr-16">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
                Reseller Experience
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Buy and resell high-end watches with automated compliance and transparent transfers.
              </p>
            </div>

            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 transition-all">
              <span>Start Reseller Experience</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          {/* Collector/Flipper Experience */}
          <button
            onClick={() => navigate('/demo/collector')}
            className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-11 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-left"
          >
            <div className="absolute top-6 right-6 w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <ShoppingBag size={28} />
            </div>
            
            <div className="mb-8 pr-16">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
                Collector Experience
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Purchase on the secondary market with verified authenticity and ownership benefits.
              </p>
            </div>

            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
              <span>Start Collector Experience</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

        </div>
        </div>
      </div>
    </>
  );
}

