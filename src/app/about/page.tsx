import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about FerretFatale.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <p>
          FerretFatale is a creative project currently in development. Details
          will be added here as the site grows.
        </p>
        <p>Stay tuned.</p>
      </div>
    </div>
  );
}
