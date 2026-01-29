# Vantage Platform

Platform showcasing how Vantage enables brands to earn royalties on secondary market sales through digital certificates.

## Links

- **Landing:** [https://changobuitrago.github.io/faircut/](https://changobuitrago.github.io/faircut/)
- **Louis Erard presentation:** [https://changobuitrago.github.io/faircut/louis-erard](https://changobuitrago.github.io/faircut/louis-erard)
- **Demo (experience selector):** [https://changobuitrago.github.io/faircut/demo](https://changobuitrago.github.io/faircut/demo)
- **Repository:** [https://github.com/ChangoBuitrago/faircut](https://github.com/ChangoBuitrago/faircut)

Direct links and page refresh work on GitHub Pages thanks to the deploy step that copies `index.html` to `404.html`, so the SPA is served for any path under `/faircut/`. (Repo must be public for GitHub Pages to serve the site.)

## Quick Start

```bash
npm install
npm run dev
```

## Routes

- `/` - Landing page
- `/louis-erard` - Louis Erard presentation (Control Gap, Settlement Protocol, Value Proposition)
- `/demo` - Demo experience selector
- `/demo/creator` - Creator experience
- `/demo/collector` - Collector experience
- `/demo/reseller` - Reseller experience
- `/slides` - Business slides
- `/manuel-emch` - Manuel Emch strategy presentation

## Tech Stack

React 19 + Vite, Tailwind CSS, React Router DOM
