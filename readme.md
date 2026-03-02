# Nether Crystals — Game Shop UI

A responsive game shop interface layout featuring crystal and coin packs. Built as a frontend portfolio project.

**[→ Live Demo](https://goldenspade.github.io/layout_nether_crystals/)**

---

## Features

- Fully responsive layout, optimised for screens from 350px and up
- BEM methodology — all blocks are self-contained and reusable
- Fluid layout using flexbox and media queries
- Tab navigation with active state managed via JavaScript
- Hover effects and transitions with a consistent 600ms duration
- Accessible markup: ARIA roles, `alt` attributes, keyboard navigation support

## Tech Stack

| Tool | Purpose |
|------|---------|
| HTML5 | Semantic markup |
| SCSS (Sass) | Styling with BEM, `@use`/`@forward` module system |
| JavaScript (ES Modules) | Tab switching, keyboard interaction |
| Vite | Dev server and bundler |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Production build
npm run build
```

## Project Structure

```
src/
├── css/
│   ├── blocks/         # BEM block styles
│   ├── _fonts.scss     # Font-face declarations
│   ├── _reset.scss     # CSS reset
│   ├── _vars.scss      # Design tokens (colours, sizes, durations)
│   └── main.scss       # Entry point — imports all modules
├── fonts/              # WOFF font files
├── img/                # Images and icons
├── js/
│   ├── content-menu.js # Tab switching logic
│   └── main.js         # JS entry point
└── index.html
```

## Media Breakpoints

`400px` · `541px` · `576px` · `600px` · `644px` · `650px` · `768px` · `778px` · `830px` · `876px` · `1015px` · `1020px`
