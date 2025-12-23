import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Package, Settings } from 'lucide-react';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import StepNavigationSidebar from '../../components/shared/StepNavigationSidebar';
import DemoHeader from '../../components/shared/DemoHeader';

// Import step components
import CreatorStep0 from '../../components/creator/CreatorStep1';
import CreatorStep1 from '../../components/creator/MyCollections';
import CreatorStep2 from '../../components/creator/CreatorStep2';
import CreatorStep3 from '../../components/creator/CreatorStep3';
import CreatorStep4 from '../../components/creator/CreatorStep4';

export default function DemoCreator() {
  const navigate = useNavigate();
  
  // Step URL fragments mapping
  const stepFragments = {
    0: 'create-collection',
    1: 'my-collections',
    2: 'issue-passport',
    3: 'dashboard',
    4: 'complete'
  };

  const { currentStep, updateStep } = useStepNavigation(stepFragments);

  // Step navigation data for hover sidebar
  const stepNavigation = [
    { step: 'home', emoji: '🏠', label: 'Experience Home', isHome: true },
    { step: 0, emoji: '✨', label: 'Create Collection' },
    { step: 1, emoji: '📦', label: 'My Collections' },
    { step: 2, emoji: '🎫', label: 'Issue Passport' },
    { step: 3, emoji: '📊', label: 'View Dashboard' },
    { step: 4, emoji: '🎯', label: 'Experience Complete' },
  ];

  const navItems = [
    { icon: Home, label: 'View Dashboard', active: currentStep === 3 },
    { icon: Package, label: 'My Collections', active: currentStep >= 0 && currentStep <= 2 },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <StepNavigationSidebar 
        currentStep={currentStep}
        stepNavigation={stepNavigation}
        updateStep={updateStep}
        theme="emerald"
      />

      {currentStep < 4 && (
        <DemoHeader 
          brandName="Louis Erard"
          brandInitials="LE"
          role="Creator"
          theme="emerald"
        />
      )}

      {/* Main Content with conditional sidebar */}
      <div className={currentStep < 4 ? "flex" : ""}>
        {/* Sidebar Navigation - Show for steps 0-3 (inside Faircut platform) */}
        {currentStep < 4 && (
          <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-800 min-h-[calc(100vh-73px)] sticky top-[73px] hidden md:block">
          <nav className="p-4 space-y-1">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  item.active
                      ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        )}

      {/* Main Content Area */}
      <main className="flex-1 min-h-[calc(100vh-73px)]">
        {currentStep === 0 && <CreatorStep0 setCurrentStep={updateStep} />}
        {currentStep === 1 && <CreatorStep1 setCurrentStep={updateStep} />}
        {currentStep === 2 && <CreatorStep2 setCurrentStep={updateStep} />}
        {currentStep === 3 && <CreatorStep3 setCurrentStep={updateStep} />}
        {currentStep === 4 && <CreatorStep4 navigate={navigate} />}
      </main>
      </div>
    </div>
  );
}
