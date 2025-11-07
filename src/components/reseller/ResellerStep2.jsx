import React from 'react';
import { Search, Mail, Inbox, Star, Archive, Trash2, ChevronLeft, Tag, MoreVertical } from 'lucide-react';

// Import images
import mountainBg from '/mountain-bg.jpg';
import instagramIcon from '/instagram-icon.png';

export default function ResellerStep2({ setCurrentStep }) {
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
          <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#c2185b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '14px', fontWeight: 500}}>MS</div>
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
                  <h1 style={{fontSize: '20px', fontWeight: 400, color: '#202124', margin: '0 0 12px 0'}}>Your Digital Passport is Ready</h1>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0f0f0f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                      <img 
                        src="https://www.louiserard.com/cdn/shop/files/logo-louis.svg?v=1706870401&width=120" 
                        alt="Louis Erard" 
                        style={{width: '28px', height: '28px', filter: 'brightness(0) saturate(100%) invert(90%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(105%) contrast(95%)'}}
                      />
                    </div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px'}}>
                        <span style={{fontSize: '14px', fontWeight: 500, color: '#202124'}}>Louis Erard</span>
                        <span style={{fontSize: '14px', color: '#5f6368'}}>&lt;info@louiserard.com&gt;</span>
                        <a href="#" style={{fontSize: '13px', color: '#1a73e8', textDecoration: 'none', marginLeft: '8px'}}>Unsubscribe</a>
                      </div>
                      <div style={{fontSize: '12px', color: '#5f6368'}}>to me</div>
                    </div>
                    <div style={{fontSize: '12px', color: '#5f6368', textAlign: 'right'}}>
                      Nov 6, 2025, 12:48 PM (1 day ago)
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Body - Louis Erard Content with Background */}
              <div style={{width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#0f0f0f'}}>
                {/* Background Image */}
                <img 
                  src={mountainBg} 
                  alt="Mountain Background"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center top',
                    zIndex: 0
                  }}
                />
                
                {/* Content Overlay */}
                <div style={{position: 'relative', zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.45) 100%)', minHeight: '100vh', padding: '0'}}>
                  {/* Welcome Header with Logo */}
                  <div style={{textAlign: 'center', paddingTop: '60px', paddingBottom: '40px'}}>
                    <div style={{fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '28px', fontWeight: 300, letterSpacing: '6px', color: 'rgba(255,255,255,0.9)', marginBottom: '12px', textShadow: '0 2px 20px rgba(0,0,0,0.5)'}}>
                      WELCOME
                    </div>
                    <div style={{fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '14px', fontWeight: 300, letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px', textShadow: '0 1px 10px rgba(0,0,0,0.5)'}}>
                      TO
                    </div>
                    <img 
                      src="https://www.louiserard.com/cdn/shop/files/logo-louis.svg?v=1706870401&width=120" 
                      alt="Louis Erard" 
                      width="220" 
                      style={{maxWidth: '220px', height: 'auto', margin: '0 auto', filter: 'brightness(0) saturate(100%) invert(95%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(105%) contrast(95)', display: 'block', opacity: 0.95}}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  {/* Content Container */}
                  <div style={{maxWidth: '700px', margin: '0 auto', padding: '0 40px'}}>
                    {/* Greeting */}
                    <div style={{marginBottom: '32px', fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '14px', fontWeight: 400, letterSpacing: '0.2px', lineHeight: '1.7', color: 'rgb(255,255,255)', textAlign: 'left', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)'}}>
                      <p style={{margin: 0, marginBottom: '1rem'}}>Dear Maria,</p>
                      <p style={{margin: 0, marginBottom: '1rem'}}>Thank you for your purchase of the <strong style={{fontWeight: 600}}>Le Régulateur Blanc Louis Erard x Alain Silberstein</strong>. It is a privilege to have you as a member of our community.</p>
                      <p style={{margin: 0}}>Your watch has been delivered and your digital passport is now active.</p>
                    </div>

                    {/* Quote Section */}
                    <div style={{marginBottom: '32px', fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '22px', fontStyle: 'italic', fontWeight: 400, lineHeight: '1.5', textAlign: 'center', color: 'rgb(255,255,255)', textShadow: '0 3px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.7)'}}>
                      "A passion for <span style={{color: 'rgb(120,200,255)', fontWeight: 500}}>limitless creativity</span> in the world of traditional Swiss watchmaking."
                    </div>

                    {/* Brand Message */}
                    <div style={{marginBottom: '32px', fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '14px', fontWeight: 400, letterSpacing: '0.2px', lineHeight: '1.7', color: 'rgb(255,255,255)', textAlign: 'left', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)'}}>
                      <p style={{margin: 0, marginBottom: '1rem'}}>Since 1929, we create watches that are original and authentic with strong horological content while embodying today's essential call for affordability.</p>
                      <p style={{margin: 0}}>More than a brand, we are the – Made in Switzerland – value proposition.</p>
                    </div>

                    {/* CTA Button */}
                    <div style={{textAlign: 'center', marginBottom: '40px'}}>
                      <button
                        onClick={() => setCurrentStep(3)}
                        style={{
                          backgroundColor: '#158ee4',
                          color: '#ffffff',
                          padding: '14px 32px',
                          fontSize: '13px',
                          fontWeight: 500,
                          letterSpacing: '0.8px',
                          borderRadius: '6px',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif",
                          textTransform: 'uppercase',
                          transition: 'all 0.2s ease',
                          lineHeight: '100%',
                          boxShadow: '0 4px 20px rgba(21,142,228,0.5), 0 2px 10px rgba(0,0,0,0.4)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 6px 24px rgba(21,142,228,0.6), 0 3px 12px rgba(0,0,0,0.5)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 20px rgba(21,142,228,0.5), 0 2px 10px rgba(0,0,0,0.4)';
                        }}
                      >
                        View My Digital Passport
                      </button>
                    </div>

                    <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', marginBottom: '24px'}}></div>

                    {/* Footer - Company Info */}
                    <div style={{marginBottom: '20px', fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '12px', fontWeight: 400, lineHeight: '1.6', textAlign: 'center', color: 'rgb(255,255,255)', textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
                      <p style={{margin: 0, marginBottom: '0.4rem', fontWeight: 700, fontSize: '12px', letterSpacing: '0.8px'}}>MONTRES LOUIS ERARD SA</p>
                      <p style={{margin: 0, marginBottom: '0.8rem'}}>Rue de l'Ouest 2 | 2340 Le Noirmont | Switzerland</p>
                      <p style={{margin: 0, marginBottom: '0.3rem', fontWeight: 700, letterSpacing: '0.8px'}}>CONTACT</p>
                      <p style={{margin: 0, marginBottom: '0.8rem'}}>T +41 (0) 32 957 65 30 | <a href="mailto:info@louiserard.com" style={{color: 'rgb(255,255,255)', textDecoration: 'none'}}>info@louiserard.com</a></p>
                      <p style={{margin: 0, fontWeight: 700}}><a href="https://www.louiserard.com" style={{color: 'rgb(255,255,255)', textDecoration: 'none'}}>www.louiserard.com</a></p>
                    </div>

                    {/* Social Media Icons */}
                    <div style={{paddingBottom: '20px'}}>
                      <div style={{width: '100%', textAlign: 'center'}}>
                        <a href="#" style={{display: 'inline-block'}}>
                          <img 
                            src={instagramIcon} 
                            alt="Instagram" 
                            style={{width: '30px', height: '30px', display: 'block', filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))'}}
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </a>
                      </div>
                    </div>

                    <div style={{borderTop: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px'}}></div>

                    {/* Privacy Policy */}
                    <div style={{marginBottom: '12px', textAlign: 'center'}}>
                      <p style={{margin: 0, fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '10px', fontWeight: 400, lineHeight: '1.5', color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
                        <a href="#" style={{color: 'rgb(140,210,255)', textDecoration: 'underline'}}>Privacy Policy</a>
                      </p>
                    </div>

                    {/* Unsubscribe */}
                    <div style={{textAlign: 'center', paddingBottom: '40px'}}>
                      <div style={{fontFamily: "'Open Sans',Arial,'Helvetica Neue',Helvetica,sans-serif", fontSize: '10px', fontWeight: 400, lineHeight: '1.5', color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
                        <p style={{margin: 0, marginBottom: '0.3rem'}}>Do you no longer wish to receive our emails?</p>
                        <p style={{margin: 0}}><a href="#" style={{color: 'rgb(140,210,255)', textDecoration: 'underline'}}>Unsubscribe by clicking on this link</a></p>
                      </div>
                    </div>
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

