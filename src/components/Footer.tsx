export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {year} FerretFatale. All rights reserved.
      </div>
    </footer>
  );
}
