import React from 'react';
import { Search, Mail, Inbox, Star, Archive, Trash2, ChevronLeft, Tag, MoreVertical, Shield, FileCheck } from 'lucide-react';

export default function CollectorStep2({ setCurrentStep }) {
  return (
    <div style={{backgroundColor: '#f6f8fc', fontFamily: "'Google Sans', Roboto, Arial, sans-serif", height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}>
      {/* Gmail Header */}
      <div style={{backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, zIndex: 20}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px', flex: 1}}>
          <svg viewBox="0 0 24 24" width="40" height="40" style={{display: 'block'}}>
            <path fill="#EA4335" d="M5 5v14h14V5H5zm6 11H7v-2h4v2zm6 0h-4v-2h4v2zm0-3H7v-2h10v2zm0-3H7V8h10v2z"/>
            <path fill="#FBBC04" d="M1 5l11 7L23 5l-11-3L1 5z"/>
            <path fill="#34A853" d="M1 5v14l11-7L1 5z"/>
            <path fill="#4285F4" d="M23 5v14l-11-7L23 5z"/>
          </svg>
          <span style={{fontSize: '20px', color: '#5f6368', fontWeight: 400}}>Gmail</span>
        </div>
        <div style={{flex: '1', maxWidth: '600px', position: 'relative'}}>
          <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#f1f3f4', borderRadius: '8px', padding: '10px 16px', gap: '12px'}}>
            <Search size={20} color="#5f6368" />
            <input 
              type="text" 
              placeholder="Search mail" 
              style={{border: 'none', backgroundColor: 'transparent', outline: 'none', fontSize: '14px', flex: 1, color: '#202124'}}
            />
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1976d2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '14px', fontWeight: 500}}>JC</div>
        </div>
      </div>

      {/* Gmail Content Area */}
      <div style={{display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden'}}>
        {/* Left Sidebar */}
        <div style={{width: '256px', backgroundColor: '#ffffff', borderRight: '1px solid #e0e0e0', padding: '8px 0', overflowY: 'auto', flexShrink: 0}}>
          <button style={{margin: '0 16px 16px', padding: '0', border: 'none', background: 'none', cursor: 'pointer'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 24px', backgroundColor: '#c2e7ff', borderRadius: '16px', boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'}}>
              <Mail size={20} color="#001d35" />
              <span style={{fontSize: '14px', fontWeight: 500, color: '#001d35'}}>Compose</span>
            </div>
          </button>
          
          <div style={{padding: '0 8px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '0 16px 16px 0', backgroundColor: '#d3e3fd', cursor: 'pointer'}}>
              <Inbox size={20} color="#001d35" />
              <span style={{fontSize: '14px', fontWeight: 700, color: '#001d35', flex: 1}}>Inbox</span>
              <span style={{fontSize: '12px', fontWeight: 700, color: '#001d35'}}>1</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '0 16px 16px 0', cursor: 'pointer'}}>
              <Star size={20} color="#5f6368" />
              <span style={{fontSize: '14px', color: '#202124'}}>Starred</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '0 16px 16px 0', cursor: 'pointer'}}>
              <Archive size={20} color="#5f6368" />
              <span style={{fontSize: '14px', color: '#202124'}}>Sent</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '0 16px 16px 0', cursor: 'pointer'}}>
              <Trash2 size={20} color="#5f6368" />
              <span style={{fontSize: '14px', color: '#202124'}}>Trash</span>
            </div>
          </div>
        </div>

        {/* Email View */}
        <div style={{flex: 1, backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          {/* Email Toolbar */}
          <div style={{borderBottom: '1px solid #e0e0e0', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#ffffff', flexShrink: 0}}>
            <button 
              style={{padding: '8px', border: 'none', backgroundColor: 'transparent', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.15s ease'}}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ChevronLeft size={20} color="#5f6368" />
            </button>
            <button 
              style={{padding: '8px', border: 'none', backgroundColor: 'transparent', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.15s ease'}}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Archive size={20} color="#5f6368" />
            </button>
            <button 
              style={{padding: '8px', border: 'none', backgroundColor: 'transparent', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.15s ease'}}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Trash2 size={20} color="#5f6368" />
            </button>
            <button 
              style={{padding: '8px', border: 'none', backgroundColor: 'transparent', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.15s ease'}}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Tag size={20} color="#5f6368" />
            </button>
            <button 
              style={{padding: '8px', border: 'none', backgroundColor: 'transparent', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', transition: 'background-color 0.15s ease'}}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <MoreVertical size={20} color="#5f6368" />
            </button>
          </div>

          {/* Scrollable Email Content */}
          <div style={{flex: 1, overflowY: 'auto', backgroundColor: '#f6f8fc'}}>
            <div style={{padding: '0'}}>
              {/* Gmail Email Header */}
              <div style={{backgroundColor: '#ffffff', padding: '16px 32px', borderBottom: '1px solid #e0e0e0'}}>
                <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                  <h1 style={{fontSize: '20px', fontWeight: 400, color: '#202124', margin: '0 0 12px 0'}}>Action Required: Review Digital Passport Before Transfer</h1>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                      <Shield size={24} color="#ffffff" />
                    </div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px'}}>
                        <span style={{fontSize: '14px', fontWeight: 500, color: '#202124'}}>Vantage</span>
                        <span style={{fontSize: '14px', color: '#5f6368'}}>&lt;no-reply@vantage.com&gt;</span>
                      </div>
                      <div style={{fontSize: '12px', color: '#5f6368'}}>to me</div>
                    </div>
                    <div style={{fontSize: '12px', color: '#5f6368', textAlign: 'right'}}>
                      Nov 10, 2025, 3:15 PM (just now)
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Body - Vantage Content */}
              <div style={{width: '100%', minHeight: '100vh', backgroundColor: '#ffffff'}}>
                <div style={{maxWidth: '800px', margin: '0 auto', padding: '40px 20px'}}>
                  {/* Vantage Logo/Header */}
                  <div style={{textAlign: 'center', marginBottom: '32px'}}>
                    <div style={{display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px'}}>
                      <Shield size={40} color="#1a1a1a" />
                      <span style={{fontSize: '28px', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.5px'}}>Vantage</span>
                    </div>
                    <div style={{width: '60px', height: '3px', backgroundColor: '#22c55e', margin: '0 auto'}}></div>
                  </div>

                  {/* Main Message */}
                  <div style={{backgroundColor: '#fef3c7', borderRadius: '12px', padding: '32px', marginBottom: '32px', border: '2px solid #fbbf24'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
                      <div style={{width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <FileCheck size={24} color="#ffffff" />
                      </div>
                      <div>
                        <h2 style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 4px 0'}}>Review Required</h2>
                        <p style={{fontSize: '14px', color: '#92400e', margin: 0}}>Pending your approval</p>
                      </div>
                    </div>

                    <div style={{fontSize: '15px', lineHeight: '1.6', color: '#374151'}}>
                      <p style={{margin: '0 0 16px 0'}}>Dear John,</p>
                      <p style={{margin: '0 0 16px 0'}}><strong>Maria Reseller</strong> has initiated a Digital Passport transfer for your recently purchased watch. Please review the passport details before accepting:</p>
                      
                      <div style={{backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', marginBottom: '16px', border: '1px solid #e5e7eb'}}>
                        <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                          <img 
                            src="/vantage/watch-thumb-0.jpg" 
                            alt="Watch" 
                            style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb'}}
                          />
                          <div style={{flex: 1, display: 'flex', justifyContent: 'space-between', gap: '16px'}}>
                            <div>
                              <h3 style={{fontSize: '16px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 4px 0'}}>Louis Erard</h3>
                              <p style={{fontSize: '14px', color: '#6b7280', margin: '0 0 8px 0'}}>Le Regulateur Louis Erard x Alain Silberstein</p>
                              <div style={{display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#f0fdf4', padding: '4px 10px', borderRadius: '6px'}}>
                                <Shield size={14} color="#22c55e" />
                                <span style={{fontSize: '12px', fontWeight: 500, color: '#16a34a'}}>Verified Authentic</span>
                              </div>
                            </div>
                            <div style={{textAlign: 'right'}}>
                              <p style={{fontSize: '11px', color: '#9ca3af', margin: '0 0 2px 0', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Transfer Date</p>
                              <p style={{fontSize: '15px', fontWeight: 600, color: '#1a1a1a', margin: 0}}>Nov 10, 2025</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p style={{margin: '0 0 16px 0'}}><strong>Before accepting, please verify:</strong></p>
                      <div style={{margin: '0 0 16px 0'}}>
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px'}}>
                          <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px'}}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 2v6m0 2h.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{flex: 1}}><strong>Purchase price</strong> - Confirm the amount matches your agreement</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px'}}>
                          <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px'}}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 2v6m0 2h.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{flex: 1}}><strong>Serial number</strong> - Must match the physical watch</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px'}}>
                          <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px'}}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 2v6m0 2h.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{flex: 1}}><strong>Product details</strong> - Reference, edition, and production date</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px'}}>
                          <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px'}}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 2v6m0 2h.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{flex: 1}}><strong>Owner benefits & asset rules</strong> - Perks and obligations</span>
                        </div>
                      </div>
                      <div style={{backgroundColor: '#fff', borderRadius: '8px', padding: '16px', marginBottom: '16px', border: '1px solid #fbbf24'}}>
                        <p style={{margin: 0, fontSize: '14px', color: '#92400e', fontWeight: 500}}>
                          ⚠️ Once you approve, the transfer will be finalized. Please review all details carefully.
                        </p>
                      </div>
                      <p style={{margin: 0}}>Click below to review the Digital Passport and decide whether to accept or reject the transfer.</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div style={{textAlign: 'center', marginBottom: '32px'}}>
                    <button
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setCurrentStep(3);
                      }}
                      style={{
                        backgroundColor: '#f59e0b',
                        color: '#ffffff',
                        padding: '16px 40px',
                        fontSize: '15px',
                        fontWeight: 600,
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 12px rgba(245,158,11,0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 16px rgba(245,158,11,0.4)';
                        e.target.style.backgroundColor = '#d97706';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(245,158,11,0.3)';
                        e.target.style.backgroundColor = '#f59e0b';
                      }}
                    >
                      Review Passport & Decide
                    </button>
                  </div>

                  {/* Footer */}
                  <div style={{borderTop: '1px solid #e5e7eb', paddingTop: '24px', marginTop: '32px'}}>
                    <p style={{fontSize: '13px', color: '#6b7280', textAlign: 'center', margin: '0 0 12px 0'}}>
                      Questions? Contact us at <a href="mailto:support@vantage.com" style={{color: '#f59e0b', textDecoration: 'none'}}>support@vantage.com</a>
                    </p>
                    <p style={{fontSize: '12px', color: '#9ca3af', textAlign: 'center', margin: 0}}>
                      © 2025 Vantage. All rights reserved.<br/>
                      You're receiving this email because a Digital Passport transfer requires your review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

