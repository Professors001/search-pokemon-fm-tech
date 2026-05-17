# Pokémon Search

A modern web application for searching and exploring Pokémon information, built with Next.js and GraphQL.

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Apollo](https://img.shields.io/badge/Apollo-GraphQL-311C87?logo=apollographql)

## Features

- **Search Pokémon** by name with real-time results
- **Detailed Pokémon cards** showing types, stats, abilities, and classification
- **Evolution chains** with clickable navigation between evolutions
- **Shareable URLs** - search state persists in the URL for easy sharing
- **Dark mode support** for comfortable viewing
- **Responsive design** optimized for all screen sizes
- **Type-safe** with TypeScript and GraphQL codegen

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Frontend**: React 19, TailwindCSS 4
- **Data Fetching**: Apollo Client with GraphQL
- **Icons**: Lucide React
- **Language**: TypeScript 5

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20.9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd search-pokemon-fm-tech

# Install dependencies
bun install

# Or with npm/npm
npm install
```

### Development

Run the development server:

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
bun run build
# or
npm run build
```

## Usage

1. Enter a Pokémon name in the search box (e.g., "Pikachu", "Charizard", "Bulbasaur")
2. View detailed information including:
   - Pokémon image and classification
   - Types with color-coded badges
   - Base stats (HP, Attack, Defense, etc.)
   - Abilities and description
   - Evolution chain with clickable links
3. Click on any evolution to navigate to that Pokémon
4. Share your search by copying the URL

## Project Structure

```
search-pokemon-fm-tech/
├── app/
│   ├── page.tsx           # Main search page
│   ├── layout.tsx         # Root layout with providers
│   ├── providers.tsx      # Apollo Client provider
│   └── globals.css        # Global styles
├── components/
│   ├── SearchInput.tsx    # Search input component
│   ├── PokemonCard.tsx    # Pokemon detail card
│   ├── PokemonSkeleton.tsx # Loading skeleton
│   ├── EvolutionLink.tsx  # Evolution navigation
│   └── NotFound.tsx       # Empty state component
├── lib/
│   └── graphql/           # GraphQL queries and types
├── public/                # Static assets
└── next.config.ts         # Next.js configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
