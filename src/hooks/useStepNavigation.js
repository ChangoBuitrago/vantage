import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook for managing step-based navigation with URL hash fragments
 * @param {Object} stepFragments - Mapping of step numbers to URL fragments
 * @returns {Object} - { currentStep, updateStep }
 */
export function useStepNavigation(stepFragments) {
  const [currentStep, setCurrentStep] = useState(0);

  // Reverse mapping for fragment to step (memoized)
  const fragmentToStep = useMemo(() => {
    return Object.entries(stepFragments).reduce((acc, [step, fragment]) => {
      acc[fragment] = parseInt(step);
      return acc;
    }, {});
  }, [stepFragments]);

  // Update URL fragment when step changes
  const updateStep = (step) => {
    setCurrentStep(step);
    const fragment = stepFragments[step];
    if (fragment) {
      window.location.hash = fragment;
    }
  };

  // Initialize from URL fragment or default to step 0
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const stepFromHash = fragmentToStep[hash];
    
    if (stepFromHash !== undefined) {
      setCurrentStep(stepFromHash);
    } else {
      setCurrentStep(0);
      window.location.hash = stepFragments[0];
    }
  }, [fragmentToStep, stepFragments]);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const stepFromHash = fragmentToStep[hash];
      if (stepFromHash !== undefined) {
        setCurrentStep(stepFromHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [fragmentToStep]);

  return { currentStep, updateStep };
}

