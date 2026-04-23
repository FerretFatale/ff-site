# ff-site

Construction grounds for website creation and maintenance.

Built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── about/         # About page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout (navigation + footer)
│   └── page.tsx       # Home page
└── components/
    ├── Footer.tsx     # Site footer
    └── Navigation.tsx # Site navigation
```

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new).
