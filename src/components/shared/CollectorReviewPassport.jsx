import React, { useState } from 'react';
import { 
  Shield, AlertTriangle, CheckCircle, XCircle, DollarSign, 
  Package, Tag, Calendar, ChevronDown, Percent, Lock, Mail
} from 'lucide-react';

export default function CollectorReviewPassport({ 
  transferData = {
    salePrice: 3500,
    retailPrice: 3000,
    royaltyRate: 90,
    collectorEmail: 'john.collector@gmail.com',
    watch: {
      name: 'Le Régulateur x Alain Silberstein',
      reference: 'LE78229AA04',
      serialNumber: 'LE-AS-2024-042',
      editionNumber: 42,
      editionSize: 178,
      productionDate: '2025-10-15',
      image: '/vantage/watch-thumb-0.jpg'
    }
  },
  onApprove, 
  onReject,
  showHeader = true 
}) {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [expandedAssetRules, setExpandedAssetRules] = useState(false);

  const { salePrice, retailPrice, royaltyRate, collectorEmail, watch } = transferData;
  const royaltyAmount = Math.round((retailPrice * royaltyRate) / 100);
  const isPriceCorrect = true; // Can be calculated if needed

  const rejectionReasons = [
    { id: 'price', label: 'Incorrect Retail Price', description: 'The retail price doesn\'t match market value' },
    { id: 'royalty', label: 'Royalty Calculation Error', description: 'Royalty amount doesn\'t match the stated rate' },
    { id: 'serial', label: 'Serial Number Mismatch', description: 'Serial number doesn\'t match physical watch' },
    { id: 'condition', label: 'Condition Not as Described', description: 'Watch condition differs from listing' },
    { id: 'other', label: 'Other Issue', description: 'Specify a custom reason' }
  ];

  const handleReject = () => {
    const reason = selectedIssue === 'other' ? rejectionReason : rejectionReasons.find(r => r.id === selectedIssue)?.label;
    onReject(reason || rejectionReason);
    setShowRejectModal(false);
  };

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        {showHeader && (
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review Transfer Before Accepting</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Verify all passport data and pricing before completing the transfer
            </p>
          </div>
        )}

        {/* Alert: Review Carefully */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Collector Verification Required</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Please carefully review all passport data before accepting this transfer:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Retail price</strong> - affects royalty calculation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Serial number</strong> - must match physical watch
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Asset rules</strong> - understand what you're agreeing to
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Watch Passport Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-8">
            <div className="flex items-center gap-6">
              {/* Watch Image */}
              <div className="w-32 h-32 bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-slate-700 overflow-hidden p-2">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Watch Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {watch.name}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Edition #{watch.editionNumber} of {watch.editionSize}
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Ref: {watch.reference}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Tag className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold font-mono text-gray-900 dark:text-white">S/N: {watch.serialNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passport Details */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Passport Details - Verify Accuracy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Reference */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reference Number</p>
                <p className="text-base font-mono font-bold text-gray-900 dark:text-white">{watch.reference}</p>
              </div>

              {/* Serial Number */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-2">
                  Serial Number
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded">Verify Match</span>
                </p>
                <p className="text-base font-mono font-bold text-gray-900 dark:text-white">{watch.serialNumber}</p>
              </div>

              {/* Edition */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Edition Number</p>
                <p className="text-base font-bold text-gray-900 dark:text-white">#{watch.editionNumber} of {watch.editionSize}</p>
              </div>

              {/* Production Date */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Production Date</p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  {new Date(watch.productionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Royalty Review */}
        <div className={`bg-white dark:bg-slate-900 border-2 rounded-2xl overflow-hidden shadow-lg mb-6 ${
          isPriceCorrect 
            ? 'border-green-300 dark:border-green-700' 
            : 'border-amber-400 dark:border-amber-600'
        }`}>
          <div className={`p-4 ${
            isPriceCorrect 
              ? 'bg-green-50 dark:bg-green-900/20' 
              : 'bg-amber-50 dark:bg-amber-900/20'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                isPriceCorrect 
                  ? 'bg-green-100 dark:bg-green-900/40' 
                  : 'bg-amber-100 dark:bg-amber-900/40'
              }`}>
                <DollarSign className={`w-6 h-6 ${
                  isPriceCorrect 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-amber-600 dark:text-amber-400'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Purchase Price & Royalty Calculation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Review carefully - ensure retail price is accurate
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* Purchase Price */}
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Purchase Price</p>
                <p className="text-2xl font-black text-gray-900 dark:text-white">CHF {salePrice.toLocaleString()}</p>
              </div>
            </div>

            {/* Retail Price */}
            <div className="flex items-center justify-between p-4 rounded-lg border-2 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Retail Price (from Passport)</p>
                  <span className="px-2 py-0.5 text-xs font-bold rounded bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300">
                    Please Verify
                  </span>
                </div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">CHF {retailPrice.toLocaleString()}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                  This determines the royalty amount - ensure it matches market value
                </p>
              </div>
            </div>

            {/* Royalty Breakdown */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Royalty Breakdown</p>
                <span className="px-2 py-1 bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-xs font-bold rounded">
                  {royaltyRate}% of Retail
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Retail Price</span>
                  <span className="font-semibold text-gray-900 dark:text-white">CHF {retailPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Royalty Rate (Year 1)</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">{royaltyRate}%</span>
                </div>
                <div className="border-t border-purple-200 dark:border-purple-700 pt-2 flex justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Total Royalty to Brand</span>
                  <span className="text-lg font-black text-purple-600 dark:text-purple-400">CHF {royaltyAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Net to Reseller */}
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Net to Reseller (after royalty)</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">CHF {(salePrice - royaltyAmount).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Rules */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Asset Rules - What You're Agreeing To
            </h3>
            <button
              onClick={() => setExpandedAssetRules(!expandedAssetRules)}
              className="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
            >
              {expandedAssetRules ? 'Hide' : 'Show'} Details
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedAssetRules ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Resale Royalty</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{royaltyRate}% in Year 1</p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">6 months minimum hold</p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Enforced Everywhere</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">All platforms, lifetime</p>
            </div>
          </div>

          {expandedAssetRules && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>• <strong>Royalties:</strong> 90% in Year 1, 60% in Year 2, 15% in Year 3+</p>
              <p>• <strong>Transfer Lock:</strong> Cannot resell for 6 months after purchase</p>
              <p>• <strong>Enforcement:</strong> Rules enforced by Vantage Settlement Protocol on every transfer</p>
            </div>
          )}
        </div>

        {/* Transfer To */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Transfer Details</h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Transferring to</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{collectorEmail}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setShowRejectModal(true)}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
          >
            <XCircle className="w-5 h-5" />
            <span>Reject Transfer</span>
          </button>

          <button
            onClick={onApprove}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Approve & Accept Transfer</span>
          </button>
        </div>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reject Transfer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Please select a reason for rejecting this transfer.
            </p>

            <div className="space-y-3 mb-6">
              {rejectionReasons.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => setSelectedIssue(reason.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedIssue === reason.id
                      ? 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">{reason.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
                </button>
              ))}
            </div>

            {selectedIssue === 'other' && (
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Describe the issue..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white mb-6 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows="4"
              />
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowRejectModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={!selectedIssue || (selectedIssue === 'other' && !rejectionReason)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
