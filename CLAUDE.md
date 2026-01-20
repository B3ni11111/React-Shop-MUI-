# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

This is a React e-commerce shop application using Vite, Material-UI (MUI), and Emotion for styling.

### Component Hierarchy

```
App.jsx
└── ThemeProvider (MUI theme wrapper)
    └── HomePage (main container, manages auth state)
        ├── EnterData (login/signup form - shown when not signed in)
        ├──hooks/               #reusable hooks
        └── ShopPage (main shopping experience - shown when signed in)
            ├── Header (navigation bar with cart badge, user menu)
            ├── ShopItems (product grid display)
            ├── Cart (shopping cart view)
            └── ItemPage (individual product detail)
```

### State Management

- **Authentication state**: `signed` boolean in `HomePage` controls whether user sees login or shop
- **User data**: `data` object with `id`, `userName`, `password`, `img` flows from `HomePage` down
- **Cart state**: Managed in `ShopPage` with `cart` array containing items with quantities
- **Navigation**: Simple `currentView` string state ("shop", "cart", "item") for view switching

### Theming

Custom MUI theme defined in `Theme.jsx` with a "Deep-sea" color palette:
- Primary: `#415a77`
- Secondary: `#778da9`
- Background: `#415a77` (default), `#1b263b` (paper)
- Custom colors: `dark` (`#1b263b`), `veryDark` (`#0d1b2a`)

### Product Data

Product items are defined statically in `App.jsx` with Hebrew text, including:
- `id` (UUID generated at runtime)
- `product`, `price`, `img`, `info` fields
