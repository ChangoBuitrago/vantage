import React, { useState } from 'react';
import { ArrowRight, CheckCircle, User, Mail, MapPin } from 'lucide-react';

export default function CreatorStep2({ setCurrentStep }) {
  const [issuing, setIssuing] = useState(false);
  const [issued, setIssued] = useState(false);

  const handleIssue = () => {
    setIssuing(true);
    setTimeout(() => {
      setIssuing(false);
      setIssued(true);
    }, 2000);
  };

  return (
    <div className="px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Issue Digital Passport
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Transfer passport to first owner upon purchase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Watch & Configuration Summary */}
          <div className="space-y-6">
            {/* Watch Details */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Watch Details</h3>
              
              <img
                src="/faircut/watch-thumb-0.jpg"
                alt="Watch"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Le Regulateur Louis Erard x Alain Silberstein
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Serial: 42/178 • Ref: LE78229AA04
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Movement</span>
                  <span className="font-semibold text-gray-900 dark:text-white">ETA 2824-2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Case Size</span>
                  <span className="font-semibold text-gray-900 dark:text-white">40mm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Production Date</span>
                  <span className="font-semibold text-gray-900 dark:text-white">October 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Retail Price</span>
                  <span className="font-semibold text-gray-900 dark:text-white">€3,850</span>
                </div>
              </div>
            </div>

            {/* Smart Rules Summary */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Smart Rules</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Resale Royalty: 5%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">On all future resales</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock: 365 days</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Minimum ownership period</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">4 Exclusive Benefits</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Service, warranty, events, early access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - First Owner Details */}
          <div className="space-y-6">
            {/* First Owner Information */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">First Owner</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="James Mitchell"
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value="james.mitchell@email.com"
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </label>
                  <input
                    type="text"
                    value="Geneva, Switzerland"
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Purchase Date
                  </label>
                  <input
                    type="text"
                    value="November 11, 2025"
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Purchase Price
                  </label>
                  <input
                    type="text"
                    value="€3,850"
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Issue Action */}
            {!issued ? (
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Issue</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  This will create and transfer the digital passport to James Mitchell. The watch ownership will be permanently recorded on the blockchain.
                </p>
                
                <button
                  onClick={handleIssue}
                  disabled={issuing}
                  className={`w-full text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                    issuing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
                  }`}
                >
                  {issuing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Issuing Passport...</span>
                    </>
                  ) : (
                    <>
                      <span>Issue Digital Passport</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Passport Issued!</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Successfully transferred to owner</p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>View Passport & Analytics</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
