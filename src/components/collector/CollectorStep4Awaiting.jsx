import React from 'react';
import { Clock, Shield, CheckCircle, ArrowRightLeft, Play } from 'lucide-react';

export default function CollectorStep4Awaiting({ setCurrentStep, simulatePayment }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-73px)] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Transfer Pending
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Waiting for the reseller to complete the settlement
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
                Transfer Approved - Awaiting Completion
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You've approved the transfer. The reseller is now completing the settlement. 
                Once finalized, the digital passport will be transferred to you.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            What Happens Next
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Reseller Completes Settlement</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Settlement protocol enforces all asset rules automatically</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRightLeft className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Transfer Finalizes</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Compliance verified and settlement completed</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Passport Transferred</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Digital passport and ownership transferred to you</div>
              </div>
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
              Waiting for Settlement Completion
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              You'll receive a notification once the reseller completes the settlement and the transfer is finalized.
            </p>
          </div>
        </div>

        {/* Demo Helper */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Demo Simulator</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                In a real scenario, the reseller would complete the settlement on their end. 
                For this demo, simulate the transfer completion to receive your passport.
              </p>
              <button
                onClick={simulatePayment}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <ArrowRightLeft className="w-5 h-5" />
                Simulate Transfer Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
