import React from 'react';
import { Shield, Bell, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';

const GRADIENT_CLASSES = {
  emerald: {
    icon: 'from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400',
    text: 'from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400',
    avatar: 'from-emerald-500 to-teal-500'
  },
  purple: {
    icon: 'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400',
    text: 'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400',
    avatar: 'from-purple-500 to-pink-500'
  },
  blue: {
    icon: 'from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500',
    text: 'from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500',
    avatar: 'from-blue-500 to-blue-600'
  }
};

/**
 * Shared header component for demo pages
 * @param {string} brandName - Brand name to display (e.g., "Louis Erard")
 * @param {string} brandInitials - Brand initials for avatar (e.g., "LE")
 * @param {string} role - Role label (e.g., "Creator", "Collector")
 * @param {string} theme - Color theme: 'emerald', 'purple', or 'blue'
 */
export default function DemoHeader({ 
  brandName = 'Louis Erard', 
  brandInitials = 'LE', 
  role = 'Creator',
  theme = 'emerald'
}) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const gradient = GRADIENT_CLASSES[theme] || GRADIENT_CLASSES.emerald;

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div className="max-w-[120rem] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 bg-gradient-to-br ${gradient.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className={`text-xl font-bold bg-gradient-to-r ${gradient.text} bg-clip-text text-transparent`}>
                  Vantage
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">{role}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
            <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{brandName}</div>
              </div>
              <div className={`w-10 h-10 bg-gradient-to-br ${gradient.avatar} rounded-full flex items-center justify-center text-white font-bold`}>
                {brandInitials}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

