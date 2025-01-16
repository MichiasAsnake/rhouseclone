# R House - Premium Recovery Lounge

A modern, responsive website for R House, the world's first premium recovery lounge.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN UI Components

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy the `.env.example` file to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect it as a Next.js project
4. Add any required environment variables in the Vercel dashboard
5. Deploy!

### Manual Deployment

You can also deploy using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configuration
- `/public` - Static assets

## License

MIT
