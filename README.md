# Faircut Platform

A comprehensive platform showcasing how Faircut enables brands to earn royalties on secondary market sales through digital certificates and blockchain technology. Includes interactive landing pages, brand-specific presentations, and immersive demo experiences for creators, collectors, and resellers.

## 🔗 Links

- **🌐 Live Demo:** [https://changobuitrago.github.io/faircut/](https://changobuitrago.github.io/faircut/)
- **📦 Repository:** [https://github.com/ChangoBuitrago/faircut](https://github.com/ChangoBuitrago/faircut)

## 🎯 What is This?

A **multi-experience platform** that demonstrates Faircut's value proposition through:

### 1. Landing Page Experience
A scroll-based interactive experience with 6 main sections:
1. **Hero Section** - Problem statement and value proposition
2. **Solution Section** - How Faircut works with digital certificates
3. **Calculator Section** - Interactive revenue calculator
4. **Partnership Terms** - Risk-free terms and 50/50 split
5. **Benefits Section** - Perpetual royalties, authenticity, community
6. **Call to Action** - Request exclusive access

**Duration:** 2-3 minutes of scrolling

### 2. Demo Experiences
Interactive step-by-step demos showcasing the Faircut platform from three perspectives:

- **🎨 Creator Experience** - Issue digital passports with smart rules and earn royalties
- **🛒 Collector Experience** - Browse, purchase, and manage digital passports
- **💼 Reseller Experience** - Transfer passports and pay royalties to creators

Each experience includes:
- Multi-step navigation with hover-activated sidebar
- Real-world scenarios (Chrono24, email notifications, etc.)
- Interactive passport viewing and management
- Transfer workflows with royalty calculations

### 3. Brand Presentations
Brand-specific strategy presentations:
- **Manuel Emch** - Napkin strategy presentation
- **Stefan Kudoke** - Brand strategy showcase
- **Patrik Sjögren** - Strategy presentation

Perfect for:
- 🎤 Brand pitches and investor presentations
- 💻 Full-screen demos (share screen and scroll)
- 📰 Marketing website
- 🎬 Video recordings (screen capture while scrolling)
- 🎓 Training and onboarding materials

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run the landing page
npm run dev

# Open in browser
# http://localhost:5173
```

## 🎨 Design Features

- **Interactive Scroll Experience** - 6 full-viewport sections with smooth navigation
  - **Mouse wheel navigation** - Scroll through sections with mouse wheel
  - **Keyboard navigation** - Arrow keys, Page Up/Down, Home/End support
  - **Section indicators** - Visual dots showing current position
- **Modern Landing Page Design:**
  - Hero section with gradient text effects
  - Interactive revenue calculator with sliders
  - Clean card-based layout for benefits
  - Professional typography and spacing
- **Interactive Elements:**
  - **Revenue Calculator** - Real-time calculation with sliders
  - **Smooth Animations** - Framer Motion for enhanced UX
  - **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Full dark/light theme toggle
- **Key Features:**
  - Problem/solution narrative flow
  - Interactive revenue calculator
  - Partnership terms visualization
  - Benefits showcase with icons
  - Clear call-to-action
- **Technical Implementation:**
  - React 19 with modern hooks
  - Tailwind CSS for styling
  - Intersection Observer for scroll detection
  - Custom slider components
  - Responsive grid layouts

## 📁 Project Structure

```
faircut/
├── src/
│   ├── pages/
│   │   ├── Landing.jsx              # Main landing page
│   │   ├── Demo.jsx                 # Demo experience selector
│   │   ├── DemoCreator.jsx          # Creator experience demo
│   │   ├── DemoCollector.jsx        # Collector experience demo
│   │   ├── DemoReseller.jsx         # Reseller experience demo
│   │   ├── Slides.jsx               # Story/business slides presentation
│   │   ├── ManuelEmch.jsx           # Manuel Emch napkin strategy
│   │   ├── ManuelEmchV3.jsx         # Manuel Emch v3 strategy
│   │   ├── StefanKudoke.jsx         # Stefan Kudoke napkin strategy
│   │   └── PatrikSjogren.jsx        # Patrik Sjögren napkin strategy
│   ├── components/
│   │   ├── collector/               # Collector experience components
│   │   │   ├── CollectorStep0.jsx   # Product page
│   │   │   ├── CollectorStep1.jsx   # Order confirmation
│   │   │   ├── CollectorStep2.jsx   # Inbox
│   │   │   ├── CollectorStep3.jsx   # Digital passport view
│   │   │   └── CollectorStep4.jsx   # Experience complete
│   │   ├── creator/                 # Creator experience components
│   │   │   ├── CreatorStep1.jsx     # Create collection
│   │   │   ├── CreatorStep2.jsx     # Issue passport
│   │   │   ├── CreatorStep3.jsx     # Dashboard
│   │   │   ├── CreatorStep4.jsx     # Experience complete
│   │   │   └── MyCollections.jsx    # Collections view
│   │   ├── reseller/                # Reseller experience components
│   │   │   ├── ResellerStep0.jsx    # Product page
│   │   │   ├── ResellerStep1.jsx    # Order confirmation
│   │   │   ├── ResellerStep2.jsx   # Email received
│   │   │   ├── ResellerStep3.jsx   # Digital passport view
│   │   │   ├── ResellerStep4.jsx   # Review transfer
│   │   │   ├── ResellerStep5.jsx   # Transfer complete
│   │   │   └── ResellerStep8.jsx   # Benefits
│   │   ├── shared/                  # Shared components
│   │   │   ├── DemoHeader.jsx        # Demo page header
│   │   │   └── StepNavigationSidebar.jsx  # Step navigation sidebar
│   │   ├── BusinessSlides.jsx       # Business-focused slides
│   │   ├── DarkModeToggle.jsx       # Dark mode toggle component
│   │   ├── FairCutSlide.jsx         # FairCut-specific slide
│   │   └── StorySlides.jsx          # Story-focused slides
│   ├── contexts/
│   │   └── DarkModeContext.jsx      # Dark mode context provider
│   ├── hooks/
│   │   └── useStepNavigation.js    # Step navigation hook
│   ├── App.jsx                      # App entry point with routing
│   ├── App.css                      # App-specific styles
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles with Inter font
├── public/                          # Static assets
│   ├── *.png                        # Icons and images
│   └── *.jpg                        # Watch thumbnails
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
└── README.md
```

## 🎨 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Typography**: Inter font (Google Fonts)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Charts**: Chart.js
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint

## 🎨 Interactive Features

### Landing Page
- **Scroll Navigation**: Mouse wheel, keyboard arrows, and section indicators
- **Revenue Calculator**: Interactive sliders for price, markup, and volume
- **Real-time Updates**: Live calculation of potential annual revenue
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion for enhanced user experience
- **Accessibility**: Keyboard navigation and screen reader support

### Demo Experiences
- **Step-by-Step Navigation**: Hover-activated sidebar menu for easy navigation
- **Interactive Passports**: View and manage digital passports with smart rules
- **Transfer Workflows**: Complete transfer processes with royalty calculations
- **Real-world Scenarios**: Chrono24 integration, email notifications, order confirmations
- **Sidebar Navigation**: Sensitive hover trigger around three-dots indicator
- **URL-based Navigation**: Hash-based routing for deep linking and browser navigation
- **Theme Support**: Color-coded experiences (Emerald for Creator, Blue for Collector, Purple for Reseller)

## 🚀 Development & Deployment

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Deploy to Vercel

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy to Netlify (drag and drop /dist folder)
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Build for Production

```bash
npm run build
# Output in /dist folder - ready for deployment
```

### Environment Variables

No environment variables required for basic functionality. The platform is fully client-side.

## 🎯 Routes

- `/` - Landing page
- `/demo` - Demo experience selector
- `/demo/creator` - Creator experience demo
- `/demo/collector` - Collector experience demo
- `/demo/reseller` - Reseller experience demo
- `/slides` - Story/business slides presentation
- `/manuel-emch` - Manuel Emch strategy presentation
- `/manuel-emch-v3` - Manuel Emch v3 strategy presentation
- `/stefan-kudoke` - Stefan Kudoke strategy presentation
- `/patrik-sjogren` - Patrik Sjögren strategy presentation

## 🔄 Recent Updates

- ✅ Added "Transfers" menu item to collector sidebar navigation
- ✅ Improved hover sensitivity for step navigation menus (all experiences)
- ✅ Enhanced sidebar trigger area for better UX around three-dots indicator

---

**Built for Faircut** - Turning resales into revenue for creators 💎
