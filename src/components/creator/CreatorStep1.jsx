import React, { useState } from 'react';
import { Home, ChevronRight, Shield, Percent, Lock, Gift, Calendar, Package, Tag, ArrowRight, Info, CheckCircle, AlertCircle, Settings, ChevronDown, Image as ImageIcon, Baseline, Folder, X } from 'lucide-react';

export default function CreatorStep1({ setCurrentStep }) {
  const [transferLockDays, setTransferLockDays] = useState(180);
  const [selectedBenefits, setSelectedBenefits] = useState(['warranty']);
  const [baseRetailPrice, setBaseRetailPrice] = useState('3,000');
  const [expandedBasePrice, setExpandedBasePrice] = useState(false);
  const [expandedRoyalty, setExpandedRoyalty] = useState(false);
  const [expandedTransferLock, setExpandedTransferLock] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);
  
  // Tiered royalties by year
  const [royaltyTiers, setRoyaltyTiers] = useState([
    { year: 1, rate: 90, label: 'Year 1 (0-12 months)' },
    { year: 2, rate: 60, label: 'Year 2 (13-24 months)' },
    { year: 3, rate: 15, label: 'Year 3+ (25+ months)' },
  ]);
  
  const updateRoyaltyTier = (yearIndex, newRate) => {
    const newTiers = [...royaltyTiers];
    newTiers[yearIndex].rate = newRate;
    setRoyaltyTiers(newTiers);
  };
  
  // Available watch thumb images from public folder
  const availableWatchImages = [
    '/faircut/watch-thumb-0.jpg',
    '/faircut/watch-thumb-1.jpg',
    '/faircut/watch-thumb-2.webp',
    '/faircut/watch-thumb-3.jpg',
  ];
  
  // Collection data state
  const [collectionName, setCollectionName] = useState('Le Regulateur Louis Erard x Alain Silberstein');
  const [reference, setReference] = useState('LE78229AA04');
  const [editionSize, setEditionSize] = useState(178);
  const [retailPrice, setRetailPrice] = useState('3,000');
  const [currency, setCurrency] = useState('CHF');
  const [serialFormat, setSerialFormat] = useState('LE-AS-2024-');
  const [launchDate, setLaunchDate] = useState('2024-12-01');
  const [watchImages, setWatchImages] = useState(['/faircut/watch-thumb-0.jpg']);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleImageSelect = (imagePath) => {
    if (!watchImages.includes(imagePath)) {
      setWatchImages(prev => [...prev, imagePath]);
      setCurrentImageIndex(watchImages.length);
    } else {
      // If already selected, just switch to it
      setCurrentImageIndex(watchImages.indexOf(imagePath));
    }
    setShowImageGallery(false);
  };
  
  const removeImage = (index) => {
    setWatchImages(prev => prev.filter((_, i) => i !== index));
    if (currentImageIndex >= watchImages.length - 1) {
      setCurrentImageIndex(Math.max(0, watchImages.length - 2));
    }
  };

  const toggleBenefit = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const benefits = [
    { id: 'warranty', label: 'Extended Warranty', description: '3 years international warranty coverage', icon: Shield },
    { id: 'events', label: 'Collector Events Access', description: 'VIP invitations to brand events and launches', icon: Calendar },
    { id: 'early-access', label: 'Early Access to New Releases', description: 'Priority purchasing for limited editions', icon: Gift }
  ];

  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>My Collections</span>
            <ChevronRight className="w-4 h-4" />
            <span>Create New</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Collection</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Configure asset rules and benefits for your new collection</p>
        </div>

        {/* Collection Summary Card with Live Preview */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Watch Image Gallery */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-48 h-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-slate-700 overflow-hidden p-3 group">
                  {watchImages.length > 0 ? (
                    <>
                      <img
                        src={watchImages[currentImageIndex]}
                        alt={collectionName}
                        className="w-full h-full object-contain"
                      />
                      {watchImages.length > 1 && (
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                          {watchImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? 'bg-emerald-600 dark:bg-emerald-400 w-3'
                                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                      <ImageIcon className="w-12 h-12" />
                      <p className="text-xs">No images</p>
                    </div>
                  )}
                </div>
                
                {/* Image Selection Controls */}
                <div className="flex flex-col gap-2 w-full">
                  <button
                    onClick={() => setShowImageGallery(true)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer transition-colors text-xs font-semibold"
                  >
                    <Folder className="w-3.5 h-3.5" />
                    Select from Gallery
                  </button>
                  {watchImages.length > 0 && (
                    <button
                      onClick={() => removeImage(currentImageIndex)}
                      className="w-full px-3 py-1.5 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 rounded-lg transition-colors text-xs font-semibold"
                    >
                      Remove Current
                    </button>
                  )}
                </div>
              </div>
              
              {/* Image Gallery Modal */}
              {showImageGallery && (
                <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowImageGallery(false)}>
                  <div 
                    className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between z-10">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Select Watch Image</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Choose from available watch images in public folder</p>
                      </div>
                      <button
                        onClick={() => setShowImageGallery(false)}
                        className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {availableWatchImages.map((imagePath, index) => {
                          const isSelected = watchImages.includes(imagePath);
                          return (
                            <button
                              key={index}
                              onClick={() => handleImageSelect(imagePath)}
                              className={`relative group aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                isSelected
                                  ? 'border-emerald-500 dark:border-emerald-400 ring-2 ring-emerald-200 dark:ring-emerald-800'
                                  : 'border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600'
                              }`}
                            >
                              <img
                                src={imagePath}
                                alt={`Watch thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              {isSelected && (
                                <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                  </div>
                                </div>
                              )}
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-black/80 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {imagePath.split('/').pop()}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {availableWatchImages.length === 0 && (
                        <div className="text-center py-12">
                          <Folder className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                          <p className="text-gray-600 dark:text-gray-400">No watch images found in public folder</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Collection Info - Live Preview */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {collectionName || 'Collection Name'}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Limited Edition Collaboration - {editionSize} Pieces
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Tag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">Ref: {reference || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Tag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold font-mono text-gray-900 dark:text-white">S/N: {serialFormat || 'N/A'}###</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Package className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">
                      Retail: {currency === 'EUR' ? '€' : currency === 'USD' ? '$' : 'CHF '}{retailPrice || '0'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collection Details - Input Form */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Collection Details
            </h3>
            
            <div className="space-y-4">
              {/* Collection Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Collection Name
                </label>
                <input
                  type="text"
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter collection name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reference */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Reference Number
                  </label>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g. LE78229AA04"
                  />
                </div>

                {/* Edition Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Edition Size
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={editionSize}
                    onChange={(e) => setEditionSize(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Number of pieces"
                  />
                </div>

                {/* Retail Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Retail Price
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-24 px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="CHF">CHF</option>
                      <option value="EUR">EUR</option>
                      <option value="USD">USD</option>
                    </select>
                    <input
                      type="text"
                      value={retailPrice}
                      onChange={(e) => setRetailPrice(e.target.value)}
                      className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g. 3,850"
                    />
                  </div>
                </div>

                {/* Launch Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Launch Date
                  </label>
                  <input
                    type="date"
                    value={launchDate}
                    onChange={(e) => setLaunchDate(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Serial Number Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Serial Number Format (Template)
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={serialFormat}
                    onChange={(e) => setSerialFormat(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g. LE-AS-2024-"
                  />
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                    <p className="text-xs text-blue-900 dark:text-blue-200 mb-2 font-semibold">
                      Auto-Generated Serial Numbers Preview:
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs font-mono text-blue-800 dark:text-blue-300">
                        #{1}: {serialFormat}001
                      </p>
                      <p className="text-xs font-mono text-blue-800 dark:text-blue-300">
                        #{2}: {serialFormat}002
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-400">...</p>
                      <p className="text-xs font-mono text-blue-800 dark:text-blue-300">
                        #{editionSize}: {serialFormat}{editionSize.toString().padStart(3, '0')}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    💡 The system will automatically generate {editionSize} unique serial numbers using this template
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Rules Configuration */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Configure Asset Rules
            </h4>
            
            <div className="space-y-3">
              {/* Transfer Lock */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300">
                <button
                  onClick={() => setExpandedTransferLock(!expandedTransferLock)}
                  className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Transfer Lock</p>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {Math.floor(transferLockDays / 30)} months
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedTransferLock ? 'rotate-180' : ''}`} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Minimum ownership period before transfer is allowed
                    </p>
                  </div>
                </button>

                {expandedTransferLock && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                    <div className="pt-3 space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 px-1">
                        Set minimum holding period to prevent immediate flipping and encourage genuine collecting.
                      </p>
                      <select
                        value={transferLockDays}
                        onChange={(e) => setTransferLockDays(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="0">No lock</option>
                        <option value="90">3 months</option>
                        <option value="180">6 months</option>
                        <option value="365">12 months</option>
                        <option value="730">24 months</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Market Revenue Share (Combined: Base Price + Royalties) */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300">
                <button
                  onClick={() => setExpandedRoyalty(!expandedRoyalty)}
                  className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <Percent className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">Secondary Market Revenue Share</p>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{currency === 'EUR' ? '€' : currency === 'USD' ? '$' : 'CHF '}{baseRetailPrice} + {royaltyTiers[0].rate}% → {royaltyTiers[2].rate}%</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedRoyalty ? 'rotate-180' : ''}`} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Base price floor + royalty percentage on profit above base
                    </p>
                  </div>
                </button>

                {expandedRoyalty && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900/50">
                    <div className="pt-3 space-y-4">
                      {/* Base Resell Price */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Base Resell Price (Reference Point)
                        </label>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                          Minimum resale price. Royalties calculated on profit <strong>above</strong> this base.
                        </p>
                        <div className="flex items-center gap-3">
                          <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                          >
                            <option value="CHF">CHF</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                          </select>
                          <input
                            type="text"
                            value={baseRetailPrice}
                            onChange={(e) => setBaseRetailPrice(e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                            placeholder="e.g. 3,000"
                          />
                        </div>
                      </div>

                      {/* Royalty Tiers */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Royalty Rates on Profit (Decreasing Over Time)
                        </label>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                          Percentage of profit above base price. Decreases over time to incentivize early adoption.
                        </p>
                        <div className="space-y-2">
                          {royaltyTiers.map((tier, index) => (
                            <div key={tier.year} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg">
                              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[180px]">{tier.label}:</span>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={tier.rate}
                                onChange={(e) => updateRoyaltyTier(index, Number(e.target.value))}
                                className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                              />
                              <span className="text-gray-600 dark:text-gray-400">% of profit</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example Calculation */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 mb-1">💡 Calculation Example (Year 1):</p>
                        <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                          Sale Price: CHF 6,500<br/>
                          Base Price: CHF {baseRetailPrice} (blocked below this)<br/>
                          <strong>Profit: CHF {6500 - Number(baseRetailPrice.replace(/,/g, ''))} (6,500 - {baseRetailPrice})</strong><br/>
                          Royalty: {royaltyTiers[0].rate}% × CHF {6500 - Number(baseRetailPrice.replace(/,/g, ''))} = <strong>CHF {Math.round((6500 - Number(baseRetailPrice.replace(/,/g, ''))) * royaltyTiers[0].rate / 100).toLocaleString()}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Owner Benefits */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Configure Owner Benefits
            </h4>
            
            <div className="space-y-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                const isSelected = selectedBenefits.includes(benefit.id);
                return (
                  <div
                    key={benefit.id}
                    className={`bg-slate-50 dark:bg-slate-800/50 border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      isSelected 
                        ? 'border-emerald-400 dark:border-emerald-500' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <button
                      onClick={() => toggleBenefit(benefit.id)}
                      className="w-full p-4 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400'
                      }`} />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-semibold ${
                            isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {benefit.label}
                          </p>
                          <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                            isSelected ? 'bg-emerald-600' : 'bg-gray-200 dark:bg-gray-700'
                          }`}>
                            {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {selectedBenefits.length === 0 && (
              <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    Consider selecting benefits to increase owner engagement
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Summary Card */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Collection Summary</h4>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Collection</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white truncate ml-4">{collectionName}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Reference</span>
                <span className="text-sm font-semibold font-mono text-gray-900 dark:text-white">{reference}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Edition Size</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{editionSize} pieces</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Retail Price</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{currency === 'EUR' ? '€' : currency === 'USD' ? '$' : 'CHF '}{retailPrice}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Launch Date</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{new Date(launchDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Serial Format</span>
                <span className="text-sm font-semibold font-mono text-gray-900 dark:text-white">{serialFormat}###</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Revenue Share</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{currency === 'EUR' ? '€' : currency === 'USD' ? '$' : 'CHF '}{baseRetailPrice} base + {royaltyTiers[0].rate}%→{royaltyTiers[2].rate}% on profit</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Transfer Lock</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{Math.floor(transferLockDays / 30)} months</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Owner Benefits</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{selectedBenefits.length} selected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ready to Create Collection</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This will create the "{collectionName}" collection with {editionSize} passports and activated governance rules. You'll be able to issue individual passports to first owners after creation.
            </p>
            
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentStep(1);
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Create Collection</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
