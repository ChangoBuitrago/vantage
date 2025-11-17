import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const ACTIVE_COLORS = {
  emerald: 'from-emerald-500 to-teal-500',
  purple: 'from-purple-500 to-pink-500',
  blue: 'from-blue-500 to-blue-600'
};

/**
 * Shared step navigation sidebar component
 * @param {number} currentStep - Current active step
 * @param {Array} stepNavigation - Array of step navigation items with { step, emoji, label, isHome }
 * @param {Function} updateStep - Function to update the current step
 * @param {string} theme - Color theme: 'emerald', 'purple', or 'blue' (default: 'emerald')
 */
export default function StepNavigationSidebar({ currentStep, stepNavigation, updateStep, theme = 'emerald' }) {
  const navigate = useNavigate();
  const activeColor = ACTIVE_COLORS[theme] || ACTIVE_COLORS.emerald;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group">
      {/* Hover trigger area */}
      <div className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer"></div>
      
      {/* Sidebar content */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-gray-200 dark:border-gray-800 shadow-xl transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out rounded-l-2xl overflow-hidden">
        <div className="py-6 px-3 space-y-1 min-w-[240px]">
          {stepNavigation.map(({ step, label, isHome }) => (
            <button
              key={step}
              onClick={() => isHome ? navigate('/demo') : updateStep(step)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group/item relative overflow-hidden ${
                currentStep === step
                  ? 'bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white'
                  : isHome
                  ? 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-gray-600 dark:text-gray-400 mb-2'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-gray-600 dark:text-gray-400'
              }`}
            >
              {/* Active indicator line */}
              {currentStep === step && !isHome && (
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${activeColor} rounded-r-full`}></div>
              )}
              
              {/* Step number badge */}
              {!isHome && (
                <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                  currentStep === step
                    ? `bg-gradient-to-br ${activeColor} text-white shadow-lg`
                    : 'bg-slate-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-600'
                }`}>
                  {step + 1}
                </div>
              )}

              {/* Home icon */}
              {isHome && (
                <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Home className="w-4 h-4" />
                </div>
              )}
              
              {/* Label */}
              <div className="text-left flex-1">
                <div className={`text-sm font-medium transition-colors duration-300 ${
                  currentStep === step
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white'
                }`}>
                  {label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Visual hint - elegant dots indicator */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex flex-col gap-1.5">
          <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
}

