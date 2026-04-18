# NexCore Systems - Premium Gaming PCs

**Built for the Relentless**

A high-converting, production-ready e-commerce website for a premium gaming PC brand.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (custom config with brand tokens)
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **Payments**: Stripe placeholders (Klarna & Affirm BNPL)

## Brand Identity

- **Primary BG**: #080B10 (near-black)
- **Accent 1**: #00E5FF (electric cyan)
- **Accent 2**: #FF3D00 (afterburner orange)
- **Surface**: #0F1520
- **Display Font**: Orbitron
- **Body Font**: DM Sans

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── CartDrawer.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Builder.jsx
│   ├── About.jsx
│   ├── Support.jsx
│   └── Checkout.jsx
├── store/           # Zustand state stores
│   ├── cart.js
│   └── builder.js
├── data/            # Mock data
│   ├── products.js
│   ├── faqs.js
│   └── benchmarks.js
├── hooks/           # Custom React hooks
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Features

### Homepage
- Full-viewport hero with animated stats
- Featured systems grid
- Performance banner
- Why NexCore section
- Partner logos

### Shop Page
- Left sidebar filters (price, GPU, RAM)
- Sortable product grid
- Low stock indicators
- FPS estimates per game

### PC Builder
- 9-step configuration wizard
- Live performance score
- Preset quick-starts (Esports, 4K, Streaming)
- Compatibility checking

### Checkout
- Multi-step form
- Order summary sidebar
- BNPL options (Klarna, Affirm)
- Trust badges

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/shop` | Prebuilt systems catalog |
| `/builder` | Custom PC configurator |
| `/about` | Brand story & team |
| `/support` | FAQ & contact form |
| `/checkout` | Checkout flow |
| `/order-confirmed` | Order confirmation |

## Development Commands

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
```

## License

MIT © 2024 NexCore Systems
