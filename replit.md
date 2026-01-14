# Overview

IMEX is a premium global sourcing and import/export company specializing in complete project solutions for hotels, hospitals, villas, and commercial spaces. The company operates as a bridge between Chinese manufacturers and global clients, providing end-to-end sourcing, procurement, and logistics services. This is a modern React-based website showcasing IMEX's services, portfolio, and expertise in global sourcing and import/export with operations spanning from China (Foshan) to India (Chennai & Madurai).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React 18 + TypeScript stack with Vite as the build tool. The architecture follows a component-based design pattern with separation of concerns:

- **Routing**: Uses Wouter for client-side routing, providing a lightweight alternative to React Router
- **Styling**: Implements a hybrid approach combining Tailwind CSS for utility-first styling with Shadcn/ui components for consistent design patterns
- **State Management**: Leverages React Query (@tanstack/react-query) for server state management and built-in React hooks for local state
- **Animation System**: Uses React Spring for smooth animations and parallax effects, providing performant spring-based animations
- **Component Library**: Built on Radix UI primitives for accessibility-compliant components with custom styling

## Backend Architecture
The backend uses an Express.js server with TypeScript:

- **Server Framework**: Express.js with TypeScript for type safety
- **Development Setup**: Vite integration for hot module replacement and development server
- **API Structure**: RESTful API design with centralized route registration
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
The application uses a flexible storage architecture:

- **Database**: PostgreSQL as the primary database with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon serverless PostgreSQL for scalable database hosting
- **Development Storage**: In-memory storage fallback for development and testing

## Authentication and Authorization
The application implements Firebase Authentication for admin access:

- **Firebase Auth**: Email/password authentication for admin users
- **Firestore Database**: Real-time database for storing contact inquiries and admin data
- **Admin Dashboard**: Protected admin routes with authentication guards
- **Type Safety**: Zod schemas for request validation and type inference

## Performance and User Experience
- **Code Splitting**: React.lazy for component-level code splitting
- **Intersection Observer**: Custom hooks for scroll-triggered animations and lazy loading
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animation Performance**: Hardware-accelerated animations using transform3d
- **SEO Optimization**: Comprehensive meta tags, structured data, and semantic HTML

# External Dependencies

## UI Framework and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives including dialogs, dropdowns, navigation menus, and form controls
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: For creating consistent component variants
- **clsx & tailwind-merge**: For conditional CSS class composition

## Animation and Interaction
- **@react-spring/web**: Physics-based animation library for smooth transitions and parallax effects
- **lucide-react**: Modern icon library with React components

## Data Management
- **@tanstack/react-query**: Powerful data synchronization for React with caching, background updates, and optimistic updates
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Form validation resolvers for various schema libraries

## Database and ORM
- **drizzle-orm**: TypeScript ORM with excellent type safety and performance
- **drizzle-kit**: Database kit for migrations, introspection, and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development and Build Tools
- **vite**: Next-generation frontend build tool with fast HMR
- **@vitejs/plugin-react**: Official Vite plugin for React support
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Routing and Navigation
- **wouter**: Minimalist routing library for React applications, chosen for its small bundle size and simplicity

## Validation and Type Safety
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **cmdk**: Command palette component for enhanced user interaction

## Firebase Integration
- **firebase**: Firebase SDK for authentication and Firestore database
- **Firebase Auth**: Email/password authentication for admin portal
- **Firestore**: Real-time NoSQL database for contact inquiries management
- **Real-time Updates**: Live data synchronization for admin dashboard

# Client Showcase

The website features a comprehensive client showcase highlighting IMEX's trusted partnerships across Tamil Nadu:

## Features
- **Homepage Integration**: "Trusted By" section with animated logo grid (13 premium clients)
- **Dedicated Clients Page**: `/clients` with interactive Tamil Nadu map visualization
- **Client Testimonials**: Professional mock testimonials from hotel and hospital partners
- **Interactive Filters**: Filter clients by city (7 locations) and type (Hotel/Hospital/Resort)
- **Hover Effects**: Smooth animations revealing client location and project type
- **Responsive Design**: Mobile-first grid layout with grayscale-to-color logo transitions

## Client Data Structure
Centralized client data in `shared/clients.ts` includes:
- **13 Premium Clients**: Marriott, Amika, Royal Court, Heritage Residency, Bharathi Hospital, Prince Gardens, Copper Leaf, Appletree, Hotel Lance, Sea View, Sea Shore, The Hamuse, Hotel Arjunaa
- **7 Cities Covered**: Madurai, Coimbatore, Tirunelveli, Nagerkoil, Kanyakumari, Kodaikanal, Rameshwaram
- **Logo Assets**: Centralized import mapping in `clientLogos` for single source of truth
- **Mock Testimonials**: Professional quotes from General Managers, Directors, and Owners

## Interactive Map
- Custom SVG visualization of Tamil Nadu with city markers
- Click-to-filter functionality for city selection
- Visual indicators showing client count per location
- Hover states highlighting cities with active clients

## Recent Updates (October 2025)
- Added centralized logo management system
- Completed testimonials for all 13 clients
- Implemented responsive grid layouts with professional hover states
- Integrated Tamil Nadu map with interactive filtering

# Admin Dashboard

The application includes a professional admin dashboard for managing contact inquiries:

## Features
- **Email/Password Login**: Secure admin authentication using Firebase Auth
- **Contact Inquiries Management**: View and manage all contact form submissions
- **Real-time Updates**: Dashboard automatically updates when new inquiries arrive
- **Status Tracking**: Track inquiry status (New, Read, Contacted, Closed)
- **Search & Filter**: Search by name/email/company and filter by status
- **Statistics Dashboard**: Overview of total, new, contacted, and closed inquiries

## Access
- **Login Page**: `/admin/login`
- **Dashboard**: `/admin` (requires authentication)

## Setup Requirements
Firebase credentials must be configured as environment variables:
- `VITE_FIREBASE_API_KEY`: Firebase API key
- `VITE_FIREBASE_PROJECT_ID`: Firebase project ID
- `VITE_FIREBASE_APP_ID`: Firebase app ID