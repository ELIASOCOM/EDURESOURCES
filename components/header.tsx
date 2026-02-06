'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl text-foreground group">
            <span className="text-2xl group-hover:scale-110 transition-transform">📚</span>
            <span className="hidden sm:inline">Academic Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <a href="#videos" className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              Videos
            </a>
            <a href="#notes" className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              Notes
            </a>
            <a href="#papers" className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              Papers
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
