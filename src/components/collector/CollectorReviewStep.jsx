import React, { useState } from 'react';
import { 
  Shield, CheckCircle, XCircle, 
  Package, Tag, ChevronDown, DollarSign
} from 'lucide-react';

export default function CollectorReviewStep({ 
  onApprove, 
  onReject
}) {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const watch = {
    name: 'Le Régulateur x Alain Silberstein',
    reference: 'LE78229AA04',
    serialNumber: 'LE-AS-2024-042',
    editionNumber: 42,
    editionSize: 178,
    retailPrice: 3000,
    purchasePrice: 6500,
    image: '/vantage/watch-thumb-0.jpg'
  };

  const rejectionReasons = [
    { id: 'serial', label: 'Serial Number Mismatch', description: 'Serial number doesn\'t match physical watch' },
    { id: 'price', label: 'Price Mismatch', description: 'Price doesn\'t match what was agreed' },
    { id: 'condition', label: 'Condition Not as Described', description: 'Watch condition differs from listing' },
    { id: 'other', label: 'Other Issue', description: 'Specify a custom reason' }
  ];

  const toggleIssue = (issueId) => {
    setSelectedIssues(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    );
  };

  const handleReject = () => {
    const reasons = selectedIssues.map(id => {
      if (id === 'other') {
        return rejectionReason || 'Other Issue';
      }
      return rejectionReasons.find(r => r.id === id)?.label;
    }).filter(Boolean);
    
    onReject(reasons.join(', '));
    setShowRejectModal(false);
    setSelectedIssues([]);
    setRejectionReason('');
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-73px)] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Verify details before accepting ownership
          </p>
        </div>

        {/* Main Review Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-6">
            <div className="flex items-center gap-6">
              {/* Watch Image */}
              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-xl shadow-xl flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-slate-700 overflow-hidden p-2">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Watch Info */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {watch.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Edition #{watch.editionNumber} of {watch.editionSize}
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{watch.reference}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Tag className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold font-mono text-gray-900 dark:text-white">{watch.serialNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Details - Simplified */}
          <div className="p-6">
            {/* Critical Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Purchase Price - Highlighted */}
              <div className="col-span-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Purchase Price</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">CHF {watch.purchasePrice.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              {/* Serial Number - Must Verify */}
              <div className="col-span-2 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Serial Number</p>
                    <p className="text-xl font-mono font-bold text-gray-900 dark:text-white">{watch.serialNumber}</p>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-1 font-medium">⚠️ Must match physical watch</p>
                  </div>
                  <Tag className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            <div className="mb-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">View Asset Rules & Owner Benefits</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
              </button>

              {showDetails && (
                <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Asset Rules</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Transfer Lock: 6 months minimum hold period</li>
                      <li>• Revenue Share: CHF 3,000 base + 90%→60%→15% royalty on profit</li>
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Owner Benefits</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Extended Warranty: 3-year international coverage</li>
                      <li>• Exclusive Events: VIP access to brand events</li>
                      <li>• Early Access: First opportunity for new releases</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowRejectModal(true)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
              >
                <XCircle className="w-5 h-5" />
                <span>Reject</span>
              </button>

              <button
                onClick={onApprove}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Accept Passport</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Reject Transfer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Why are you rejecting this transfer? <span className="text-gray-500">(Select all that apply)</span>
            </p>

            <div className="space-y-2 mb-4">
              {rejectionReasons.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => toggleIssue(reason.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all flex items-start gap-3 ${
                    selectedIssues.includes(reason.id)
                      ? 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    selectedIssues.includes(reason.id)
                      ? 'border-red-500 bg-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selectedIssues.includes(reason.id) && (
                      <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{reason.label}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{reason.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {selectedIssues.includes('other') && (
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Describe the issue..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                rows={3}
              />
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setSelectedIssues([]);
                  setRejectionReason('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={selectedIssues.length === 0 || (selectedIssues.includes('other') && !rejectionReason)}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
