# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional CV/Resume web application built for Nimish Chaudhari, an AI & Data Science Consultant. The application is built with React 19, TypeScript, and Tailwind CSS, optimized for both web viewing and A4 printing.

## Architecture

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with utility-first approach
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: GitHub Pages with automated CI/CD pipeline
- **Print Optimization**: A4 dimensions (210mm × 297mm) with print-friendly styling

## Key Files Structure

- `src/components/CV.tsx` - Main CV component with all content and styling
- `src/App.tsx` - Root application component
- `vite.config.ts` - Vite configuration with GitHub Pages base path
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint configuration with React hooks and TypeScript rules

## Development Commands

```bash
# Start development server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint

# Type checking (run before build)
tsc -b
```

## Build Process

The build process includes:
1. TypeScript compilation (`tsc -b`)
2. Vite bundling and optimization
3. Output to `dist/` directory
4. Automatic deployment to GitHub Pages on main branch pushes

## CV Content Architecture

The CV component is structured with:
- **Left Sidebar**: Contact info, certifications, skills, languages, interests
- **Main Content**: Professional summary, technical expertise, experience, education
- **AI/Data Science Focus**: Prominently features AI projects and technical skills
- **Print Optimization**: Precise sizing and styling for A4 printing

## Styling Guidelines

- Uses Tailwind utility classes for responsive design
- Print-specific styling with exact dimensions
- Color scheme: Blue/indigo theme with professional gradients
- Typography: System fonts with careful line height and spacing

## Content Updates

When updating CV content:
- Personal information: Contact details in left sidebar
- Experience: Focus on AI/ML projects and quantifiable achievements
- Skills: Technical expertise organized by category
- Styling: Maintain A4 print dimensions and professional appearance

## Deployment

Automatic deployment via GitHub Actions:
- Triggers on pushes to main branch
- Builds application and deploys to GitHub Pages
- Live URL: https://nimishchaudhari.github.io/CV_NimishChaudhari/

## Dependencies

Key dependencies:
- React 19 with modern features
- Lucide React for professional icons
- Tailwind CSS for utility-first styling
- TypeScript for type safety
- Vite for build optimization