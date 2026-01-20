import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Calendar, FileText, Edit3, Tag, Clock, Percent, Wrench, Users, ChevronDown, User, Mail, MapPin, Send, CheckCircle, Package, Award, MessageSquare, Ticket, ShoppingBag, Building, Baseline, CreditCard } from 'lucide-react';

export default function CreatorStep2({ setCurrentStep }) {
  const [issuing, setIssuing] = useState(false);
  const [issued, setIssued] = useState(false);
  
  // State for expandable sections
  const [expandedBenefits, setExpandedBenefits] = useState(false);
  
  // State for edition number (editable)
  const [watchNumber, setWatchNumber] = useState(42);
  
  // State for first owner information (editable)
  const [ownerName, setOwnerName] = useState("Maria Reseller");
  const [ownerEmail, setOwnerEmail] = useState("maria.reseller@gmail.com");
  const [ownerLocation, setOwnerLocation] = useState("New York, USA");
  const [purchaseDate, setPurchaseDate] = useState("28 Jan 2025");
  const [purchasePrice, setPurchasePrice] = useState("3,000");
  const [dealer, setDealer] = useState("Bucherer New York");

  const handleIssue = () => {
    setIssuing(true);
    setTimeout(() => {
      setIssuing(false);
      setIssued(true);
    }, 2000);
  };

  // Helper functions
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  // Collection data
  const collectionName = "Le Régulateur x Alain Silberstein";
  const editionSize = 178;
  const reference = "LE78229AA04";
  const retailPrice = 3000; // CHF - Base retail price
  const productionDate = new Date('2025-10-15').getTime();
  const transferLockDays = 180; // 6 months
  
  // Generate serial number based on watch number
  const serialNumber = `LE-AS-2024-${watchNumber.toString().padStart(3, '0')}`;
  

  // Asset rules from collection configuration
  const royaltyTiers = [
    { label: "Year 1 (0-12 months)", value: "90%", active: false },
    { label: "Year 2 (13-24 months)", value: "60%", active: false },
    { label: "Year 3+ (25+ months)", value: "15%", active: false }
  ];

  const benefits = [
    { icon: Wrench, title: "Free Annual Service", description: "Complimentary maintenance for life" },
    { icon: Shield, title: "Extended Warranty", description: "5-year international warranty" },
    { icon: Ticket, title: "Exclusive Events", description: "VIP access to brand events" },
    { icon: ShoppingBag, title: "Early Access", description: "First access to new releases" }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Collections</span>
            <ChevronRight className="w-4 h-4" />
            <span>{collectionName}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Issue Digital Passport</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Create and transfer passport to first owner upon retail sale</p>
        </div>

        {/* Digital Passport Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Hero Section with Watch Image */}
          <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-black p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Watch Image */}
              <div className="w-64 h-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center flex-shrink-0 border-4 border-white dark:border-slate-700 overflow-hidden p-4">
                <img
                  src="https://www.louiserard.com/cdn/shop/files/85358TT01.BTT83-_1.webp?v=1718639401&width=900"
                  alt="Le Régulateur Blanc Louis Erard x Alain Silberstein"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
                <span className="text-8xl" style={{display: 'none'}}>⌚</span>
              </div>
              
              {/* Watch Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Louis Erard x Alain Silberstein
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  {collectionName}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Ready to Issue</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Collection Configured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passport Details */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Passport Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {/* Reference */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Reference</p>
                  <p className="text-base font-mono font-bold text-gray-900 dark:text-white">{reference}</p>
                </div>
              </div>

              {/* Edition Number - Now Editable */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" />
                  Edition Number
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-gray-900 dark:text-white">#</span>
                  <input
                    type="number"
                    min="1"
                    max={editionSize}
                    value={watchNumber}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setWatchNumber(Math.min(Math.max(val, 1), editionSize));
                    }}
                    className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <span className="text-base font-bold text-gray-900 dark:text-white">/ {editionSize}</span>
                </div>
              </div>

              {/* Serial Number - Auto-generated */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Serial Number (Auto-generated)</p>
                  <p className="text-base font-mono font-bold text-gray-900 dark:text-white">{serialNumber}</p>
                </div>
              </div>

              {/* Production Date */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Production Date</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">{formatDate(productionDate)}</p>
                </div>
              </div>
            </div>

            {/* Owner Benefits */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Owner Benefits
              </h4>
              
              <div className="mb-3">
                <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300">
                  <button
                    onClick={() => setExpandedBenefits(!expandedBenefits)}
                    className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{benefits.length} benefits</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedBenefits ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Exclusive perks for verified owners
                      </p>
                    </div>
                  </button>

                  {expandedBenefits && (
                    <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                      <div className="pt-3 space-y-2">
                        {benefits.map((benefit, index) => {
                          const IconComponent = benefit.icon;
                          return (
                            <div key={index} className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{benefit.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{benefit.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First Owner & Issue Section */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            First Owner Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Owner Name
              </label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-semibold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter owner name"
              />
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                Email Address
              </label>
              <input
                type="email"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-semibold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter email address"
              />
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Location
              </label>
              <input
                type="text"
                value={ownerLocation}
                onChange={(e) => setOwnerLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-semibold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter location"
              />
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Purchase Date
              </label>
              <input
                type="text"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-semibold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., 28 Jan 2025"
              />
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5" />
                Purchase Price (CHF)
              </label>
              <input
                type="text"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-semibold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., 3,000"
              />
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                Dealer/Boutique
              </label>
              <input
                type="text"
                value={dealer}
                onChange={(e) => setDealer(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-base font-semibold text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter dealer name"
              />
            </div>
          </div>

          {/* Issue Action */}
          {!issued ? (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ready to Issue Passport</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                This will create passport #{watchNumber} and transfer it to {ownerName}. The watch ownership will be securely recorded with all configured asset rules.
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
                    <Send className="w-5 h-5" />
                    <span>Issue to First Owner</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Passport Issued Successfully!</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Digital passport #{watchNumber} transferred to {ownerName}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setCurrentStep(3);
                }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
