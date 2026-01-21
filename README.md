# Pasteleria Nativo Portfolio & Landing Theme

A custom WordPress theme built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, designed for a modern, modular, and fast frontend. This repository contains the theme source code and build configuration for development, staging, and production.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Development Workflow](#development-workflow)
- [Git & Branching Strategy](#git--branching-strategy)
- [Build & Deployment](#build--deployment)
- [Server Setup](#server-setup)
- [Useful Commands](#useful-commands)
- [Notes](#notes)

---

## Project Structure
delanada_portfolio_theme/
├─ src/ # React + Tailwind source code
│ ├─ assets/ # Images and static assets
│ ├─ components/ # Reusable UI components
│ │ └─ ui/ # Radix UI and other UI primitives
│ ├─ hooks/ # Custom React hooks
│ ├─ lib/ # Utility functions
│ ├─ pages/ # Page-level components
│ ├─ index.css # Tailwind CSS entry
│ └─ main.tsx # React entry point
├─ dist/ # Compiled and minified CSS/JS (for WordPress enqueue)
├─ package.json # NPM dependencies and scripts
├─ vite.config.ts # Vite configuration
├─ tsconfig.json # TypeScript configuration
├─ README.md # This file
└─ .gitignore

> **Note:** Only the compiled files in `dist/` are enqueued in WordPress for production. `src/` contains all your development code.

---

## Technology Stack

- **WordPress** — PHP backend and CMS
- **React 18** — Modern frontend library
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS 4** — Utility-first CSS framework
- **Vite** — Frontend build tool
- **Radix UI** — Accessible UI components
- **Framer Motion** — Animations
- **Sonner** — Toast notifications
- **Next-Themes** — Theme management for dark/light modes
- **Git** — Version control

---

## Installation & Setup

### Local Development

1. Clone the repository:

git clone git@github.com:yourusername/delanada_portfolio_theme.git
cd delanada_portfolio_theme

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

This runs Vite on your server or local machine. React + Tailwind will hot reload on changes.

### WordPress Setup

1. Copy the theme folder to your WordPress installation:

wp-content/themes/<folder-name>

### Development Workflow

Edit Code: On desktop or laptop in src/.

Build: On your staging server, run Tailwind/Vite builds to generate dist/.

Staging: Server (Ubuntu) hosts development/staging versions.

Production: Hostalia serves only the minified CSS/JS and WordPress theme.

Keep the dist/ files versioned in Git for WordPress production.

### Git & Branching Strategy

develop — Main development branch.

feature/* — Individual feature branches.

main — Production-ready branch, built from develop.

Workflow:

Develop features on feature/*.

Merge into develop when ready.

Run the build on the server.

Merge develop into main for production.

Build & Deployment
Tailwind Build
npx @tailwindcss/cli -i ./src/index.css -o ./dist/output.css --watch


Input: src/index.css (imports Tailwind utilities)

Output: dist/output.css (enqueue in WordPress)

Watch mode: Automatically rebuilds when you save changes.

Vite Build
npm run build


This generates the production-ready React bundle.

Server Setup

Staging Server: Ubuntu with Apache, MySQL, PHP

Access: SSH + optional VSCode Remote SSH

Databases: One MySQL user for all staging databases

Directory:

/var/www/staging/
└─ delanada_portfolio/
   └─ wp-content/themes/delanada_portfolio_theme/


Tailwind CLI installed globally or in project for builds.

Useful Commands
# Development server
npm run dev

# Production build
npm run build

# ESLint checks
npm run lint

# Preview production build locally
npm run preview

# Run tests
npm run test
npm run test:watch

Notes

.gitignore is configured to exclude node_modules, WordPress core files, uploads, and IDE configs.

Only one package.json should live at the theme root (themes/delanada_portfolio_theme/package.json).

Build outputs (dist/) are versioned for WordPress production.

Avoid running React build locally unless testing; builds should be generated on the server for consistency.