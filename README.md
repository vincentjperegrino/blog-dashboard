# Blog Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-13.4+-black?logo=next.js)](https://nextjs.org/)
[![Material UI](https://img.shields.io/badge/Material_UI-5.14-blue?logo=mui)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)

A modern blog dashboard featuring server-side rendering, responsive design, and real-time data management.

## Table of Contents
- [Running Locally](#running-locally)
- [Design Decisions](#design-decisions)
- [Challenges Faced](#challenges-faced)

## Running Locally

### Prerequisites
- Node.js v18+
- npm v9+
- Git

### Installation
# Clone repository
```bash
git clone https://github.com/yourusername/blog-dashboard.git
cd blog-dashboard
```
# Install dependencies
```bash
npm install
```
# Start development server
```bash
npm run dev
```
# Environment Setup
Create a .env.local file:
```bash
NEXT_PUBLIC_API_URL=https://your-mockapi-url.com
```

Visit http://localhost:3000 after starting the server.

Design Decisions
----------------

### Architecture

#### **Next.js App Router**

*   Enabled SSR/SSG for better SEO and performance
    
*   API routes for backend integration
    
*   Simplified routing structure
    

#### **Material UI**

*   Consistent theming system
    
*   Responsive grid layout
    
*   Pre-built accessible components
    

#### **RTK Query**

*   Automatic caching/revalidation
    
*   Centralized API management
    
*   Optimistic updates support
    

#### **TypeScript**

*   Strict type checking
    
*   Enhanced code maintainability
    
*   Improved developer experience
    

### UI/UX

*   Mobile-first responsive design
    
*   Dark mode support
    
*   Loading states and error boundaries
    
*   Smooth transitions and animations
    

Challenges Faced
----------------

### 1\. Server-Client Component Integration

**Challenge**: Managing state between SSR and client components**Solution**:

*   Used Next.js App Router data fetching
    
*   Created separate client boundary components
    
*   Implemented hydration wrappers
    

### 2\. Material UI SSR Setup

**Challenge**: Style flickering on initial load**Solution**:

*   Implemented CSS baseline
    
*   Used Emotion cache provider
    
*   Server-side style extraction
    

### 3\. RTK Query with Next.js

**Challenge**: Cache invalidation across pages**Solution**:

*   Implemented tag-based invalidation
    
*   Created API middleware wrapper
    
*   Used Next.js revalidation hooks
    

### 4\. TypeScript Strictness

**Challenge**: Complex API response typing**Solution**:

*   Created detailed interface definitions
    
*   Implemented type guards
    
*   Used utility types for API responses
    

### 5\. Responsive Design

**Challenge**: Consistent grid layout across devices**Solution**:

*   Implemented MUI breakpoint system
    
*   Used flexbox fallbacks
    
*   Created responsive hook utilities
    

### Live Demo

[blog-dashboard.vercel.app](https://blog-dashboard-dswqcv72i-vincent-james-demetrias-projects.vercel.app/)