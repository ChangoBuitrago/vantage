import React, { useState } from 'react';
import { 
  Shield, AlertTriangle, CheckCircle, XCircle, 
  Package, Tag, Calendar, ChevronDown, Percent, Lock, Heart, Wrench, Gift, Zap, CreditCard, ArrowRight
} from 'lucide-react';

export default function CollectorReviewStep({ 
  onApprove, 
  onReject
}) {
  const [paymentAuthorized, setPaymentAuthorized] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [expandedAssetRules, setExpandedAssetRules] = useState(false);
  const [expandedOwnerBenefits, setExpandedOwnerBenefits] = useState(false);

  const watch = {
    name: 'Le Régulateur x Alain Silberstein',
    reference: 'LE78229AA04',
    serialNumber: 'LE-AS-2024-042',
    editionNumber: 42,
    editionSize: 178,
    productionDate: '2025-10-15',
    retailPrice: 3000,
    image: '/faircut/watch-thumb-0.jpg'
  };

  const rejectionReasons = [
    { id: 'serial', label: 'Serial Number Mismatch', description: 'Serial number doesn\'t match physical watch' },
    { id: 'condition', label: 'Condition Not as Described', description: 'Watch condition differs from listing' },
    { id: 'authenticity', label: 'Authenticity Concerns', description: 'Product authenticity cannot be verified' },
    { id: 'damage', label: 'Physical Damage', description: 'Watch has undisclosed damage' },
    { id: 'other', label: 'Other Issue', description: 'Specify a custom reason' }
  ];

  const handleReject = () => {
    const reason = selectedIssue === 'other' ? rejectionReason : rejectionReasons.find(r => r.id === selectedIssue)?.label;
    onReject(reason || rejectionReason);
    setShowRejectModal(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-73px)] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* STEP 1: Payment Authorization (shown first) */}
        {!paymentAuthorized ? (
          <>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Authorize Payment</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Secure your purchase before reviewing passport details
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">💳 Authorize Payment</h2>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                  <div className="text-center mb-2">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Purchase Price</div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">CHF 6,500</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">(includes 90% creator royalty)</div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                  <div className="flex gap-3">
                    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-900 dark:text-amber-100">
                      <p className="font-semibold mb-1">How Payment Authorization Works</p>
                      <p>We'll place a temporary hold on your account. Funds will ONLY be captured if you approve the transfer after reviewing the passport details on the next step.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setPaymentAuthorized(true)}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Authorize Payment & Review Passport
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* STEP 2: Full Passport Review (shown after authorization) */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">Payment Authorized</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review Purchase Before Transfer</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Verify your purchase price and confirm all passport data
              </p>
            </div>

        {/* Alert: Review Carefully */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Please Review Carefully</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Before accepting this transfer, verify the following:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Purchase price</strong> - confirm the amount you're paying
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Serial number</strong> - must match the physical watch
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Product details</strong> - reference, edition, production date
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  <strong>Owner benefits</strong> - perks and services included
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
                    <Package className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Ref: {watch.reference}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Tag className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold font-mono text-gray-900 dark:text-white">S/N: {watch.serialNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passport Details */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Passport Details - Verify Accuracy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Reference */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reference Number</p>
                <p className="text-base font-mono font-bold text-gray-900 dark:text-white">{watch.reference}</p>
              </div>

              {/* Serial Number */}
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-2">
                  Serial Number
                  <span className="px-2 py-0.5 bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-xs font-bold rounded">Verify Match</span>
                </p>
                <p className="text-base font-mono font-bold text-gray-900 dark:text-white">{watch.serialNumber}</p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-2 font-medium">Must match physical watch</p>
              </div>

              {/* Edition */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Edition Number</p>
                <p className="text-base font-bold text-gray-900 dark:text-white">#{watch.editionNumber} of {watch.editionSize}</p>
              </div>

              {/* Production Date */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Production Date
                </p>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  {new Date(watch.productionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
              </div>

              {/* Retail Price */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Original Retail Price</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">CHF {watch.retailPrice.toLocaleString()}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Basis for royalty calculations</p>
              </div>

              {/* Purchase Price */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-2">
                  Your Purchase Price
                  <span className="px-2 py-0.5 bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-bold rounded">Verify Amount</span>
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">CHF 6,500</p>
                <p className="text-xs text-green-700 dark:text-green-300 mt-2 font-medium">217% of retail price</p>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Rules */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setExpandedAssetRules(!expandedAssetRules)}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Asset Rules - What You're Agreeing To
            </h3>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedAssetRules ? 'rotate-180' : ''}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Royalties</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">If you resell, royalties apply</p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">6-month hold period</p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Enforced Everywhere</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">All platforms, lifetime</p>
            </div>
          </div>

          {expandedAssetRules && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>• <strong>Royalties:</strong> 90% in Year 1, 60% in Year 2, 15% in Year 3+ (of original retail price)</p>
              <p>• <strong>Transfer Lock:</strong> Cannot resell for 6 months after purchase</p>
              <p>• <strong>Enforcement:</strong> Rules enforced by Faircut Settlement Protocol on every transfer</p>
            </div>
          )}
        </div>

        {/* Owner Benefits */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setExpandedOwnerBenefits(!expandedOwnerBenefits)}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              Owner Benefits - What You'll Receive
            </h3>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedOwnerBenefits ? 'rotate-180' : ''}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Extended Service</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">3-year warranty + service</p>
            </div>

            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Exclusive Events</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Priority invitations</p>
            </div>

            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Early Access</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">New releases first</p>
            </div>

            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <p className="font-semibold text-gray-900 dark:text-white">Lifetime Support</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Direct brand contact</p>
            </div>
          </div>

          {expandedOwnerBenefits && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>• <strong>Extended Service:</strong> 3-year warranty coverage plus annual complimentary servicing</p>
              <p>• <strong>Exclusive Events:</strong> Priority invitations to brand events, launches, and collector gatherings</p>
              <p>• <strong>Early Access:</strong> First opportunity to purchase new limited edition releases</p>
              <p>• <strong>Lifetime Support:</strong> Direct communication channel with brand for authentication and support</p>
            </div>
          )}
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
            onClick={async () => {
              setIsProcessing(true);
              // Simulate atomic settlement (2.5 seconds)
              await new Promise(resolve => setTimeout(resolve, 2500));
              onApprove();
            }}
            disabled={isProcessing}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Completing Settlement...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Approve & Complete Transfer</span>
              </>
            )}
          </button>
        </div>
          </>
        )}
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
