import React from 'react';
import { Clock, Mail, Shield, AlertCircle, CheckCircle, Play } from 'lucide-react';

export default function ResellerStep6({ setCurrentStep, collectorEmail, salePrice = 0, royaltyAmount = 0, collectorApproved = false, handleCollectorApproval, handlePayRoyaltyAfterApproval }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-73px)] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Awaiting Collector Review
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The collector is reviewing the passport details before accepting the transfer
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400 animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Transfer Pending Collector Approval
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Passport details sent to collector for review. Royalty payment will be processed automatically 
                after the collector approves the transfer.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="font-mono">{collectorEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Being Reviewed */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            What the Collector is Reviewing
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Retail Price Verification</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ensuring the original retail price is correct for royalty calculations</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Product Details</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Verifying collection name, serial, and production details</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Asset Rules</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Reviewing royalty structure and transfer requirements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-100">
              <p className="font-semibold mb-1">Why This Step Matters</p>
              <p className="text-blue-800 dark:text-blue-200">
                This review step prevents disputes by ensuring both parties agree on all passport 
                data before the transfer is finalized. The collector can verify the retail price 
                to confirm the royalty amount is accurate.
              </p>
            </div>
          </div>
        </div>

        {/* Waiting State */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Waiting for Collector Response
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              You'll receive a notification once the collector has completed their review and approved the transfer.
            </p>
          </div>
        </div>

        {/* Demo Helper or Payment Action */}
        {!collectorApproved ? (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Demo Simulator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  In a real scenario, the collector would review and approve on their end. 
                  For this demo, simulate the collector approval to continue.
                </p>
                
                {/* Transfer Details Preview */}
                {salePrice > 0 && (
                  <div className="mb-4 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-blue-200 dark:border-blue-700">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Transfer Details:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Sale Price:</span>
                        <span className="ml-2 font-semibold text-gray-900 dark:text-white">CHF {salePrice.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Royalty:</span>
                        <span className="ml-2 font-semibold text-purple-600 dark:text-purple-400">CHF {Math.round(royaltyAmount).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  onClick={handleCollectorApproval}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Simulate Collector Approval
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Collector Approved!</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The collector has reviewed and approved the transfer. Ready to process settlement payment.
                </p>
              </div>
            </div>

            {/* Settlement Details */}
            <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 mb-4 border border-green-200 dark:border-green-800">
              <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Settlement Details:</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Your Sale Price</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">CHF {(salePrice || 6500).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Royalty Rate (Year 1)</span>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">90%</span>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Royalty Payment Due</span>
                  <span className="text-lg font-black text-purple-600 dark:text-purple-400">CHF {Math.round(royaltyAmount || (6500 * 0.9)).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePayRoyaltyAfterApproval}
              className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Pay Royalty & Complete Transfer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
