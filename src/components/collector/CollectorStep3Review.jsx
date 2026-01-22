import React from 'react';
import CollectorReviewStep from './CollectorReviewStep';

export default function CollectorStep3Review({ setCurrentStep }) {
  const handleApproval = () => {
    // Move to view passport step
    setCurrentStep(4);
  };

  const handleRejection = (reason) => {
    // In a real app, this would notify the reseller
    // For demo purposes, we'll just show the rejection feedback
    console.log('Transfer rejected:', reason);
    // Stay on this screen to show rejection message
  };

  return (
    <CollectorReviewStep
      onApprove={handleApproval}
      onReject={handleRejection}
    />
  );
}
